import {useState} from "react";

import PropTypes from "prop-types";


function QCard({
                   id,
                   category,
                   numberOfQuestions,
                   question,
                   answer0,
                   answer1,
                   answer2,
                   answer3,
                   answer0Correct,
                   answer1Correct,
                   answer2Correct,
                   answer3Correct,
                   // questionIndex,
                   // filteredQuestions,
                   // onNextQuestion,
                   // onPrevQuestion,
                   // isCorrect,
                   setIsCorrect,
                   totalScore,
                   //setTotalScore,

               }) {

    const [showQuestion, setShowQuestion] = useState(true)
    const [showAnswer, setShowAnswer] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [score, setScore] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState(null);


    QCard.propTypes = {
        id: PropTypes.number,
        category: PropTypes.string,
        numberOfQuestions: PropTypes.number,
        question: PropTypes.string,
        answer0: PropTypes.string,
        answer1: PropTypes.string,
        answer2: PropTypes.string,
        answer3: PropTypes.string,
        answer0Correct: PropTypes.bool,
        answer1Correct: PropTypes.bool,
        answer2Correct: PropTypes.bool,
        answer3Correct: PropTypes.bool,
        //questionIndex: PropTypes.number,
        //filteredQuestions: PropTypes.array,
        onNextQuestion: PropTypes.func,
        onPrevQuestion: PropTypes.func,
        //isCorrect: PropTypes.bool,
        setIsCorrect: PropTypes.func,
        totalScore: PropTypes.number,
        setTotalScore: PropTypes.func,
    };

    function handleButtonClick(answer) {
        console.log('total number of questions in this round: ', {numberOfQuestions})
        setShowQuestion(showQuestion);
        setShowAnswer(!showAnswer);
        setAnswered(true);
        setSelectedAnswer(answer);

        // was the answer correct?
        if (
            (answer === 'answer0' && answer0Correct) ||
            (answer === 'answer1' && answer1Correct) ||
            (answer === 'answer2' && answer2Correct) ||
            (answer === 'answer3' && answer3Correct)
        ) {
            console.log('correct answer')
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            console.log('incorrect answer')
            setIsCorrect(false);
        }
    }

    // const handleNextQuestion = () => {
    //     onNextQuestion();
    // }

    // const handlePrevQuestion = () => {
    //     onPrevQuestion();
    // }
    return (
        /* show the front of card and all answers */

        <div className='container'>
            {!answered &&
                <div
                    className='scoreContainer'>
                    <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                </div>}

            <div className="cardsContainer">
                {!answered &&
                    <div className="card">
                        <p>Category: {category}</p>
                        <p>
                            Question ID: {id}
                        </p>
                        <p>
                            Question: {question}
                        </p>
                        <div className="answer-button" onClick={
                            () => {
                                handleButtonClick('answer0')
                            }
                        }>
                            {answer0}
                        </div>
                        <div className="answer-button" onClick={
                            () => {
                                handleButtonClick('answer1')
                            }
                        }>
                            {answer1}
                        </div>
                        <div className="answer-button" onClick={
                            () => {
                                handleButtonClick('answer2')
                            }
                        }>
                            {answer2}
                        </div>
                        <div className="answer-button" onClick={
                            () => {
                                handleButtonClick('answer3')
                            }
                        }>
                            {answer3}
                        </div>
                    </div>
                }
                {/*show answer after I click*/}
                {answered &&
                    <div className="card-back">
                        <p>
                            Question number: {id}
                        </p>
                        <p>
                            Question: {question}
                        </p>
                        <div>
                            Your answer: {selectedAnswer === "answer0" ?
                            answer0 : selectedAnswer === "answer1" ?
                                answer1 : selectedAnswer === "answer2" ?
                                    answer2 : selectedAnswer === "answer3" ?
                                        answer3 : ""}
                        </div>

                        {answer0Correct
                            && <div className="badge">Correct answer: {answer0} </div>
                            && <div className='scoreContainer'>
                                <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                            </div>}
                        {answer1Correct &&
                            <div className="badge">Correct answer: {answer1}</div>
                            && <div className='scoreContainer'>
                                <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                            </div>}
                        {answer2Correct &&
                            <div className="badge">Correct answer: {answer2} </div>
                            && <div className='scoreContainer'>
                                <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                            </div>}
                        {answer3Correct &&
                            <div className="badge">Correct answer: {answer3} </div>
                            && <div className='scoreContainer'>
                                <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                            </div>}
                    </div>
                }
            </div>
        </div>

    )
}

export default QCard;