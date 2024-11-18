import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className="main-nav">
        <h1>Trivial Pursuit Game</h1>
        <p>Rules: Answer 6 questions in a category to win a game</p>
      </div>
        <div className="content">
            <div className="cardsContainer">
                <div className="card">
                    <p>
                        Question: Which of the five Great Lakes does not have a border with Canada?
                    </p>
                <p>Lake Huron</p>
                <p>Lake Erie</p>
                <p>Lake Superior</p>
                <p>Lake Ontario</p>
                <p>Lake Michigan</p>

            </div>
            <div className="card-back">
            <p>
                Answer: Lake Michigan
            </p>
            </div>
        </div>
            </div>
    </>
  )
}

export default App
