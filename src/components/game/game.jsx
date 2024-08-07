import React, { useState, useEffect, useTransition, useRef } from 'react';
import { data } from '../../assets/data.js';
import './game.css';
import correctSound from '../../assets/sounds/correct-6033.mp3'; // Adjust the path as needed
import nextSound from '../../assets/sounds/sound-next.mp3'; // Adjust the path as needed

const Game = () => {
    const [index, setIndex] = useState(0);
    const [riddle, setRiddle] = useState(data[Math.floor(Math.random() * 694)]);
    const [clickedButtons, setClickedButtons] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [solvedCount, setSolvedCount] = useState(0);
    const [skippedCount, setSkippedCount] = useState(0);  // New state for skipped riddles
    const [incorrectAttempts, setIncorrectAttempts] = useState(0);
    const [isPending, startTransition] = useTransition();
    // I dont want the colors to change dynamically for the title and the riddle anymore :/
    const [titleColor, setTitleColor] = useState('var(--main-red)');
    const [riddleColor, setRiddleColor] = useState('#922724');
    const [fadeIn, setFadeIn] = useState(true);

    // Intialise sounds
    const audioCorrectRef = useRef(null);
    const audioNextRef = useRef(null);


    function addLineBreaks(str) {
        return str.split('\n').map((line, index) => {
          return <React.Fragment key={index}>{line}<br/></React.Fragment>;
        });
    };

    useEffect(() => {
        const buttons = riddle.answer.split('').map((letter) => ({ letter: letter.toUpperCase(), clicked: false }));
        const numRandomButtons = Math.max(10 - buttons.length, 0);
        const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').sort(() => Math.random() - 0.5).slice(0, numRandomButtons);
        const randomButtons = randomLetters.map(letter => ({ letter, clicked: false }));
        const allButtons = buttons.concat(randomButtons).sort(() => Math.random() - 0.5);
        setClickedButtons(allButtons);
    }, [riddle]);


    useEffect(() => {
        audioCorrectRef.current = new Audio(correctSound);
        audioNextRef.current = new Audio(nextSound);
    }, []);


    const handleButtonClick = (index) => {
        if (!submittedAnswer && !clickedButtons[index].clicked) {
            const clickedLetter = clickedButtons[index].letter;
            setClickedButtons(prevButtons => {
                const updatedButtons = [...prevButtons];
                updatedButtons[index].clicked = true;
                return updatedButtons;
            });
            setSelectedLetters(prevLetters => [...prevLetters, clickedLetter]);
        }
    };


    const handleSubmit = () => {
        const userAnswer = selectedLetters.join('');
        setSubmittedAnswer(userAnswer);
        const isCorrect = userAnswer.toUpperCase() === riddle.answer.toUpperCase();
        setIsCorrect(isCorrect);
        if (isCorrect) {
            if (audioCorrectRef.current) {
                audioCorrectRef.current.currentTime = 0; // Reset to start
                audioCorrectRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setSolvedCount(prevCount => prevCount + 1);
            setIncorrectAttempts(0);  // Reset incorrect attempts on correct answer
        } else {
            setIncorrectAttempts(prevAttempts => prevAttempts + 1);  // Increment incorrect attempts
        }
    };

    const resetSelection = () => {
        setClickedButtons(prevButtons =>
            prevButtons.map(button => ({ ...button, clicked: false }))
        );
        setSelectedLetters([]);
        setSubmittedAnswer('');
        setIsCorrect(false);
        // Don't reset incorrectAttempts here, as we want to keep track across attempts
    }

    const nextRiddle = () => {
        if (audioNextRef.current) {
            audioNextRef.current.currentTime = 0; // Reset to start
            audioNextRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setFadeIn(false);
        startTransition(() => {
            setTimeout(() => {
                const newRandomNumber = Math.floor(Math.random() * 694);
                setRiddle(data[newRandomNumber]);
                resetSelection();
                setFadeIn(true);
                setIncorrectAttempts(0);  // Reset incorrect attempts for new riddle
                if (!isCorrect) {
                    setSkippedCount(prevCount => prevCount + 1);  // Increment skipped count
                }
            }, 300);
        });
    }

    return (
        <div className={`container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
            <h1 style={{ color: titleColor }}>Hai-Clue</h1>
            <div className="counters-solved">
                <div>Solved: {solvedCount}</div>
            </div>
            <div className="counters-skipped">
                <div>Skipped: {skippedCount}</div>
            </div>
            <h2 style={{ color: riddleColor }}>{addLineBreaks(riddle.riddle)}</h2>
            <div className='your-selection'>
                <span className='selected-letters'>{selectedLetters.join('')}</span>
            </div>
            <div className='Result'>
                {submittedAnswer && <p>{isCorrect ? 'Correct!' : 'Incorrect! Try again.'}</p>}
                {!isCorrect && incorrectAttempts > 2 && (
                    <p>Hint: The answer has {riddle.answer.length} letters.</p>
                )}
            </div>
            <div className='show-answer'>
                {isCorrect && <p> Answer: {riddle.answer.toUpperCase()}</p>}
            </div>
            <div className="letter-grid">
                <div className="row">
                    {clickedButtons.slice(0, 5).map((button, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            className={button.clicked ? 'selected' : ''}
                        >
                            {button.letter}
                        </button>
                    ))}
                </div>
                <div className="row">
                    {clickedButtons.slice(5, 10).map((button, index) => (
                        <button
                            key={index + 5}
                            onClick={() => handleButtonClick(index + 5)}
                            className={button.clicked ? 'selected' : ''}
                        >
                            {button.letter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="controls">
                <button onClick={nextRiddle} disabled={isPending}>
                    {isPending ? 'Loading...' : 'Next'}
                </button>
                {!submittedAnswer && (
                    <button onClick={resetSelection} disabled={!selectedLetters.length}>
                        Reset
                    </button>
                )}
                <button onClick={handleSubmit} disabled={submittedAnswer}>
                    Submit
                </button>
                {!isCorrect && submittedAnswer && <button onClick={resetSelection}>Try Again</button>}
            </div>
            <h4>created by https://github.com/imrantan</h4>
        </div>
    );
}

export default Game;