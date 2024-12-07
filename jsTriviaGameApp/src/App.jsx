

import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";
import {useState} from "react";

const categories = ['Random', 'Geography', 'Entertainment', 'History', 'Arts & Literature', 'Science & Nature', 'Sports & Leisure'];

const triviaQuestions = [
    {category: 'Geography', question: 'Which of the five Great Lakes does not have a border with Canada?',
        answer1: 'Lake Michigan', answer2: 'Lake Huron', answer3: 'Lake Ontario', answer4: 'Lake Superior', answer5: 'Lake Michigan',
        },
    {category: 'Entertainment', question: 'Which self-proclaimed best friend of Nicole Brown Simpson wrote her posthumous ' +
            'tell-all and appeared on the The Real Housewives of Beverly Hills?', answer1: 'Faye Resnick',
        answer2: 'Jane Doe', answer3: 'Barbara Walters', answer4: 'Rosa Parks', answer5: 'Faye Resnick'},
    {category: 'History', question: 'What was Martin Luther King, Jrs birth name?', answer1: 'Martin King, Jr',
        answer2: 'Marty King', answer3: 'Luther King', answer4: 'King Junior', answer5: 'Martin King, Jr'},
    {category: 'Arts & Literature', question: 'The town of Agra in India houses what famous monument to Shah Jahans ' +
            'wife?', answer1: 'Taj Mahal', answer2: 'Qutar Minar', answer3: 'Charminar', answer4: 'Gateway of India',
        answer5: 'Taj Mahal'},
    {category: 'Science & Nature', question: 'Where in the human body are the two most common areas to check for a pulse?',
        answer1: 'Neck and Wrist', answer2: 'Ankle and Wrist', answer3: 'Finger and Neck', answer4: 'Neck and Ankle', answer5: 'Neck and Wrist'},
    {category: 'Sports & Leisure', question: 'A race that is longer than 26.2 miles in length is called a what?', answer1: '5K', answer2: '10K',
        answer3: 'Half Marathon', answer4: 'Ultra Marathon', answer5: 'Ultra Marathon'},

    {category: 'Geography', question: 'What is the name of Earths most recent super continent, which formed about 270 ' +
            'million years ago?',
        answer1: 'Europe', answer2: 'Pangaea', answer3: 'Pandora', answer4: 'Eurasia', answer5: 'Pangaea'},
    {category: 'Entertainment', question: 'As a teen, Justin Timberlake appeared on which two shows that showcased his' +
            ' singing and dancing abilities?', answer1: 'Americas Got Talent and Britains Got Talent', answer2: 'The Voice and Star Search',
        answer3: 'Star Search and The All-New Mickey Mouse Club', answer4: 'The Mickey Mouse Club and The Tonight Show', answer5:
            'Star Search and The All-New Mickey Mouse Club'},
    {category: 'History', question: 'Pope Francis was born in which South American city?', answer1: 'Rio De Janeiro', answer2: 'Buenos Aires',
        answer3: 'Santiago', answer4: 'Sucre', answer5: 'Buenos Aires'},
    {category: 'Arts & Literature', question: 'To which school did William Faulkner bequeath a majority of his manuscripts and personal' +
            ' papers at the time of his death?', answer1: 'University of Mississippi', answer2: 'University of Virginia',
        answer3: 'Harvard', answer4: 'Yale', answer5: 'University of Virginia'},
   {category: 'Science & Nature', question: 'After Jupiter, what is the second-largest planet in our solar system?', answer1: 'Uranus',
       answer2: 'Neptune', answer3: 'Saturn', answer4: 'Pluto', answer5: 'Saturn'},
   {category: 'Sports & Leisure', question: 'Which MMA fighter appeared on the cover of Sports Illustrated Swimsuit Issue sporting body paint?', answer1: 'Ronda Rousey',
       answer2: 'Cheryl Tieges', answer3: 'Naomi Campbell', answer4: 'Cindy Crawford', answer5: 'Ronda Rousey'},

   {category: 'Geography', question: 'In which city was the first mobile phone call made?', answer1: 'Chicago', answer2: 'New York City',
       answer3: 'Los Angeles', answer4: 'Miami', answer5: 'New York City'},
   {category: 'Entertainment', question: 'Which electronic dance music duo wear helmets inspired by the film The Day the Earth Stood Still, to keep their ID secret?',
       answer1: 'Disclosure', answer2: 'ODESZA', answer3: 'The Chemical Brothers', answer4: 'Daft Punk', answer5: 'Daft Punk'},
   {category: 'History', question: 'Which California Democrat became the first female Speaker of the House of Representatives?',  answer1: 'Diane Feinstein', answer2: 'Nancy Pelosi',
       answer3: 'Ruth Bader Ginsburg',  answer4: 'Sally Ride',  answer5: 'Nancy Pelosi'},
   {category: 'Arts & Literature', question: 'Which R&B singer of I Feel For You sang the theme song for Reading Rainbow' +
           ', which had a 26-year run on PBS?', answer1: 'Chaka Khan',
       answer2: 'Shanice', answer3: 'Stephanie Mills', answer4: 'CHIC', answer5: 'Chaka Khan'},
   {category: 'Science & Nature', question: 'Which form of pollution means that more 75 percent of Americans cannot see ' +
           'the Milky Way?', answer1: 'Smog', answer2: 'Water pollution', answer3: 'Light pollution', answer4: 'Air pollution',
       answer5: 'Light pollution'},
   {category: 'Sports & Leisure', question: 'In which Arab capital is Ferrari World, an Italian race car theme park with rides' +
           ' that emulate the thrill of driving a Formula 1 machine?', answer1: 'Doha', answer2: 'Abu Dhabi', answer3: 'Djibouti',
       answer4: 'Riyadh', answer5: 'Abu Dhabi'},

   {category: 'Geography', question: 'Which country is the final resting place of Dian Fossey, the mountain gorilla ' +
           'researcher who inspired the film Gorillas in the Mist?', answer1: 'Kenya', answer2: 'Riwanda',
       answer3: 'Uganda', answer4: 'Congo', answer5: 'Riwanda'},
   {category: 'Entertainment', question: 'What are the first names of the three Crawley sisters on Downton Abbey?',
       answer1: 'Mary, Edith and Sybil', answer2: 'Cora, Violet and Sybil', answer3: 'Mary, Martha and Marigold',
       answer4: 'Rose, Edith and Violet',answer5: 'Mary, Edith and Sybil'},
   {category: 'History', question: 'Who accidentally shot Meriwether Lewis in the butt on his historic expedition,' +
           ' when one of his men mistook him for an elk?', answer1: 'Pierre Cruzatte', answer2: 'George Drouillard',
       answer3: 'Charbonneau', answer4: 'William Clark', answer5: 'Pierre Cruzatte'},
   {category: 'Arts & Literature', question: 'Which of these is the tallest?', answer1: 'The Colossus of Rhodes',
       answer2: 'The Statue of Liberty', answer3: 'Athena Parthenos', answer4: 'Colossal statue of the Sun',
       answer5: 'The Statue of Liberty'},
   {category: 'Science & Nature', question: 'What was the first Internet search engine called?',
       answer1: 'Archie', answer2: 'HotBot', answer3: 'Ask Jeeves', answer4: 'Infoseek', answer5: 'Archie'},
   {category: 'Sports & Leisure', question: 'What Ben & Jerrys popular ice cream flavor of peanut butter, pretzels, and ' +
           'fudge was renamed in 2009 to support same-sex marriage?',
       answer1: 'Chubby Hubby', answer2: 'Chunky Monkey', answer3: 'Phish Food', answer4: 'Cherry Garcia', answer5: 'Chubby Hubby'},

   {category: 'Geography', question: 'Which Scottish competition includes contests in Highland dancing, hammer throwing, ' +
           'and caber tossing?', answer1: 'The Tartan Games', answer2: 'Scottish Curling', answer3: 'Highland Games',
       answer4: 'Scottish Whiskey Competition', answer5: 'Highland Games'},
   {category: 'Entertainment', question: 'With what part of his body does Mario hit those overhead bricks and blocks ' +
           'during a Nintendo game?', answer1: 'Hand', answer2: 'Head', answer3: 'Foot', answer4: 'Heart', answer5: 'Hand'},
   {category: 'History', question: 'Which item made for popes, cardinals, and bishops by Gammerilli tailors since 1798 is' +
           ' now available online for a mere $27 per pair?', answer1: 'Shirts', answer2: 'Socks', answer3: 'Underwear',
       answer4: 'Gloves', answer5: 'Socks'},
   {category: 'Arts & Literature', question: 'What type of poem shares its name with an Irish town?', answer1: 'Waterford',
       answer2: 'Bray', answer3: 'Clones', answer4: 'Limerick', answer5: 'Limerick'},
   {category: 'Science & Nature', question: 'Which poisonous brown spider sports a violin-shaped mark on its head and neck,' +
           ' which explains its musical nickname, fiddleback spider?', answer1: 'Wolf spider', answer2: 'Black widow spider', answer3: 'Brown recluse spider',
        answer4: 'Hobo spider', answer5: 'Brown recluse spider'},
   {category: 'Sports & Leisure', question: 'In tennis, when players are tied 40-40, its called what?', answer1: 'Ace', answer2: 'Deuce',
       answer3: 'Ad-in', answer4: 'Ad-out', answer5: 'Deuce'},

   {category: 'Geography', question: 'Which Western coastal state has both the highest and the lowest points in the ' +
           'continental U.S. ?', answer1: 'California', answer2: 'Oregon', answer3: 'Washington', answer4: 'Florida', answer5: 'California'},
   {category: 'Entertainment', question: 'What 90s TV drama about five siblings who inherit a restaurant launched the ' +
           'careers of Matthew Fox and Jennifer Love Hewitt?', answer1: 'Home Improvement', answer2: 'Family Matters',
       answer3: 'Party of Five', answer4: 'Fresh Prince of Bel Air', answer5: 'Party of Five'},
   {category: 'History', question: 'What was the first space shuttle to be launched into space by the US?',
       answer1: 'Columbia', answer2: 'Independence', answer3: 'Sputnik', answer4: 'Mercury', answer5:'Columbia'},
   {category: 'Arts & Literature', question: 'Which famous Da Vinci painting was stolen from the Louvre by an Italian in' +
           ' 1911, who kept it hidden for two years?', answer1: 'Last Supper', answer2: 'Vitruvian Man', answer3: 'Mona Lisa',
       answer4: 'Lady with an Ermine', answer5: 'Mona Lisa'},
   {category: 'Science & Nature', question: 'Which primate is the worlds largest tree-dwelling mammal, weighing in at ' +
           'up to 200 pounds?', answer1: 'Gorilla', answer2: 'Koalas', answer3: 'Orangutan', answer4: 'Silky Anteater', answer5: 'Orangutan'},
   {category: 'Sports & Leisure', question: 'In England, medieval kings restricted most sports on Sundays so that men would ' +
           'engage more in which crucial sport-jousting, fencing or archery?', answer1: 'Jousting', answer2: 'Fencing', answer3: 'Archery',
       answer4: 'War hammers', answer5: 'Archery'}

];


