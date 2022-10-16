import React, {useState} from "react";
import "../styles/MagicAsk.css";

export default function MagicAsk() {
    const questions = [
        {
            questionText:"Who's my favorite mangaka ?",
            answerOptions: [
                {answerText: "Junji Ito", isCorrect: true},
                {answerText: "Tsutomu Nihei", isCorrect: false},
                {answerText: "Akira Toriyama", isCorrect: false},
                {answerText: "All", isCorrect: false},
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
                {answerText: "Leon the professional", isCorrect: false},
                {answerText: "The Beach", isCorrect: false},
                {answerText: "Mademoiselle", isCorrect: false},
                {answerText: "Ghost in the shell", isCorrect: true},
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
            questionText:"Most played game",
            answerOptions: [
                {answerText: "Ori Blind Forest", isCorrect: false},
                {answerText: "Yolo Space Hacker", isCorrect: false},
                {answerText: "Pokemon on DS :)", isCorrect: true},
            ],
        },
        {
            questionText:"Best book i read this last year",
            answerOptions: [
                {answerText: "Neuromancien by William Gibson", isCorrect: true},
                {answerText: "def ?", isCorrect: false},
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
            questionText:"Bonus: some magic Web3 projects",
            answerOptions: [
                {answerText: "Rei (Evangelion)", isCorrect: false},
                {answerText: "def ?", isCorrect: false},
                {answerText: "Shiro (Deadman Wonderland)", isCorrect: false},
                {answerText: "No answer, it's a bonus", isCorrect: true},
            ],
        },
        {
            questionText:"Exoplanet I wish to discover as a naturalist in another life",
            answerOptions: [
                {answerText: " ??? ", isCorrect: false},
                {answerText: " ???? ", isCorrect: true},
                {answerText: " ??? ", isCorrect: false},
                {answerText: " ??? ", isCorrect: false},
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect===true){
            setScore(score + 1);
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
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length} !
                </div>
            ) : (
            <>
                <div className="question-section">
                        <div className="question-count">
                            <span>Magic Question <a>{currentQuestion + 1}</a></span>/{questions.length}
                        </div>
                        <div classname="question-text"><a>{questions[currentQuestion].questionText}</a></div>
                </div>
                <div classname="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
            )}
        </div>
    );

}