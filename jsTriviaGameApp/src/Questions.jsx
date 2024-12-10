
const questions = [
    {   category: 'Geography',
        question: 'Which of the five Great Lakes does not have a border with Canada?',
        choices: [
            {text: 'Lake Michigan', answer: true},
            {text: 'Lake Huron', answer: false},
            {text: 'Lake Ontario', answer: false},
            {text: 'Lake Superior', answer: false}]
    },
    {   category: 'Entertainment',
        question: 'Which self-proclaimed best friend of Nicole Brown Simpson wrote her posthumous ' +
            'tell-all and appeared on the The Real Housewives of Beverly Hills?',
        choices: [
            {text: 'Faye Resnick', answer: true},
            {text: 'Jane Doe', answer: false},
            {text: 'Barbara Walters', answer: false},
            {text: 'Rosa Parks', answer: false}]
    },
    {   category: 'History',
        question: 'What was Martin Luther King, Jrs birth name?',
        choices: [
            {text: 'Martin King, Jr', answer: true},
            {text: 'Marty King', answer: false},
            {text: 'Luther King', answer: false},
            {text: 'King Junior', answer: false}]
    },
    {   category: 'Arts & Literature',
        question: 'The town of Agra in India houses what famous monument to Shah Jahans ' +
            'wife?',
        choices: [
            {text: 'Taj Mahal', answer: true},
            {text: 'Qutar Minar', answer: false},
            {text: 'Charminar', answer: false},
            {text: 'Gateway of India', answer: false}]
    },
    {   category: 'Science & Nature',
        question: 'Where in the human body are the two most common areas to check for a pulse?',
        choices: [
            {text: 'Neck and Wrist', answer: true},
            {text: 'Ankle and Wrist', answer: false},
            {text: 'Finger and Neck', answer: false},
            {text: 'Neck and Ankle', answer: false}]
    },
    {   category: 'Sports & Leisure',
        question: 'A race that is longer than 26.2 miles in length is called a what?',
        choices: [
            {text: '5K', answer: false},
            {text: '10K', answer: false},
            {text: 'Half Marathon', answer: false},
            {text: 'Ultra Marathon', answer: true}]
    },

    {   category: 'Geography',
        question: 'What is the name of Earths most recent super continent, which formed about 270 ' +
            'million years ago?',
        choices: [
            {text: 'Europe', answer: false},
            {text: 'Pangaea', answer: true},
            {text: 'Pandora', answer: false},
            {text: 'Eurasia', answer: false}]
    },
    {   category: 'Entertainment',
        question: 'As a teen, Justin Timberlake appeared on which two shows that showcased his' +
            ' singing and dancing abilities?',
        choices: [
            {text: 'Americas Got Talent and Britains Got Talent', answer: false},
            {text: 'The Voice and Star Search', answer: false},
            {text: 'Star Search and The All-New Mickey Mouse Club', answer: true},
            {text: 'The Mickey Mouse Club and The Tonight Show', answer: false}]
    },
    {   category: 'History',
        question: 'Pope Francis was born in which South American city?',
        choices: [
            {text: 'Rio De Janeiro', answer: false},
            {text: 'Buenos Aires', answer: true},
            {text: 'Santiago', answer: false},
            {text: 'Sucre', answer: false}]
    },
    {   category: 'Arts & Literature',
        question: 'To which school did William Faulkner bequeath a majority of his manuscripts and personal' +
            ' papers at the time of his death?',
        choices: [
            {text: 'University of Mississippi', answer: false},
            {text: 'University of Virginia', answer: true},
            {text: 'Harvard', answer:false},
            {text: 'Yale', answer: false}]
    },
    {   category: 'Science & Nature',
        question: 'After Jupiter, what is the second-largest planet in our solar system?',
        choices: [
            {text: 'Uranus', answer: false},
            {text: 'Neptune', answer: false},
            {text: 'Saturn', answer: true},
            {text: 'Pluto', answer: false}]
    },
    {   category: 'Sports & Leisure',
        question: 'Which MMA fighter appeared on the cover of Sports Illustrated Swimsuit Issue sporting body paint?',
        choices: [
            {text: 'Ronda Rousey', answer: true},
            {text: 'Cheryl Tieges', answer: false},
            {text: 'Naomi Campbell', answer: false},
            {text: 'Cindy Crawford', answer: false}]
    },
    {   category: 'Geography',
        question: 'In which city was the first mobile phone call made?',
        choices: [
            {text: 'Chicago', answer: false},
            {text: 'New York City', answer: true},
            {text: 'Los Angeles', answer: false},
            {text: 'Miami', answer: false}]
    },
    {   category: 'Entertainment',
        question: 'Which electronic dance music duo wear helmets inspired by the film The Day the Earth Stood Still, ' +
            'to keep their ID secret?',
        choices: [
            {text: 'Disclosure', answer: false},
            {text: 'ODESZA', answer: false},
            {text: 'The Chemical Brothers', answer: false},
            {text: 'Daft Punk', answer: true}]
    },
    {   category: 'History',
        question: 'Which California Democrat became the first female Speaker of the House of Representatives?',
        choices: [
            {text: 'Diane Feinstein', answer: false},
            {text: 'Nancy Pelosi', answer: true},
            {text: 'Ruth Bader Ginsburg', answer: false},
            {text: 'Sally Ride', answer: false}]
    },
    {   category: 'Arts & Literature',
        question: 'Which R&B singer of I Feel For You sang the theme song for Reading Rainbow' +
            ', which had a 26-year run on PBS?',
        choices: [
            {text: 'Chaka Khan', answer: true},
            {text: 'Shanice', answer: false},
            {text: 'Stephanie Mills', answer: false},
            {text: 'CHIC', answer: false}]
    },
    {   category: 'Science & Nature',
        question: 'Which form of pollution means that more 75 percent of Americans cannot see ' +
            'the Milky Way?',
        choices: [
            {text: 'Smog', answer: false},
            {text: 'Water pollution', answer: false},
            {text: 'Light pollution', answer: true},
            {text: 'Air pollution', answer: false}]
    },
    {   category: 'Sports & Leisure',
        question: 'In which Arab capital is Ferrari World, an Italian race car theme park with rides' +
            ' that emulate the thrill of driving a Formula 1 machine?',
        choices: [
            {text: 'Doha', answer: false},
            {text: 'Abu Dhabi', answer: true},
            {text: 'Djibouti', answer: false},
            {text: 'Riyadh', answer: false}]
    },
    {   category: 'Geography',
        question: 'Which country is the final resting place of Dian Fossey, the mountain gorilla ' +
            'researcher who inspired the film Gorillas in the Mist?',
        choices: [
            {text: 'Kenya', answer: false},
            {text: 'Riwanda', answer: true},
            {text: 'Uganda', answer: false},
            {text: 'Congo', answer: false}]
    },
    {   category: 'Entertainment',
        question: 'What are the first names of the three Crawley sisters on Downton Abbey?',
        choices: [
            {text: 'Mary, Edith and Sybil', answer: true},
            {text: 'Cora, Violet and Sybil', answer: false},
            {text: 'Mary, Martha and Marigold', answer: false},
            {text: 'Rose, Edith and Violet', answer: false}]
    },
    {   category: 'History',
        question: 'Who accidentally shot Meriwether Lewis in the butt on his historic expedition,' +
            ' when one of his men mistook him for an elk?',
        choices: [
            {text: 'Pierre Cruzatte', answer: true},
            {text: 'George Drouillard', answer: false},
            {text: 'Charbonneau', answer: false},
            {text: 'William Clark', answer: false}]
    },
    {   category: 'Arts & Literature',
        question: 'Which of these is the tallest?',
        choices: [
            {text: 'The Colossus of Rhodes', answer: false},
            {text: 'The Statue of Liberty', answer: true},
            {text: 'Athena Parthenos', answer: false},
            {text: 'Colossal statue of the Sun' }]
    },
    {   category: 'Science & Nature',
        question: 'What was the first Internet search engine called?',
        choices: [
            {text: 'Archie', answer: true},
            {text: 'HotBot', answer: false},
            {text: 'Ask Jeeves', answer: false},
            {text: 'Infoseek', answer: false}]
    },
    {   category: 'Sports & Leisure',
        question: 'What Ben & Jerrys popular ice cream flavor of peanut butter, pretzels, and ' +
            'fudge was renamed in 2009 to support same-sex marriage?',
        choices: [
            {text: 'Chubby Hubby', answer: true},
            {text: 'Chunky Monkey', answer: false},
            {text: 'Phish Food', answer: false},
            {text: 'Cherry Garcia', answer: false}]
    },
    {   category: 'Geography',
        question: 'Which Scottish competition includes contests in Highland dancing, hammer throwing, ' +
            'and caber tossing?',
        choices: [
            {text: 'The Tartan Games', answer: false},
            {text: 'Scottish Curling', answer: false},
            {text: 'Highland Games', answer: true},
            {text: 'Scottish Whiskey Competition', answer: false}]
    },
    {   category: 'Entertainment',
        question: 'With what part of his body does Mario hit those overhead bricks and blocks ' +
            'during a Nintendo game?',
        choices: [
            {text: 'Hand', answer: true},
            {text: 'Head', answer: false},
            {text: 'Foot', answer: false},
            {text: 'Heart', answer: false}]
    },
    {   category: 'History',
        question: 'Which item made for popes, cardinals, and bishops by Gammerilli tailors since 1798 is' +
            ' now available online for a mere $27 per pair?',
        choices: [
            {text: 'Shirts', answer: false},
            {text: 'Socks', answer: true},
            {text: 'Underwear', answer: false},
            {text: 'Gloves', answer: false}]
    },
    {   category: 'Arts & Literature',
        question: 'What type of poem shares its name with an Irish town?',
        choices: [
            {text: 'Waterford', answer: false},
            {text: 'Bray', answer: false},
            {text: 'Clones', answer: false},
            {text: 'Limerick', answer: true}]
    },
    {   category: 'Science & Nature',
        question: 'Which poisonous brown spider sports a violin-shaped mark on its head and neck,' +
            ' which explains its musical nickname, fiddleback spider?',
        choices: [
            {text: 'Wolf spider', answer: false},
            {text: 'Black widow spider', answer: false},
            {text: 'Brown recluse spider', answer: true},
            {text: 'Hobo spider', answer: false}]
    },
    {   category: 'Sports & Leisure',
        question: 'In tennis, when players are tied 40-40, its called what?',
        choices: [
            {text: 'Ace', answer: false},
            {text: 'Deuce', answer: true},
            {text: 'Ad-in', answer: false},
            {text: 'Ad-out', answer: false}]
    },
    {   category: 'Geography',
        question: 'Which Western coastal state has both the highest and the lowest points in the ' +
            'continental U.S. ?',
        choices: [
            {text: 'California', answer: true},
            {text: 'Oregon', answer: false},
            {text: 'Washington', answer: false},
            {text: 'Florida', answer: false}]
    },
    {   category: 'Entertainment',
        question: 'What 90s TV drama about five siblings who inherit a restaurant launched the ' +
            'careers of Matthew Fox and Jennifer Love Hewitt?',
        choices: [
            {text: 'Home Improvement', answer: false},
            {text: 'Family Matters', answer: false},
            {text: 'Party of Five', answer: true},
            {text: 'Fresh Prince of Bel Air', answer: false}]
    },
    {   category: 'History',
        question: 'What was the first space shuttle to be launched into space by the US?',
        choices: [
            {text: 'Columbia', answer: true},
            {text: 'Independence', answer: false},
            {text: 'Sputnik', answer: false},
            {text: 'Mercury', answer: false}]
    },
    {   category: 'Arts & Literature',
        question: 'Which famous Da Vinci painting was stolen from the Louvre by an Italian in' +
            ' 1911, who kept it hidden for two years?',
        choices: [
            {text: 'Last Supper', answer: false},
            {text: 'Vitruvian Man', answer: false},
            {text: 'Mona Lisa', answer: true},
            {text: 'Lady with an Ermine', answer: false}]
    },
    {   category: 'Science & Nature',
        question: 'Which primate is the worlds largest tree-dwelling mammal, weighing in at ' +
            'up to 200 pounds?',
        choices: [
            {text: 'Gorilla', answer: false},
            {text: 'Koalas', answer: false},
            {text: 'Orangutan', answer: true},
            {text: 'Silky Anteater', answer: false}]
    },
    {   category: 'Sports & Leisure',
        question: 'In England, medieval kings restricted most sports on Sundays so that men would ' +
            'engage more in which crucial sport-jousting, fencing or archery?',
        choices: [
            {text: 'Jousting', answer: false},
            {text: 'Fencing', answer: false},
            {text: 'Archery', answer: true},
            {text: 'War hammers', answer: false}]
    }

];

export default questions;
