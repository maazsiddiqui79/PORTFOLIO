import { flushSync } from 'react-dom';

/**
 * Liquid Curtain Mode Reveal
 * Smooth cinematic circular view transition emanating from the toggle button coordinates.
 * Compatible with React 19 via flushSync and includes safe cross-browser fallbacks.
 */
export function transitionModeWithCurtain(event, updateModeCallback) {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Direct fallback if View Transitions API is not supported or reduced motion is preferred
    if (!document.startViewTransition || isReducedMotion) {
        updateModeCallback();
        return;
    }

    // Determine the origin point of the circular reveal in viewport coordinates
    let x = window.innerWidth / 2;
    let y = 60;

    if (event) {
        if (typeof event.clientX === 'number' && event.clientX > 0) {
            x = event.clientX;
            y = event.clientY;
        } else if (event.currentTarget && typeof event.currentTarget.getBoundingClientRect === 'function') {
            const rect = event.currentTarget.getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
        }
    }

    // Compute maximum distance from (x, y) to the farthest viewport corner
    const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    try {
        const transition = document.startViewTransition(() => {
            flushSync(() => {
                updateModeCallback();
            });
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`
                    ]
                },
                {
                    duration: 650,
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    pseudoElement: '::view-transition-new(root)'
                }
            );
        }).catch((err) => {
            // Safe fallback if pseudoElement animation is not supported
            console.debug('View transition animation note:', err);
        });
    } catch (err) {
        // Safe fallback if startViewTransition throws synchronously
        console.warn('View transition fallback:', err);
        updateModeCallback();
    }
}
