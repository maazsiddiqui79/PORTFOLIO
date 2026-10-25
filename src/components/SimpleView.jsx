import cert1 from "../assets/certificates/2 Day AI Gernalist workshop.png";
import cert2 from "../assets/certificates/C.jpg";
import cert3 from "../assets/certificates/Fusion Quiz.jpg";
import cert4 from "../assets/certificates/Java.png";
import cert5 from "../assets/certificates/Mobile  Application Dev.pdf";
import cert6 from "../assets/certificates/Python.pdf";
import cert7 from "../assets/certificates/React JS.pdf";
import cert8 from "../assets/certificates/S-w Testing Techniques.pdf";
import cert9 from "../assets/certificates/The Joy of Computing using Python IIT Madras.png";
import cert11 from "../assets/certificates/Udemy 100 Day of python.pdf";
import cert12 from "../assets/certificates/WhatsApp Image 2026-02-04 at 11.43.03 PM.jpeg";
import cert13 from "../assets/certificates/Zephyr Gen AI event.pdf";
import cert14 from "../assets/certificates/orm Data Analyst-Certificate.pdf";
import cert15 from "../assets/certificates/orm Full Stack Developer-Certificate.pdf";
import cert16 from "../assets/certificates/orm Python-Certificate.pdf";
import cert17 from "../assets/certificates/react js infosys.pdf";
import cert18 from "../assets/certificates/Zephyr Vibe Coding Hackathon.png";
import React from 'react';
import '../simple-mode.css';

