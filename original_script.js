

/* =========================================================
   THEME SYSTEM
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeMenu =
    document.getElementById("themeMenu");

const themeOptions =
    document.querySelectorAll(".theme-option");


function getSystemTheme(){

    return window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches
        ? "light"
        : "dark";

}


function applyTheme(theme){

    const actualTheme =
        theme === "system"
            ? getSystemTheme()
            : theme;

    document.documentElement
        .setAttribute(
            "data-theme",
            actualTheme
        );

    localStorage.setItem(
        "portfolio-theme",
        theme
    );


    themeOptions.forEach(option => {

        option.classList.toggle(
            "selected",
            option.dataset.themeChoice === theme
        );

    });

}


const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    ) || "dark";


applyTheme(savedTheme);


themeToggle.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        themeMenu.classList.toggle(
            "open"
        );

    }
);


themeOptions.forEach(option => {

    option.addEventListener(
        "click",
        () => {

            applyTheme(
                option.dataset.themeChoice
            );

            themeMenu.classList.remove(
                "open"
            );

        }
    );

});


document.addEventListener(
    "click",
    event => {

        if(
            !themeMenu.contains(event.target) &&
            event.target !== themeToggle
        ){

            themeMenu.classList.remove(
                "open"
            );

        }

    }
);


window.matchMedia(
    "(prefers-color-scheme: light)"
).addEventListener(
    "change",
    () => {

        const current =
            localStorage.getItem(
                "portfolio-theme"
            );

        if(current === "system"){
            applyTheme("system");
        }

    }
);


/* =========================================================
   NAVIGATION
========================================================= */

const nav =
    document.getElementById("nav");

const menuBtn =
    document.getElementById("menuBtn");


menuBtn.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "open"
        );

    }
);


document.querySelectorAll(
    ".nav-links a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            nav.classList.remove(
                "open"
            );

        }
    );

});


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progress =
    document.getElementById(
        "progress"
    );


const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const height =
            document.documentElement
                .scrollHeight -
            document.documentElement
                .clientHeight;


        const percentage =
            (scrollTop / height) * 100;


        progress.style.width =
            percentage + "%";


        nav.classList.toggle(
            "scrolled",
            scrollTop > 50
        );


        backToTop.classList.toggle(
            "show",
            scrollTop > 500
        );

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


backToTop.addEventListener(
    "click",
    scrollToTop
);


document.querySelectorAll(
    'a[href="#home"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();

            scrollToTop();

        }
    );

});


/* =========================================================
   REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target
                            .classList
                            .add("visible");

                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold:.12
        }

    );


document.querySelectorAll(
    ".reveal"
).forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id], header[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        navLinks.forEach(
                            link => {

                                link.classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                        const active =
                            document.querySelector(
                                `.nav-links a[href="#${entry.target.id}"]`
                            );


                        if(active){

                            active.classList
                                .add(
                                    "active"
                                );

                        }

                    }

                }
            );

        },

        {
            rootMargin:
                "-30% 0px -60% 0px"
        }

    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   COUNTERS
========================================================= */

const counters =
    document.querySelectorAll(
        ".stat-number"
    );


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if(
                        !entry.isIntersecting
                    ){
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.count
                        );


                    const duration =
                        1300;


                    const startTime =
                        performance.now();


                    function update(
                        currentTime
                    ){

                        const progress =
                            Math.min(
                                (
                                    currentTime -
                                    startTime
                                ) /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        counter.textContent =
                            Math.floor(
                                eased * target
                            );


                        if(
                            progress < 1
                        ){

                            requestAnimationFrame(
                                update
                            );

                        }else{

                            counter.textContent =
                                target;

                        }

                    }


                    requestAnimationFrame(
                        update
                    );


                    counterObserver
                        .unobserve(
                            counter
                        );

                }
            );

        },

        {
            threshold:.5
        }

    );


counters.forEach(
    counter => {

        counterObserver.observe(
            counter
        );

    }
);


