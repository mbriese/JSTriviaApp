

import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import questions from "./Questions.jsx";
import {useState} from "react";

const categories = ['All', 'Geography', 'Entertainment', 'History', 'Arts & Literature', 'Science & Nature', 'Sports & Leisure'];
const gameType = ['quick', 'expert', 'full', 'null'];


function App() {
    const [filteredQuestions, setFilteredQuestions] = useState(questions)
    const [selectGameType, setGameType] = useState('')
    // Track current question index
    const [questionIndex, setQuestionIndex] = useState(0)

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

    const handleNextQuestion = () => {
        setQuestionIndex((prevQuestionIndex) => (prevQuestionIndex +1) %
        questions.length);
    };

    const handlePrevQuestion = () => {
        setQuestionIndex((prevQuestionIndex) => (prevQuestionIndex -1) %
        questions.length);
    };

  return (
      <>
          <div className="main-nav">
              <h1>Trivial Pursuit Game</h1>
          </div>
            <div className='container-lg'>
                {(selectGameType.toString() === 'null') &&
                  <div className='game-type-nav'>Quick game: 6 questions, 1 from each category
                  <button
                      className='main-nav-button' onClick={() => handleGameTypeClick('quick', 6, "All")}>
                      Click to Play Quick Game!
                  </button>
              </div>}

                {(selectGameType.toString() === 'null') &&
                    <div className='game-type-nav'>
                  Expert category game: 6 questions from 1 category
                  <button
                      className='main-nav-button' onClick={() => handleGameTypeClick('expert', 6, "All")}>
                      Click to Play Expert Game!
                  </button>
              </div>
                }
                {(selectGameType.toString() === 'null') &&
              <div className='game-type-nav'>Full game: Answer 6 questions from each category
                  <button
                      className='main-nav-button' onClick={() => handleGameTypeClick('full', 36, "All")}>
                      Click to Play Full Game!
                  </button>
              </div>
                }
          </div>


          {(selectGameType.toString() === 'expert') &&
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
          {(selectGameType.toString() !== 'null') &&
              <div className="content">
                  {filteredQuestions.slice(questionIndex, questionIndex+1).map((questions, questionIndex) => {
                      return (
                          <QCard
                              key={questionIndex}
                              id={questions.id}
                              category={questions.category}
                              question={questions.question}
                              answer0={questions.choices[0].text}
                              answer1={questions.choices[1].text}
                              answer2={questions.choices[2].text}
                              answer3={questions.choices[3].text}
                              answer0Correct={questions.choices[0].answer}
                              answer1Correct={questions.choices[1].answer}
                              answer2Correct={questions.choices[2].answer}
                              answer3Correct={questions.choices[3].answer}
                          />)
                  })}
                  <div>
                      <button onClick={handlePrevQuestion} disabled={questionIndex===0}>Prev Question</button>
                      <button onClick={handleNextQuestion} disabled={questionIndex===6}>Next Question</button>
                  </div>
              </div>}

      </>
  )
}

export default App;
