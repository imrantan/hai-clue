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
                        Read the haiku — it describes a single word. Select letters
                        from the grid to spell your answer, then hit <strong>Submit</strong>.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9829;</span>
                    <span>
                        You start with <strong>5 lives</strong>. Each wrong submission
                        costs 1 life. Lose all 5 and it&apos;s Game Over — your streak resets.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#8631;</span>
                    <span>
                        <strong>Skipping</strong> a riddle resets your streak to zero
                        instantly (no life lost).
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9733;</span>
                    <span>
                        Solve riddles back-to-back to build a <strong>streak</strong>.
                        Wrong guesses don&apos;t break your streak — only skipping does.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9650;</span>
                    <span>
                        Reach a streak of <strong>5</strong> to earn a shareable
                        Badge. Hit <strong>10</strong> for a Trophy. Both unlock again
                        each time you reach those numbers.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9003;</span>
                    <span>
                        <strong>Reset</strong> clears all letters.{' '}
                        <strong>&#9003; Backspace</strong> removes just the last one.
                        Keyboard: <strong>1&#8211;0</strong> select &middot;{' '}
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
