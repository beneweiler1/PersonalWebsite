"use client"

import { useState } from "react"

type SquareValue = "X" | "O" | null

function Square({ value, onClick }: { value: SquareValue; onClick: () => void }) {
  return (
    <button
      className="w-16 h-16 bg-gray-700 text-2xl font-bold flex items-center justify-center hover:bg-gray-600"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default function TicTacToe() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  const status = winner ? `Winner: ${winner}` : squares.every(Boolean) ? "Draw!" : `Next player: ${xIsNext ? "X" : "O"}`

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? "X" : "O"
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  function resetGame() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-1 mb-4">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  )
}

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

