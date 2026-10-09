import React, { useState, useRef, useEffect } from 'react';
import CommandPalette from './CommandPalette';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
    
    const navRef = useRef(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

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

    return (
        <>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id="nav" ref={navRef}>
            <a href="#home" className="logo">
                maazdev<span>.</span>tech
            </a>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="/#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="/#education" onClick={() => setIsMenuOpen(false)}>Education</a>
                <a href="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="/#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a>
                <a href="/#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                <a href="/#writing" onClick={() => setIsMenuOpen(false)}>Tech Blogs</a>
                <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
