import React from "react";

export default function TechnicalWriting() {
    return (
        <section className="section" id="writing">
            <div className="container">
                <div className="reveal">
                    <div className="section-label">09 / Notes & Articles</div>
                    <h2 className="section-title">
                        Technical<br />
                        <span>Writing.</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px' }}>
                        I occasionally document my engineering learnings, project write-ups, and development notes. 
                        Stay tuned for upcoming technical articles on Web Development, AI, and Python.
                    </p>
                    <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--card-bg)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '12px', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)' }}><em>Articles coming soon...</em></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
