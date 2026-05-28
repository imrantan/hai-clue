import React, { useState, useEffect, useRef } from 'react';
import { data } from '../../assets/data.js';
import { getDailyHaikus, getStorageKey, getPuzzleNumber } from '../../utils/dailyPuzzle.js';
import PuzzleView from '../game/PuzzleView.jsx';
import DailyResults from './DailyResults.jsx';
import InfoModal from '../modals/InfoModal.jsx';
import correctSoundUrl from '../../assets/sounds/correct-6033.mp3';
import nextSoundUrl from '../../assets/sounds/sound-next.mp3';

const TOTAL_HAIKUS = 5;

// Computed once per module load — stable for the day.
const haikus = getDailyHaikus(data, TOTAL_HAIKUS);

function loadSaved() {
    try {
        const raw = localStorage.getItem(getStorageKey());
        if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
    return null;
}

const DailyChallenge = () => {
    // Lazy-init from localStorage so there's no flash on reload.
    const [currentIndex, setCurrentIndex] = useState(() => loadSaved()?.currentIndex ?? 0);
    const [lives, setLives] = useState(() => loadSaved()?.lives ?? 5);
    const [results, setResults] = useState(() => loadSaved()?.results ?? Array(TOTAL_HAIKUS).fill(null));
    // 'playing' | 'completed' | 'failed'
    const [challengeState, setChallengeState] = useState(() => loadSaved()?.challengeState ?? 'playing');
    const [isMuted, setIsMuted] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    // Use a ref for isMuted so audio functions never go stale
    const isMutedRef = useRef(false);

    const audioCtxRef = useRef(null);
    const correctBufferRef = useRef(null);
    const nextBufferRef = useRef(null);
    const audioInitRef = useRef(false);
    const audioUnlockedRef = useRef(false);

    // Persist progress on every meaningful state change
    useEffect(() => {
        try {
            localStorage.setItem(
                getStorageKey(),
                JSON.stringify({ currentIndex, lives, results, challengeState }),
            );
        } catch { /* ignore */ }
    }, [currentIndex, lives, results, challengeState]);

    // iOS Web Audio bootstrap — same pattern as endless game.jsx
    useEffect(() => {
        const bootstrap = () => {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioCtxRef.current;
            if (!audioUnlockedRef.current) {
                audioUnlockedRef.current = true;
                const silentBuf = ctx.createBuffer(1, 1, ctx.sampleRate);
                const silentSrc = ctx.createBufferSource();
                silentSrc.buffer = silentBuf;
                silentSrc.connect(ctx.destination);
                silentSrc.start(0);
                ctx.resume().catch(() => {});
            }
            if (!audioInitRef.current) {
                audioInitRef.current = true;
                [[correctSoundUrl, correctBufferRef], [nextSoundUrl, nextBufferRef]].forEach(([url, ref]) => {
                    fetch(url)
                        .then(r => r.arrayBuffer())
                        .then(raw => ctx.decodeAudioData(raw))
                        .then(decoded => { ref.current = decoded; })
                        .catch(() => {});
                });
            }
        };

        document.addEventListener('touchstart', bootstrap, { once: true, passive: true });
        document.addEventListener('mousedown', bootstrap, { once: true });
        return () => {
            document.removeEventListener('touchstart', bootstrap);
            document.removeEventListener('mousedown', bootstrap);
            audioCtxRef.current?.close();
        };
    }, []);

    const ensureAudio = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        if (!audioUnlockedRef.current) {
            audioUnlockedRef.current = true;
            const silentBuf = ctx.createBuffer(1, 1, ctx.sampleRate);
            const silentSrc = ctx.createBufferSource();
            silentSrc.buffer = silentBuf;
            silentSrc.connect(ctx.destination);
            silentSrc.start(0);
            ctx.resume().catch(() => {});
        } else if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
        }
        if (!audioInitRef.current) {
            audioInitRef.current = true;
            [[correctSoundUrl, correctBufferRef], [nextSoundUrl, nextBufferRef]].forEach(([url, ref]) => {
                fetch(url)
                    .then(r => r.arrayBuffer())
                    .then(raw => ctx.decodeAudioData(raw))
                    .then(decoded => { ref.current = decoded; })
                    .catch(() => {});
            });
        }
    };

    const playBuffer = (ref) => {
        if (isMutedRef.current || !audioCtxRef.current || !ref.current) return;
        const src = audioCtxRef.current.createBufferSource();
        src.buffer = ref.current;
        src.connect(audioCtxRef.current.destination);
        src.start(0);
    };

    const playClick = () => {
        if (isMutedRef.current || !audioCtxRef.current) return;
        const ctx = audioCtxRef.current;
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

    const playBuzz = () => {
        if (isMutedRef.current || !audioCtxRef.current) return;
        const ctx = audioCtxRef.current;
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

    const handleMuteToggle = () => {
        setIsMuted(m => {
            const next = !m;
            isMutedRef.current = next;
            return next;
        });
    };

    // Called by PuzzleView when user submits a wrong answer
    const handleWrongAnswer = (wrongCount) => {
        const newLives = lives - 1;
        setLives(Math.max(0, newLives));
        if (newLives <= 0) {
            setResults(prev => {
                const updated = [...prev];
                updated[currentIndex] = { solved: false, wrongCount };
                return updated;
            });
            setChallengeState('failed');
        }
    };

    // Called by PuzzleView when user clicks "Next Haiku" after solving
    const handleSolved = (wrongCount) => {
        setLives(prev => Math.min(prev + 1, 5));
        setResults(prev => {
            const updated = [...prev];
            updated[currentIndex] = { solved: true, wrongCount };
            return updated;
        });
        const nextIndex = currentIndex + 1;
        if (nextIndex >= TOTAL_HAIKUS) {
            setChallengeState('completed');
        } else {
            setCurrentIndex(nextIndex);
        }
    };

    if (challengeState !== 'playing') {
        return (
            <>
                {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
                <DailyResults
                    puzzleNumber={getPuzzleNumber()}
                    results={results}
                    lives={lives}
                    completed={challengeState === 'completed'}
                    haikus={haikus}
                    onInfoOpen={() => setShowInfo(true)}
                />
            </>
        );
    }

    return (
        <>
            {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
            <PuzzleView
                riddle={haikus[currentIndex]}
                lives={lives}
                haikuNumber={currentIndex + 1}
                totalHaikus={TOTAL_HAIKUS}
                puzzleNumber={getPuzzleNumber()}
                isMuted={isMuted}
                onMuteToggle={handleMuteToggle}
                onInfoOpen={() => setShowInfo(true)}
                ensureAudio={ensureAudio}
                playClick={playClick}
                playBuzz={playBuzz}
                playBuffer={playBuffer}
                correctBufferRef={correctBufferRef}
                nextBufferRef={nextBufferRef}
                onWrongAnswer={handleWrongAnswer}
                onSolved={handleSolved}
            />
        </>
    );
};

export default DailyChallenge;
