import React, {useState} from "react";
import "../styles/MagicAsk.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MagicAsk() {
    const questions = [
        {
            questionText:"Author of masterpiece Spiral ?",
            answerOptions: [
                {answerText: "Junji Ito", isCorrect: true},
                {answerText: "Tsutomu Nihei", isCorrect: false},
                {answerText: "Akira Toriyama", isCorrect: false},
            ],
        },
        { 
            questionText:"Web3 sci-fantasy world exploring past lives, science & magic",
            answerOptions: [
                {answerText: "Soul Aether", isCorrect: true},
                {answerText: "Project Ark", isCorrect: false},
                {answerText: "Sismo Zk Badges", isCorrect: false},
            ],
        },
        {
            questionText:"Really fun serie about what it is to work in tech area ?",
            answerOptions: [
                {answerText: "Cowboy Bebop", isCorrect: false},
                {answerText: "Sillicon Valley", isCorrect: true},
                {answerText: "Serial Experimental Lain", isCorrect: false},
            ],
        },
        {
            questionText:"Which artist is also a sci-fi essayist ?",
            answerOptions: [
                {answerText: "Aya Takano", isCorrect: true},
                {answerText: "Tabita Rezaire", isCorrect: false},
                {answerText: "Man Ray", isCorrect: false},
            ],
        },
        {
            questionText:"Famous novel of the cyberpunk movement",
            answerOptions: [
                {answerText: "The three-body problem by Liu Cixin", isCorrect: false},
                {answerText: "Neuromancien by William Gibson", isCorrect: true},
                {answerText: "SIVA by Philip K.Dick", isCorrect: false},
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