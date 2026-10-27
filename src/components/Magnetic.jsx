import React, { useRef, useEffect } from 'react';

/**
 * Magnetic Component
 * Attracts gently toward the cursor on hover and springs back smoothly on leave.
 * Disables on touch devices and when prefers-reduced-motion is active.
 * Uses a stable outer trigger with a transformed inner content to prevent jitter.
 */
export default function Magnetic({
    children,
    maxPull = 8,
    strength = 0.25,
    className = '',
    style = {},
    as: Component = 'span'
}) {
    const triggerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const trigger = triggerRef.current;
        const content = contentRef.current;
        if (!trigger || !content) return;

        const isCoarse = window.matchMedia('(pointer: coarse)').matches;
        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isCoarse || isReduced) return;

        let rafId = null;

        const handleMouseMove = (e) => {
            const rect = trigger.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            const pullX = Math.max(-maxPull, Math.min(maxPull, deltaX));
            const pullY = Math.max(-maxPull, Math.min(maxPull, deltaY));

            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                content.style.transform = `translate3d(${pullX.toFixed(2)}px, ${pullY.toFixed(2)}px, 0)`;
                content.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)';
            });
        };

        const handleMouseLeave = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                content.style.transform = 'translate3d(0px, 0px, 0px)';
                content.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
            });
        };

        trigger.addEventListener('mousemove', handleMouseMove, { passive: true });
        trigger.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            trigger.removeEventListener('mousemove', handleMouseMove);
            trigger.removeEventListener('mouseleave', handleMouseLeave);
            content.style.transform = '';
            content.style.transition = '';
        };
    }, [maxPull, strength]);

    return (
        <Component
            ref={triggerRef}
            className={`magnetic-wrapper ${className}`}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                verticalAlign: 'middle',
                position: 'relative',
                ...style
            }}
        >
            <span
                ref={contentRef}
                className="magnetic-content"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    willChange: 'transform'
                }}
            >
                {children}
            </span>
        </Component>
    );
}
