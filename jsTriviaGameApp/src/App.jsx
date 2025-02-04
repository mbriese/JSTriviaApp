import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import questions from "./Questions.jsx";

import {useState, useCallback} from "react";

import Accordion from "./components/Accordion.jsx";
import AccordionSection from "./components/AccordionSection.jsx"


const categories = ['All', 'Geography', 'Entertainment', 'History', 'Arts & Literature',
    'Science & Nature', 'Sports & Leisure'];


function App() {
    const [filteredQuestions, setFilteredQuestions] = useState(questions);
    // Track current question index
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isGameSelected, setIsGameSelected] = useState(false);
    const [expertGameType, setExpertGameType] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const handleClick = useCallback((category) => {
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            const myFilteredCategoryQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredCategoryQuestions)
        }
    }, []);

    const handleGameTypeClick = useCallback((count, category) => {
        handleClick(category);

        let myFilteredQuestions = questions;
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            myFilteredQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredQuestions)
        }
        if (count === 6) {
            myFilteredQuestions = filteredQuestions.slice(0, 6);
        }
        setFilteredQuestions(myFilteredQuestions)
        setIsGameSelected(true);
    }, [handleClick, filteredQuestions]);

    const handleQuickGameClick = () => {
        handleGameTypeClick(6, 'All');
        setIsGameSelected(true);
    };

    const handleExpertGameClick = () => {
        handleGameTypeClick(6, 'All');
        setExpertGameType(true);
        setIsGameSelected(true);
    };

    const handleFullGameClick = () => {
        handleGameTypeClick(36, 'All');
        setIsGameSelected(true);
    };

    const handleNextQuestion = () => {
        let newQuestionIndex = questionIndex + 1;
        if (newQuestionIndex >= filteredQuestions.length) {
            newQuestionIndex = 0;
        }
        setQuestionIndex(newQuestionIndex);
        // Update the score if the answer is correct
        if (isCorrect) {
            setTotalScore(totalScore+1)
        }
    };

    const handlePrevQuestion = () => {
        let newQuestionIndex = questionIndex - 1;
        if (newQuestionIndex < 0) {
            newQuestionIndex = filteredQuestions.length - 1;
        }
        setQuestionIndex(newQuestionIndex);
    };

    return (
        <>
        { !isGameSelected &&
            <div className="main-nav">
                <h2> Lets Play Trivial Pursuit </h2>

                <p>Select Game Type</p>
                <div className="container">
                    <Accordion allowMultipleOpen>
                        <AccordionSection label='Quick Game' isOpen onClick={handleQuickGameClick}>
                            <p>
                                <strong>Quick game: 6 questions, 1 from each category</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleQuickGameClick('quick', 6,
                                'All')}>
                                Click to Play Quick Game!
                            </button>
                        </AccordionSection>
                        <AccordionSection label='Expert Game' isOpen onClick={handleExpertGameClick}>
                            <p>
                                <strong>Expert category game: 6 questions from 1 category</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleExpertGameClick('expert',
                                6, 'All')}>
                                Click button to select your category!
                            </button>
                        </AccordionSection>
                        <AccordionSection label='Full Game' isOpen onClick={handleFullGameClick}>
                            <p>
                                <strong>Full game: Answer 36 questions</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleFullGameClick('full', 36, 'All')}>
                                Click to Play Full Game!
                            </button>
                        </AccordionSection>
                    </Accordion>
                </div>
            </div>
        }


            {isGameSelected && expertGameType &&
                <div className="cardsContainer cards">
                    <div className='container'>Select your category</div>
                    <div className="cardsContainer">
                        <div className='category-nav'>
                            {categories.map((category) => {
                                return (
                                    <button className='category-button'
                                            key={category}
                                            onClick={
                                                () => {
                                                    handleClick(category)
                                                }
                                            }
                                    >{category}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }

            {isGameSelected &&
                <div className="content">
                    {filteredQuestions.length > 0 && (
                            <QCard
                                key={filteredQuestions.at(questionIndex).id}
                                id={filteredQuestions.at(questionIndex).id}
                                category={filteredQuestions.at(questionIndex).category}
                                numberOfQuestions={filteredQuestions.length}
                                question={filteredQuestions.at(questionIndex).question}
                                answer0={filteredQuestions.at(questionIndex).choices[0].text}
                                answer1={filteredQuestions.at(questionIndex).choices[1].text}
                                answer2={filteredQuestions.at(questionIndex).choices[2].text}
                                answer3={filteredQuestions.at(questionIndex).choices[3].text}
                                answer0Correct={filteredQuestions.at(questionIndex).choices[0].answer}
                                answer1Correct={filteredQuestions.at(questionIndex).choices[1].answer}
                                answer2Correct={filteredQuestions.at(questionIndex).choices[2].answer}
                                answer3Correct={filteredQuestions.at(questionIndex).choices[3].answer}
                                questionIndex={questionIndex}
                                filteredQuestions={filteredQuestions}
                                onNextQuestion={handleNextQuestion}
                                onPrevQuestion={handlePrevQuestion}
                                isCorrect={isCorrect}
                                setIsCorrect={setIsCorrect}
                                totalScore={totalScore}
                                setTotalScore={setTotalScore}
                            />)
                    }
                    <div>
                        <button className='navigate-questions-button'
                                onClick={handlePrevQuestion}
                                disabled={questionIndex <= 0}>Prev Question
                        </button>
                        <button
                                className='navigate-questions-button'
                                onClick={handleNextQuestion}
                                disabled={questionIndex >= filteredQuestions.length - 1}>Next Question
                        </button>
                    </div>
                </div>}

        </>
    )
}

export default App;
