import React from 'react';
import './modals.css';

const InfoModal = ({ onClose }) => (
    <div className="modal-overlay">
        <div className="modal-panel info-panel">
            <div className="info-title">How to Play</div>
            <ul className="info-list">
                <li>
                    <span className="info-icon">&#9830;</span>
                    <span>
                        Each haiku describes a single word. Select letters from the
                        grid to spell your answer, then hit <strong>Submit</strong>.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9829;</span>
                    <span>
                        You have <strong>5 lives</strong>. Each wrong answer costs 1 life.
                        Solve a riddle correctly to <strong>earn a life back</strong> (capped
                        at 5). Lose all lives and it&apos;s Game Over.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#128161;</span>
                    <span>
                        After <strong>2 wrong attempts</strong> on the same riddle, a hint
                        revealing the answer length will appear.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9733;</span>
                    <span>
                        Solve riddles back-to-back to build a <strong>streak</strong>.
                        Wrong guesses don&apos;t break it — only skipping or Game Over does.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#8631;</span>
                    <span>
                        <strong>Skipping</strong> resets your streak and lives to zero.
                        If your streak is above 10, you&apos;ll be offered a trophy to share
                        before the reset.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9650;</span>
                    <span>
                        Reach a streak of <strong>5</strong> for a shareable Badge.
                        Hit <strong>10</strong> for a Trophy. Both re-unlock every time you
                        reach those numbers.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9003;</span>
                    <span>
                        <strong>Reset</strong> clears all letters.{' '}
                        <strong>&#9003; Backspace</strong> removes the last one.
                        Keyboard: <strong>1&#8211;0</strong> select &middot;{' '}
                        <strong>Backspace</strong> remove &middot;{' '}
                        <strong>Enter</strong> submit &middot; <strong>R</strong> reset.
                    </span>
                </li>
            </ul>
            <button className="info-close-btn" onClick={onClose}>
                Got it!
            </button>
        </div>
    </div>
);

export default InfoModal;
