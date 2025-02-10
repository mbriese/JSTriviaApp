


import PropTypes from "prop-types";
DisplayCorrectAnswer.propTypes = {
    selectedAnswer: PropTypes.string,
    answer0Correct: PropTypes.bool,
    answer1Correct: PropTypes.bool,
    answer2Correct: PropTypes.bool,
    answer3Correct: PropTypes.bool,
    answer0: PropTypes.string,
    answer1: PropTypes.string,
    answer2: PropTypes.string,
    answer3: PropTypes.string,
    incorrectScore: PropTypes.number,
    totalScore: PropTypes.number,
    numberOfQuestions: PropTypes.number
}

function DisplayCorrectAnswer({ answer0Correct, answer1Correct, answer2Correct, answer3Correct, answer0, answer1,
                                  answer2, answer3, incorrectScore, totalScore, numberOfQuestions}) {
    return (
        <>

            {answer0Correct
                && <div className='scoreContainer'>
                    <div className='correct-answer-button'>Correct answer: {answer0}</div>
                    <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                    <div>Incorrect Score: {incorrectScore}</div>
                </div>}
            {answer1Correct
                && <div className='scoreContainer'>
                    <div className='correct-answer-button'>Correct answer: {answer1}</div>
                    <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                    <div>Incorrect Score: {incorrectScore}</div>
                </div>}
            {answer2Correct
                && <div className='scoreContainer'>
                    <div className='correct-answer-button'>Correct answer: {answer2}</div>
                    <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                    <div>Incorrect Score: {incorrectScore}</div>
                </div>}
            {answer3Correct
                && <div className='scoreContainer'>
                    <div className='correct-answer-button'>Correct answer: {answer3}</div>
                    <div>Total Score: {totalScore} of {numberOfQuestions}</div>
                    <div>Incorrect Score: {incorrectScore}</div>
                </div>}
        </>

    );
}

export default DisplayCorrectAnswer;