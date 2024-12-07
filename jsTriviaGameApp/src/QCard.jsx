// eslint-disable-next-line react/prop-types

import {useState} from "react";
function QCard({category, question, answer1, answer2, answer3, answer4, answer5}) {

    const [showQuestion, setShowQuestion] = useState(false)
    function handleClick() {
        setShowQuestion(!showQuestion)
        console.log(showQuestion)
    }
    return (
        <div onClick={
            ()=>{ handleClick()}
        }>
            <div className="cardsContainer">
                {showQuestion &&
                <div className="card" >
                    <p>Category: {category}</p>
                    <p>
                        Question: {question}
                    </p>
                    <div className="badge">
                        {answer1}
                    </div>
                    <div className="badge">
                        {answer2}
                    </div>
                    <div className="badge">
                        {answer3}
                    </div>
                    <div className="badge">
                        {answer4}
                    </div>


                    <div>
                        <div className="category-button">Prev Question</div>
                        <div className="category-button">Next Question</div>

                    </div>
                </div>
                }
                {/* show answer */}
                { !showQuestion &&
                <div className="card-back">
                    <p>
                    Question: {question}
                    </p>
                    <div className="badge">Answer: {answer5}</div>
                </div>}
            </div>

        </div>

    )
}

export default QCard;