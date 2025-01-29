import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import questions from "./Questions.jsx";

import {useState, useEffect, useCallback} from "react";

import Accordion from "./components/Accordion.jsx";
import AccordionSection from "./components/AccordionSection.jsx"


const categories = ['All', 'Geography', 'Entertainment', 'History', 'Arts & Literature',
    'Science & Nature', 'Sports & Leisure'];


function App() {
    const [filteredQuestions, setFilteredQuestions] = useState(questions)
    const [gameType, setGameType] = useState('')
    // Track current question index
    const [questionIndex, setQuestionIndex] = useState(0)
    const [isQuickGameClicked, setIsQuickGameClicked] = useState(false);
    const [isExpertGameClicked, setIsExpertGameClicked] = useState(false);
    const [isFullGameClicked, setIsFullGameClicked] = useState(false);


    const handleClick = useCallback((category) => {
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            console.log(category)
            const myFilteredCategoryQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredCategoryQuestions)
        }
    }, []);

    const handleGameTypeClick = useCallback((gameType, count, category) => {
        setGameType(gameType)
        setQuestionIndex(0)
        console.log('playing game type ', gameType)
        console.log('question index ', questionIndex)
        console.log('number of questions ', count)
        console.log('category ', category)
        handleClick(category);
    }, [handleClick, questionIndex]);

    useEffect(() => {
        if (isQuickGameClicked) {
            handleGameTypeClick('quick', 6, 'All');
        }
    }, [isQuickGameClicked, handleGameTypeClick]);

    useEffect(() => {
        if (isExpertGameClicked) {
            handleGameTypeClick('expert', 6, 'All');
        }
    }, [isExpertGameClicked, handleGameTypeClick]);

    useEffect(() => {
        if (isFullGameClicked) {
            handleGameTypeClick('full', 36, 'All');
        }
    }, [isFullGameClicked, handleGameTypeClick]);

    const handleQuickGameClick = () => {
        setIsQuickGameClicked(true);
        setIsExpertGameClicked(false);
        setIsFullGameClicked(false);
    };

    const handleExpertGameClick = () => {
        setIsQuickGameClicked(false);
        setIsExpertGameClicked(true);
        setIsFullGameClicked(false);
    };

    const handleFullGameClick = () => {
        setIsQuickGameClicked(false);
        setIsExpertGameClicked(false);
        setIsFullGameClicked(true);
    };

    const handleNextQuestion = () => {
        setQuestionIndex((prevQuestionIndex) => (prevQuestionIndex + 1) %
            questions.length);
    };

    const handlePrevQuestion = () => {
        setQuestionIndex((prevQuestionIndex) => (prevQuestionIndex - 1) %
            questions.length);
    };

    return (
        <>
            <div className="main-nav">
                <h2> Lets Play Trivial Pursuit </h2>

                <p>Select Game Type</p>
                <div className="container">
                    <Accordion allowMultipleOpen>
                        <AccordionSection label='Quick Game' isOpen onClick={onclick}>
                            <p>
                                <strong>Quick game: 6 questions, 1 from each category</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleQuickGameClick('quick', 6,
                                "All")}>
                                Click to Play Quick Game!
                            </button>
                        </AccordionSection>
                        <AccordionSection label='Expert Game' isOpen onClick={onclick}>
                            <p>
                                <strong>Expert category game: 6 questions from 1 category</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleExpertGameClick('expert',
                                6, "All")}>
                                Click button to select your category!
                            </button>
                        </AccordionSection>
                        <AccordionSection label='Full Game' isOpen onClick={onclick}>
                            <p>
                                <strong>Full game: Answer 36 questions</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleFullGameClick('full', 36, "All")}>
                                Click to Play Full Game!
                            </button>
                        </AccordionSection>
                    </Accordion>
                </div>
            </div>


            {(gameType.toString() === 'expert') &&
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
            {(gameType.toString() !== 'null') &&
                <div className="content">
                    {filteredQuestions.slice(questionIndex, questionIndex + 1).map((questions, questionIndex) => {
                        return (
                            <QCard
                                key={questionIndex}
                                id={questions.id}
                                category={questions.category}
                                question={questions.question}
                                answer0={questions.choices[0].text}
                                answer1={questions.choices[1].text}
                                answer2={questions.choices[2].text}
                                answer3={questions.choices[3].text}
                                answer0Correct={questions.choices[0].answer}
                                answer1Correct={questions.choices[1].answer}
                                answer2Correct={questions.choices[2].answer}
                                answer3Correct={questions.choices[3].answer}
                            />)
                    })}
                    <div>
                        <button className='navigate-questions-button' onClick={handlePrevQuestion}
                                disabled={questionIndex <= 0}>Prev Question
                        </button>
                        <button className='navigate-questions-button' onClick={handleNextQuestion}
                                disabled={questionIndex >= 6}>Next Question
                        </button>
                    </div>
                </div>}

        </>
    )
}

export default App;
