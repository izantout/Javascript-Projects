import {useEffect, useState} from 'react'
import './App.css'
import Card from './components/card/card'

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const [dissabled, setDissabled] = useState(false)

  // Shuffle the cards and start a new game
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() =>Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random()}))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffleCards)
      setTurns(0)
  }

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Reset everything and update turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
    setDissabled(false)
  }

  // Compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDissabled(true)

      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // Start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  console.log(cards)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped = {card === choiceOne || card === choiceTwo || card.matched}
            dissabled={dissabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App