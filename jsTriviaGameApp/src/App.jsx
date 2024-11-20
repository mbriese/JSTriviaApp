

import './App.css'
import './QCard.jsx'
import QCard from "./QCard.jsx";

const categories = ['Geography', 'Entertainment', 'History', 'Arts & Leisure', 'Science & Nature', 'Sports & Leisure'];

const triviaQuestions = [
    {category: 'Geography', question: 'Which of the five Great Lakes does not have a border with Canada?', answer: 'Lake Michigan'},
    {category: 'Entertainment', question: 'Which self-proclaimed best friend of Nicole Brown Simpson wrote her posthumous tell-all and appeared on the The Read Housewives of Beverly Hills?', answer: 'Faye Resnick'},
    {category: 'History', question: 'What was Martin Luther King, Jrs birth name?', answer: 'Martin King, Jr'},
    {category: 'Arts & Literature', question: 'The town of Agra in India houses what famous monument to Shah Jahans wife?', answer: 'Taj Mahal'},
    {category: 'Science & Nature', question: 'Where in the human body are the two most common areas to check for a pulse?', answer: 'Neck and Wrist'},
    {category: 'Sports & Leisure', question: 'A race that is longer than 26.2 miles in length is called a what?', answer: 'Ultra marathon-Typical race lengths are 31 to 100 miles long, but can extend much further'},

    {category: 'Geography', question: 'What is the name of Earths most recent super continent, which formed about 270 million years ago?', answer: 'Pangaea-Each continent then went its own merry way about 70 million years later.'},
    {category: 'Entertainment', question: 'As a teen, Justin Timberlake appeared on which two shows that showcased his singing and dancing abilities?', answer: 'Star Search and The All-New Mickey Mouse Club'},
    {category: 'History', question: 'Pope Francis was born in which South American city?', answer: 'Buenos Aires'},
    {category: 'Arts & Literature', question: 'To which school did William Faulkner bequeath a majority of his manuscripts and personal papers at the time of his death?', answer: 'University of Virginia'},
   {category: 'Science & Nature', question: 'After Jupiter, what is the second-largest planet in our solar system?', answer: 'Saturn'},
   {category: 'Sports & Leisure', question: 'Which MMA fighter appeared on the cover of Sports Illustrated Swimsuit Issue sporting body paint?', answer: 'Ronda Rousey'},

   {category: 'Geography', question: 'In which city was the first mobile phone call made?', answer: 'New York City'},
   {category: 'Entertainment', question: 'Which electronic dance music duo wear helmets inspired by the film The Day the Earth Stood Still, to keep their ID secret?', answer: 'Daft Punk'},
   {category: 'History', question: 'Which California Democrat became the first female Speaker of the House of Representatives?', answer: 'Nancy Pelosi'},
   {category: 'Arts & Literature', question: 'Which R&B singer of I Feel For You sang the theme song for Reading Rainbow, which had a 26-year run on PBS?', answer: 'Chaka Khan'},
   {category: 'Science & Nature', question: 'Which form of pollution means that more 75 percent of Americans cannot see the Milky Way?', answer: 'Light pollution'},
   {category: 'Sports & Leisure', question: 'In which Arab capital is Ferrari World, an Italian race car theme park with rides that emulate the thrill of driving a Formula 1 machine?', answer: 'Abu Dhabi'},

   {category: 'Geography', question: 'Which country is the final resting place of Dian Fossey, the mountain gorilla researcher who inspired the film Gorillas in the Mist?', answer: 'Riwanda-She is buried next to her favorite gorilla Digit.'},
   {category: 'Entertainment', question: 'What are the first names of the three Crawley sisters on Downton Abbey?', answer: 'Mary, Edith and Sybil'},
   {category: 'History', question: 'Meriwether Lewis was accidentally shot in the butt on his historic expedition, when one of his men mistook him for an elk. True or False?', answer: 'True-it was a minor, but painful, injury.'},
   {category: 'Arts & Literature', question: 'The Statue of Liberty is taller than the Colssus of Rhodes, one of the Seven Wonders of the Ancient World. True or False?', answer: 'True-The Colossus was 160 ft tall on his pedastal; Liberty is 305 ft tall on hers'},
   {category: 'Science & Nature', question: 'What was the first Internet search engine called?', answer: 'Archie-Launched in 1990, it predated the Google search engine by eight years'},
   {category: 'Sports & Leisure', question: 'What Ben & Jerrys popular ice cream flavor of peanut butter, pretzels, and fudge was renamed in 2009 to support same-sex marriage?', answer: 'Chubby Hubby-it became Hubby Hubby for the month of September'},

   {category: 'Geography', question: 'Which Scottish competition includes contests in Highland dancing, hammer throwing, and caber tossing?', answer: 'Highland Games-The caber looks a lot like a telegraph pole.'},
   {category: 'Entertainment', question: 'With what part of his body does Mario hit those overhead bricks and blocks during a Nintendo game?', answer: 'Hand-If you look closely, you will notice he is not actually whacking his head on them.'},
   {category: 'History', question: 'Which item made for popes, cardinals, and bishops by Gammerilli tailors since 1798 is now available online for a mere $27 per pair?', answer: 'Socks-They come in cardinal red, bishop purple, and priest black.'},
   {category: 'Arts & Literature', question: 'What type of poem shares its name with an Irish town?', answer: 'Limerick'},
   {category: 'Science & Nature', question: 'Which poisonous brown spider sports a violin-shaped mark on its head and neck, which explains its musical nickname, fiddleback spider?', answer: 'Brown recluse spider'},
   {category: 'Sports & Leisure', question: 'In tennis, when players are tied 40-40, its called what?', answer: 'Deuce'},

   {category: 'Geography', question: 'Which Western coastal state has both the highest and the lowest points in the continental U.S. ?', answer: 'California-Mt. Whitney is the highest, and Death Valley, 85 miles away, is the lowest.'},
   {category: 'Entertainment', question: 'What 90s TV drama about five siblings who inherit a restaurant launched the careers of Matthew Fox and Jennifer Love Hewitt?', answer: 'Party of Five-The Salinger kids had a six-season run on FOX'},
   {category: 'History', question: 'What was the first space shuttle to be launched into space by the US?', answer: 'Columbia-in 1981'},
   {category: 'Arts & Literature', question: 'Which famous Da Vinci painting was stolen from the Louvre by an Italian in 1911, who kept it hidden for two years?', answer: 'Mona Lisa-The thief claimed that national pride inspired him to return it to its homeland.'},
   {category: 'Science & Nature', question: 'Which primate is the worlds largest tree-dwelling mammal, weighing in at up to 200 pounds?', answer: 'Orangutan'},
   {category: 'Sports & Leisure', question: 'In England, medievel kings restricted most sports on Sundays so that men would engage more in which crucial sport-jousting, fencing or archery?', answer: 'Archery-it was a military skill important to national defense.'}

];

function App() {

  const handleClick=()=>{
      console.log("click handler")
  }

  return (
    <>
      <div className="main-nav">
        <h1>Trivial Pursuit Game</h1>
          <p>Select a category</p>
          <div className='category-nav'>
              {categories.map((category)=>{
                  return (
                      <button
                          key={category}
                          onClick={
                              handleClick
                          }
                      >{category}
                      </button>
              )
              })}

          </div>
        <p>Rules: Answer 6 questions in a category to win a game</p>
      </div>
        <div className="content">
            {triviaQuestions.map(questions => {
            return(

            <QCard
                key={questions.question}
                category={questions.category}
                question={questions.question}
                answer={questions.answer}
            />)
            })}

        </div>
    </>
  )
}

export default App