function App() {
    const [filteredTriviaQuestions, setFilteredTriviaQuestions] = useState(triviaQuestions)



    const handleClick=(category)=> {
      console.log(category)
      // filter all questions by category
      if (category === "Random") {
          setFilteredTriviaQuestions(triviaQuestions)
      } else {
          // return only requested triviaQuestions
          const myFilteredCategoryQuestions = triviaQuestions.filter(questions => questions.category === category)
          setFilteredTriviaQuestions(myFilteredCategoryQuestions)
      }
  }

  return (
      <>
          <div className="main-nav">
              <h1>Trivial Pursuit Game</h1>
          </div>
          <div className='container-lg'>
              <div className='main-nav p-5'>Quick game: 6 questions, 1 from each category
                  <button onClick={
                      handleClick
                  }
                      className='main-nav-button'>
                      Click to Play Quick Game!
                  </button>
              </div>
              <div className='main-nav p-5'>Expert category game: 6 questions from 1 category
                  <button
                      className='main-nav-button'>
                      Click to Play Expert Game!
                  </button>
              </div>
              <div className='main-nav p-5'>Full game: Answer 6 questions from each category
                  <button
                      className='main-nav-button'>
                      Click to Play Full Game!
                  </button>
              </div>
          </div>

          <div className="cardsContainer cards">
              <h1>Select a category</h1>

              <div className='category-nav'>
                  {categories.map((category) => {
                      return (
                          <button
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
              {filteredTriviaQuestions.map(questions => {
                  return (

                      <QCard
                          key={questions.question}
                          category={questions.category}
                          question={questions.question}
                          answer1={questions.answer1}
                          answer2={questions.answer2}
                          answer3={questions.answer3}
                          answer4={questions.answer4}
                          answer5={questions.answer5}
                      />)
              })}

          </div>
      </>
  )
}

export default App
