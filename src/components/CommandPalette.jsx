import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import resumeFile from '../assets/Maaz_Siddiqui_Resume.pdf';
import researchPaper from '../assets/IJPREMS60200006505.pdf';
import researchCertificate from '../assets/Maaz IJPREMS60200006505-1.pdf';
import instituteSubmissionUrl from '../assets/Institue Report.pdf';

export default function CommandPalette({ isOpen, onClose }) {
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
    const overlayRef = useRef(null);
    const lenis = useLenis();

    const handleClose = useCallback(() => {
        setSearch('');
        onClose();
    }, [onClose]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleClose]);

    // Prevent background scrolling while CommandPalette is open (Desktop & Mobile)
    useEffect(() => {
        if (!isOpen) return;

        // Stop Lenis smooth scroll
        lenis?.stop();

        // Calculate scrollbar width on desktops to prevent layout shift when body scrollbar is hidden
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const prevBodyOverflow = document.body.style.overflow;
        const prevHtmlOverflow = document.documentElement.style.overflow;
        const prevBodyPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        // Focus search input
        inputRef.current?.focus();

        return () => {
            document.body.style.overflow = prevBodyOverflow;
            document.documentElement.style.overflow = prevHtmlOverflow;
            document.body.style.paddingRight = prevBodyPaddingRight;
            lenis?.start();
        };
    }, [isOpen, lenis]);

    // Block wheel & touch events originating directly on the backdrop (outside command-palette)
    useEffect(() => {
        if (!isOpen) return;
        const overlayEl = overlayRef.current;
        if (!overlayEl) return;

        const handleBackdropScroll = (e) => {
            // If user scrolls on the backdrop itself (outside the command palette box), prevent scroll
            if (e.target === overlayEl) {
                e.preventDefault();
            }
        };

        overlayEl.addEventListener('wheel', handleBackdropScroll, { passive: false });
        overlayEl.addEventListener('touchmove', handleBackdropScroll, { passive: false });

        return () => {
            overlayEl.removeEventListener('wheel', handleBackdropScroll);
            overlayEl.removeEventListener('touchmove', handleBackdropScroll);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const navItems = [
        { name: 'Go to Home', id: '#home', key: 'H' },
        { name: 'About Me', id: '#about', key: 'A' },
        { name: 'See Projects', id: '#projects', key: 'P' },
        { name: 'View Education', id: '#education', key: 'K' },
        { name: 'View Experience', id: '#experience', key: 'X' },
        { name: 'View Achievements', id: '#achievements', key: 'M' },
        { name: 'View Certifications', id: '#certifications', key: 'Q' },
        { name: 'View Tech Blogs', id: '#writing', key: 'T' },
        { name: 'Contact Me', id: '#contact', key: 'C' }
    ];

    const FileIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
    const DownloadIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
    const AwardIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
    const GithubIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
    const LinkedinIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
    // Institute Submission Icon
    const InstituteSubmissionIcon = (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /><line x1="8" y1="9" x2="10" y2="9" /></svg>);

    const CardIcon = (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Digital card */}
            <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="2"
            />

            {/* Profile */}
            <circle
                cx="9"
                cy="10"
                r="2"
                fill="currentColor"
            />

            {/* Profile body */}
            <path
                d="M6.5 15C7.1 13.7 8 13 9 13C10 13 10.9 13.7 11.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Digital/contact lines */}
            <path
                d="M14 9H18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            <path
                d="M14 12H18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            <path
                d="M14 15H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );

    const actionItems = [
        { name: 'View Digital Card', id: 'https://maaz-social-card.vercel.app/', icon: CardIcon, isLink: true },
        { name: 'View Resume', id: resumeFile, icon: FileIcon, isLink: true },
        { name: 'View GitHub', id: 'https://github.com/maazsiddiqui79', icon: GithubIcon, isLink: true },
        { name: 'View LinkedIn', id: 'https://www.linkedin.com/in/siddiqui-maazzz/', icon: LinkedinIcon, isLink: true },
        { name: 'Download Resume', id: resumeFile, icon: DownloadIcon, isLink: true, download: 'Maaz_Siddiqui_Resume.pdf' },
        { name: 'View Research Paper', id: researchPaper, icon: FileIcon, isLink: true },
        { name: 'View Research Certificate', id: researchCertificate, icon: AwardIcon, isLink: true },
        { name: 'View Final Year Diploma Project Report / Institute Submission', id: instituteSubmissionUrl, icon: InstituteSubmissionIcon, isLink: true },
        { name: 'Download Research Paper', id: researchPaper, icon: DownloadIcon, isLink: true, download: 'Maaz_Research_Paper.pdf' },
    ];

    const filteredNav = navItems.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        (item.key && item.key.toLowerCase() === search.toLowerCase())
    );
    const filteredActions = actionItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div
            className="command-overlay"
            ref={overlayRef}
            onClick={handleClose}
            data-lenis-prevent
        >
            <div
                className="command-palette"
                onClick={e => e.stopPropagation()}
                data-lenis-prevent
            >
                <div className="command-search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder="Type a command or search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        ref={inputRef}
                    />
                </div>

                <div className="command-content" data-lenis-prevent>
                    {filteredNav.length > 0 && (
                        <div className="command-section">
                            <div className="command-label">NAVIGATION</div>
                            {filteredNav.map((item, idx) => (
                                <a href={item.id} className="command-item" onClick={handleClose} key={idx}>
                                    <span>{item.name}</span>
                                    <kbd>{item.key}</kbd>
                                </a>
                            ))}
                        </div>
                    )}

                    {filteredActions.length > 0 && (
                        <div className="command-section">
                            <div className="command-label">ACTIONS</div>
                            {filteredActions.map((item, idx) => (
                                <a
                                    href={item.id}
                                    className="command-item"
                                    onClick={handleClose}
                                    key={idx}
                                    target={item.isLink ? "_blank" : undefined}
                                    rel={item.isLink ? "noopener noreferrer" : undefined}
                                    download={item.download ? item.download : undefined}
                                >
                                    <div className="command-item-left">
                                        <span className="command-icon">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}

                    {filteredNav.length === 0 && filteredActions.length === 0 && (
                        <div className="command-empty">No results found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
