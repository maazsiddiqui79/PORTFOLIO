import React from "react";

export default function Contact() {
    return (
        <>
            <section
                className="section contact"
                id="contact"
            >

                <div className="container contact-grid">


                    <div className="reveal">


                        <div className="section-label">
                            10 / Contact
                        </div>


                        <h2 className="section-title reveal">

                            Let's &nbsp;

                            <span>
                                build.
                            </span>

                        </h2>


                        <p className="contact-copy">
                            Open to collaborations, internships,
                            freelance work and technically interesting
                            projects involving web development,
                            AI, automation and software engineering.
                        </p>
                        
                        <div className="availability-signal" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid #4ade80' }}>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#e2e8f0' }}>
                                <span role="img" aria-label="available">🟢</span> <strong>Currently Available</strong> for Software Engineering, Full Stack, and Web Development roles in Mumbai or Remote.
                            </p>
                        </div>


                    </div>


                    <div className="contact-links reveal">


                        <a
                            className="contact-link"
                            href="mailto:siddiqui.maaz79@gmail.com"
                        >

                            <div>

                                <small>
                                    EMAIL
                                </small>

                                <strong>
                                    siddiqui.maaz79@gmail.com
                                </strong>

                            </div>

                            <span>
                                ↗
                            </span>

                        </a>


                        <a
                            className="contact-link"
                            href="https://www.linkedin.com/in/siddiqui-maazzz/"
                            target="_blank"
                            rel="noopener"
                        >

                            <div>

                                <small>
                                    LINKEDIN
                                </small>

                                <strong>
                                    www.linkedin.com/in/siddiqui-maazzz/
                                </strong>

                            </div>

                            <span>
                                ↗
                            </span>

                        </a>


                        <a
                            className="contact-link"
                            href="https://github.com/maazsiddiqui79"
                            target="_blank"
                            rel="noopener"
                        >

                            <div>

                                <small>
                                    GITHUB
                                </small>

                                <strong>
                                    @maazsiddiqui79
                                </strong>

                            </div>

                            <span>
                                ↗
                            </span>

                        </a>


                        <a
                            className="contact-link"
                            href="https://maaz-social-card.vercel.app/"
                            target="_blank"
                            rel="noopener"
                        >

                            <div>

                                <small>
                                    DIGITAL CARD
                                </small>

                                <strong>
                                    https://maaz-social-card.app/
                                </strong>

                            </div>

                            <span>
                                ↗
                            </span>

                        </a>


                    </div>

                </div>

            </section>
        </>
    );
}