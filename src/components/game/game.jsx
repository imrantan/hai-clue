import React, { useState, useEffect, useTransition, useRef } from 'react';
import { data } from '../../assets/data.js';
import './game.css';
import correctSound from '../../assets/sounds/correct-6033.mp3';
import nextSound from '../../assets/sounds/sound-next.mp3';

const Game = () => {
    const [riddle, setRiddle] = useState(data[Math.floor(Math.random() * data.length)]);
    const [clickedButtons, setClickedButtons] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [solvedCount, setSolvedCount] = useState(0);
    const [skippedCount, setSkippedCount] = useState(0);
    const [incorrectAttempts, setIncorrectAttempts] = useState(0);
    const [isPending, startTransition] = useTransition();
    const [fadeIn, setFadeIn] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [celebrate, setCelebrate] = useState(false);

    const audioCorrectRef = useRef(null);
    const audioNextRef = useRef(null);
    const celebrateTimerRef = useRef(null);

    function addLineBreaks(str) {
        return str.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br /></React.Fragment>
        ));
    }

    useEffect(() => {
        const buttons = riddle.answer.split('').map(letter => ({ letter: letter.toUpperCase(), clicked: false }));
        const numRandom = Math.max(10 - buttons.length, 0);
        const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            .split('')
            .sort(() => Math.random() - 0.5)
            .slice(0, numRandom);
        const allButtons = buttons
            .concat(randomLetters.map(l => ({ letter: l, clicked: false })))
            .sort(() => Math.random() - 0.5);
        setClickedButtons(allButtons);
    }, [riddle]);

    useEffect(() => {
        audioCorrectRef.current = new Audio(correctSound);
        audioNextRef.current = new Audio(nextSound);
        return () => clearTimeout(celebrateTimerRef.current);
    }, []);

    const playSound = (ref) => {
        if (isMuted || !ref.current) return;
        ref.current.currentTime = 0;
        ref.current.play().catch(() => {});
    };

    const handleButtonClick = (index) => {
        if (!submittedAnswer && !clickedButtons[index].clicked) {
            setClickedButtons(prev => {
                const updated = [...prev];
                updated[index] = { ...updated[index], clicked: true };
                return updated;
            });
            setSelectedLetters(prev => [...prev, clickedButtons[index].letter]);
        }
    };

    const handleSubmit = () => {
        const userAnswer = selectedLetters.join('');
        setSubmittedAnswer(userAnswer);
        const correct = userAnswer.toUpperCase() === riddle.answer.toUpperCase();
        setIsCorrect(correct);
        if (correct) {
            playSound(audioCorrectRef);
            setSolvedCount(prev => prev + 1);
            setIncorrectAttempts(0);
            setCelebrate(true);
            clearTimeout(celebrateTimerRef.current);
            celebrateTimerRef.current = setTimeout(() => setCelebrate(false), 600);
        } else {
            setIncorrectAttempts(prev => prev + 1);
        }
    };

    const resetSelection = () => {
        setClickedButtons(prev => prev.map(b => ({ ...b, clicked: false })));
        setSelectedLetters([]);
        setSubmittedAnswer('');
        setIsCorrect(false);
    };

    const nextRiddle = () => {
        playSound(audioNextRef);
        setFadeIn(false);
        startTransition(() => {
            setTimeout(() => {
                if (!isCorrect) setSkippedCount(prev => prev + 1);
                setRiddle(data[Math.floor(Math.random() * data.length)]);
                resetSelection();
                setIncorrectAttempts(0);
                setFadeIn(true);
            }, 300);
        });
    };

    // Keyboard controls: 1–0 select letters · Enter submit/try-again/next · R reset
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
            const numToIndex = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, '0': 9 };
            if (e.key in numToIndex) {
                handleButtonClick(numToIndex[e.key]);
            } else if (e.key === 'Enter') {
                if (!submittedAnswer && selectedLetters.length > 0) handleSubmit();
                else if (submittedAnswer && !isCorrect) resetSelection();
                else if (isCorrect) nextRiddle();
            } else if ((e.key === 'r' || e.key === 'R') && !submittedAnswer) {
                resetSelection();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submittedAnswer, isCorrect, selectedLetters, clickedButtons]);

    return (
        <div className={`container ${fadeIn ? 'fade-in' : 'fade-out'} ${celebrate ? 'celebrate' : ''}`}>
            <button
                className="mute-btn"
                onClick={() => setIsMuted(m => !m)}
                aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
            >
                {isMuted ? '♪ off' : '♪ on'}
            </button>

            <h1>Hai-Clue</h1>

            <div className="counters">
                <span className="counter-badge solved">&#10003; {solvedCount} Solved</span>
                <span className="counter-badge skipped">&#8631; {skippedCount} Skipped</span>
            </div>

            <h2>{addLineBreaks(riddle.riddle)}</h2>

            <div className="your-selection">
                <span className="selected-letters">{selectedLetters.join('')}</span>
            </div>

            <div className="result-area">
                {submittedAnswer && (
                    <p className={isCorrect ? 'result-correct' : 'result-incorrect'}>
                        {isCorrect ? 'Correct!' : 'Incorrect! Try again.'}
                    </p>
                )}
                {!isCorrect && incorrectAttempts > 2 && (
                    <div className="hint-callout">
                        <p>Hint: The answer has {riddle.answer.length} letters</p>
                    </div>
                )}
            </div>

            <div className="show-answer">
                {isCorrect && <p>Answer: {riddle.answer.toUpperCase()}</p>}
            </div>

            <div className="letter-grid">
                <div className="row">
                    {clickedButtons.slice(0, 5).map((button, i) => (
                        <button
                            key={i}
                            onClick={() => handleButtonClick(i)}
                            className={`letter-btn${button.clicked ? ' selected' : ''}`}
                            aria-label={`Letter ${button.letter}`}
                            aria-pressed={button.clicked}
                        >
                            {button.letter}
                        </button>
                    ))}
                </div>
                <div className="row">
                    {clickedButtons.slice(5, 10).map((button, i) => (
                        <button
                            key={i + 5}
                            onClick={() => handleButtonClick(i + 5)}
                            className={`letter-btn${button.clicked ? ' selected' : ''}`}
                            aria-label={`Letter ${button.letter}`}
                            aria-pressed={button.clicked}
                        >
                            {button.letter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="controls">
                <button
                    onClick={nextRiddle}
                    disabled={isPending}
                    aria-label={isCorrect ? 'Next riddle' : 'Skip riddle'}
                >
                    {isPending ? 'Loading...' : isCorrect ? 'Next' : 'Skip'}
                </button>
                {!submittedAnswer && (
                    <button
                        onClick={resetSelection}
                        disabled={!selectedLetters.length}
                        aria-label="Reset selection"
                    >
                        Reset
                    </button>
                )}
                <button
                    onClick={handleSubmit}
                    disabled={!!submittedAnswer || !selectedLetters.length}
                    aria-label="Submit answer"
                >
                    Submit
                </button>
                {!isCorrect && submittedAnswer && (
                    <button onClick={resetSelection} aria-label="Try again">
                        Try Again
                    </button>
                )}
            </div>

            <div className="keyboard-hint">
                <p>Keys: 1–0 select letters &middot; Enter submit &middot; R reset</p>
            </div>

            <h4>
                <a href="https://github.com/imrantan" target="_blank" rel="noopener noreferrer">
                    created by imrantan
                </a>
            </h4>
        </div>
    );
};

export default Game;
