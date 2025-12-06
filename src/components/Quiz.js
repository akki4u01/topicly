import React, { useState } from 'react';
import clsx from 'clsx';
// styles removed

// Actually, let's stick to inline styles for the component specific logic to keep it simple for the user 
// unless we want to commit to a full CSS module structure which might be cleaner.
// Given the prompt allows me to edit custom.css, I will put the main styles there.
// But Docusaurus conventionally uses CSS modules. Let's create a module for reliability.

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleOptionClick = (option, index) => {
        if (selectedOption !== null) return; // Prevent changing answer

        setSelectedOption(index);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
            setIsCorrect(null);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    return (
        <div className="quiz-container" style={{
            backgroundColor: 'var(--ifm-card-background-color)',
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            {showScore ? (
                <div className="score-section" style={{ textAlign: 'center' }}>
                    <h2>You scored {score} out of {questions.length}</h2>
                    <button
                        onClick={resetQuiz}
                        className="button button--primary"
                    >
                        Play Again
                    </button>
                </div>
            ) : (
                <>
                    <div className="question-section" style={{ marginBottom: '20px' }}>
                        <div className="question-count" style={{ marginBottom: '10px', color: 'var(--ifm-color-emphasis-700)' }}>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className="answer-section" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {questions[currentQuestion].options.map((option, index) => {
                            let buttonStyle = "button button--outline button--secondary button--block";
                            if (selectedOption !== null) {
                                if (option === questions[currentQuestion].answer) {
                                    buttonStyle = "button button--success button--block";
                                } else if (index === selectedOption) {
                                    buttonStyle = "button button--danger button--block";
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    className={buttonStyle}
                                    onClick={() => handleOptionClick(option, index)}
                                    disabled={selectedOption !== null}
                                    style={{ textAlign: 'left', padding: '10px 15px' }}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                    {selectedOption !== null && (
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <button onClick={handleNextQuestion} className="button button--primary">
                                {currentQuestion + 1 === questions.length ? 'See Results' : 'Next Question'}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Quiz;
