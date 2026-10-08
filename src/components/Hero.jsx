import React from 'react';
import myImage from '../assets/myimg.jpeg';

export default function Hero() {
    return (
        <header className="hero" id="home">
            <div className="container hero-grid">
                <div className="hero-content reveal">
                    <div className="hero-kicker">
                        <span className="status-dot"></span>
                        B.TECH COMPUTER ENGINEERING / AI / WEB
                    </div>

                    <h1 className="reveal">
                        <span className="text-reveal">
                            <span style={{ transitionDelay: '0.2s' }}>Maaz</span>
                        </span>
                        <span className="outline text-reveal">
                            <span style={{ transitionDelay: '0.35s' }}> Siddiqui.</span>
                        </span>
                    </h1>

                    <p className="hero-copy reveal" style={{ transitionDelay: '0.4s' }}>
                        Computer Engineering student and Python developer
                        building practical software, full-stack applications,
                        automation systems and AI-driven solutions for
                        real-world problems.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary magnetic">
                            Explore Work ↘
                        </a>
                        <a
                            href="https://www.linkedin.com/in/siddiqui-maazzz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary magnetic"
                        >
                            LinkedIn ↗
                        </a>
                    </div>

                    <div className="hero-meta">
                        <div className="meta-item">
                            <small>Currently</small>
                            <strong>B.Tech Computer Engineering</strong>
                        </div>
                        <div className="meta-item">
                            <small>Institute</small>
                            <strong>TCET · Kandivali</strong>
                        </div>
                        <div className="meta-item">
                            <small>Focus</small>
                            <strong className="accent">AI + Full Stack</strong>
                        </div>
                    </div>
                </div>

                <div className="hero-visual reveal">
                    <div className="floating-chip chip-one">
                        WEB DEVELOPMENT
                    </div>


                    <div className="hero-card glass">
                        <img
                            src={myImage}
                            alt="Aesthetic workspace graphic representing build, learn, iterate mentality"
                        />
                        <div className="hero-card-info">
                            <span>CURRENT MODE</span>
                            <strong>Build. Learn. Iterate.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}