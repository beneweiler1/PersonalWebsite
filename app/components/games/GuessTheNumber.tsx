"use client"

import { useState, useEffect } from "react"

export default function GuessTheNumber() {
  const [targetNumber, setTargetNumber] = useState(0)
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    resetGame()
  }, [])

  function resetGame() {
    setTargetNumber(Math.floor(Math.random() * 100) + 1)
    setGuess("")
    setMessage("Guess a number between 1 and 100")
    setAttempts(0)
    setGameOver(false)
  }

  function handleGuess() {
    const guessNumber = Number.parseInt(guess)
    if (isNaN(guessNumber)) {
      setMessage("Please enter a valid number")
      return
    }

    setAttempts(attempts + 1)

    if (guessNumber === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts!`)
      setGameOver(true)
    } else if (guessNumber < targetNumber) {
      setMessage("Too low! Try again.")
    } else {
      setMessage("Too high! Try again.")
    }

    setGuess("")
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-lg">{message}</p>
      <div className="flex mb-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-16 px-2 py-1 text-black rounded-l"
          disabled={gameOver}
        />
        <button
          onClick={handleGuess}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-r"
          disabled={gameOver}
        >
          Guess
        </button>
      </div>
      <p className="mb-4">
        <span className="font-bold">Attempts:</span> {attempts}
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
        New Game
      </button>
    </div>
  )
}

