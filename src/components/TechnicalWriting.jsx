import React from "react";

export default function TechnicalWriting() {
    return (
        <section className="section" id="writing">
            <div className="container">
                <div className="reveal">
                    <div className="section-label">09 / Tech-Blogs & Articles</div>
                    <h2 className="section-title">
                        Technical<br />
                        <span className="accent">Writing.</span>
                    </h2>
                    <p style={{ color: 'var(--muted)', marginTop: '1.5rem', maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                        I occasionally share my engineering learnings, project insights, technical articles, documentation, coding notes, and development experiences.
                        Stay tuned for upcoming technical articles on Web Development, AI, and Python.
                    </p>
                    
                    <div className="writing-card">
                        <div className="writing-icon-container floating-item">
                            <div className="writing-bg-glow"></div>
                            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: 'relative', zIndex: 2 }}>
                                <rect x="20" y="15" width="60" height="70" rx="8" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="4" />
                                <line className="animated-line" x1="35" y1="35" x2="65" y2="35" stroke="var(--text)" strokeWidth="4" strokeLinecap="round" />
                                <line className="animated-line-2" x1="35" y1="50" x2="75" y2="50" stroke="var(--text)" strokeWidth="4" strokeLinecap="round" />
                                <line className="animated-line-3" x1="35" y1="65" x2="55" y2="65" stroke="var(--text)" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                        
                        <h3 style={{ 
                            color: 'var(--text)',
                            fontSize: '1.5rem', 
                            fontFamily: 'var(--display)', 
                            margin: '0 0 12px 0',
                            fontWeight: '700'
                        }}>
                            Articles Coming Soon...
                        </h3>
                        
                        <p style={{ 
                            color: 'var(--muted)', 
                            fontSize: '0.95rem', 
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            The ideas are currently compiling. I'm actively crafting deep dives into software engineering, AI, and backend systems!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
