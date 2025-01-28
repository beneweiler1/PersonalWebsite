import ProjectCard from "../components/ProjectCard"

const schoolProjects = [
  {
    title: "Solar Web",
    description: "A research project on applying machine learning algorithms to predict student performance.",
    imageUrl: "/SolarWeb.png?height=200&width=400",
    liveUrl: "https://boulder-web-walk.vercel.app/",
  },
  {
    title: "Capstone Project: Poodle",
    description: "Poodle is a calendar integration app that helps you manage your busy schedule",
    imageUrl: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://github.com/yourusername/smart-home-capstone",
  },
  {
    title: "OS Capstone Project: Smart Home System",
    description: "Developed a smart home system using IoT devices and a mobile app for remote control.",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Object Oriented Final Project - Music visual creator",
    description: "Created an live music visualizer within Unity. Developed with C# while following OOP methodologies.",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Big Data Final Project - Spotify Tastemaker",
    description: "Scraped 100,000+ songs via spotify API and stored them within an Azure database, build Spotify account integrations to recommend songs with a AI model. UI displayed a stream chart of users music taste.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://github.com/beneweiler1/TasteMaker",
  },
]

export default function SchoolProjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">School Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schoolProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

