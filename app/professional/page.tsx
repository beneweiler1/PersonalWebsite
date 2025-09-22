import CompanySection from "../components/CompanySection"

const professionalProjects = [
  {
    companyName: "CGI Inc.",
    duration: "Software Developer Consultant 2023 - Present",
    bannerUrl: "/CGI.jpg?height=160&width=160",
    projects: [
      {
        title: "MMA Client Portal",
        description: "Build UI and backend for a client and colleague company access portal. Enables clients and colleagues alike to quickly access their policies, documents and other related resources",
        imageUrl: "/MMA.png?height=200&width=400",
        liveUrl: "https://www.marshmclennan.com/",
      },
      {
        title: "Connect for Health Colorado",
        description: "Build an interactive dashboard and portal to view the status of different insurance issuers policies. Performed various data confirmations with SQL. Created an automated open enrollment website tester and automated EDI file to database processes.",
        imageUrl: "/C4C.png?height=200&width=400",
        liveUrl: "https://prd.connectforhealthco.com/login-portal/login/individuals",
      },
      {
        title: "AI Training Portfolio",
        description: "Selected to be part of an intensive AI training program to learn and implement AI solutions. Still in progress 09/2024-1/2025",
        imageUrl: "/AITraining.png?height=200&width=400",
        liveUrl: "https://www.loom.com/share/85eb7ceb7f224969b3c49414b9f964db?sid=626b0a29-84a7-4df3-98e1-dcd5dfb7b491",
      },
    ],
  },
  {
    companyName: "Contract work",
    duration: "2018 - present",
    projects: [
      {
        title: "Buckfifty Mobile App - 2024+",
        description: "Head of technology at Buckfifty. Build an app to nurture your relationships and schedule activities with those who matter to you.",
        imageUrl: "/BF.png?height=200&width=400",
        liveUrl: "https://buckfifty.com/",
      },
      {
        title: "Adapted skin care - 2023",
        description: "Build an AI integrated survey to determine users custom skincare routine.",
        imageUrl: "/adapted.png?height=200&width=400",
        liveUrl: "https://adaptedskincare.vercel.app/",
      },
      {
        title: "Fangarde",
        description: "Helped build a component library and login security system.",
        imageUrl: "/fangarde.jpg?height=200&width=400",
        liveUrl: "https://www.fangarde.com/",
      },
    ],
  },
  {
    companyName: "CSG",
    duration: "2022",
    projects: [
      {
        title: "Software Developer Internship - Data Steams",
        imageUrl: "/CSG.png?height=200&width=400",
        description:
          "Automated a monitoring system of filestream's and build a DOMO dashboard to display metrics.",
        liveUrl: "https://www.csgi.com/"
      }
    ],
  },
  {
    companyName: "SSP Innovations",
    duration: "2022",
    projects: [
      {
        title: "Software Engineer Internship - Systems Implementation Team",
        imageUrl: "/ssplogo.png?height=200&width=400",
        description:
          "Through full stack development my team developed an employee, customer and project information website. Developed in Angular and .NET",
        liveUrl: "https://sspinnovations.com/"
      }
    ],
  },
]

export default function ProfessionalProjects() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-8">Professional Projects</h1>
      {professionalProjects.map((company, index) => (
        <div key={index}>
          <CompanySection
            companyName={company.companyName}
            duration={company.duration}
            projects={company.projects}
            bannerUrl={company.bannerUrl}
          />
          {index < professionalProjects.length - 1 && <hr className="border-gray-600 my-12" />}
        </div>
      ))}
    </div>
  )
}

