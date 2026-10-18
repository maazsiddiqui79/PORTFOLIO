export function initAnimations() {
    // Reveal IntersectionObserver
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    // Initial elements
    document.querySelectorAll(".reveal").forEach(element => {
        revealObserver.observe(element);
    });

    // Automatically observe newly mounted .reveal elements from lazy-loaded components
    const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList?.contains("reveal")) {
                        revealObserver.observe(node);
                    }
                    node.querySelectorAll?.(".reveal").forEach(child => {
                        revealObserver.observe(child);
                    });
                }
            });
        });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Active Nav — handled by React Navbar component (Navbar.jsx)

    // Scroll Progress & Back to Top — throttled with requestAnimationFrame + passive listener
    const progress = document.getElementById("progress");
    const backToTop = document.getElementById("backToTop");
    const nav = document.getElementById("nav");
    let scrollRafId = null;

    const onScroll = () => {
        if (scrollRafId) cancelAnimationFrame(scrollRafId);
        scrollRafId = requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percentage = height > 0 ? (scrollTop / height) * 100 : 0;
            
            if (progress) progress.style.width = percentage + "%";
            if (nav) nav.classList.toggle("scrolled", scrollTop > 50);
            if (backToTop) backToTop.classList.toggle("show", scrollTop > 500);
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Magnetic Buttons
    const magneticElements = document.querySelectorAll(".magnetic");
    if (window.matchMedia("(pointer:fine)").matches) {
        magneticElements.forEach(element => {
            element.addEventListener("mousemove", event => {
                const rect = element.getBoundingClientRect();
                const x = event.clientX - rect.left - rect.width / 2;
                const y = event.clientY - rect.top - rect.height / 2;
                element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
            });
            element.addEventListener("mouseleave", () => {
                element.style.transform = "";
            });
        });
    }

    // Hero 3D Card
    const heroCard = document.querySelector(".hero-card");
    if (heroCard && window.matchMedia("(pointer:fine)").matches) {
        heroCard.addEventListener("mousemove", event => {
            const rect = heroCard.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * 12;
            const rotateX = (y - 0.5) * -12;
            heroCard.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(2deg)`;
        });
        heroCard.addEventListener("mouseleave", () => {
            heroCard.style.transform = "";
        });
    }

    return () => {
        window.removeEventListener("scroll", onScroll);
        if (scrollRafId) cancelAnimationFrame(scrollRafId);
        revealObserver.disconnect();
        mutationObserver.disconnect();
    };
}
