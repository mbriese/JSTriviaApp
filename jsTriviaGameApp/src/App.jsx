import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import questions from "./Questions.jsx";

import {useState} from "react";
import Accordian from "./components/Accordian.jsx";
import AccordianSection from "./components/AccordianSection.jsx"


const categories = ['All', 'Geography', 'Entertainment', 'History', 'Arts & Literature',
    'Science & Nature', 'Sports & Leisure'];


function App() {
    const [filteredQuestions, setFilteredQuestions] = useState(questions)
    const [gameType, setGameType] = useState('')
    // Track current question index
    const [questionIndex, setQuestionIndex] = useState(0)

    const handleClick = (category) => {
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            console.log(category)
            const myFilteredCategoryQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredCategoryQuestions)
        }
    }

    const handleGameTypeClick = (gameType, count, category) => {
        setGameType(gameType)
        setQuestionIndex(0)
        console.log('playing game type ', gameType)
        console.log('question index ', questionIndex)
        console.log('number of questions ', count)
        console.log('category ', category)
        handleClick(category)
    }

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
                    <Accordian allowMultipleOpen>
                        <AccordianSection label='Quick Game' isOpen onClick={onclick}>
                            <p>
                                <strong>Quick game: 6 questions, 1 from each category</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleGameTypeClick('quick', 6,
                                "All")}>
                                Click to Play Quick Game!
                            </button>
                        </AccordianSection>
                        <AccordianSection label='Expert Game' isOpen onClick={onclick}>
                            <p>
                                <strong>Expert category game: 6 questions from 1 category</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleGameTypeClick('expert',
                                6, "All")}>
                                Click button to select your category!
                            </button>
                        </AccordianSection>
                        <AccordianSection label='Full Game' isOpen onClick={onclick}>
                            <p>
                                <strong>Full game: Answer 36 questions</strong>
                            </p>
                            <button
                                className='main-nav-button' onClick={() => handleGameTypeClick('full', 36, "All")}>
                                Click to Play Full Game!
                            </button>
                        </AccordianSection>
                    </Accordian>
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
            {(gameType.toString() === 'null') &&
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
