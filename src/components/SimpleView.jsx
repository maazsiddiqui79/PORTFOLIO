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
        <main className="simple-mode">
            {/* Header */}
            <header className="simple-header">
                <h1 className="simple-name">MAAZ SIDDIQUI</h1>
                <p className="simple-role p-text">
                    <span className="status-dot"></span> Pursuing B.E. in Computer Engineering | Diploma Graduate in Computer Engineering
                </p>
                <p className="simple-location p-text">Mumbai, India</p>
                <nav className="simple-social-links">
                    <a className="simple-link" href="https://www.maazdev.tech/assets/Maaz_Siddiqui_Resume-BmqMCuCF.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a className="simple-link" href="https://github.com/maazsiddiqui79" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="simple-link" href="https://www.linkedin.com/in/siddiqui-maazzz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </header>

            {/* About */}
            <section id="about" className="simple-section">
                 <h2 className="simple-section-title">1. ABOUT</h2>
                <p className="simple-text">
                    I'm Maaz Siddiqui, a Computer Engineering student and developer based in Mumbai, India. I enjoy turning ideas into practical software and building applications that solve real-world problems. My journey started during my Diploma in Computer Engineering, where I began with Python programs, Web Dev, Automation and small applications.
                </p>
                <p className="simple-text">
                    Over time, I progressed towards building complete web and full-stack applications using Python, Django, Flask, React, SQL, APIs, automation and AI. I learn primarily through building, from understanding a problem and designing a solution to developing, testing, integrating APIs or databases, and deploying the final application.
                </p>
                <p className="simple-text">
                    I am currently pursuing my BE in Computer Engineering at Thakur College of Engineering & Technology (TCET). Alongside academics, I am strengthening my skills in software development, backend engineering, system design, cloud technologies, automation and AI, with the goal of becoming a well-rounded software engineer.
                </p>
            </section>

            {/* Skills */}
            <section id="skills" className="simple-section">
                <h2 className="simple-section-title">2. SKILLS</h2>
                <div className="simple-skill-group">
                     <h3 className="simple-subtitle">- Languages</h3>
                    <p className="simple-text">Python, JavaScript, Java, SQL</p>
                </div>
                <div className="simple-skill-group">
                     <h3 className="simple-subtitle">- Backend</h3>
                    <p className="simple-text">Flask, Django, Django ORM, SQLAlchemy, Jinja, RESTful API Development, Authentication, API Integration, Web Application Development</p>
                </div>
                <div className="simple-skill-group">
                     <h3 className="simple-subtitle">- Frontend</h3>
                    <p className="simple-text">HTML5, CSS3, ES6+, React, Tailwind CSS, Bootstrap, React Routing, Responsive Web Design, UI/UX Design, Axios</p>
                </div>
                <div className="simple-skill-group">
                     <h3 className="simple-subtitle">- Modern Development</h3>
                    <p className="simple-text">Full-Stack Development, REST APIs, Web Scraping, Data Structures, OOPS, Generative AI, Prompt Engineering, Vibe Coding, Agile Methodology, Markdown, Software Testing</p>
                </div>
                <div className="simple-skill-group">
                     <h3 className="simple-subtitle">- Libraries & Tools</h3>
                    <p className="simple-text">Pandas, NumPy, Matplotlib, Beautiful Soup, Selenium, Tkinter, Vite, CKEditor,</p>
                </div>
                <div className="simple-skill-group">
                     <h3 className="simple-subtitle">- Deployment & Cloud</h3>
                    <p className="simple-text">Vercel, GitHub Pages, Netlify, Render, AWS</p>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="simple-section">
                <h2 className="simple-section-title">3. PROJECTS</h2>

                <article className="simple-project">
                    <span className='spl-label'> 🏆 Winner <br />Zephyr Gen AI Competition(TCET)</span>
                    <h3 className="simple-project-title">SpeakEasy AI</h3>
                    <p className="simple-project-description">
                        An AI-powered, voice-first communication training platform designed to help users improve interviews, presentations, debates, fluency, and overall communication skills through realistic interactive sessions. The platform provides multiple training modes and uses AI-assisted analysis to give users structured feedback about their communication performance.
                    </p>
                    <a className="simple-project-link" href="https://speakeasy-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a> &nbsp;
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/SpeakEasy--GEN-AI" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">Text ↔ Morse Code Translator</h3>
                    <p className="simple-project-description">
                        A responsive Flask web application that converts English text into Morse code and Morse code back into readable English text. The application provides a simple two-way conversion interface along with useful functionality such as output display and copy-to-clipboard support.
                    </p>
                    <a className="simple-project-link" href="https://morse-origin.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a> &nbsp;
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/Morse-Code-Encoder-Decoder" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">Shortify - URL Shortener</h3>
                    <p className="simple-project-description">
                        A Flask-based URL shortening web application that converts long URLs into short, shareable links while providing password-protected deletion functionality. The application demonstrates how a complete web workflow can be implemented using a Flask backend, database integration, form handling, validation, and a responsive frontend.
                    </p>
                    <a className="simple-project-link" href="https://shortify-maazdev.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a> &nbsp;
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/URL-Shortner-Python" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                </article>

                <article className="simple-project">
                    <span className='spl-label'> Diploma Final Year Project</span>
                    <h3 className="simple-project-title">SmartBlogger</h3>
                    <p className="simple-project-description">
                        A final-year smart blogging platform designed to provide a modern environment for creating, managing, and publishing blog content with intelligent functionality. The project combines web development concepts with intelligent features to create a more structured and feature-rich blogging experience.
                    </p>
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/Smart_Blogging-Platform-FYP" target="_blank" rel="noopener noreferrer">GitHub →</a> &nbsp;
                    <a className="simple-project-link" href="https://www.maazdev.tech/assets/IJPREMS60200006505-BoCePTXX.pdf" target="_blank" rel="noopener noreferrer">Research Paper →</a> &nbsp;<br />
                    <a className="simple-project-link" href="https://www.maazdev.tech/assets/Maaz%20IJPREMS60200006505-1-BB9nlw-S.pdf" target="_blank" rel="noopener noreferrer">Research Paper Certificate →</a> &nbsp;<br />
                    <a className="simple-project-link" href="https://www.maazdev.tech/assets/Institue%20Report-B8uSq188.pdf" target="_blank" rel="noopener noreferrer">Institute Report →</a> &nbsp;
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">Digital Card</h3>
                    <p className="simple-project-description">
                        A modern digital card built with React, featuring a responsive layout, interactive elements, social links, and a structured presentation of personal and professional information.
                    </p>
                    <a className="simple-project-link" href="https://maaz-social-card.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Card →</a>
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">To-Do List</h3>
                    <p className="simple-project-description">
                        A CRUD-based task management application built with Flask, Flask-Login, SQLite and SQLAlchemy. Users can manage their tasks through an authenticated web interface.
                    </p>
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">Typing Speed Test</h3>
                    <p className="simple-project-description">
                        An interactive typing speed testing application that allows users to measure their typing speed and accuracy through timed typing exercises. The project provides a practical environment for users to test their performance while demonstrating frontend interaction and backend web development concepts.
                    </p>
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/Typing-Speed-Test" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">Mini Banking System</h3>
                    <p className="simple-project-description">
                        A Python-based banking application demonstrating fundamental banking operations such as account handling, balance management, and transaction-related operations. The project focuses on programming fundamentals and provides a practical example of how real-world banking concepts can be represented through software logic.
                    </p>
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/100-Days-Python-Project/tree/main/33.%20-Mini%20Banking%20System%20[Practice%20project]" target="_blank" rel="noopener noreferrer">Git Hub →</a>
                </article>

                <article className="simple-project">
                    <h3 className="simple-project-title">Digital Clock</h3>
                    <p className="simple-project-description">
                        A lightweight frontend project that displays the current time through a dynamic digital clock interface. The project demonstrates the use of JavaScript timing functions to continuously update the displayed time and create a simple real-time browser experience.
                    </p>
                    <a className="simple-project-link" href="https://github.com/maazsiddiqui79/digitalClock]" target="_blank" rel="noopener noreferrer">Git Hub →</a> &nbsp;
                    <a className="simple-project-link" href="https://maazsiddiqui79.github.io/digitalClock/" target="_blank" rel="noopener noreferrer">Visit Site →</a>
                </article>
            </section>

            {/* Education */}
            <section id="education" className="simple-section">
                <h2 className="simple-section-title">5. EDUCATION</h2>

                <article className="simple-education">
                    <h3 className="simple-education-title">
                        Thakur College of Engineering and Technology, Kandivali <span className='simple-location p-text'>(2026-Present)</span>
                    </h3>
                    <p className="simple-education-description">Bachelor of Engineering - Computer Engineering</p>
                </article>

                <article className="simple-education">
                    <h3 className="simple-education-title">
                        M.H. Saboo Siddik Polytechnic, Byculla <span className='simple-location p-text'>(2023-26)</span>
                    </h3>
                    <p className="simple-education-description">Diploma in Computer Engineering</p>
                    <div className="simple-marks">
                        <div className="simple-marks-row"><span>FY Sem I & Sem II</span><span>81%</span></div>
                        <div className="simple-marks-row"><span>SY Sem III & Sem IV</span><span>82%</span></div>
                        <div className="simple-marks-row"><span>TY Sem V & Sem VI</span><span>94%</span></div>
                    </div>
                </article>

                <article className="simple-education">
                    <h3 className="simple-education-title">
                        St. Stanislaus High School, Bandra <span className='simple-location p-text'>(2013-2023)</span>
                    </h3>
                    <p className="simple-education-description">SSC completed with an overall grade of 83%.</p>
                </article>
            </section>

            {/* Experience */}
            <section id="experience" className="simple-section">
                <h2 className="simple-section-title">4. EXPERIENCE</h2>

                <article className="simple-education">
                    <h3 className="simple-education-title">
                        Frontend Development Trainee <span className='simple-location p-text'>(MAY 26 - JUL 26)</span>
                    </h3>
                    <p className="simple-education-description">Heuristic Academy · Mumbai</p>
                    <ul className='list'>
                        <li className=' simple-experience-description'>Successfully completed a three-month training program focused on frontend development.</li>
                        <li className=' simple-experience-description'>Strengthened practical skills in building structured, responsive and user-focused web interfaces.</li>
                        <li className=' simple-experience-description'>Applied frontend development concepts through practical exercises and project-based learning.</li>
                    </ul>
                </article><br />

                <article className="simple-education">
                    <h3 className="simple-education-title">
                        Python Development Intern <span className='simple-location p-text'>(JUN 25 - AUG 25)</span>
                    </h3>
                    <p className="simple-education-description">Quality Software Technologies · Thane</p>
                    <ul className='list'>
                        <li className=' simple-experience-description'>Developed responsive frontend pages using HTML and CSS.</li>
                        <li className=' simple-experience-description'>Built and integrated backend functionality using Python and Django.</li>
                        <li className=' simple-experience-description'>Collaborated with a team of four to design and deploy a functional web application.</li>
                    </ul>
                </article><br />
            </section>

            {/* Achievements */}
            <section id="achievements" className="simple-section">
                <h2 className="simple-section-title">6. ACHIEVEMENTS</h2>

                <article className="simple-achievement">
                    <h3 className="simple-achievement-title">
                        ZEPHYR 2026 Gen AI Workshop - COMPETITION WINNER  <span className='simple-location p-text'>(29 SEP - 01 OCT 2026)</span>
                    </h3>
                    <p className="simple-achievement-description">
                        Winner of the Gen AI Workshop at ZEPHYR 2026, the technical festival of Thakur College of Engineering and Technology, Mumbai.
                    </p>
                    <a className="simple-project-link" href="https://speakeasy-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer">Link →</a>
                </article>

                <article className="simple-achievement">
                    <h3 className="simple-achievement-title">MSBTE State-Level Technical Paper Presentation - FINALIST</h3>
                    <p className="simple-achievement-description">Reached the finalist stage of a state-level technical paper presentation.</p>
                </article>

                <article className="simple-achievement">
                    <h3 className="simple-achievement-title">The Joy of Computing Using Python - NPTEL</h3>
                    <p className="simple-achievement-description">Completed the NPTEL course from IIT Madras with an ELITE–SILVER · 86%  score. (IIT MADRAS)</p>
                </article>

                <article className="simple-achievement">
                    <h3 className="simple-achievement-title">100 Days of Python - LEARNING</h3>
                    <p className="simple-achievement-description">
                        Completed a structured Python development learning journey through Udemy, covering programming, automation and application development at UDEMY Platform
                    </p>
                </article>

                <article className="simple-achievement">
                    <h3 className="simple-achievement-title">
                        SMART BLOGGING  AI-POWERED INTELLIGENT BLOG WEBSITE - RESEARCH PAPER PUBLISHES   <span className='simple-location p-text'>(DEC 2025 - FEB 2026)</span>
                    </h3>
                    <p className="simple-achievement-description">
                        An AI-powered blogging platform designed to make online content more interactive and learning-focused. The system combines content summarization, key-point extraction, contextual chatbot assistance and quiz generation to enhance the overall reading and learning experience.
                    </p>
                    <a className="simple-project-link" href="https://www.maazdev.tech/assets/IJPREMS60200006505-BoCePTXX.pdf" target="_blank" rel="noopener noreferrer">Read Research Paper →</a> &nbsp;
                    <a className="simple-project-link" href="https://www.maazdev.tech/assets/Maaz%20IJPREMS60200006505-1-BB9nlw-S.pdf" target="_blank" rel="noopener noreferrer">View Certificate →</a><br />
                    <a className="simple-project-link" href="https://www.google.com/search?q=10.58257%2FIJPREMS51347&sca_esv=aae8b36161dbb831&sxsrf=APpeQnvDfABLEq1zoUmLj1yHehbigeQEKQ%3A1791808811675&source=hp&ei=K9XMav-SJp-dhvcPgfHd4Aw&iflsig=ABILxe8AAAAAaszjOxQm7qKU_ga3jhrRsXkH19VLbesY&ved=0ahUKEwi_1OP9v7SXAxWfjuEIHYF4F8wQ4dUDCCw&uact=5&oq=https%3A%2F%2Fdoi.org%2F10.58257%2FIJPREMS51347&gs_lp=Egdnd3Mtd2l6IiVodHRwczovL2RvaS5vcmcvMTAuNTgyNTcvSUpQUkVNUzUxMzQ3SL8HULcCWLcCcAF4AJABAJgBxQGgAcUBqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAInqAIKwgINEC4YxwEY0QMY6gIYJ8ICDRAjGPAFGMkCGOoCGCfCAgcQIxjqAhgnwgIKECMY8AUY6gIYJ8ICDRAjGPAFGLQEGOoCGCfCAgoQIxjJAhjqAhgnwgINECMYtAQY8AUY6gIYJ5gDJ_EFY6LIDOZ5XKKSBwExoAc3sgcAuAcAwgcDNC0xyAcggAgB&sclient=gws-wiz" target="_blank" rel="noopener noreferrer">DOI →</a><br />
                    <p className='simple-achievement-description'>
                        <sapn className='simple-project-link'>PUBLICATION</sapn> : Volume 06 · Issue 02 · February 2026
                    </p>
                    <p className='simple-achievement-description'>
                        <sapn className='simple-project-link'>JOURNAL</sapn> : International Journal of Progressive Research in Engineering Management and Science (IJPREMS)
                    </p>
                </article>

                <article className="simple-achievement">
                    <h3 className="simple-achievement-title">95%  in DIPLOMA - ACADEMICS</h3>
                    <p className="simple-achievement-description">Achieved strong academic results throughout my Diploma in Computer Engineering.</p>
                </article>
            </section>

            {/* Certifications */}
            <section id="certifications" className="simple-section">
                <h2 className="simple-section-title">7. CERTIFICATIONS & LEARNING</h2>
                <ul className="simple-list simple-achievement-description">
                    <li className="simple-experience-description">- <a href={cert13} target="_blank" rel="noopener noreferrer">Gen AI Event — Competition Winner</a></li>
                    <li className="simple-experience-description">- <a href={cert18} target="_blank" rel="noopener noreferrer">Vibe Coding Hackathon — Participant</a></li>
                    <li className="simple-experience-description">- <a href={cert9} target="_blank" rel="noopener noreferrer">The Joy of Computing Using Python — NPTEL / IIT Madras</a></li>
                    <li className="simple-experience-description">- <a href={cert11} target="_blank" rel="noopener noreferrer">100 Days of Python — Udemy</a></li>
                    <li className="simple-experience-description">- <a href={cert6} target="_blank" rel="noopener noreferrer">Fundamentals of Python — Infosys Springboard</a></li>
                    <li className="simple-experience-description">- <a href={cert4} target="_blank" rel="noopener noreferrer">Java Concepts — Infosys Springboard</a></li>
                    <li className="simple-experience-description">- <a href={cert2} target="_blank" rel="noopener noreferrer">C Programming — Infosys Springboard</a></li>
                    <li className="simple-experience-description">- <a href={cert17} target="_blank" rel="noopener noreferrer">React JS — Infosys Springboard</a></li>
                    <li className="simple-experience-description">- <a href={cert14} target="_blank" rel="noopener noreferrer">Data Analyst — OneRoadmap</a></li>
                    <li className="simple-experience-description">- <a href={cert16} target="_blank" rel="noopener noreferrer">Python Development — OneRoadmap</a></li>
                    <li className="simple-experience-description">- <a href={cert7} target="_blank" rel="noopener noreferrer">React JS — Frontend Development</a></li>
                    <li className="simple-experience-description">- <a href={cert8} target="_blank" rel="noopener noreferrer">Software Testing Techniques — Testing Fundamentals</a></li>
                    <li className="simple-experience-description">- <a href={cert5} target="_blank" rel="noopener noreferrer">Mobile Application Development — App Development</a></li>
                    <li className="simple-experience-description">- <a href={cert1} target="_blank" rel="noopener noreferrer">AI Generalist Workshop — 2-Day Intensive Training</a></li>
                    <li className="simple-experience-description">- <a href={cert3} target="_blank" rel="noopener noreferrer">Fusion Quiz — Participation</a></li>
                    <li className="simple-experience-description">- <a href={cert12} target="_blank" rel="noopener noreferrer">Certificate of Participation — Finalist in Paper Presentation Competition (2026)</a></li>
                    <li className="simple-experience-description">- <a href={cert15} target="_blank" rel="noopener noreferrer">Full Stack Developer — OneRoadmap</a></li>
                </ul>
            </section>

            {/* Technical Writing */}
            <section id="writing" className="simple-section">
                <h2 className="simple-section-title">8. TECHNICAL WRITING</h2>
                <p className="simple-text">
                    <span className='simple-location p-text'>Ideas are Currently compiling.</span><br />
                    Article Coming Soon...
                </p>
            </section>

            {/* Current Focus */}
            <section id="focus" className="simple-section">
                <h2 className="simple-section-title">9. `CURRENT FOCUS</h2>
                <p className="simple-text">
                    <span className="capsule">Full-Stack Development</span><br /><br />
                    <span className="capsule"> AI Technologies</span><br /><br />
                    <span className="capsule"> Understanding Core concepts</span><br /><br />
                    <span className="capsule"> Cloud</span>
                </p>
            </section>

            {/* Contact */}
            <section id="contact" className="simple-section">
                <h2 className="simple-section-title">10. CONTACT</h2>
                <p className="simple-text">
                    Open to collaborations, internships, freelance work and technically interesting projects involving web development, AI, automation and software engineering.
                </p>
                <nav className="simple-contact-links">
                    <a className="simple-link" href="https://maaz-social-card.app/" target="_blank" rel="noopener noreferrer">DIGITAL CARD↗</a>
                    <a className="simple-link" href="mailto:siddiqui.maaz79@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL ↗</a>
                    <a className="simple-link" href="www.linkedin.com/in/siddiqui-maazzz/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
                    <a className="simple-link" href="https://github.com/maazsiddiqui79" target="_blank" rel="noopener noreferrer">GITHUB↗</a>
                </nav>
            </section>
        </main>
    );
}

export default SimpleView;