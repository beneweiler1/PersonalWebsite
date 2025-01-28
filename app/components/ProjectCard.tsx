import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, imageUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="content-overlay rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            View <FaExternalLinkAlt className="ml-2" />
          </a>
        )}
      </div>
    </div>
  )
}

