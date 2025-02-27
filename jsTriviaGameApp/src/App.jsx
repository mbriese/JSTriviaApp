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
    const [gameOver, setGameOver] = useState(false);
    const [randomIndex, setRandomIndex] = useState(0);

    const generateRandomIndex = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * questions.length)+1;
        setRandomIndex(randomIndex);
    }, []);

    const handleClick = useCallback((category) => {
        console.log('handle click called')
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            const myFilteredCategoryQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredCategoryQuestions)
        }
    }, []);

    const handleGameTypeClick = useCallback((count, category) => {
        console.log('handle game type called')
        handleClick(category);
        let myFilteredQuestions = questions;
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            myFilteredQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredQuestions)
        }
        if (count === 6) {
            console.log('getting a random index called')
            generateRandomIndex();
            console.log('random index is ', randomIndex)
            if ((randomIndex+6) <= (questions.length-1)) {
                myFilteredQuestions = filteredQuestions.slice(randomIndex, randomIndex+6);}
            else {
                let end = (questions.length - (randomIndex+6))
                myFilteredQuestions = filteredQuestions.slice(randomIndex, (questions.length-1));
                myFilteredQuestions.unshift(...filteredQuestions.slice(0, end))
            }
            console.log('number of questions selected ', myFilteredQuestions.length)
        }
        setFilteredQuestions(myFilteredQuestions)
        setIsGameSelected(true);
        setGameOver(false);
    }, [handleClick, filteredQuestions, generateRandomIndex, randomIndex]);

    const handleQuickGameClick = () => {
        console.log('handle handle quick game click called')
        handleGameTypeClick(6, 'All');
        setIsGameSelected(true);
    };

    const handleExpertGameClick = () => {
        console.log('handle expert click called')
        handleGameTypeClick(6, 'All');
        setExpertGameType(true);
        setIsGameSelected(true);
    };

    const handleFullGameClick = () => {
        console.log('handle full game click called')
        handleGameTypeClick(36, 'All');
        setIsGameSelected(true);
    };

    const handleNextQuestion = () => {
        console.log('handle next question click called')
        let newQuestionIndex = questionIndex + 1;
        if (newQuestionIndex >= filteredQuestions.length) {
            setGameOver(true);
        }
        setQuestionIndex(newQuestionIndex);
        // Update the score if the answer is correct
        if (isCorrect) {
            setTotalScore(totalScore+1)
        }
        console.log('game over', {gameOver})
    };

    const handlePrevQuestion = () => {
        console.log('handle previous question click called')
        let newQuestionIndex = questionIndex - 1;
        if (newQuestionIndex < 0) {
            newQuestionIndex = filteredQuestions.length - 1;
        }
        setQuestionIndex(newQuestionIndex);
    };
    const handleQuit = () => {
        console.log('handle quit game called')
        setFilteredQuestions(questions);
        setQuestionIndex(0);
        setIsGameSelected(false);
        setExpertGameType(false);
        setIsCorrect(false);
        setTotalScore(0);
        // go back to the beginning
    };

    return (
        <>
        { !isGameSelected ?
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
            : (
                <div className="main-nav">
                  <h2>Playing game</h2>
                    <p>Total Score: {totalScore}</p>
            </div>
            )
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
                    <div>
                        <button
                            className='quit-button'
                            onClick={handleQuit}>Quit Game
                        </button>
                    </div>
                    </div>
                </div>}

        </>
    )
}

export default App;
