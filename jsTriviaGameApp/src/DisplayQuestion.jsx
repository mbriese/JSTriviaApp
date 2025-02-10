import PropTypes from 'prop-types';
import {useState} from "react";

DisplayQuestion.propTypes = {
    answered: PropTypes.bool,
    category: PropTypes.string,
    id: PropTypes.number,
    question: PropTypes.string,
    answer0: PropTypes.string,
    answer1: PropTypes.string,
    answer2: PropTypes.string,
    answer3: PropTypes.string,
    answer0Correct: PropTypes.bool,
    answer1Correct: PropTypes.bool,
    answer2Correct: PropTypes.bool,
    answer3Correct: PropTypes.bool,
}

function DisplayQuestion(answered,
                         category,
                         id,
                         question,
                         answer0,
                         answer1,
                         answer2,
                         answer3,
                         answer0Correct,
                         answer1Correct,
                         answer2Correct,
                         answer3Correct) {
    const [showQuestion, setShowQuestion] = useState(true)
    const [showAnswer, setShowAnswer] = useState(false)
    const [score, setScore] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [isCorrect, setIsCorrect] = useState(false)

    function handleButtonClick(answer) {
        console.log('in display question function')
        setShowQuestion(showQuestion);
        setShowAnswer(!showAnswer);

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

    return (
        <>
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
                };
            </div>
        </>
    );
}

            export default DisplayQuestion