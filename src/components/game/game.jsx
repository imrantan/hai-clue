import React, { useState, useEffect } from 'react';
import { data } from '../../assets/data.js';
import './game.css';

const Game = () => {
    const [index, setIndex] = useState(0);
    const randomNumber = Math.floor(Math.random() * (693 - 0 + 1)) + 0;
    const [riddle, setRiddle] = useState(data[randomNumber]);
    const [clickedButtons, setClickedButtons] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    function addLineBreaks(str) {
        return str.split('\n').map((line, index) => {
          return <React.Fragment key={index}>{line}<br/></React.Fragment>;
        });
      };

    useEffect(() => {
        // Generate buttons for the current riddle
        const buttons = riddle.answer.split('').map((letter, index) => ({ letter: letter.toUpperCase(), clicked: false }));
        // Add random buttons with random letters if the answer has less than 10 letters
        const numRandomButtons = Math.max(10 - buttons.length, 0);
        const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').sort(() => Math.random() - 0.5).slice(0, numRandomButtons);
        const randomButtons = randomLetters.map(letter => ({ letter, clicked: false }));
        // Combine the buttons and shuffle them
        const allButtons = buttons.concat(randomButtons).sort(() => Math.random() - 0.5);
        setClickedButtons(allButtons);
    }, [riddle]);

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
    };

    const resetSelection = () => {
        setClickedButtons(prevButtons =>
            prevButtons.map(button => ({ ...button, clicked: false }))
        );
        setSelectedLetters([]);
        setSubmittedAnswer('');
        setIsCorrect(false);
    }

    return (
        <div className='container'>
            <h1>Hai-Clue</h1>
            <h2>{addLineBreaks(riddle.riddle)}</h2>
            <div className='your-selection'>
                <strong></strong>
                <span>{selectedLetters.join('')}</span>
            </div>
            <div className='Result'>
                {submittedAnswer && <p>{isCorrect ? 'Correct!' : 'Incorrect! Try again.'}</p>}
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
                            key={index + 5} // Adjust key for the second row
                            onClick={() => handleButtonClick(index + 5)} // Adjust index for the second row
                            className={button.clicked ? 'selected' : ''}
                        >
                            {button.letter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="controls">
                <button onClick={handleSubmit} disabled={submittedAnswer}>
                    Submit
                </button>
                <button onClick={resetSelection} disabled={!selectedLetters.length}>
                    Reset
                </button>
                <button onClick={() => window.location.reload()}>Next</button>
                {!isCorrect && submittedAnswer && <button onClick={resetSelection}>Try Again</button>}
            </div>
            <h4>by https://github.com/imrantan</h4>
        </div>
    );
}

export default Game;
