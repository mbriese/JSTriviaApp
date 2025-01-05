

import {useState} from "react";

import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function QCard({id, category, question, answer0, answer1, answer2, answer3, answer0Correct, answer1Correct, answer2Correct,
                   answer3Correct
               })
{

    const [showQuestion, setShowQuestion] = useState(true)
    const [showAnswer, setShowAnswer] = useState(false)
    const [answered, setAnswered] =useState(false)

QCard.propTypes = {
        id: PropTypes.number,
        category: PropTypes.string,
        question: PropTypes.string,
        answer0: PropTypes.string,
        answer1: PropTypes.string,
        answer2: PropTypes.string,
        answer3: PropTypes.string,
        answer0Correct: PropTypes.bool,
        answer1Correct: PropTypes.bool,
        answer2Correct: PropTypes.bool,
        answer3Correct: PropTypes.bool
}

    function handleButtonClick(answer) {
        setShowQuestion(showQuestion)
        console.log('showing question ', showQuestion)
        setShowAnswer(!showAnswer)
        console.log('show answer ', answer)
        console.log('did I answer question ', !answered)
        setAnswered(!answered)
    }


    return (
        /* show the front of card and all answers */
        <div>
            <div className="cardsContainer">
                {!answered &&
                <div className="card" >
                    <p>Category: {category}</p>
                    <p>
                        Question: {question}
                    </p>
                    <div className="answer-button" onClick={
                        ()=>{ handleButtonClick('answer0')}
                    }>
                        {answer0}
                    </div>
                    <div className="answer-button" onClick={
                        ()=>{ handleButtonClick('answer1')}
                    }>
                        {answer1}
                    </div>
                    <div className="answer-button"  onClick={
                        ()=>{ handleButtonClick('answer2')}
                    }>
                        {answer2}
                    </div>
                    <div className="answer-button"  onClick={
                        ()=>{ handleButtonClick('answer3')}
                    }>
                        {answer3}
                    </div>


                </div>
                }
                {/* show back of card and show correct answer */}
                {answered &&
                <div className="card-back">
                    <p>
                    Question: {question}
                    </p>
                    <div>Your answer </div>

                    { answer0Correct &&
                        <div className="badge">Correct answer: {answer0} </div> }
                    { answer1Correct &&
                        <div className="badge">Correct answer: {answer1} </div> }
                    { answer2Correct &&
                        <div className="badge">Correct answer: {answer2} </div> }
                    { answer3Correct &&
                        <div className="badge">Correct answer: {answer3} </div> }
                </div>}

            </div>

        </div>

    )
}

export default QCard;