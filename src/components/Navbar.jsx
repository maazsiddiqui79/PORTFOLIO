import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import Magnetic from './Magnetic';
import { transitionModeWithCurtain } from '../utils/viewTransition';

const CommandPalette = lazy(() => import('./CommandPalette'));

// ── Section IDs in page order ──────────────────────────────────────────
// These MUST match the id="" attributes on each <section>/<header> in App.jsx.
// "home" = Hero header. The rest are <section> elements.
const SECTION_IDS = [
    'home', 'about', 'skills', 'projects', 'education',
    'experience', 'achievements', 'certifications', 'writing', 'contact',
];

// ── Nav link definitions (excludes "home" — that's the logo) ───────────
const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'writing', label: 'Tech Blogs' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ simpleMode, setSimpleMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Sliding pill indicator position
    const [pillStyle, setPillStyle] = useState({ opacity: 0 });

    const navRef = useRef(null);
    const linksContainerRef = useRef(null);
    const linkRefs = useRef({});
    const rafId = useRef(null);
    const isScrollingToSection = useRef(false);
    const scrollTimeoutId = useRef(null);


    // ── Theme ──────────────────────────────────────────────────────────
    const applyTheme = (theme) => {
        const actualTheme =
            theme === 'system'
                ? window.matchMedia('(prefers-color-scheme: light)').matches
                    ? 'light'
                    : 'dark'
                : theme;

        if (actualTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', actualTheme);
        }
        localStorage.setItem('portfolio-theme', theme);
        setCurrentTheme(theme);
        setIsThemeMenuOpen(false);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        const actualTheme =
            savedTheme === 'system'
                ? window.matchMedia('(prefers-color-scheme: light)').matches
                    ? 'light'
                    : 'dark'
                : savedTheme;

        if (actualTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', actualTheme);
        }
    }, []);

    // ── Active section detection ───────────────────────────────────────
    //
    // Strategy: "topmost section whose top has crossed the trigger line".
    //
    // We draw an invisible horizontal trigger line at 30% of the viewport
    // height (≈ just below the fixed navbar). We iterate sections in DOM
    // order. The LAST section whose top is at or above that line wins.
    //
    // This is deterministic: for any scroll position there is exactly one
    // winner, and scrolling one pixel further can only change the winner
    // to the next section — never skip or flicker.
    //
    // Edge cases:
    //   • Top of page (scrollY < 50): always "home"
    //   • Bottom of page (can't scroll further): always last section
    //   • Hash URL on load: detect and scroll to it
    //
    // Performance:
    //   • rAF-throttled scroll listener — one recalc per frame max
    //   • No IntersectionObserver (they fire asynchronously and can
    //     produce out-of-order callbacks with Lenis smooth scroll)
    //   • No state update if the winner hasn't changed (React skips re-render)

    useEffect(() => {
        const computeActive = () => {
            // If we're in a programmatic scroll (user clicked a nav link),
            // don't recalculate — we already set the target section.
            if (isScrollingToSection.current) return;

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Edge case: very top of page
            if (scrollTop < 50) {
                setActiveSection('home');
                return;
            }

            // Edge case: very bottom of page — activate the last section
            if (scrollTop + windowHeight >= docHeight - 30) {
                setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
                return;
            }

            // The trigger line: 30% down from the top of the viewport.
            // This accounts for the fixed navbar (≈60-70px) plus some buffer.
            const triggerY = windowHeight * 0.30;

            let winner = SECTION_IDS[0]; // fallback: home

            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                // If this section's top is at or above the trigger line, it wins
                // (but we keep iterating — the last one to satisfy wins).
                if (rect.top <= triggerY) {
                    winner = id;
                }
            }

            setActiveSection(winner);
        };

        const onScroll = () => {
            // Throttle to one computation per animation frame
            if (rafId.current) cancelAnimationFrame(rafId.current);
            rafId.current = requestAnimationFrame(computeActive);
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // Also recalculate on resize (section positions change)
        window.addEventListener('resize', onScroll, { passive: true });

        // Initial computation after DOM is ready
        // Use a microtask to ensure all sections have rendered
        requestAnimationFrame(() => {
            computeActive();

            // Handle hash URL on page load (e.g. user refreshes at /#projects)
            const hash = window.location.hash.replace('#', '');
            if (hash && SECTION_IDS.includes(hash)) {
                setActiveSection(hash);
            }
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
            if (scrollTimeoutId.current) clearTimeout(scrollTimeoutId.current);
        };
    }, []);

    // ── Sliding pill indicator ─────────────────────────────────────────
    // Measures the active link's position within the nav-links container
    // and positions a pill pseudo-element behind it.
    useEffect(() => {
        const updatePill = () => {
            // "home" is the logo, not inside nav-links — hide the pill
            if (activeSection === 'home') {
                setPillStyle({ opacity: 0 });
                return;
            }

            const linkEl = linkRefs.current[activeSection];
            const container = linksContainerRef.current;
            if (!linkEl || !container) {
                setPillStyle({ opacity: 0 });
                return;
            }

            // Target the stable magnetic wrapper or the link element to avoid offset during hover
            const targetEl = linkEl.closest('.magnetic-wrapper') || linkEl;
            const containerRect = container.getBoundingClientRect();
            const targetRect = targetEl.getBoundingClientRect();

            setPillStyle({
                opacity: 1,
                width: targetRect.width,
                transform: `translateX(${targetRect.left - containerRect.left}px)`,
            });
        };

        updatePill();

        // Also update on resize (positions shift)
        window.addEventListener('resize', updatePill);
        return () => window.removeEventListener('resize', updatePill);
    }, [activeSection]);

    // ── Nav click: smooth scroll + lock ────────────────────────────────
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const targetEl = document.getElementById(targetId);
        if (!targetEl) {
            window.location.href = `/#${targetId}`;
            return;
        }

        // Immediately reflect the intended active section
        setActiveSection(targetId);

        // Lock scroll detection to prevent flickering during animation
        isScrollingToSection.current = true;

        // Clear any existing timeout
        if (scrollTimeoutId.current) clearTimeout(scrollTimeoutId.current);

        // Calculate scroll position accounting for fixed navbar
        const navHeight = navRef.current ? navRef.current.offsetHeight : 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 24;

        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth',
        });

        // Unlock detection after scroll animation completes.
        // We use a generous timeout + a scroll-idle detector.
        let idleTimer = null;
        const unlockOnIdle = () => {
            if (idleTimer) clearTimeout(idleTimer);
            idleTimer = setTimeout(() => {
                isScrollingToSection.current = false;
                window.removeEventListener('scroll', unlockOnIdle);
                // One final re-check after unlock
                if (rafId.current) cancelAnimationFrame(rafId.current);
                rafId.current = requestAnimationFrame(() => {
                    // Re-run detection but don't override if user hasn't scrolled away
                });
            }, 150);
        };

        window.addEventListener('scroll', unlockOnIdle, { passive: true });

        // Safety: always unlock after 1.5s even if scroll events stop
        scrollTimeoutId.current = setTimeout(() => {
            isScrollingToSection.current = false;
            window.removeEventListener('scroll', unlockOnIdle);
        }, 1500);

        // Update URL hash without triggering a page jump
        window.history.pushState(null, '', `#${targetId}`);
    };

    // ── Command palette shortcut ───────────────────────────────────────
    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                setIsCommandPaletteOpen((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }, []);

    // ── Close menu on outside click ────────────────────────────────────
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // ── Floating Navbar magnetic dock attraction ────────────────────────
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const isCoarse = window.matchMedia('(pointer: coarse)').matches;
        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isCoarse || isReduced) return;

        let navRafId = null;

        const handleNavMouseMove = (e) => {
            if (isThemeMenuOpen || isMenuOpen) return;

            const rect = nav.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.04;
            const deltaY = (e.clientY - centerY) * 0.06;

            const pullX = Math.max(-4, Math.min(4, deltaX));
            const pullY = Math.max(-3, Math.min(3, deltaY));

            if (navRafId) cancelAnimationFrame(navRafId);
            navRafId = requestAnimationFrame(() => {
                nav.style.transform = `translate3d(calc(-50% + ${pullX.toFixed(2)}px), ${pullY.toFixed(2)}px, 0)`;
                nav.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)';
            });
        };

        const handleNavMouseLeave = () => {
            if (navRafId) cancelAnimationFrame(navRafId);
            navRafId = requestAnimationFrame(() => {
                nav.style.transform = 'translate3d(-50%, 0px, 0px)';
                nav.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
            });
        };

        nav.addEventListener('mousemove', handleNavMouseMove, { passive: true });
        nav.addEventListener('mouseleave', handleNavMouseLeave, { passive: true });

        return () => {
            if (navRafId) cancelAnimationFrame(navRafId);
            nav.removeEventListener('mousemove', handleNavMouseMove);
            nav.removeEventListener('mouseleave', handleNavMouseLeave);
        };
    }, [isThemeMenuOpen, isMenuOpen]);

    // ── Liquid Curtain View Transition Mode Switch ───────────────────────
    const handleModeSwitch = (e) => {
        const nextMode = !simpleMode;
        transitionModeWithCurtain(e, () => {
            if (nextMode) {
                document.body.classList.add('simple-mode-active');
            } else {
                document.body.classList.remove('simple-mode-active');
            }
            setSimpleMode(nextMode);
            setIsThemeMenuOpen(false);
        });
    };

    // ── Render ─────────────────────────────────────────────────────────
    return (
        <>
            <nav
                className={`nav ${isMenuOpen ? 'open' : ''}`}
                id="nav"
                ref={navRef}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo — active when "home" section is in view */}
                <Magnetic maxPull={8} strength={0.25}>
                    <a
                        href="/"
                        className={`logo ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, 'home')}
                        aria-current={activeSection === 'home' ? 'true' : undefined}
                    >
                        maazdev<span>.</span>tech
                    </a>
                </Magnetic>

                {/* Navigation links with sliding pill indicator */}
                <div
                    className={`nav-links ${isMenuOpen ? 'active' : ''}`}
                    ref={linksContainerRef}
                >
                    {/* Sliding pill indicator */}
                    <div
                        className="nav-pill"
                        style={pillStyle}
                        aria-hidden="true"
                    />

                    {NAV_LINKS.map(({ id, label }) => (
                        <Magnetic key={id} maxPull={6} strength={0.25}>
                            <a
                                href={`#${id}`}
                                ref={(el) => { linkRefs.current[id] = el; }}
                                className={activeSection === id ? 'active' : ''}
                                aria-current={activeSection === id ? 'true' : undefined}
                                onClick={(e) => handleNavClick(e, id)}
                            >
                                {label}
                            </a>
                        </Magnetic>
                    ))}
                </div>

                <div className="nav-actions">
                    <div style={{ position: 'relative' }}>
                        <Magnetic maxPull={8} strength={0.3}>
                            <button
                                className="theme-toggle"
                                id="themeToggle"
                                aria-label="Change theme"
                                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                            >
                                <svg
                                    className="theme-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
                                </svg>
                            </button>
                        </Magnetic>

                        <div
                            className={`theme-menu ${isThemeMenuOpen ? 'open' : ''}`}
                            id="themeMenu"
                        >
                            <button
                                className={`theme-option ${currentTheme === 'dark' ? 'selected' : ''}`}
                                data-theme-choice="dark"
                                onClick={() => applyTheme('dark')}
                            >
                                ● Dark
                            </button>
                            <button
                                className={`theme-option ${currentTheme === 'light' ? 'selected' : ''}`}
                                data-theme-choice="light"
                                onClick={() => applyTheme('light')}
                            >
                                ○ Light
                            </button>
                            <button
                                className={`theme-option ${currentTheme === 'system' ? 'selected' : ''}`}
                                data-theme-choice="system"
                                onClick={() => applyTheme('system')}
                            >
                                ◐ System
                            </button>
                            <button
                                className="theme-option mode-button"
                                data-theme-choice="simple"
                                onClick={handleModeSwitch}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="16" rx="2" />
                                    <path d="M12 4v16" />
                                    <path d="M6.5 8h3M6.5 11h3M6.5 14h3" />
                                    <rect x="14.5" y="7" width="4" height="4" rx="0.8" />
                                    <path d="M14.5 14h4M14.5 16.5h4" />
                                </svg> {simpleMode ? 'Visual Mode' : 'Focus Mode'}
                            </button>
                        </div>
                    </div>

                    <Magnetic maxPull={8} strength={0.3}>
                        <button
                            className="command-btn"
                            onClick={() => setIsCommandPaletteOpen(true)}
                            aria-label="Open command palette"
                        >
                            <span>Command</span>
                            <kbd>Ctrl K</kbd>
                        </button>
                    </Magnetic>

                    <Magnetic maxPull={8} strength={0.3}>
                        <button
                            className="menu-btn"
                            id="menuBtn"
                            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </Magnetic>
                </div>
            </nav>
            {isCommandPaletteOpen && (
                <Suspense fallback={null}>
                    <CommandPalette
                        isOpen={isCommandPaletteOpen}
                        onClose={() => setIsCommandPaletteOpen(false)}
                    />
                </Suspense>
            )}
        </>
    );
}
