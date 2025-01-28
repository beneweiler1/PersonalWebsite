import Image from "next/image"
import ProjectCard from "./ProjectCard"

interface Project {
  title: string
  description: string
  imageUrl: string
  liveUrl?: string
}

interface CompanySectionProps {
  companyName: string
  duration: string
  projects: Project[]
  bannerUrl?: string
}

export default function CompanySection({ companyName, duration, projects, bannerUrl }: CompanySectionProps) {
  return (
    <section className="mb-12">
      <div className="content-overlay mb-6 overflow-hidden rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-grow p-6">
            <h2 className="text-2xl font-bold mb-2">{companyName}</h2>
            <p className="text-gray-400">{duration}</p>
          </div>
          {bannerUrl && (
            <div className="relative w-full md:w-40 h-40 md:h-40 flex-shrink-0">
              <Image
                src={bannerUrl || "/placeholder.svg"}
                alt={`${companyName} banner`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-b-lg md:rounded-r-lg md:rounded-b-none"
              />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

