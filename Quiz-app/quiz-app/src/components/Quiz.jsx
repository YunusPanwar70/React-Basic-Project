import React, { useState, useRef } from 'react';
import './Quiz.css';
import data from '../assets/data';

function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[0]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const optin1 = useRef(null);
    const optin2 = useRef(null);
    const optin3 = useRef(null);
    const optin4 = useRef(null);

    const optionArray = [optin1, optin2, optin3, optin4];

    const checkAns = (e, ans) => {
        if (!lock) {
            const target = e.target;
            setLock(true);
            if (question.ans === ans) {
                target.classList.add('correct');
                setScore((prev) => prev + 1);
            } else {
                target.classList.add('wrong');
                optionArray[question.ans].current.classList.add('correct');
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return;
            }
            setIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                setQuestion(data[nextIndex]);
                return nextIndex;
            });
            setLock(false);
            optionArray.forEach((option) => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {result ? (
                <>
                    <h2>You Scored {score} out of {data.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={optin1} onClick={(e) => checkAns(e, 0)}>{question.option1}</li>
                        <li ref={optin2} onClick={(e) => checkAns(e, 1)}>{question.option2}</li>
                        <li ref={optin3} onClick={(e) => checkAns(e, 2)}>{question.option3}</li>
                        <li ref={optin4} onClick={(e) => checkAns(e, 3)}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {data.length} questions</div>
                </>
            )}
        </div>
    );
}

export default Quiz;