function SimpleView() {
    return (
        <main className=" simple-mode" id="home">
            {/* Header */}
            <header className=" simple-header">
                <h1 className="reveal simple-name" >MAAZ SIDDIQUI</h1>
                <p className="reveal simple-role p-text">
                    <span className="status-dot"></span> Pursuing B.E. in Computer Engineering | Diploma Graduate in Computer Engineering
                </p>
                <p className="reveal simple-location p-text">Mumbai, India</p>
                <nav className=" simple-social-links">
                    <a className="reveal simple-link" href="https://www.maazdev.tech/assets/Maaz_Siddiqui_Resume-BmqMCuCF.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a className="reveal simple-link" href="https://github.com/maazsiddiqui79" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="reveal simple-link" href="https://www.linkedin.com/in/siddiqui-maazzz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </header>

            {/* About */}
            <section id="about" className=" simple-section">
                <h2 className="reveal simple-section-title">1. ABOUT</h2>
                <p className="reveal simple-text">
                    I'm Maaz Siddiqui, a Computer Engineering student and developer based in Mumbai, India. I enjoy turning ideas into practical software and building applications that solve real-world problems. My journey started during my Diploma in Computer Engineering, where I began with Python programs, Web Dev, Automation and small applications.
                </p>
                <p className="reveal simple-text">
                    Over time, I progressed towards building complete web and full-stack applications using Python, Django, Flask, React, SQL, APIs, automation and AI. I learn primarily through building, from understanding a problem and designing a solution to developing, testing, integrating APIs or databases, and deploying the final application.
                </p>
                <p className="reveal simple-text">
                    I am currently pursuing my BE in Computer Engineering at Thakur College of Engineering & Technology (TCET). Alongside academics, I am strengthening my skills in software development, backend engineering, system design, cloud technologies, automation and AI, with the goal of becoming a well-rounded software engineer.
                </p>
            </section>

            {/* Skills */}
            <section id="skills" className=" simple-section">
                <h2 className="reveal simple-section-title">2. SKILLS</h2>
                <div className=" simple-skill-group">
                    <h3 className="reveal simple-subtitle">- Languages</h3>
                    <p className="reveal simple-text">Python, JavaScript, Java, SQL</p>
                </div>
                <div className=" simple-skill-group">
                    <h3 className="reveal simple-subtitle">- Backend</h3>
                    <p className="reveal simple-text">Flask, Django, Django ORM, SQLAlchemy, Jinja, RESTful API Development, Authentication, API Integration, Web Application Development</p>
                </div>
                <div className=" simple-skill-group">
                    <h3 className="reveal simple-subtitle">- Frontend</h3>
                    <p className="reveal simple-text">HTML5, CSS3, ES6+, React, Tailwind CSS, Bootstrap, React Routing, Responsive Web Design, UI/UX Design, Axios</p>
                </div>
                <div className=" simple-skill-group">
                    <h3 className="reveal simple-subtitle">- Modern Development</h3>
                    <p className="reveal simple-text">Full-Stack Development, REST APIs, Web Scraping, Data Structures, OOPS, Generative AI, Prompt Engineering, Vibe Coding, Agile Methodology, Markdown, Software Testing</p>
                </div>
                <div className=" simple-skill-group">
                    <h3 className="reveal simple-subtitle">- Libraries & Tools</h3>
                    <p className="reveal simple-text">Pandas, NumPy, Matplotlib, Beautiful Soup, Selenium, Tkinter, Vite, CKEditor,</p>
                </div>
                <div className=" simple-skill-group">
                    <h3 className="reveal simple-subtitle">- Deployment & Cloud</h3>
                    <p className="reveal simple-text">Vercel, GitHub Pages, Netlify, Render, AWS</p>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className=" simple-section">
                <h2 className="reveal simple-section-title">3. PROJECTS</h2>

                <article className=" simple-project">
                    <span className='reveal spl-label'> 🏆 Winner <br />Zephyr Gen AI Competition(TCET)</span>
                    <h3 className="reveal simple-project-title">SpeakEasy AI</h3>
                    <p className="reveal simple-project-description">
                        An AI-powered voice-first platform for improving interviews, presentations, debates, fluency, and communication skills through interactive sessions and AI-driven feedback.<br />
                        <a className="reveal simple-project-link" href="https://speakeasy-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a> &nbsp;
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/SpeakEasy--GEN-AI" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">Text ↔ Morse Code Translator</h3>
                    <p className="reveal simple-project-description">
                        A responsive Flask web application for two-way English-to-Morse and Morse-to-English conversion, with output display and copy-to-clipboard functionality.<br />
                        <a className="reveal simple-project-link" href="https://morse-origin.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a> &nbsp;
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/Morse-Code-Encoder-Decoder" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">Shortify - URL Shortener</h3>
                    <p className="reveal simple-project-description">
                        A Flask-based URL shortener that converts long URLs into shareable short links with password-protected deletion, database integration, form validation, and a responsive frontend.<br />
                        <a className="reveal simple-project-link" href="https://shortify-maazdev.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a> &nbsp;
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/URL-Shortner-Python" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <span className='reveal spl-label'> Diploma Final Year Project</span>
                    <h3 className="reveal simple-project-title">SmartBlogger</h3>
                    <p className="reveal simple-project-description">
                        A smart blogging platform for **creating, managing, and publishing content** with intelligent features that deliver a structured and modern blogging experience.<br />
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/Smart_Blogging-Platform-FYP" target="_blank" rel="noopener noreferrer">GitHub →</a> &nbsp;
                        <a className="reveal simple-project-link" href="https://www.maazdev.tech/assets/IJPREMS60200006505-BoCePTXX.pdf" target="_blank" rel="noopener noreferrer">Research Paper →</a> &nbsp;<br />
                        <a className="reveal simple-project-link" href="https://www.maazdev.tech/assets/Maaz%20IJPREMS60200006505-1-BB9nlw-S.pdf" target="_blank" rel="noopener noreferrer">Research Paper Certificate →</a> &nbsp;<br />
                        <a className="reveal simple-project-link" href="https://www.maazdev.tech/assets/Institue%20Report-B8uSq188.pdf" target="_blank" rel="noopener noreferrer">Institute Report →</a> &nbsp;
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">Digital Card</h3>
                    <p className="reveal simple-project-description">
                        A modern React-based digital card featuring a responsive layout, interactive elements, social links, and structured personal and professional information.<br />
                        <a className="reveal simple-project-link" href="https://maaz-social-card.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Card →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">To-Do List</h3>
                    <p className="reveal simple-project-description">
                        A Flask-based task management application with CRUD operations, user authentication, SQLite database integration, and SQLAlchemy for managing tasks through a web interface.<br />
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/To-Do-List-Web-Application" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">Typing Speed Test</h3>
                    <p className="reveal simple-project-description">
                        An interactive typing speed test that measures typing speed and accuracy through timed exercises while demonstrating frontend interaction and backend web development.<br />
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/Typing-Speed-Test" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">Mini Banking System</h3>
                    <p className="reveal simple-project-description">
                        A Python-based mini banking application demonstrating account handling, balance management, and transaction operations through practical software logic.<br />
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/100-Days-Python-Project/tree/main/33.%20-Mini%20Banking%20System%20[Practice%20project]" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                    </p>
                </article>

                <article className=" simple-project">
                    <h3 className="reveal simple-project-title">Digital Clock</h3>
                    <p className="reveal simple-project-description">
                        A lightweight frontend project featuring a real-time digital clock that dynamically updates the current time using JavaScript timing functions.<br />
                        <a className="reveal simple-project-link" href="https://github.com/maazsiddiqui79/digitalClock]" target="_blank" rel="noopener noreferrer">Git Hub →</a> &nbsp;
                        <a className="reveal simple-project-link" href="https://maazsiddiqui79.github.io/digitalClock/" target="_blank" rel="noopener noreferrer">Visit Site →</a>
                    </p>
                </article>
            </section>

            {/* Education */}
            <section id="education" className=" simple-section">
                <h2 className="reveal simple-section-title">4. EDUCATION</h2>

                <article className=" simple-education">
                    <h3 className="reveal simple-education-title">
                        Thakur College of Engineering and Technology, Kandivali <span className='reveal simple-location p-text'>(2026-Present)</span>
                    </h3>
                    <p className="reveal simple-education-description">Bachelor of Engineering - Computer Engineering</p>
                </article>

                <article className=" simple-education">
                    <h3 className="reveal simple-education-title">
                        M.H. Saboo Siddik Polytechnic, Byculla <span className='reveal simple-location p-text'>(2023-26)</span>
                    </h3>
                    <p className="reveal simple-education-description">Diploma in Computer Engineering</p>
                    <div className=" simple-marks">
                        <div className=" simple-marks-row"><span className="reveal">FY Sem I & Sem II</span><span className="reveal">81%</span></div>
                        <div className=" simple-marks-row"><span className="reveal">SY Sem III & Sem IV</span><span className="reveal">82%</span></div>
                        <div className=" simple-marks-row"><span className="reveal">TY Sem V & Sem VI</span><span className="reveal">94%</span></div>
                    </div>
                </article>

                <article className=" simple-education">
                    <h3 className="reveal simple-education-title">
                        St. Stanislaus High School, Bandra <span className='reveal simple-location p-text'>(2013-2023)</span>
                    </h3>
                    <p className="reveal simple-education-description">SSC completed with an overall grade of 83%.</p>
                </article>
            </section>

            {/* Experience */}
            <section id="experience" className=" simple-section">
                <h2 className="reveal simple-section-title">5. EXPERIENCE</h2>

                <article className=" simple-education">
                    <h3 className="reveal simple-education-title">
                        Frontend Development Trainee <span className='reveal simple-location p-text'>(MAY 26 - JUL 26)</span>
                        <p className="reveal simple-education-description">Heuristic Academy · Mumbai</p>
                    </h3>
                </article>

                <article className=" simple-education">
                    <h3 className="reveal simple-education-title">
                        Python Development Intern <span className='reveal simple-location p-text'>(JUN 25 - AUG 25)</span>
                        <p className="reveal simple-education-description">Quality Software Technologies · Thane</p>
                    </h3>
                </article>
            </section>

            {/* Achievements */}
            <section id="achievements" className=" simple-section">
                <h2 className="reveal simple-section-title">6. ACHIEVEMENTS</h2>

                <article className=" simple-achievement">
                    <h3 className="reveal simple-achievement-title">
                        ZEPHYR 2026 Gen AI Workshop - COMPETITION WINNER  <span className='reveal simple-location p-text'>(29 SEP - 01 OCT 2026)</span>
                    </h3>
                    <p className="reveal simple-achievement-description">
                        Winner of the Gen AI Workshop at ZEPHYR 2026, the technical festival of Thakur College of Engineering and Technology, Mumbai.
                    </p>
                    <a className="reveal simple-project-link" href="https://speakeasy-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer">Link →</a>
                </article>

                <article className=" simple-achievement">
                    <h3 className="reveal simple-achievement-title">MSBTE State-Level Technical Paper Presentation - FINALIST</h3>
                    <p className="reveal simple-achievement-description">Reached the finalist stage of a state-level technical paper presentation.</p>
                </article>

                <article className=" simple-achievement">
                    <h3 className="reveal simple-achievement-title">The Joy of Computing Using Python - NPTEL</h3>
                    <p className="reveal simple-achievement-description">Completed the NPTEL course from IIT Madras with an ELITE–SILVER · 86%  score. (IIT MADRAS)</p>
                </article>

                <article className=" simple-achievement">
                    <h3 className="reveal simple-achievement-title">100 Days of Python - LEARNING</h3>
                    <p className="reveal simple-achievement-description">
                        Completed a structured Python development learning journey through Udemy, covering programming, automation and application development at UDEMY Platform
                    </p>
                </article>

                <article className=" simple-achievement">
                    <h3 className="reveal simple-achievement-title">
                        SMART BLOGGING  AI-POWERED INTELLIGENT BLOG WEBSITE - RESEARCH PAPER PUBLISHES   <span className='reveal simple-location p-text'>(DEC 2025 - FEB 2026)</span>
                    </h3>
                    <p className="reveal simple-achievement-description">
                        An AI-powered blogging platform designed to make online content more interactive and learning-focused. The system combines content summarization, key-point extraction, contextual chatbot assistance and quiz generation to enhance the overall reading and learning experience.
                    </p>
                    <a className="reveal simple-project-link" href="https://www.maazdev.tech/assets/IJPREMS60200006505-BoCePTXX.pdf" target="_blank" rel="noopener noreferrer">Read Research Paper →</a> &nbsp;
                    <a className="reveal simple-project-link" href="https://www.maazdev.tech/assets/Maaz%20IJPREMS60200006505-1-BB9nlw-S.pdf" target="_blank" rel="noopener noreferrer">View Certificate →</a><br />
                    <a className="reveal simple-project-link" href="https://www.google.com/search?q=10.58257%2FIJPREMS51347&sca_esv=aae8b36161dbb831&sxsrf=APpeQnvDfABLEq1zoUmLj1yHehbigeQEKQ%3A1791808811675&source=hp&ei=K9XMav-SJp-dhvcPgfHd4Aw&iflsig=ABILxe8AAAAAaszjOxQm7qKU_ga3jhrRsXkH19VLbesY&ved=0ahUKEwi_1OP9v7SXAxWfjuEIHYF4F8wQ4dUDCCw&uact=5&oq=https%3A%2F%2Fdoi.org%2F10.58257%2FIJPREMS51347&gs_lp=Egdnd3Mtd2l6IiVodHRwczovL2RvaS5vcmcvMTAuNTgyNTcvSUpQUkVNUzUxMzQ3SL8HULcCWLcCcAF4AJABAJgBxQGgAcUBqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAInqAIKwgINEC4YxwEY0QMY6gIYJ8ICDRAjGPAFGMkCGOoCGCfCAgcQIxjqAhgnwgIKECMY8AUY6gIYJ8ICDRAjGPAFGLQEGOoCGCfCAgoQIxjJAhjqAhgnwgINECMYtAQY8AUY6gIYJ5gDJ_EFY6LIDOZ5XKKSBwExoAc3sgcAuAcAwgcDNC0xyAcggAgB&sclient=gws-wiz" target="_blank" rel="noopener noreferrer">DOI →</a><br />
                    <p className='reveal simple-achievement-description'>
                        <sapn className='reveal simple-project-link'>PUBLICATION</sapn> : Volume 06 · Issue 02 · February 2026
                    </p>
                    <p className='reveal simple-achievement-description'>
                        <sapn className='reveal simple-project-link'>JOURNAL</sapn> : International Journal of Progressive Research in Engineering Management and Science (IJPREMS)
                    </p>
                </article>

                <article className=" simple-achievement">
                    <h3 className="reveal simple-achievement-title">95%  in DIPLOMA - ACADEMICS</h3>
                    <p className="reveal simple-achievement-description">Achieved strong academic results throughout my Diploma in Computer Engineering.</p>
                </article>
            </section>

            {/* Certifications */}
            <section id="certifications" className=" simple-section">
                <h2 className="reveal simple-section-title">7. CERTIFICATIONS & LEARNING</h2>
                <ul className=" simple-list simple-achievement-description">
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert13} target="_blank" rel="noopener noreferrer">Gen AI Event — Competition Winner</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert18} target="_blank" rel="noopener noreferrer">Vibe Coding Hackathon — Participant</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert9} target="_blank" rel="noopener noreferrer">The Joy of Computing Using Python — NPTEL / IIT Madras</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert11} target="_blank" rel="noopener noreferrer">100 Days of Python — Udemy</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert6} target="_blank" rel="noopener noreferrer">Fundamentals of Python — Infosys Springboard</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert4} target="_blank" rel="noopener noreferrer">Java Concepts — Infosys Springboard</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert2} target="_blank" rel="noopener noreferrer">C Programming — Infosys Springboard</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert17} target="_blank" rel="noopener noreferrer">React JS — Infosys Springboard</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert14} target="_blank" rel="noopener noreferrer">Data Analyst — OneRoadmap</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert16} target="_blank" rel="noopener noreferrer">Python Development — OneRoadmap</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert7} target="_blank" rel="noopener noreferrer">React JS — Frontend Development</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert8} target="_blank" rel="noopener noreferrer">Software Testing Techniques — Testing Fundamentals</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert5} target="_blank" rel="noopener noreferrer">Mobile Application Development — App Development</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert1} target="_blank" rel="noopener noreferrer">AI Generalist Workshop — 2-Day Intensive Training</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert3} target="_blank" rel="noopener noreferrer">Fusion Quiz — Participation</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert12} target="_blank" rel="noopener noreferrer">Certificate of Participation — Finalist in Paper Presentation Competition (2026)</a></li>
                    <li className="reveal simple-experience-description">- <a className="reveal" href={cert15} target="_blank" rel="noopener noreferrer">Full Stack Developer — OneRoadmap</a></li>
                </ul>
            </section>

            {/* Technical Writing */}
            <section id="writing" className=" simple-section">
                <h2 className="reveal simple-section-title">8. TECHNICAL WRITING</h2>
                <p className="reveal simple-text">
                    <span className='reveal simple-location '>Ideas are Currently compiling.<br />Article Coming Soon...</span><br />

                </p>
            </section>


            {/* Contact */}
            <section id="contact" className=" simple-section">
                <h2 className="reveal simple-section-title">9. CONTACT</h2>
                <p className="reveal simple-text">
                    Open to collaborations, internships, freelance work and technically interesting projects involving web development, AI, automation and software engineering.
                </p>
                <nav className=" simple-contact-links">
                    <a className="reveal simple-link" href="https://maaz-social-card.vercel.app/" target="_blank" rel="noopener noreferrer">DIGITAL CARD↗</a>
                    <a className="reveal simple-link" href="mailto:siddiqui.maaz79@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL ↗</a>
                    <a className="reveal simple-link" href="www.linkedin.com/in/siddiqui-maazzz/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
                    <a className="reveal simple-link" href="https://github.com/maazsiddiqui79" target="_blank" rel="noopener noreferrer">GITHUB↗</a>
                </nav>
            </section>
            {/* Current Focus */}
            <section id="focus" className=" simple-section">
                <h2 className="reveal simple-section-title">10. CURRENT FOCUS</h2>
                <p className="reveal simple-text">
                    <span className="reveal capsule">Full-Stack Development</span><br /><br />
                    <span className="reveal capsule"> AI Technologies</span><br /><br />
                    <span className="reveal capsule"> Understanding Core concepts</span><br /><br />
                    <span className="reveal capsule"> Cloud</span>
                </p>
            </section>
        </main>
    );
}

export default SimpleView;