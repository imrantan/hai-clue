import React from 'react';
import './modals.css';

const GameOverModal = ({ onDismiss }) => (
    <div className="modal-overlay">
        <div className="modal-panel game-over-panel">
            <div className="game-over-title">Game Over!</div>
            <p className="game-over-sub">
                You've used all 5 lives.<br />Your streak has ended.
            </p>
            <button className="game-over-btn" onClick={onDismiss}>
                Try Again
            </button>
        </div>
    </div>
);

export default GameOverModal;
