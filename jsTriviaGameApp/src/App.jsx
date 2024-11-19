import { useState } from 'react'

import './App.css'
import './QandAcard.jsx'
import QandAcard from "./QandAcard.jsx";
function App() {

  return (
    <>
      <div className="main-nav">
        <h1>Trivial Pursuit Game</h1>
        <p>Rules: Answer 6 questions in a category to win a game</p>
      </div>
        <div className="content">
            <QandAcard />
{/*            <div className="cardsContainer">
                <div className="card">
                    <p>
                        Question: Which of the five Great Lakes does not have a border with Canada?
                    </p>
                <p className="badge">Lake Huron</p>
                <p className="badge">Lake Erie</p>
                <p className="badge">Lake Superior</p>
                <p className="badge">Lake Ontario</p>
                <p className="badge">Lake Michigan</p>
            <div>
                <div className="category-button">Prev Question</div>
                <div className="category-button">Next Question</div>

            </div>
            </div>
                <div className="card-back">
                    <p>
                        Question: Which of the five Great Lakes does not have a border with Canada?
                    </p>
                    <p>
                        Answer: Lake Michigan
                    </p>
                </div>
            </div>*/}
        </div>
    </>
  )
}

export default App
