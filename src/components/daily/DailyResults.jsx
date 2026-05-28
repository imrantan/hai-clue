import React, { useState, useEffect } from 'react';
import { getTimeUntilNextPuzzle } from '../../utils/dailyPuzzle.js';
import '../modals/modals.css';
import '../game/game.css';
import './daily.css';

function getEmoji(result) {
    if (result === null) return '⬜';
    if (!result.solved) return '🟥';
    return result.wrongCount === 0 ? '🟩' : '🟨';
}

const DailyResults = ({ puzzleNumber, results, lives, completed, haikus, onInfoOpen }) => {
    const [countdown, setCountdown] = useState(getTimeUntilNextPuzzle);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const id = setInterval(() => setCountdown(getTimeUntilNextPuzzle()), 1000);
        return () => clearInterval(id);
    }, []);

    const emojiRow = results.map(getEmoji).join(' ');
    const livesLine = completed
        ? `❤️ ${lives} ${lives === 1 ? 'life' : 'lives'} remaining`
        : '💔 Challenge failed';
    const shareText = `Hai-Clue #${puzzleNumber} 🌸\n${emojiRow}\n${livesLine}\n\nhttps://hai-clue.onrender.com/`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch { /* clipboard not available */ }
    };

    return (
        <div className="container fade-in">
            <div className="top-buttons">
                <button className="info-btn" onClick={onInfoOpen} aria-label="How to play">
                    i
                </button>
            </div>

            <h1>Hai-Clue</h1>

            <div className="daily-results-header">
                {completed ? '🌸 Complete!' : '💔 Failed'}
            </div>

            <div className="daily-results-number">Puzzle #{puzzleNumber}</div>

            <div className="daily-results-grid">{emojiRow}</div>

            <div className={`daily-results-lives${lives <= 1 && completed ? ' lives-danger' : ''}`}>
                {livesLine}
            </div>

            {!completed && haikus && (
                <div className="daily-answers">
                    <div className="daily-answers-label">Today's Answers</div>
                    {haikus.map((h, i) => (
                        <div key={h.id} className="daily-answer-row">
                            <span className="daily-answer-emoji">{getEmoji(results[i])}</span>
                            <span className="daily-answer-word">{h.answer.toUpperCase()}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="daily-share-box">
                <pre className="daily-share-text">{shareText}</pre>
            </div>

            <button className="daily-copy-btn" onClick={handleCopy}>
                {copied ? '✓ Copied!' : 'Copy Result'}
            </button>

            <div className="daily-countdown">
                <div className="daily-countdown-label">Next puzzle in</div>
                <div className="daily-countdown-time">{countdown}</div>
            </div>

            <h4>
                <a href="https://github.com/imrantan" target="_blank" rel="noopener noreferrer">
                    created by imrantan
                </a>
            </h4>
        </div>
    );
};

export default DailyResults;
