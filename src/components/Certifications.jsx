import React from "react";

import cert1 from "../assets/certificates/2 Day AI Gernalist workshop.png";
import cert2 from "../assets/certificates/C.jpg";
import cert3 from "../assets/certificates/Fusion Quiz.jpg";
import cert4 from "../assets/certificates/Java.png";
import cert5 from "../assets/certificates/Mobile  Application Dev.pdf";
import cert6 from "../assets/certificates/Python.pdf";
import cert7 from "../assets/certificates/React JS.pdf";
import cert8 from "../assets/certificates/S-w Testing Techniques.pdf";
import cert9 from "../assets/certificates/The Joy of Computing using Python IIT Madras.png";
import cert10 from "../assets/certificates/The Joy of Computing using Python.pdf";
import cert11 from "../assets/certificates/Udemy 100 Day of python.pdf";
import cert12 from "../assets/certificates/WhatsApp Image 2026-02-04 at 11.43.03 PM.jpeg";
import cert13 from "../assets/certificates/Zephyr Gen AI event.pdf";
import cert14 from "../assets/certificates/orm Data Analyst-Certificate.pdf";
import cert15 from "../assets/certificates/orm Full Stack Developer-Certificate.pdf";
import cert16 from "../assets/certificates/orm Python-Certificate.pdf";
import cert17 from "../assets/certificates/react js infosys.pdf";

const certifications = [
    {
        id: 1,
        issuer: "ZEPHYR 2026",
        title: "Gen AI Event",
        desc: "Technical Workshop Winner",
        file: cert13
    },

    {
        id: 2,
        issuer: "NPTEL / IIT MADRAS",
        title: "The Joy of Computing Using Python",
        desc: "Elite–Silver Certificate (PDF)",
        file: cert10
    },

    {
        id: 3,
        issuer: "NPTEL / IIT MADRAS",
        title: "The Joy of Computing Using Python",
        desc: "Elite–Silver Certificate (Image)",
        file: cert9
    },

    {
        id: 4,
        issuer: "UDEMY",
        title: "100 Days of Python",
        desc: "Python development course",
        file: cert11
    },

    {
        id: 5,
        issuer: "INFOSYS",
        title: "Fundamentals of Python",
        desc: "Infosys Springboard",
        file: cert6
    },

    {
        id: 6,
        issuer: "INFOSYS",
        title: "Java Concepts",
        desc: "Infosys Springboard",
        file: cert4
    },

    {
        id: 7,
        issuer: "INFOSYS",
        title: "C Programming",
        desc: "Infosys Springboard",
        file: cert2
    },

    {
        id: 8,
        issuer: "INFOSYS",
        title: "React JS",
        desc: "Infosys Springboard",
        file: cert17
    },

    {
        id: 9,
        issuer: "ONEROADMAP",
        title: "Data Analyst",
        desc: "Data analysis fundamentals",
        file: cert14
    },

    {
        id: 10,
        issuer: "ONEROADMAP",
        title: "Full Stack Developer",
        desc: "Web Development",
        file: cert15
    },

    {
        id: 11,
        issuer: "ONEROADMAP",
        title: "Python Development",
        desc: "Python Programming",
        file: cert16
    },

    {
        id: 12,
        issuer: "CERTIFICATE",
        title: "React JS",
        desc: "Frontend Development",
        file: cert7
    },

    {
        id: 13,
        issuer: "CERTIFICATE",
        title: "Software Testing Techniques",
        desc: "Testing Fundamentals",
        file: cert8
    },

    {
        id: 14,
        issuer: "CERTIFICATE",
        title: "Mobile Application Dev",
        desc: "App Development",
        file: cert5
    },

    {
        id: 15,
        issuer: "WORKSHOP",
        title: "AI Generalist Workshop",
        desc: "2-Day Intensive Training",
        file: cert1
    },

    {
        id: 16,
        issuer: "COMPETITION",
        title: "Fusion Quiz",
        desc: "Participation",
        file: cert3
    },

    {
        id: 17,
        issuer: "ACHIEVEMENT",
        title: "Certificate of Achievement",
        desc: "Special Recognition",
        file: cert12
    }
];

export default function Certifications() {
    return (
        <>
            <section className="section" id="certifications">
                <div className="container">
                    <div className="section-label reveal" >
                        07 / Credentials
                    </div>

                    <h2 className="section-title reveal">
                        Certifications
                        <br />
                        & learning.
                    </h2>

                    <div className="cert-grid">
                        {certifications.map((cert) => (
                            <a
                                key={cert.id}
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert reveal"
                                style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}
                            >
                                <span className="cert-year">{cert.issuer}</span>
                                <h3>{cert.title}</h3>
                                <p>{cert.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}