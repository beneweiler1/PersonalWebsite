import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"

interface ProjectSectionProps {
  title: string
  description: string
  link: string
}

function ProjectSection({ title, description, link }: ProjectSectionProps) {
  return (
    <Link href={link} className="block">
      <div className="content-overlay transition-all hover:bg-opacity-100 hover:shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="content-overlay mb-8 text-center">
        <Image
          src="/BenWeiler.jpg?height=400&width=400"
          alt="Ben Weiler"
          width={200}
          height={200}
          className="rounded-full mb-8 mx-auto"
        />
        <h1 className="text-4xl font-bold mb-4">Ben Weiler</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Welcome to my personal website. Here you can find a showcase of my personal, professional, and school
          projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <ProjectSection
          title="Personal Projects"
          description="Explore my passion projects and hobbies."
          link="/personal"
        />
        <ProjectSection
          title="Professional Projects"
          description="View my work experience and professional achievements."
          link="/professional"
        />
        <ProjectSection title="School Projects" description="Discover my academic work and research." link="/school" />
      </div>
      {/* New section for links, skills, and certificates */}
      <div className="content-overlay w-full max-w-5xl mt-12 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Links</h2>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com/beneweiler1" className="flex items-center text-blue-400 hover:text-blue-300">
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bw-411200/"
                className="flex items-center text-blue-400 hover:text-blue-300"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a href="beneweiler1@gmail.com" className="flex items-center text-blue-400 hover:text-blue-300">
                <FaEnvelope className="mr-2" /> Email
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>AI Agent Engineering</Badge>
              <Badge>Agile/Scrum</Badge>
              <Badge>Project Management</Badge>
              <Badge>TypeScript</Badge>
              <Badge>C#</Badge>
              <Badge>Java</Badge>
              <Badge>SQL</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>.NET</Badge>
              <Badge>AWS</Badge>
              <Badge>Python</Badge>
              <Badge>Prompt Engineering</Badge>
              <Badge>Git</Badge>
              {/* Add more skills as needed */}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Certificates</h2>
            <ul className="list-disc list-inside">
            <li> ServiceNow Certified Associate System Administrator - March 2024</li>
              <li> <a href="https://verify.acloud.guru/D73A3F07A218">AWS Certified Cloud Practitioner</a> </li>
              <li> <a href="https://www.credly.com/badges/3c2eb940-8c28-428d-80a7-26c04e3df776/linked_in_profile">AWS Partner Sales Accreditation</a> </li>
              <li> <a href="https://www.credly.com/badges/987ebd37-53bd-491c-be43-9b53d7c0e109/linked_in_profile">AWS Partner Cloud Economics Accreditation</a> </li>
              <li> <a href="https://www.credly.com/badges/4331147c-41c1-4282-9a0a-f581b36758aa/linked_in_profile">AWS Partner Accreditation (Technical)</a> </li>
              {/* Add more certificates as needed */}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
            <ul className="list-disc list-inside">
              <li> Guitar </li>
              <li> Meditation </li>
              <li> Live Music</li>
              <li> Reading </li>
              <li> Camping </li>
              <li> Skiing </li>
              <li> Running </li>
              {/* Add more certificates as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

