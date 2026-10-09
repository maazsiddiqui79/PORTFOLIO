import React, { useEffect, useState, useRef } from 'react';

const greetings = [
    { text: "Hello" },
    { text: "Bonjour" },
    { text: "Hola" },
    { text: "Ciao" },
    { text: "Hallo" },
    { text: "Привет", sub: "Privet", meaning: "Hi / Hello" },
    { text: "こんにちは", sub: "Konnichiwa", meaning: "Good day / Hello" },
    { text: "你好", sub: "Nǐ hǎo", meaning: "Hello (Literally: You good)" },
    { text: "안녕하세요", sub: "Annyeonghaseyo", meaning: "Hello (Literally: Are you at peace?)" },
    { text: "مرحبا", sub: "Marhaba", meaning: "Welcome" },
    { text: "नमस्ते", sub: "Namaste", meaning: "I bow to you" },
    { text: "السلام علیکم", sub: "As-salamu alaykum", meaning: "Peace be upon you" }
];

export default function Loader({ onComplete }) {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        let index = 0;
        intervalRef.current = setInterval(() => {
            if (isPausedRef.current) return;
            index++;
            if (index >= greetings.length) {
                clearInterval(intervalRef.current);
                timeoutRef.current = setTimeout(() => {
                    setIsFadingOut(true);
                    setTimeout(onComplete, 650); // Wait for CSS fade out to finish
                }, 600);
            } else {
                setCurrentGreeting(index);
            }
        }, 300); // Speed of language change

        // Lock scroll while loader is active
        document.body.style.overflow = 'hidden';

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timeoutRef.current);
            document.body.style.overflow = '';
        };
    }, [onComplete]);

    const handleSkip = () => {
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
        setIsFadingOut(true);
        setTimeout(onComplete, 800);
    };

    const handleTogglePause = () => {
        setIsPaused(prev => {
            const nextPauseState = !prev;
            isPausedRef.current = nextPauseState;
            return nextPauseState;
        });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === 'x') {
                handleSkip();
            } else if (e.key.toLowerCase() === 'p') {
                handleTogglePause();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            className={`loader-container ${isFadingOut ? 'fade-out' : ''}`}
        >
            <div 
                className="loader-content" 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
                onMouseEnter={() => { if (!isPaused) isPausedRef.current = true; }}
                onMouseLeave={() => { if (!isPaused) isPausedRef.current = false; }}
                onClick={() => {
                    handleTogglePause();
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="loader-dot" style={{ position: 'relative', left: '0', marginRight: '15px' }}></span>
                    <h1 className="loader-text" style={{ margin: 0, padding: 0 }}>{greetings[currentGreeting].text}</h1>
                </div>
                <div style={{ height: '50px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {greetings[currentGreeting].sub ? (
                        <div style={{
                            fontSize: '1.2rem',
                            color: 'rgba(255, 255, 255, 0.5)',
                            textShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
                            fontWeight: '300',
                            letterSpacing: '0.1em',
                            animation: 'fadeIn 0.3s ease-in',
                            textAlign: 'center'
                        }}>
                            {greetings[currentGreeting].sub}
                            {greetings[currentGreeting].meaning && (
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.3)', marginTop: '4px', letterSpacing: '0.05em' }}>
                                    "{greetings[currentGreeting].meaning}"
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>

            <div style={{ position: 'absolute', top: '5vh', right: '5vw', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10 }}>

                <button
                    onClick={handleTogglePause}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: isPaused ? 'var(--accent)' : 'rgba(255, 255, 255, 0.4)',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        letterSpacing: '0.1em',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => { if (!isPaused) e.target.style.color = 'rgba(255, 255, 255, 0.8)' }}
                    onMouseOut={(e) => { if (!isPaused) e.target.style.color = 'rgba(255, 255, 255, 0.4)' }}
                >
                    {isPaused ? 'RESUME [ ▶ ]' : 'PAUSE [ || ]'}
                </button>

                
                <button
                    onClick={handleSkip}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        letterSpacing: '0.1em',
                        transition: 'color 0.3s ease',
                        marginBottom: '8px'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                    onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}
                >
                    SKIP INTRO [X]
                </button>
                <div style={{
                    color: 'rgba(255, 255, 255, 0.3)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.05em',
                    pointerEvents: 'none',
                    marginBottom: '8px'
                }}>
                    Hover / Click pause to pause
                </div>
                
            </div>
        </div>
    );
}
