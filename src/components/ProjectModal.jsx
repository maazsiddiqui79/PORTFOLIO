import React, { useMemo, useEffect } from 'react';

export default function ProjectModal({ project, onClose, allProjects, onSelectProject }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!project) return null;

    // Get 3 random suggestions excluding the current project
    const suggestions = useMemo(() => {
        if (!allProjects) return [];
        const otherProjects = allProjects.filter(p => p.id !== project.id);
        const shuffled = [...otherProjects].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }, [project, allProjects]);

    return (
        <div className="modal active" id="projectModal" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-box glass" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
                
                <div className="section-label">
                    PROJECT / {project.type ? project.type.toUpperCase() : 'DETAILS'}
                </div>
                
                <h2 id="modal-title" style={{ marginBottom: '10px' }}>{project.title}</h2>
                
                {project.achievement && (
                    <div className="project-achievement-badge">
                        {project.achievement}
                    </div>
                )}
                
                <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '1.1rem' }}>{project.description}</p>
                
                <div style={{ marginBottom: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            GitHub Repository
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--text)' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            Live Website
                        </a>
                    )}
                </div>
                
                <div className="modal-image" style={{ marginBottom: '40px' }}>
                    <img src={project.image} alt={project.title} />
                </div>
                
                <div className="project-content-sections">
                    {(project.builtBy || (project.developers && project.developers.length > 0)) && (
                        <div className="content-section" style={{ marginBottom: '32px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            {project.builtBy && (
                                <div>
                                    <h4 style={{ fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.1em' }}>Development</h4>
                                    <p style={{ color: 'var(--foreground)' }}>{project.builtBy}</p>
                                </div>
                            )}
                            {project.projectType && project.projectType.length > 0 && (
                                <div>
                                    <h4 style={{ fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.1em' }}>Categories</h4>
                                    <p style={{ color: 'var(--foreground)' }}>{project.projectType.join(', ')}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {project.problem && (
                        <div className="content-section" style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Problem We Are Solving</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{project.problem}</p>
                        </div>
                    )}
                    
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="content-section" style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Tech Stack</h3>
                            <div className="modal-tech">
                                {project.techStack.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.advantages && project.advantages.length > 0 && (
                        <div className="content-section" style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Advantages</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
                                {project.advantages.map((adv, i) => <li key={i} style={{ marginBottom: '8px' }}>{adv}</li>)}
                            </ul>
                        </div>
                    )}

                    {project.disadvantages && project.disadvantages.length > 0 && (
                        <div className="content-section" style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Limitations</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
                                {project.disadvantages.map((dis, i) => <li key={i} style={{ marginBottom: '8px' }}>{dis}</li>)}
                            </ul>
                        </div>
                    )}

                    {project.scope && (
                        <div className="content-section" style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Future Scope</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{project.scope}</p>
                        </div>
                    )}
                </div>
                
                {suggestions.length > 0 && (
                    <div className="suggestions-section" style={{ marginTop: '60px', borderTop: '1px solid var(--line)', paddingTop: '40px' }}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>You May Also Like</h3>
                        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                            {suggestions.map((sug, index) => (
                                <article
                                    key={sug.id}
                                    className="project-card glass visible"
                                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', opacity: 1, transform: 'none' }}
                                    onClick={() => onSelectProject(sug)}
                                    tabIndex="0"
                                    role="button"
                                    aria-label={`View details for ${sug.title}`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            onSelectProject(sug);
                                        }
                                    }}
                                >
                                    <div className="project-image" style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                                        <img src={sug.image} alt={sug.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div className="project-overlay"></div>
                                        <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '4px', zIndex: 10, alignItems: 'center' }}>
                                            {sug.achievement && (
                                                <span className="project-type" style={{ position: 'relative', top: 'auto', right: 'auto', padding: '2px 6px', fontSize: '0.55rem', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                                    ★
                                                </span>
                                            )}
                                            {sug.type && <span className="project-type" style={{ position: 'relative', top: 'auto', right: 'auto', padding: '2px 6px', fontSize: '0.55rem' }}>{sug.type.toUpperCase()}</span>}
                                        </div>
                                    </div>
                                    <div className="project-content" style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text)' }}>{sug.title}</h4>
                                        <div className="project-footer" style={{ marginTop: '10px' }}>
                                            <div className="project-stack">
                                                {sug.techStack && sug.techStack.slice(0, 2).map((t, i) => (
                                                    <span key={i} style={{ fontSize: '0.65rem', padding: '4px 8px' }}>{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}