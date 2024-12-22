

import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import questions from "./Questions.jsx";
import {useState} from "react";

const categories = ['All', 'Geography', 'Entertainment', 'History', 'Arts & Literature', 'Science & Nature', 'Sports & Leisure'];
const gameType = ['quick', 'expert', 'full'];


function App() {
    const [filteredQuestions, setFilteredQuestions] = useState(questions)
    const [selectGameType, setGameType] = useState(gameType)


    const handleClick = (category) => {
        if (category === 'All') {
            setFilteredQuestions(questions)
        } else {
            console.log(category)
            const myFilteredCategoryQuestions = questions.filter(questions => questions.category === category)
            setFilteredQuestions(myFilteredCategoryQuestions)
        }
    }

    const handleGameTypeClick=(selectGameType, count, category)=> {
        setGameType(selectGameType)
        console.log('playing game type ', selectGameType)
        console.log('number of questions ', count)
        console.log('category ', category)
        handleClick(category)
    }

  return (
      <>
          <div className="main-nav">
              <h1>Trivial Pursuit Game</h1>
          </div>
          <div className='container-lg'>
              <div className='game-type-nav'>Quick game: 6 questions, 1 from each category
                  <button
                      className='main-nav-button' onClick={()=>handleGameTypeClick('quick', 6, "All")}>
                      Click to Play Quick Game!
                  </button>
              </div>
              <div className='game-type-nav'>
                  Expert category game: 6 questions from 1 category
                  <button
                      className='main-nav-button'  onClick={()=>handleGameTypeClick('expert', 6, "All")}>
                      Click to Play Expert Game!
                  </button>
              </div>
              <div className='game-type-nav'>Full game: Answer 6 questions from each category
                  <button
                      className='main-nav-button'  onClick={()=>handleGameTypeClick('full', 36, "All")}>
                      Click to Play Full Game!
                  </button>
              </div>
          </div>


          { (selectGameType.toString() === 'expert') &&
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
          }
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
