
import React from 'react';

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">

                <div className="section-label reveal">01 / About</div>

                <h2 className="section-title reveal">
                    Engineer in progress.<br />
                    Builder by practice.
                </h2>

                <div className="about-grid">

                    <div className="about-index reveal">
                        PROFILE / 2026
                        <span>DEVELOPER · ENGINEER</span>
                    </div>

                    <div className="about-content">

                        <p className="about-copy reveal">
                            I'm <strong>Maaz Siddiqui</strong>, a Computer Engineering
                            student and developer based in Mumbai. I enjoy turning
                            ideas into functional software and learning how the
                            different pieces of a system work together.
                        </p>

                        <p className="about-copy about-copy-secondary reveal">
                            I started my development journey through my Diploma in
                            Computer Engineering and gradually moved from small
                            Python programs and automation scripts to building
                            complete web applications. Today, my work covers
                            <strong> Python, React, Django, Flask, SQL, APIs,
                            automation and AI-powered applications.</strong>
                        </p>

                        <p className="about-copy about-copy-secondary reveal">
                            Most of what I learn comes from building. I like working
                            on projects that involve a real problem, designing the
                            interface, writing the application logic, connecting
                            APIs or databases, testing the result and finally
                            deploying it. This hands-on approach has helped me
                            understand development beyond just writing code.
                        </p>

                        <p className="about-copy about-copy-secondary reveal">
                            I'm currently pursuing my <strong>BE in Computer
                            Engineering at Thakur College of Engineering &
                            Technology</strong>, while continuing to strengthen my
                            skills in software development, system design,
                            cloud technologies and AI.
                        </p>

                        <div className="about-details reveal">

                            <div className="detail">
                                <small>Current</small>
                                <p>BE in Computer Engineering</p>
                            </div>

                            <div className="detail">
                                <small>Institute</small>
                                <p>Thakur College of Engineering & Technology, Kandivali</p>
                            </div>

                            <div className="detail">
                                <small>Previous</small>
                                <p>Diploma in Computer Engineering</p>
                            </div>

                            <div className="detail">
                                <small>Education</small>
                                <p>M.H. Saboo Siddik Polytechnic · 2023–2026</p>
                            </div>

                        </div>

                        <div className="about-focus reveal">
                            <span className=" about-focus-items">
                                CURRENT FOCUS
                            </span>

                            <div className="about-focus-items">
                                <span>Full-Stack Development</span>
                                <span>AI Technologies</span>
                                <span>Understanding Core concepts</span>
                                <span>Cloud</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