/* =========================================================
   PROJECT FILTER
========================================================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filters.forEach(
    filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(
                    button => {

                        button.classList
                            .remove(
                                "active"
                            );

                    }
                );


                filter.classList.add(
                    "active"
                );


                const selected =
                    filter.dataset.filter;


                projectCards.forEach(
                    card => {

                        const categories =
                            card.dataset.category;


                        if(
                            selected === "all" ||
                            categories.includes(
                                selected
                            )
                        ){

                            card.style.display =
                                "block";

                            requestAnimationFrame(
                                () => {

                                    card.style.opacity =
                                        "1";

                                    card.style.transform =
                                        "translateY(0)";

                                }
                            );

                        }else{

                            card.style.opacity =
                                "0";

                            card.style.transform =
                                "translateY(15px)";


                            setTimeout(
                                () => {

                                    card.style.display =
                                        "none";

                                },
                                250
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    todo:{

        title:
            "Todo List Web App",

        description:
            "A secure task manager with user authentication, hashed passwords and priority-based task organization.",

        image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Flask",
            "SQL",
            "Authentication",
            "CRUD"
        ],

        github:
            "https://github.com/maazsiddiqui79",

        live:
            "https://go-todo-task.com/"

    },


    shortener:{

        title:
            "URL Shortener",

        description:
            "A minimal URL shortener that converts long links into short, shareable URLs with tracking support.",

        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Flask",
            "REST",
            "Backend"
        ],

        github:
            "https://github.com/maazsiddiqui79",

        live:
            "https://shortify-maazdev.com/"

    },


    morse:{

        title:
            "Morse Code Encoder & Decoder",

        description:
            "A Morse code converter supporting text-to-Morse and Morse-to-text translations.",

        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Algorithms",
            "Web"
        ],

        github:
            "https://github.com/maazsiddiqui79",

        live:
            "https://morse-origin.app/"

    },


    blog:{

        title:
            "Blog Website",

        description:
            "A full-stack blog platform where users can create accounts, write posts, comment and explore blogs from other users.",

        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Flask",
            "HTML",
            "CSS",
            "SQL"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    password:{

        title:
            "Password Manager GUI",

        description:
            "A GUI application designed to store, generate and manage passwords while protecting access through a master key.",

        image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Tkinter",
            "Security",
            "GUI"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    typing:{

        title:
            "Typing Speed Test",

        description:
            "A Tkinter desktop application measuring real-time WPM, typing accuracy, countdown timing and generated practice text.",

        image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Tkinter",
            "GUI",
            "WPM"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    cookie:{

        title:
            "Cookie Clicker Automation Tool",

        description:
            "An automation tool that handles cookie clicking, upgrades and game progress without requiring manual interaction.",

        image:
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Selenium",
            "Automation"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    banking:{

        title:
            "Mini Banking System",

        description:
            "A command-line banking application with authentication, account management and transaction features implemented with object-oriented Python.",

        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "OOP",
            "CLI",
            "Authentication"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    watermark:{

        title:
            "Image Watermarking App",

        description:
            "A desktop application for applying watermarks to images through a graphical interface.",

        image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "GUI",
            "Image Processing"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    quiz:{

        title:
            "Quiz Code App",

        description:
            "A quiz application with authentication, quiz management, scoring, feedback and persistent storage.",

        image:
            "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "GUI",
            "Database",
            "Authentication"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    },


    webtyping:{

        title:
            "Typing Test — Web",

        description:
            "A web-based typing platform tracking real-time WPM and accuracy with authentication, personal dashboards, history and multiple test modes.",

        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",

        tech:[
            "Python",
            "Web",
            "Authentication",
            "Dashboard"
        ],

        github:
            "https://github.com/maazsiddiqui79"

    }

};


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal =
    document.getElementById(
        "projectModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalTech =
    document.getElementById(
        "modalTech"
    );


const modalGithub =
    document.getElementById(
        "modalGithub"
    );


projectCards.forEach(
    card => {

        card.setAttribute(
            "tabindex",
            "0"
        );


        function openProject(){

            const project =
                projectData[
                    card.dataset.project
                ];


            if(!project){
                return;
            }


            modalTitle.textContent =
                project.title;


            modalImage.src =
                project.image;


            modalImage.alt =
                project.title;


            modalDescription.textContent =
                project.description;


            modalTech.innerHTML =
                project.tech
                    .map(
                        tech =>
                            `<span>${tech}</span>`
                    )
                    .join("");


            modalGithub.href =
                project.github;


            modal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }


        card.addEventListener(
            "click",
            openProject
        );


        card.addEventListener(
            "keydown",
            event => {

                if(
                    event.key === "Enter" ||
                    event.key === " "
                ){

                    event.preventDefault();

                    openProject();

                }

            }
        );

    }
);


function closeModal(){

    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if(
            event.target === modal
        ){

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if(
            event.key === "Escape"
        ){

            closeModal();

        }

    }
);


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const magneticElements =
    document.querySelectorAll(
        ".magnetic"
    );


if(
    window.matchMedia(
        "(pointer:fine)"
    ).matches
){

    magneticElements.forEach(
        element => {

            element.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        element
                            .getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    element.style.transform =
                        `translate(
                            ${x * .12}px,
                            ${y * .12}px
                        )`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   HERO 3D CARD
========================================================= */

const heroCard =
    document.querySelector(
        ".hero-card"
    );


if(
    heroCard &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
){

    heroCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroCard
                    .getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height;


            const rotateY =
                (x - .5) * 12;


            const rotateX =
                (y - .5) * -12;


            heroCard.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 rotateZ(2deg)`;

        }
    );


    heroCard.addEventListener(
        "mouseleave",
        () => {

            heroCard.style.transform =
                "rotate(4deg)";

        }
    );

}


/* =========================================================
   GITHUB LIVE DATA
========================================================= */

async function loadGithubData(){

    try{

        const response =
            await fetch(
                "https://api.github.com/users/maazsiddiqui79"
            );


        if(!response.ok){
            return;
        }


        const data =
            await response.json();


        const repoCount =
            document.getElementById(
                "repoCount"
            );


        const followerCount =
            document.getElementById(
                "followerCount"
            );


        repoCount.textContent =
            data.public_repos;


        followerCount.textContent =
            data.followers;

    }catch(error){

        console.log(
            "GitHub API unavailable."
        );

    }

}


loadGithubData();


/* =========================================================
   YEAR
========================================================= */

const year =
    new Date().getFullYear();


document
    .querySelector("footer p")
    .textContent =
        document
            .querySelector("footer p")
            .textContent
            .replace(
                "2026",
                year
            );

