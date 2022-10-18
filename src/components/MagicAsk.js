import React, {useState} from "react";
import "../styles/MagicAsk.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MagicAsk() {
    const questions = [
        {
            questionText:"Author of chef d'oeuvre 'Spirale' ?",
            answerOptions: [
                {answerText: "Junji Ito", isCorrect: true},
                {answerText: "Tsutomu Nihei", isCorrect: false},
                {answerText: "Akira Toriyama", isCorrect: false},
            ],
        },
        {
            questionText:"Serie I always laugh watching it ?",
            answerOptions: [
                {answerText: "Cowboy Bebop", isCorrect: false},
                {answerText: "Sillicon Valley", isCorrect: true},
                {answerText: "Serial Experimental Lain", isCorrect: false},
            ],
        },
        {
            questionText:"Movie I could watch & rewatch",
            answerOptions: [
                {answerText: "Leon, the professional", isCorrect: false},
                {answerText: "The Beach", isCorrect: false},
                {answerText: "Mademoiselle", isCorrect: false},
            ],
        },
        {
            questionText:"Artist inspiring me the most",
            answerOptions: [
                {answerText: "Aya Takano", isCorrect: true},
                {answerText: "Tabita Rezaire", isCorrect: false},
                {answerText: "Miro", isCorrect: false},
            ],
        },
        {
            questionText:"Most admired historic figure",
            answerOptions: [
                {answerText: "John Dee", isCorrect: true},
                {answerText: "Aleister Crowler", isCorrect: false},
            ],
        },
        {
            questionText:"Music album I could listen all my life under the sun",
            answerOptions: [
                {answerText: "The Future Sound Of London - ISDN", isCorrect: true},
            ],
        },
        {
            questionText:"Most played game during childhood",
            answerOptions: [
                {answerText: "Ori Blind Forest", isCorrect: false},
                {answerText: "Yolo Space Hacker", isCorrect: false},
                {answerText: "Pokemon on DS :)", isCorrect: true},
            ],
        },
        {
            questionText:"Pioneer book upon Cyberpunk",
            answerOptions: [
                {answerText: "Neuromancien by William Gibson", isCorrect: true},
                {answerText: "Ghost in the shell", isCorrect: false},
                {answerText: "def ?", isCorrect: false},
            ],
        },
        {
            questionText:"Fictive character qui m'attendrit",
            answerOptions: [
                {answerText: "Rei (Evangelion)", isCorrect: false},
                {answerText: "def ?", isCorrect: false},
                {answerText: "Shiro (Deadman Wonderland)", isCorrect: true},
            ],
        },
        {
            questionText:"Exoplanet I wish to discover as a naturalist in another life",
            answerOptions: [
                {answerText: " ??? ", isCorrect: false},
                {answerText: " ???? ", isCorrect: true},
                {answerText: " ??? ", isCorrect: false},
            ],
        },
        {
            questionText:"Bonus: some magic Web3 projects",
            answerOptions: [
                {answerText: "Rei (Evangelion)", isCorrect: false},
                {answerText: "Shiro (Deadman Wonderland)", isCorrect: false},
                {answerText: "No answer, it's a bonus", isCorrect: true},
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect===true){
            setScore(score + 1);
            toast('🌞 Ur Right!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('🌀 Wrong answer :(', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        } 
    };

    return (
        <div classname = "magicAsk">
            <ToastContainer />
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length} !
                </div>
            ) : (
            <>
                <div className="question-section">
                        <div className="question-count">
                            <span>Magic Question <a><b>{currentQuestion + 1}</b></a></span>/{questions.length}
                        </div>
                        <div className="question-text"><a><b>{questions[currentQuestion].questionText}</b></a></div>
                </div>
                <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button id="magic-button" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
            )}
        </div>
    );

}