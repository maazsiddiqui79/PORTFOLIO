import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="container footer-inner">
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} • All Rights Reserved • Designed & Built with ♥ by Maaz Siddiqui
                        &nbsp;|&nbsp;

                        <a
                            href="https://github.com/maazsiddiqui79"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="magnetic"
                        >
                            GITHUB
                        </a> &nbsp;|&nbsp;

                        <a
                            href="https://www.linkedin.com/in/siddiqui-maazzz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="magnetic"
                        >
                            LINKEDIN
                        </a>

                        &nbsp;|&nbsp;  <a href="#home" className="magnetic">
                            TOP ↑
                        </a>
                    </p>

                </div>

                <div className="footer-socials" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#00ff00', 
                        borderRadius: '50%', 
                        boxShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
                        animation: 'pulse 2s infinite',
                        display: 'inline-block',
                        flexShrink: 0
                    }}></span>
                    <span style={{ color: 'var(--muted)', letterSpacing: '0.02em', fontSize: '0.75rem' }}>
                        Code Every Day, Grow Everyday.
                    </span>
                </div>
            </div>
        </footer>
    );
}