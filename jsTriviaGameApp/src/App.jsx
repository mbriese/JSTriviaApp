import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <h1 className="main-nav h1">Trivial Pursuit Game</h1>
        <p className="main-nav">Rules: Answer 6 questions in a category to win a game</p>
        <div className="cardsContainer">
            <div className="card">
            <p>
                Question: Which of the five Great Lakes does not have a border with Canada?
            </p>
            </div>
            <div className="card-back">
            <p>
                Answer: Lake Michigan
            </p>
            </div>
        </div>
    </>
  )
}

export default App
