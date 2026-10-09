import React, { useState } from 'react';
import { projectData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [filter, setFilter] = useState('selected');
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsArray = Array.isArray(projectData) ? projectData : Object.keys(projectData).map(key => ({
        id: key,
        ...projectData[key]
    }));

    // Extract unique project types and convert to lowercase for filters
    const allProjectTypes = new Set();
    projectsArray.forEach(p => {
        if (p.type && typeof p.type === 'string') {
            allProjectTypes.add(p.type.toLowerCase());
        }
    });

    // Sort types alphabetically and create the final filters array
    const availableFilters = ['all', 'selected', ...Array.from(allProjectTypes).sort()];

    const filteredProjects = projectsArray.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'selected') return project.featured === true;

        // Filter based on type
        return project.type && project.type.toLowerCase() === filter;
    });

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="projects-head">
                    <div>
                        <div className="section-label reveal">03 / Selected Work</div>
                        <h2 className="section-title reveal">
                            Things I've<br />
                            actually built.
                        </h2>
                    </div>

                    <div className="filters reveal">
                        {availableFilters.map(f => (
                            <button
                                key={f}
                                className={`filter ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-grid" id="projectsGrid">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className="project-card glass reveal visible"
                            style={{ display: 'block', opacity: 1, transform: 'translateY(0)' }}
                            onClick={() => setSelectedProject(project)}
                            tabIndex="0"
                            role="button"
                            aria-label={`View details for ${project.title}`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay"></div>
                                <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                                <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '8px', zIndex: 10, alignItems: 'center' }}>
                                    {project.achievement && (
                                        <span className="project-type" style={{ position: 'relative', top: 'auto', right: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            {project.achievement}
                                        </span>
                                    )}
                                    {project.type && <span className="project-type" style={{ position: 'relative', top: 'auto', right: 'auto' }}>{project.type.toUpperCase()}</span>}
                                </div>
                                {project.liveUrl && (
                                    <div className="live-badge">
                                        <span className="live-dot"></span>
                                        LIVE
                                    </div>
                                )}
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-footer">
                                    <div className="project-stack">
                                        {project.techStack && project.techStack.slice(0, 3).map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>
                                    <div className="project-arrow">↗</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ==========================================
                    DEPLOYED PROJECTS SECTION
                ========================================== */}
                <div className="deployed-section reveal">

                    <div className="deployed-header">
                        <div className="section-label">03.5 / Proof of Work</div>
                        <h2 className="section-title">Live Applications</h2>
                        <p style={{ marginTop: '15px', color: 'var(--muted)' }}>Quick access to some of my deployed web applications.</p>
                    </div>

                    <div className="deployed-grid">

                        <a href="https://maaz-social-card.vercel.app/" target="_blank" rel="noopener noreferrer" className="deployed-card glass">
                            <h4>Digital Card</h4>
                            <div className="deployed-divider"></div>
                            <span className="deployed-link-btn">digital-card.maazdev.tech</span>
                        </a>
                        <a href="https://speakeasy-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="deployed-card glass">
                            <h4>Speak Easy</h4>
                            <div className="deployed-divider"></div>
                            <span className="deployed-link-btn">speak-easy-ai.maazdev.tech</span>
                        </a>

                        <a href="https://shortify-maazdev.vercel.app/" target="_blank" rel="noopener noreferrer" className="deployed-card glass">
                            <h4>Shortify - URL Shortener</h4>
                            <div className="deployed-divider"></div>
                            <span className="deployed-link-btn outline">shortify.maazdev.tech</span>
                        </a>

                        <a href="https://morse-origin.vercel.app/" target="_blank" rel="noopener noreferrer" className="deployed-card glass">
                            <h4>Morse Encoder & Decoder</h4>
                            <div className="deployed-divider"></div>
                            <span className="deployed-link-btn">morse-origin.maazdev.tech</span>
                        </a>

                        {/* You can easily add more deployed projects here later */}

                    </div>

                </div>

            </div>

            {selectedProject && (
                <ProjectModal
                    key={selectedProject.id}
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    allProjects={projectsArray}
                    onSelectProject={setSelectedProject}
                />
            )}
        </section>
    );
}