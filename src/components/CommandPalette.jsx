import React, { useState, useEffect, useRef } from 'react';
import resumeFile from '../assets/Maaz_Siddiqui_Resume.pdf';
import researchPaper from '../assets/IJPREMS60200006505.pdf';
import researchCertificate from '../assets/Maaz IJPREMS60200006505-1.pdf';

export default function CommandPalette({ isOpen, onClose }) {
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            setSearch('');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
            if (isOpen && !e.ctrlKey && !e.metaKey) {
                // Handle keyboard shortcuts if we want, but since they are typing in search, 
                // maybe only if input is NOT focused? No, just keep it simple.
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const navItems = [
        { name: 'Go to Home', id: '#home', key: 'H' },
        { name: 'View Skills', id: '#skills', key: 'S' },
        { name: 'See Projects', id: '#projects', key: 'P' },
        { name: 'About Me', id: '#about', key: 'A' },
        { name: 'Contact Me', id: '#contact', key: 'C' }
    ];

    const FileIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
    const DownloadIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
    const AwardIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
    const GithubIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

    const actionItems = [
        { name: 'View Resume', id: resumeFile, icon: FileIcon, isLink: true },
        { name: 'Download Resume', id: resumeFile, icon: DownloadIcon, isLink: true, download: 'Maaz_Siddiqui_Resume.pdf' },
        { name: 'View Research Paper', id: researchPaper, icon: FileIcon, isLink: true },
        { name: 'Download Research Paper', id: researchPaper, icon: DownloadIcon, isLink: true, download: 'Maaz_Research_Paper.pdf' },
        { name: 'View Research Certificate', id: researchCertificate, icon: AwardIcon, isLink: true },
        { name: 'View GitHub', id: 'https://github.com/maazsiddiqui79', icon: GithubIcon, isLink: true }
    ];

    const filteredNav = navItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    const filteredActions = actionItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="command-overlay" onClick={onClose}>
            <div className="command-palette" onClick={e => e.stopPropagation()}>
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

                <div className="command-content">
                    {filteredNav.length > 0 && (
                        <div className="command-section">
                            <div className="command-label">NAVIGATION</div>
                            {filteredNav.map((item, idx) => (
                                <a href={item.id} className="command-item" onClick={onClose} key={idx}>
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
                                    onClick={onClose} 
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
