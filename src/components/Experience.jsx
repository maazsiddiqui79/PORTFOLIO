import React from "react";

export default function Experience() {
    return (
        <>
            <section
                className="section"
                id="experience"
            >

                <div className="container">

                    <div className="section-label reveal">
                        05 / Experience
                    </div>

                    <h2 className="section-title reveal">
                        From learning
                        <br />
                        to shipping.
                    </h2>

                    <div className="timeline">

                        {/* Frontend Development Training */}
                        <div className="timeline-item reveal">

                            <div className="timeline-date">
                                MAY 2026 — JUL 2026
                            </div>

                            <div>

                                <h3 className="timeline-title">
                                    Frontend Development Trainee
                                </h3>

                                <div className="timeline-company">
                                    Heuristic Academy · Mumbai
                                </div>

                                <ul className="timeline-list">

                                    <li>
                                        Successfully completed a three-month
                                        training program focused on frontend
                                        development.
                                    </li>

                                    <li>
                                        Strengthened practical skills in
                                        building structured, responsive and
                                        user-focused web interfaces.
                                    </li>

                                    <li>
                                        Applied frontend development concepts
                                        through practical exercises and
                                        project-based learning.
                                    </li>

                                </ul>

                            </div>

                        </div>


                        {/* Python Development Internship */}
                        <div className="timeline-item reveal">

                            <div className="timeline-date">
                                JUN 2025 — AUG 2025
                            </div>

                            <div>

                                <h3 className="timeline-title">
                                    Python Development Intern
                                </h3>

                                <div className="timeline-company">
                                    Quality Software Technologies · Thane
                                </div>

                                <ul className="timeline-list">

                                    <li>
                                        Developed responsive frontend pages
                                        using HTML and CSS.
                                    </li>

                                    <li>
                                        Built and integrated backend
                                        functionality using Python and Django.
                                    </li>

                                    <li>
                                        Collaborated with a team of four to
                                        design and deploy a functional web
                                        application.
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}