

import {useState} from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function QCard({key, category, question, answer1, answer2, answer3, answer4, answer1Correct, answer2Correct, answer3Correct,
                   answer4Correct}) {

    const [showQuestion, setShowQuestion] = useState(true)
    const [showAnswer, setShowAnswer] = useState(false)
    const [answered, setAnswered] =useState(false)

QCard.propTypes = {
        key: PropTypes.number,
        category: PropTypes.string,
        question: PropTypes.string,
        answer1: PropTypes.string,
        answer2: PropTypes.string,
        answer3: PropTypes.string,
        answer4: PropTypes.string,
        answer1Correct: PropTypes.bool,
        answer2Correct: PropTypes.bool,
        answer3Correct: PropTypes.bool,
        answer4Correct: PropTypes.bool
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
                        ()=>{ handleButtonClick('answer1')}
                    }>
                        {answer1}
                    </div>
                    <div className="answer-button" onClick={
                        ()=>{ handleButtonClick('answer2')}
                    }>
                        {answer2}
                    </div>
                    <div className="answer-button"  onClick={
                        ()=>{ handleButtonClick('answer3')}
                    }>
                        {answer3}
                    </div>
                    <div className="answer-button"  onClick={
                        ()=>{ handleButtonClick('answer4')}
                    }>
                        {answer4}
                    </div>

                    <div>
                        <div className="category-button">Prev Question</div>
                        <div className="category-button">Next Question</div>

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

                    { answer1Correct &&
                        <div className="badge">Correct answer: {answer1} </div> }
                    { answer2Correct &&
                        <div className="badge">Correct answer: {answer2} </div> }
                    { answer3Correct &&
                        <div className="badge">Correct answer: {answer3} </div> }
                    { answer4Correct &&
                        <div className="badge">Correct answer: {answer4} </div> }
                </div>}

            </div>

        </div>

    )
}

export default QCard;