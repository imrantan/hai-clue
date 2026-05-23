import React, { useState, useEffect, useTransition, useRef } from 'react';
import { data } from '../../assets/data.js';
import './game.css';
import correctSoundUrl from '../../assets/sounds/correct-6033.mp3';
import nextSoundUrl from '../../assets/sounds/sound-next.mp3';
import GameOverModal from '../modals/GameOverModal.jsx';
import AchievementModal from '../modals/AchievementModal.jsx';
import InfoModal from '../modals/InfoModal.jsx';

const formatDateTime = () => {
    const now = new Date();
    return now
        .toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
        .replace(',', ' ·');
};

const Game = () => {
    const [riddle, setRiddle] = useState(data[Math.floor(Math.random() * data.length)]);
    const [clickedButtons, setClickedButtons] = useState([]);
    // Each entry: { letter, btnIndex } — tracks which button to un-click on backspace
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [solvedCount, setSolvedCount] = useState(0);
    const [skippedCount, setSkippedCount] = useState(0);
    const [streakCount, setStreakCount] = useState(0);
    const [lives, setLives] = useState(5);
    const [incorrectAttempts, setIncorrectAttempts] = useState(0);
    const [isPending, startTransition] = useTransition();
    const [fadeIn, setFadeIn] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [celebrate, setCelebrate] = useState(false);

    // Modal visibility
    const [showGameOver, setShowGameOver] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const [showTrophy, setShowTrophy] = useState(false);
    const [showStreakEndTrophy, setShowStreakEndTrophy] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    // Award snapshot (captured at the moment the milestone is reached)
    const [awardStreak, setAwardStreak] = useState(0);
    const [awardLives, setAwardLives] = useState(5);
    const [awardRiddle, setAwardRiddle] = useState('');
    const [awardDateTime, setAwardDateTime] = useState('');

    // Web Audio API refs — decoded buffers play with near-zero latency
    const audioCtxRef = useRef(null);
    const correctBufferRef = useRef(null);
    const nextBufferRef = useRef(null);
    const celebrateTimerRef = useRef(null);
    // Tracks whether buffer loading has been kicked off (must happen after ctx creation)
    const audioInitRef = useRef(false);
    // Tracks whether the streak-end trophy was triggered by a skip (vs game over)
    const streakEndWasSkip = useRef(false);

    function addLineBreaks(str) {
        return str.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br /></React.Fragment>
        ));
    }

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
    }, [riddle]);

    useEffect(() => {
        return () => {
            audioCtxRef.current?.close();
            clearTimeout(celebrateTimerRef.current);
        };
    }, []);

    // Must be called inside a user gesture so iOS/Android unlock the AudioContext.
    // Creates the context on first call, resumes if suspended, and kicks off buffer loading.
    const ensureAudio = () => {
        if (!audioCtxRef.current) {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            audioCtxRef.current = ctx;
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
        }
        if (!audioInitRef.current) {
            audioInitRef.current = true;
            const loadBuffer = async (url, ref) => {
                try {
                    const res = await fetch(url);
                    const raw = await res.arrayBuffer();
                    ref.current = await ctx.decodeAudioData(raw);
                } catch { /* audio is optional */ }
            };
            loadBuffer(correctSoundUrl, correctBufferRef);
            loadBuffer(nextSoundUrl, nextBufferRef);
        }
    };

    const playBuffer = (ref) => {
        if (isMuted || !audioCtxRef.current || !ref.current) return;
        const ctx = audioCtxRef.current;
        const doPlay = () => {
            const src = ctx.createBufferSource();
            src.buffer = ref.current;
            src.connect(ctx.destination);
            src.start(0);
        };
        if (ctx.state === 'suspended') {
            ctx.resume().then(doPlay).catch(() => {});
        } else {
            doPlay();
        }
    };

    // Subtle tick on letter selection
    const playClick = () => {
        if (isMuted || !audioCtxRef.current) return;
        const ctx = audioCtxRef.current;
        const doClick = () => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.04);
        };
        if (ctx.state === 'suspended') {
            ctx.resume().then(doClick).catch(() => {});
        } else {
            doClick();
        }
    };

    // Synthesised buzz for incorrect answers — no extra audio file needed
    const playBuzz = () => {
        if (isMuted || !audioCtxRef.current) return;
        const ctx = audioCtxRef.current;
        const doBuzz = () => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.25);
        };
        if (ctx.state === 'suspended') {
            ctx.resume().then(doBuzz).catch(() => {});
        } else {
            doBuzz();
        }
    };

    const handleButtonClick = (index) => {
        ensureAudio();
        playClick();
        if (!submittedAnswer && !clickedButtons[index].clicked) {
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
            setSolvedCount(prev => prev + 1);
            setLives(prev => Math.min(prev + 1, 5));
            setIncorrectAttempts(0);
            setCelebrate(true);
            clearTimeout(celebrateTimerRef.current);
            celebrateTimerRef.current = setTimeout(() => setCelebrate(false), 600);

            const newStreak = streakCount + 1;
            setStreakCount(newStreak);

            // Milestone: badge at 5, trophy at 10 (only one fires per value)
            if (newStreak === 5) {
                setAwardStreak(5);
                setAwardLives(lives);
                setAwardRiddle(riddle.riddle);
                setAwardDateTime(formatDateTime());
                setShowBadge(true);
            } else if (newStreak === 10) {
                setAwardStreak(10);
                setAwardLives(lives);
                setAwardRiddle(riddle.riddle);
                setAwardDateTime(formatDateTime());
                setShowTrophy(true);
            }
        } else {
            playBuzz();
            setIncorrectAttempts(prev => prev + 1);
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives === 0) {
                if (streakCount > 10) {
                    setAwardStreak(streakCount);
                    setAwardLives(0);
                    setAwardRiddle(riddle.riddle);
                    setAwardDateTime(formatDateTime());
                    streakEndWasSkip.current = false;
                }
                setShowGameOver(true);
            }
        }
    };

    const resetSelection = () => {
        setClickedButtons(prev => prev.map(b => ({ ...b, clicked: false })));
        setSelectedLetters([]);
        setSubmittedAnswer('');
        setIsCorrect(false);
    };

    const nextRiddle = () => {
        ensureAudio();
        playBuffer(nextBufferRef);

        // Intercept skip on a >10 streak — show trophy before resetting
        if (!isCorrect && streakCount > 10) {
            setAwardStreak(streakCount);
            setAwardLives(lives);
            setAwardRiddle(riddle.riddle);
            setAwardDateTime(formatDateTime());
            streakEndWasSkip.current = true;
            setShowStreakEndTrophy(true);
            return;
        }

        setFadeIn(false);
        startTransition(() => {
            setTimeout(() => {
                if (!isCorrect) {
                    setSkippedCount(prev => prev + 1);
                    setStreakCount(0);
                    setLives(5);
                }
                setRiddle(data[Math.floor(Math.random() * data.length)]);
                resetSelection();
                setIncorrectAttempts(0);
                setFadeIn(true);
            }, 300);
        });
    };

    // Dismiss Game Over: show streak-end trophy first if streak was >10, otherwise reset
    const handleGameOverDismiss = () => {
        setShowGameOver(false);
        if (streakCount > 10) {
            setShowStreakEndTrophy(true);
            return;
        }
        setLives(5);
        setStreakCount(0);
        setIncorrectAttempts(0);
        setFadeIn(false);
        setTimeout(() => {
            setRiddle(data[Math.floor(Math.random() * data.length)]);
            resetSelection();
            setFadeIn(true);
        }, 300);
    };

    // Close the streak-end trophy and perform the appropriate reset
    const handleStreakEndTrophyClose = () => {
        setShowStreakEndTrophy(false);
        if (streakEndWasSkip.current) {
            setSkippedCount(prev => prev + 1);
        }
        setStreakCount(0);
        setLives(5);
        setIncorrectAttempts(0);
        setFadeIn(false);
        setTimeout(() => {
            setRiddle(data[Math.floor(Math.random() * data.length)]);
            resetSelection();
            setFadeIn(true);
        }, 300);
    };

    const anyModalOpen = showGameOver || showBadge || showTrophy || showStreakEndTrophy || showInfo;

    // Keyboard controls — disabled while any modal is open
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (anyModalOpen) return;
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;

            const numToIndex = {
                '1': 0, '2': 1, '3': 2, '4': 3, '5': 4,
                '6': 5, '7': 6, '8': 7, '9': 8, '0': 9,
            };

            if (e.key in numToIndex) {
                handleButtonClick(numToIndex[e.key]);
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                handleBackspace();
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
    }, [submittedAnswer, isCorrect, selectedLetters, clickedButtons, isMuted, lives, anyModalOpen]);

    return (
        <>
            {showGameOver && <GameOverModal onDismiss={handleGameOverDismiss} />}
            {showBadge && (
                <AchievementModal
                    type="badge"
                    streakCount={awardStreak}
                    lives={awardLives}
                    riddleText={awardRiddle}
                    dateTime={awardDateTime}
                    onClose={() => setShowBadge(false)}
                />
            )}
            {showTrophy && (
                <AchievementModal
                    type="trophy"
                    streakCount={awardStreak}
                    lives={awardLives}
                    riddleText={awardRiddle}
                    dateTime={awardDateTime}
                    onClose={() => setShowTrophy(false)}
                />
            )}
            {showStreakEndTrophy && (
                <AchievementModal
                    type="trophy"
                    streakCount={awardStreak}
                    lives={awardLives}
                    riddleText={awardRiddle}
                    dateTime={awardDateTime}
                    onClose={handleStreakEndTrophyClose}
                />
            )}
            {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}

            <div className={`container ${fadeIn ? 'fade-in' : 'fade-out'} ${celebrate ? 'celebrate' : ''}`}>

                <div className="top-buttons">
                    <button
                        className="info-btn"
                        onClick={() => setShowInfo(true)}
                        aria-label="How to play"
                    >
                        i
                    </button>
                    <button
                        className="mute-btn"
                        onClick={() => setIsMuted(m => !m)}
                        aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                    >
                        {isMuted ? '♪ off' : '♪ on'}
                    </button>
                </div>

                <h1>Hai-Clue</h1>

                <div className="counters">
                    <span className="counter-badge solved">&#10003; {solvedCount} Solved</span>
                    <span className="counter-badge skipped">&#8631; {skippedCount} Skipped</span>
                    <span className="counter-badge streak">&#9733; {streakCount} Streak</span>
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
                        <button onClick={resetSelection} aria-label="Try again">
                            Try Again
                        </button>
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
        </>
    );
};

export default Game;
