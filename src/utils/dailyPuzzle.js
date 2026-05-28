// Puzzle #1 = May 28 2026 (UTC)
const EPOCH_MS = Date.UTC(2026, 4, 28);

function mulberry32(seed) {
    return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

export function getDayIndex() {
    const now = new Date();
    const utcToday = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return Math.floor((utcToday - EPOCH_MS) / 86400000);
}

export function getPuzzleNumber() {
    return Math.max(1, getDayIndex() + 1);
}

// Sort by id first so adding new haikus to data.js doesn't change past puzzles.
// Then do a seeded Fisher-Yates shuffle and take the first `count` entries.
export function getDailyHaikus(data, count = 5) {
    const sorted = [...data].sort((a, b) => a.id - b.id);
    const rng = mulberry32(getDayIndex());
    const shuffled = sorted.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

export function getStorageKey() {
    return `haicue-daily-${getDayIndex()}`;
}

export function getTimeUntilNextPuzzle() {
    const now = new Date();
    const tomorrowUTC = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
    ));
    const diffMs = tomorrowUTC - now;
    const h = Math.floor(diffMs / 3600000);
    const m = Math.floor((diffMs % 3600000) / 60000);
    const s = Math.floor((diffMs % 60000) / 1000);
    return `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}
