

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
            <QandAcard category='Geography' question='Question: Which of the five Great Lakes does not have a border with Canada?' answer='Answer: Lake Michigan'/>

        </div>
    </>
  )
}

export default App
