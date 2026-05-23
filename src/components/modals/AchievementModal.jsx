import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import './modals.css';

const AchievementModal = ({ type, streakCount, lives, riddleText, dateTime, onClose }) => {
    const [name, setName] = useState('');
    const cardRef = useRef(null);
    const isTrophy = type === 'trophy';

    const captureCard = async () => {
        if (!cardRef.current) return null;
        return html2canvas(cardRef.current, {
            scale: 2,
            logging: false,
            useCORS: true,
            backgroundColor: null,
        });
    };

    const downloadCanvas = (canvas) => {
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `haicue-${type}-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 'image/png');
    };

    const handleSave = async () => {
        const canvas = await captureCard();
        if (canvas) downloadCanvas(canvas);
    };

    const handleShare = async () => {
        const canvas = await captureCard();
        if (!canvas) return;
        canvas.toBlob(async blob => {
            const file = new File([blob], `haicue-${type}.png`, { type: 'image/png' });
            if (navigator.share && navigator.canShare?.({ files: [file] })) {
                try {
                    await navigator.share({
                        title: `Hai-Clue ${isTrophy ? 'Trophy' : 'Badge'}`,
                        text: `I got a ${streakCount} streak on Hai-Clue! Can you beat it?`,
                        url: 'https://hai-clue.onrender.com/',
                        files: [file],
                    });
                    return;
                } catch { /* user cancelled — fall through to download */ }
            }
            downloadCanvas(canvas);
        }, 'image/png');
    };

    return (
        <div className="modal-overlay">
            <div className="modal-panel">

                {/* ── The card that gets captured as an image ── */}
                <div
                    ref={cardRef}
                    className={`achievement-card ${isTrophy ? 'trophy-card' : 'badge-card'}`}
                >
                    <div className="achievement-brand">H A I &#8209; C L U E</div>
                    <div className="achievement-deco">
                        {isTrophy ? '▲ ▲ ▲' : '★ ★ ★'}
                    </div>
                    <div className="achievement-type">
                        {isTrophy ? 'CHAMPION TROPHY' : 'STREAK BADGE'}
                    </div>
                    <div className="achievement-divider" />
                    <div className="achievement-number">{streakCount}</div>
                    <div className="achievement-streak-label">S T R E A K</div>
                    <div className="achievement-divider" />
                    <div className="achievement-name-display">
                        {name.trim() || 'Anonymous'}
                    </div>
                    <div className="achievement-lives">
                        &#9829; {lives} {lives === 1 ? 'life' : 'lives'} remaining
                    </div>
                    {riddleText && (
                        <div className="achievement-haiku-section">
                            <div className="achievement-haiku-label">LAST HAIKU</div>
                            <div className="achievement-haiku">{riddleText}</div>
                        </div>
                    )}
                    <div className="achievement-datetime">{dateTime}</div>
                </div>

                {/* ── Controls outside the captured area ── */}
                <p className="achievement-label-text">
                    Add your name to the {isTrophy ? 'trophy' : 'badge'}
                </p>
                <input
                    className="achievement-name-input"
                    type="text"
                    placeholder="Your name (max 20 chars)"
                    maxLength={20}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoFocus
                />
                <div className="achievement-char-count">{name.length} / 20</div>

                <div className="achievement-buttons">
                    <button className="btn-save" onClick={handleSave}>
                        Save Image
                    </button>
                    <button className="btn-share" onClick={handleShare}>
                        Share
                    </button>
                    <button className="btn-continue" onClick={onClose}>
                        Continue Playing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AchievementModal;
