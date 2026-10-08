import React, { useEffect, useState } from 'react';

export default function NotFound() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section 
            style={{ 
                height: '100%', 
                width: '100%',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div 
                    className="glass"
                    style={{
                        padding: '20px',
                        borderRadius: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '600px',
                        width: '100%',
                        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <span style={{ 
                            width: '10px', 
                            height: '10px', 
                            backgroundColor: '#ff3333', 
                            borderRadius: '50%', 
                            boxShadow: '0 0 15px rgba(255, 51, 51, 0.8)',
                            animation: 'pulse 2s infinite'
                        }}></span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                            SYSTEM ERROR 404
                        </span>
                    </div>

                    <h1 style={{ 
                        fontFamily: 'var(--display)', 
                        fontSize: 'clamp(4rem, 12vw, 8rem)',
                        lineHeight: '0.9',
                        letterSpacing: '-0.04em',
                        marginBottom: '20px'
                    }}>
                        404
                        <br/>
                        <span style={{ color: 'var(--accent)', fontSize: 'clamp(2rem, 6vw, 4rem)' }}>Not Found.</span>
                    </h1>

                    <p style={{ color: 'var(--text-soft)', marginBottom: '40px', maxWidth: '400px', lineHeight: '1.6', fontSize: '1.1rem' }}>
                        The resource you requested is not available. It might have been moved, deleted, or never existed in the first place.
                    </p>

                    <a 
                        href="/" 
                        className="btn btn-primary magnetic"
                        style={{ display: 'inline-block' }}
                    >
                        Return to Base ↗
                    </a>
                </div>
            </div>
        </section>
    );
}
