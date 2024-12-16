

import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import questions from "./Questions.jsx";
import {useState} from "react";

const categories = ['Geography', 'Entertainment', 'History', 'Arts & Literature', 'Science & Nature', 'Sports & Leisure'];



function App() {
    const [filteredQuestions, setFilteredQuestions] = useState(questions)



    const handleClick = (category) => {
        console.log(category)
        const myFilteredCategoryQuestions = questions.filter(questions => questions.category === category)
        setFilteredQuestions(myFilteredCategoryQuestions)
    }

    const handleGameTypeClick=(gameType)=> {
        console.log(gameType)
    }

  return (
      <>
          <div className="main-nav">
              <h1>Trivial Pursuit Game</h1>
          </div>
          <div className='container-lg'>
              <div className='game-type-nav'>Quick game: 6 questions, 1 from each category
                  <button
                      className='main-nav-button' onClick={()=>handleGameTypeClick('quick')}>
                      Click to Play Quick Game!
                  </button>
              </div>
              <div className='game-type-nav'>
                  Expert category game: 6 questions from 1 category
                  <button
                      className='main-nav-button'  onClick={()=>handleGameTypeClick('expert')}>
                      Click to Play Expert Game!
                  </button>
              </div>
              <div className='game-type-nav'>Full game: Answer 6 questions from each category
                  <button
                      className='main-nav-button'  onClick={()=>handleGameTypeClick('full')}>
                      Click to Play Full Game!
                  </button>
              </div>
          </div>

           <div className="cardsContainer cards">
              <h3>Select a category</h3>

              <div className='category-nav'>
                  {categories.map((category) => {
                      return (
                          <button className='category-button'
                              key={category}
                              onClick={
                                  () => {
                                      handleClick(category)
                                  }
                              }
                          >{category}
                          </button>
                      )
                  })}

              </div>


          </div>
          <div className="content">
              {filteredQuestions.map(questions => {
                  return (

                      <QCard
                          key={questions.question}
                          category={questions.category}
                          question={questions.question}
                          answer1 = {questions.choices[0].text}
                          answer2 = {questions.choices[1].text}
                          answer3 = {questions.choices[2].text}
                          answer4 = {questions.choices[3].text}
                          answer1Correct = {questions.choices[0].answer}
                          answer2Correct = {questions.choices[1].answer}
                          answer3Correct = {questions.choices[2].answer}
                          answer4Correct = {questions.choices[3].answer}
                      />)
              })}

          </div>
      </>
  )
}

export default App
