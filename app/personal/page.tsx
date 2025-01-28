import ProjectCard from "../components/ProjectCard"
import TicTacToe from "../components/games/TicTacToe"
import MemoryGame from "../components/games/MemoryGame"
import GuessTheNumber from "../components/games/GuessTheNumber"

const personalProjects = [
  {
    title: "Image to Lego 2D portriat",
    description: "A Node.js-based service to convert images to 2D Lego or Perler.",
    imageUrl: "/Perler.jpg?height=200&width=400",
    liveUrl: "https://github.com/beneweiler1/LegoImageQuanitization",
  },
  {
    title: "Daily Opinion",
    description: "IN DEVELOPMENT - A website designed with V0 to help combat political irrationality by pairing the user with another to discuss their opinions regarding the Daily Question.",
    imageUrl: "DO.png?height=200&width=400",
    liveUrl: "https://vfot7vziolv1fhxx.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio website built with Next.js and deployed on Vercel.",
    imageUrl: "/BenWeiler.jpg?height=200&width=400",
    liveUrl: "/",
  },
]

export default function PersonalProjects() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-8">Personal Projects</h1>

      <section>
        <h2 className="text-2xl font-bold mb-4">GitHub and Vercel Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="bg-gray-800 bg-opacity-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Interactive Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Tic Tac Toe</h3>
            <TicTacToe />
          </div>
          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Memory Game</h3>
            <MemoryGame />
          </div>
          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Guess the Number</h3>
            <GuessTheNumber />
          </div>
        </div>
      </section>
    </div>
  )
}

