import React from 'react';
import './modals.css';

const InfoModal = ({ onClose }) => (
    <div className="modal-overlay">
        <div className="modal-panel info-panel">
            <div className="info-title">How to Play</div>
            <ul className="info-list">
                <li>
                    <span className="info-icon">&#127800;</span>
                    <span>
                        Each day features <strong>5 haiku riddles</strong>. Every player worldwide gets the
                        same puzzles. Come back tomorrow for a fresh set!
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9830;</span>
                    <span>
                        Each haiku describes a single word. Select letters from the grid to
                        spell your answer, then hit <strong>Submit</strong>.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#9829;</span>
                    <span>
                        You have <strong>5 lives</strong> shared across all 5 haikus. Wrong answers cost
                        1 life. Solving a haiku <strong>earns 1 life back</strong> (capped at 5).
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#128148;</span>
                    <span>
                        Lose all your lives and the challenge ends early — you can still share
                        your result with friends.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#128161;</span>
                    <span>
                        After <strong>2 wrong attempts</strong> on the same haiku, a hint
                        revealing the answer length will appear.
                    </span>
                </li>
                <li>
                    <span className="info-icon">&#128202;</span>
                    <span>
                        Your result is shown as an emoji grid — <strong>&#129001;</strong> solved first
                        try, <strong>&#129000;</strong> solved with mistakes,{' '}
                        <strong>&#129505;</strong> failed, <strong>&#11036;</strong> not reached.
                        Share it with friends!
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
