"use client"

import { useState, useEffect } from "react"

const emojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"]

interface Card {
  id: number
  emoji: string
  flipped: boolean
  matched: boolean
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    resetGame()
  }, [])

  function resetGame() {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false,
      }))
    setCards(shuffledCards)
    setFlippedCards([])
    setMoves(0)
  }

  function handleCardClick(id: number) {
    if (flippedCards.length === 2) return
    if (cards[id].matched) return

    const newCards = [...cards]
    newCards[id].flipped = true
    setCards(newCards)

    setFlippedCards([...flippedCards, id])

    if (flippedCards.length === 1) {
      setMoves(moves + 1)
      if (cards[flippedCards[0]].emoji === newCards[id].emoji) {
        newCards[flippedCards[0]].matched = true
        newCards[id].matched = true
        setCards(newCards)
        setFlippedCards([])
      } else {
        setTimeout(() => {
          newCards[flippedCards[0]].flipped = false
          newCards[id].flipped = false
          setCards(newCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  const allMatched = cards.every((card) => card.matched)

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <span className="font-bold">Moves:</span> {moves}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`w-16 h-16 text-2xl flex items-center justify-center rounded ${
              card.flipped || card.matched ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleCardClick(card.id)}
            disabled={card.flipped || card.matched}
          >
            {card.flipped || card.matched ? card.emoji : ""}
          </button>
        ))}
      </div>
      {allMatched && <div className="mb-4 text-lg font-bold text-green-500">Congratulations! You won!</div>}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  )
}

