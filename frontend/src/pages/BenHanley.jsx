import { Page } from '../components/Section';
import {Banner} from '../components/Text'

const skills = [
  "Creative thinking",
  "Programming",
  "User design",
  "Branding",
  "Problem solving",
  "Client liaison",
  "Teamwork",
];

const experience = [
  {
    title: "Software Developer",
    date: "Sep 2025-Current",
    location: "Blueteq, Havant, Hampshire",
    details: [
      "Develop & maintain an understanding of Blueteq core systems & business practices",
      "Contributed ideas, suggestions, and thoughts to improve the efficiency, performance, and reliability of existing & new systems",
    ],
  },
  {
    title: "Social Media Manager",
    date: "Dec 2022-Current",
    location: "Freelance, Remote",
    details: [
      "Creating content to engage a specific demographic using analytic data for growth.",
      "Setting up sponsorship clients and providing content that matches to their needs.",
    ],
  },
  {
    title: "Trainee Software Engineer Placement Year",
    date: "Sep 2023-Jul 2024",
    location: "ChurchSuite, Nottingham, Nottinghamshire",
    details: [
      "Worked in project cycles alongside other developers, developing, testing and debugging the ChurchSuite ecosystem.",
      "Developed with and adapted design patterns to create new functionality, optimize code, and replace legacy systems.",
    ],
  },
  {
    title: "Embedded Programming Consultant",
    date: "Aug 2022-Mar 2023",
    location: "Freelance, Plymouth, Devon",
    details: [
      "Effectively liaised with the client and proposed possible technical solutions with functional requirements.",
      "Built an IoT application processing API information, performing fluid dynamics calculations to control GPIO components.",
    ],
  },
];

const education = [
  {
    title: "BSc (Hons) Computer Science & Placement Year (2:1 Average)",
    date: "Sep 2021- Current",
    location: "University of Plymouth, Plymouth, Devon",
    details: [
      "HCI, Usability and Visualization: 74%",
      "Computing Group Project 79% - Built a JavaScript CBT website for a client. Led a team and earned commendation for client liaison.",
      "Final Year Project 75% - Flutter Anxiety App with three healthcare stakeholders. Novel app design with user and psychological testing.",
    ],
  },
  {
    title: "AWS Academy Cloud Foundations (85%)",
    date: "Mar 2025",
    location: "University of Plymouth, Plymouth, Devon",
    details: [
      "Cemented Knowledge of AWS cloud services, computing models and best practices.",
      "Experience with core AWS services (EC2, EBS, RDS, IAM).",
    ],
  },
  {
    title: "Google UX Design Professional Certificate",
    date: "June 2022- Current",
    location: "Freelance, Plymouth, Devon",
    details: [
      "UX Design: Emphasising, defining, and ideating – 92%",
      "Building wireframes and Low-Fidelity Prototypes - 92%",
      "UX Research and testing concepts – 89%",
    ],
  },
];

export default function BenHanley() {
  return (
    <Page>
      <Banner/>

      {/* Profile Section */}
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-center bg-div-background rounded-lg shadow py-6 px-4 sm:px-6">
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-0 sm:mr-6">
            <img
              className="h-auto max-w-xs sm:max-w-[200px] rounded-lg shadow-lg"
              src="/assets/Ben.jpg"
              alt="Ben"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-colour">
              Ben Hanley
            </h3>
            <span className="text-xl sm:text-2xl italic text-colour">
              Professional Computer Nerd
            </span>
            <p className="mt-3 mb-4 text-base sm:text-lg font-light text-colour">
              A diligent Computer Science Graduate of Plymouth University. I’ve
              built strong interpersonal skills through group projects and
              client-facing roles, excelling in both leadership and supportive
              positions. Passionate about problem-solving, I approach challenges
              creatively to enhance design and efficiency. Advocating for
              critical thinking, I seek to understand the "why" behind decisions
              to strengthen or refine outcomes. Inspired by my faith, I aim to
              innovate technology that improves everyday life.
            </p>
            <div className="text-center sm:text-left mt-4">
              <p className="mt-2 py-4 text-xl sm:text-2xl font-bold tracking-tight text-colour">
                More
              </p>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <a
                  href="mailto:benhanley321@gmail.com"
                  className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-none"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/ben-hanley-524b94253/"
                  className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action rounded-none"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/b-a-hanley"
                  className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action rounded-none"
                >
                  Github
                </a>
                <a
                  href=""
                  className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action rounded-b-lg sm:rounded-r-lg sm:rounded-tl-none sm:rounded-bl-none"
                >
                  PDF CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="px-4 sm:px-6 lg:px-12 mt-8">
        <p className="text-2xl sm:text-3xl underline py-4 font-bold text-colour text-center">
          Skills
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-center px-2 py-2 text-sm font-medium bg-white rounded-lg opacity-0 animate-fadeIn"
              style={{ animationDelay: `${0.1 + index * 0.2}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="px-4 sm:px-6 lg:px-12 mt-8">
        <div className="bg-div-background rounded-lg shadow py-6 px-4 sm:px-6">
          <p className="text-2xl sm:text-3xl underline py-4 font-bold text-colour text-center">
            Experience
          </p>
          {experience.map((exp, i) => (
            <div key={i} className="mt-4">
              <p className="text-xl sm:text-2xl font-bold text-colour">{exp.title}</p>
              <p className="text-lg sm:text-xl font-bold text-colour">{exp.date}</p>
              <p className="text-base sm:text-lg italic text-colour">{exp.location}</p>
              <ul className="list-disc list-inside mt-2 text-colour">
                {exp.details.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="px-4 sm:px-6 lg:px-12 mt-8">
        <div className="bg-div-background rounded-lg shadow py-6 px-4 sm:px-6">
          <p className="text-2xl sm:text-3xl underline py-4 font-bold text-colour text-center">
            Education
          </p>
          {education.map((edu, i) => (
            <div key={i} className="mt-4">
              <p className="text-xl sm:text-2xl font-bold text-colour">{edu.title}</p>
              <p className="text-lg sm:text-xl font-bold text-colour">{edu.date}</p>
              <p className="text-base sm:text-lg italic text-colour">{edu.location}</p>
              <ul className="list-disc list-inside mt-2 text-colour">
                {edu.details.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
