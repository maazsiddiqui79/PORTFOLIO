import React, { useEffect, useRef } from 'react';

export default function Stats() {
    const statsRef = useRef(null);

    useEffect(() => {
        const stats = statsRef.current?.querySelectorAll(".stat-number");
        if (!stats) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute("data-count"), 10);
                    let count = 0;
                    
                    // Base increment depending on target size to normalize speed
                    const increment = target / 40; 
                    
                    const updateCount = () => {
                        count += increment;
                        if(count < target) {
                            el.innerText = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            el.innerText = target;
                        }
                    };
                    
                    updateCount();
                    // Unobserve after animating once
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        stats.forEach(stat => {
            stat.innerText = "0"; // Start at 0 visually before animation
            observer.observe(stat);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="container">
            <div className="stats reveal" ref={statsRef}>
                <div className="stat">
                    <div className="stat-number" data-count="27">0 </div>
                    <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat">
                    <div className="stat-number" data-count="9">0</div>
                    <div className="stat-label">Deployed Projects</div>
                </div>
                <div className="stat">
                    <div className="stat-number" data-count="6">0</div>
                    <div className="stat-label">GUI Applications</div>
                </div>
            </div>
        </section>
    );
}