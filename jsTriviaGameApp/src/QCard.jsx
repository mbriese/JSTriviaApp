

function QCard({key, category, question, answer}) {
    return (
        <div>
            <div className="cardsContainer">
                <div className="card">
                    <p>Category: {category}</p>
                    <p>
                       Question: {question}
                    </p>
                    <p>Answer: {answer}</p>

                    <div>
                        <div className="category-button">Prev Question</div>
                        <div className="category-button">Next Question</div>

                    </div>
                </div>
                <div className="card-back">
                    <p>
                        Question: {question}
                    </p>
                    <p>
                        Answer: {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QCard;