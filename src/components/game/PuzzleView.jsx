import React, { useState, useEffect, useRef } from 'react';
import './game.css';
import '../daily/daily.css';

function addLineBreaks(str) {
    return str.split('\n').map((line, i) => (
        <React.Fragment key={i}>{line}<br /></React.Fragment>
    ));
}

const PuzzleView = ({
    riddle,
    lives,
    haikuNumber,
    totalHaikus,
    puzzleNumber,
    isMuted,
    onMuteToggle,
    onInfoOpen,
    ensureAudio,
    playClick,
    playBuzz,
    playBuffer,
    correctBufferRef,
    nextBufferRef,
    onWrongAnswer,
    onSolved,
}) => {
    const [clickedButtons, setClickedButtons] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [incorrectAttempts, setIncorrectAttempts] = useState(0);
    const [celebrate, setCelebrate] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);
    const celebrateTimerRef = useRef(null);

    // Stable ref so the keyboard handler never goes stale
    const handlersRef = useRef({});

    // Build letter grid and reset state whenever the riddle changes
    useEffect(() => {
        const buttons = riddle.answer
            .split('')
            .map(letter => ({ letter: letter.toUpperCase(), clicked: false }));
        const numRandom = Math.max(10 - buttons.length, 0);
        const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            .split('')
            .sort(() => Math.random() - 0.5)
            .slice(0, numRandom);
        const allButtons = buttons
            .concat(randomLetters.map(l => ({ letter: l, clicked: false })))
            .sort(() => Math.random() - 0.5);
        setClickedButtons(allButtons);
        setSelectedLetters([]);
        setSubmittedAnswer('');
        setIsCorrect(false);
        setIncorrectAttempts(0);
        setCelebrate(false);
        setFadeIn(true);
    }, [riddle.id]);

    const resetSelection = () => {
        setClickedButtons(prev => prev.map(b => ({ ...b, clicked: false })));
        setSelectedLetters([]);
        setSubmittedAnswer('');
        setIsCorrect(false);
    };

    const handleButtonClick = (index) => {
        ensureAudio();
        playClick();
        if (!submittedAnswer && !clickedButtons[index]?.clicked) {
            setClickedButtons(prev => {
                const updated = [...prev];
                updated[index] = { ...updated[index], clicked: true };
                return updated;
            });
            setSelectedLetters(prev => [
                ...prev,
                { letter: clickedButtons[index].letter, btnIndex: index },
            ]);
        }
    };

    const handleBackspace = () => {
        if (selectedLetters.length === 0 || submittedAnswer) return;
        ensureAudio();
        playClick();
        const last = selectedLetters[selectedLetters.length - 1];
        setClickedButtons(prev => {
            const updated = [...prev];
            updated[last.btnIndex] = { ...updated[last.btnIndex], clicked: false };
            return updated;
        });
        setSelectedLetters(prev => prev.slice(0, -1));
    };

    const handleSubmit = () => {
        ensureAudio();
        const userAnswer = selectedLetters.map(s => s.letter).join('');
        setSubmittedAnswer(userAnswer);
        const correct = userAnswer.toUpperCase() === riddle.answer.toUpperCase();
        setIsCorrect(correct);

        if (correct) {
            playBuffer(correctBufferRef);
            setCelebrate(true);
            clearTimeout(celebrateTimerRef.current);
            celebrateTimerRef.current = setTimeout(() => setCelebrate(false), 600);
        } else {
            playBuzz();
            const newCount = incorrectAttempts + 1;
            setIncorrectAttempts(newCount);
            onWrongAnswer(newCount);
        }
    };

    const handleNext = () => {
        ensureAudio();
        playBuffer(nextBufferRef);
        onSolved(incorrectAttempts);
    };

    // Keep handlers ref fresh every render
    handlersRef.current = {
        handleButtonClick,
        handleBackspace,
        handleSubmit,
        handleNext,
        resetSelection,
        submittedAnswer,
        isCorrect,
        selectedLetters,
    };

    // Keyboard handler registered once; reads latest handlers via ref
    useEffect(() => {
        const numToIndex = {
            '1': 0, '2': 1, '3': 2, '4': 3, '5': 4,
            '6': 5, '7': 6, '8': 7, '9': 8, '0': 9,
        };

        const onKeyDown = (e) => {
            if (e.target.tagName === 'INPUT') return;
            const h = handlersRef.current;

            if (e.key in numToIndex) {
                h.handleButtonClick(numToIndex[e.key]);
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                h.handleBackspace();
            } else if (e.key === 'Enter') {
                if (!h.submittedAnswer && h.selectedLetters.length > 0) h.handleSubmit();
                else if (h.submittedAnswer && !h.isCorrect) h.resetSelection();
                else if (h.isCorrect) h.handleNext();
            } else if ((e.key === 'r' || e.key === 'R') && !h.submittedAnswer) {
                h.resetSelection();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const isLastHaiku = haikuNumber === totalHaikus;

    return (
        <div className={`container ${fadeIn ? 'fade-in' : 'fade-out'} ${celebrate ? 'celebrate' : ''}`}>

            <div className="top-buttons">
                <button className="info-btn" onClick={onInfoOpen} aria-label="How to play">
                    i
                </button>
                <button
                    className="mute-btn"
                    onClick={onMuteToggle}
                    aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                >
                    {isMuted ? '♪ off' : '♪ on'}
                </button>
            </div>

            <h1>Hai-Clue</h1>

            <div className="daily-meta">
                <span className="daily-puzzle-num">Daily #{puzzleNumber}</span>
                <span className="daily-progress-label">{haikuNumber} / {totalHaikus}</span>
            </div>

            <div className="daily-dots">
                {Array.from({ length: totalHaikus }, (_, i) => (
                    <span
                        key={i}
                        className={`dot${i < haikuNumber - 1 ? ' done' : i === haikuNumber - 1 ? ' current' : ''}`}
                    />
                ))}
            </div>

            <div className="counters">
                <span className={`counter-badge lives${lives <= 2 ? ' lives-danger' : ''}`}>
                    &#9829; {lives} {lives === 1 ? 'Life' : 'Lives'}
                </span>
            </div>

            <h2>{addLineBreaks(riddle.riddle)}</h2>

            <div className="your-selection">
                <span className="selected-letters">
                    {selectedLetters.map(s => s.letter).join('')}
                </span>
            </div>

            <div className="result-area">
                {submittedAnswer && (
                    <p className={isCorrect ? 'result-correct' : 'result-incorrect'}>
                        {isCorrect ? 'Correct!' : 'Incorrect! Try again.'}
                    </p>
                )}
                {!isCorrect && incorrectAttempts > 1 && (
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
                {isCorrect ? (
                    <button onClick={handleNext} aria-label={isLastHaiku ? 'See results' : 'Next haiku'}>
                        {isLastHaiku ? 'See Results →' : 'Next Haiku →'}
                    </button>
                ) : (
                    <>
                        {!submittedAnswer && (
                            <button
                                onClick={() => { ensureAudio(); playClick(); resetSelection(); }}
                                disabled={!selectedLetters.length}
                                aria-label="Reset selection"
                            >
                                Reset
                            </button>
                        )}
                        {!submittedAnswer && (
                            <button
                                onClick={handleBackspace}
                                disabled={!selectedLetters.length}
                                className="backspace-btn"
                                aria-label="Remove last letter"
                            >
                                &#9003;
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
                            <button
                                onClick={() => { ensureAudio(); playClick(); resetSelection(); }}
                                aria-label="Try again"
                            >
                                Try Again
                            </button>
                        )}
                    </>
                )}
            </div>

            <div className="keyboard-hint">
                <p>Keys: 1–0 select &middot; Backspace remove &middot; Enter submit &middot; R reset</p>
            </div>

            <h4>
                <a href="https://github.com/imrantan" target="_blank" rel="noopener noreferrer">
                    created by imrantan
                </a>
            </h4>
        </div>
    );
};

export default PuzzleView;
