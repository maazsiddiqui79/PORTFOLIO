import React, { useState, useRef, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import CommandPalette from './CommandPalette';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    const navRef = useRef(null);

    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'achievements', 'certifications', 'writing', 'contact'];

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    // Active section tracking via Lenis scroll callback
    useLenis(({ scroll }) => {
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // If at the very bottom, activate the last section
        if (scroll + windowHeight >= docHeight - 10) {
            setActiveSection(sectionIds[sectionIds.length - 1]);
            return;
        }

        // Find the section whose top is closest to the viewport top
        let current = sectionIds[0];
        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= windowHeight * 0.4) {
                    current = id;
                }
            }
        }
        setActiveSection(current);
    });

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

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const applyTheme = (theme) => {
        const actualTheme = theme === "system" 
            ? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark") 
            : theme;
        
        if (actualTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", actualTheme);
        }
        localStorage.setItem("portfolio-theme", theme);
        setCurrentTheme(theme);
        setIsThemeMenuOpen(false);
    };

    const navLinks = [
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

    return (
        <>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id="nav" ref={navRef}>
            <a href="#home" className={`logo ${activeSection === 'home' ? 'active' : ''}`}>
                maazdev<span>.</span>tech
            </a>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {navLinks.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`/#${id}`}
                        className={activeSection === id ? 'active' : ''}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {label}
                    </a>
                ))}
            </div>

            <div className="nav-actions">
                <div style={{ position: 'relative' }}>
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

                    <div className={`theme-menu ${isThemeMenuOpen ? 'open' : ''}`} id="themeMenu">
                        <button className={`theme-option ${currentTheme === 'dark' ? 'selected' : ''}`} data-theme-choice="dark" onClick={() => applyTheme('dark')}>
                            ● Dark
                        </button>
                        <button className={`theme-option ${currentTheme === 'light' ? 'selected' : ''}`} data-theme-choice="light" onClick={() => applyTheme('light')}>
                            ○ Light
                        </button>
                        <button className={`theme-option ${currentTheme === 'system' ? 'selected' : ''}`} data-theme-choice="system" onClick={() => applyTheme('system')}>
                            ◐ System
                        </button>
                    </div>
                </div>

                <button
                    className="command-btn"
                    onClick={() => setIsCommandPaletteOpen(true)}
                    aria-label="Open command palette"
                >
                    <span>Command</span>
                    <kbd>Ctrl K</kbd>
                </button>

                <button
                    className="menu-btn"
                    id="menuBtn"
                    aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
        <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
        </>
    );
}
