import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-label reveal">02 / Capabilities</div>

                <h2 className="section-title reveal">
                    Tools I use<br />
                    to make things.
                </h2>

                <p className="section-intro reveal">
                    A practical stack developed through academic
                    work, internships, independent projects and
                    continuous experimentation.
                </p>

                <div className="skills-layout">
                    {skills.map((skill, index) => (
                        <div className="skill-card glass reveal" key={index}>
                            <div className="skill-top">
                                <h3 className="skill-title">{skill.title}</h3>
                                <span>{skill.number}</span>
                            </div>
                            <div className="skill-list">
                                {skill.tags.map((tag, i) => (
                                    <span className="skill-tag" key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}