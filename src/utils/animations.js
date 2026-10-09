export function initAnimations() {
    // Reveal
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

    document.querySelectorAll(".reveal").forEach(element => {
        revealObserver.observe(element);
    });

    // Active Nav
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                    if (active) active.classList.add("active");
                }
            });
        },
        { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Scroll Progress & Back to Top
    const progress = document.getElementById("progress");
    const backToTop = document.getElementById("backToTop");
    const nav = document.getElementById("nav");

    const onScroll = () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentage = (scrollTop / height) * 100;
        
        if (progress) progress.style.width = percentage + "%";
        if (nav) nav.classList.toggle("scrolled", scrollTop > 50);
        if (backToTop) backToTop.classList.toggle("show", scrollTop > 500);
    };

    window.addEventListener("scroll", onScroll);

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
        revealObserver.disconnect();
        sectionObserver.disconnect();
    };
}
