import React, { useState } from "react";

const experiences = [
  {
    company: "Dropella",
    position: "Full Stack Engineer",
    duration: "Sept 2024 - Present",
    details: [
      "Integrated multiple APIs to empower users with real-time sales tracking, competitive research, product discovery, and advanced advertising insights, improving decision-making capabilities.",
      "Optimized and redesigned key UI components, enhancing user experience and interface consistency.", 
      "Resolved critical bugs across API integrations and the frontend, improving system reliability and user satisfaction.",
      "Revamped core functionalities, significantly reducing loading times and response delays, leading to a more seamless experience."
    ]
  },
  // {
  //   company: "Intuit",
  //   position: "Full Stack Engineer",
  //   duration: "Sept 2024 - Present",
  //   details: [
  //     "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
  //     "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.",
  //     "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
  //     "Provide leadership within the engineering department through close collaboration, knowledge shares, and mentorship."
  //   ]
  // },
  {
    company: "Trello",
    position: "Front End Engineer",
    duration: "August 2023 - Aug 2024",
    details: [
      // "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
      "Developed and launched the Trello Chrome extension, enabling seamless task management directly from the browser.",
      "Optimized backend architecture and database design, improving system scalability and operational efficiency.",
      "Collaborated with cross-functional teams to devise and implement solutions for critical bug fixes and workflow improvements, enhancing product stability.",
    ]
  },
  // {
  //   company: "Freelancing",
  //   position: "Full Stack Developer",
  //   duration: "August 2022 - Sept 2024",
  //   details: [
  //     // "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
  //     "Developed and launched the Trello Chrome extension, enabling seamless task management directly from the browser.",
  //     "Optimized backend architecture and database design, improving system scalability and operational efficiency.",
  //     "Collaborated with cross-functional teams to devise and implement solutions for critical bug fixes and workflow improvements, enhancing product stability.",
  //   ]
  // },
  {
    company: "Lipa Later ",
    position: "Software Engineering Internship",
    duration: "May 2020 - April 2021",
    details: [
      "Assisted in implementing mobile money payment integrations including MPESA and Pesapal, enabling seamless and secure digital transactions.",
      "Conducted extensive bug fixing and performance tuning, reducing application response times.",
      "Fixed major frontend UI bugs, ensuring a smooth and intuitive user experience.",
      "Regularly updated the UI, refining aesthetics and functionality to enhance user engagement."      
    ]
  },
  
];

export default function Experience() {
  const [selected, setSelected] = useState(experiences[0]);

  return (
    <section className=" py-10" id='experience'>
      <h2 className="text-4xl font-bold mb-12">Where I've Worked</h2>
    
    <section className=" py-10 px-5 mx-auto">
      <div className="flex flex-col md:flex-row gap-5">
        <div className={`border-l-3 flex flex-col w-1/4`}>
          {experiences.map((exp) => (
            <button
              key={exp.company}
              className={` border-l-2 pl-4  text-left transition-colors duration-200 hover:text-orange-500 h-10 ${
                selected.company === exp.company ? "text-orange-500" : "text-gray-800"
                
              } ${selected.company === exp.company ? "border-orange-500":""}`}
              onClick={() => setSelected(exp)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="w-3/4">
          <h3 className="text-xl font-semibold">
            {selected.position} <span className="text-orange-500">@ {selected.company}</span>
          </h3>
          <p className="text-sm text-gray-400 mb-3">{selected.duration}</p>
          <ul className="list-disc pl-5 space-y-2">
            {selected.details?.map((detail, index) => (
              <li key={index} className="">{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </section>
  );
}


// import React from "react";

// const Experience = () => {
//   return (
//     <section className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-24" id='experience'>
//       <div className="text-center mb-10">

//         <p className="italic text-gray-500 mt-2">over the years...</p>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
//         {/* Card 1 */}
//         <div className="bg-lime-100 p-4 rounded-lg shadow-md w-72 lg:w-80 text-center transform rotate-[-2deg]">
//           <h3 className="text-lime-700 font-bold mb-4">Lipa Later</h3>
//           <ul className="text-gray-800 text-sm sm:text-base space-y-2">
//             <li>Role: Software Engineering Internship</li>
//             <li>Duration: 2020 - 2021</li>
//             <li>Worked on product design, UI/UX, and branding.</li>
//           </ul>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-purple-100 p-4 rounded-lg shadow-md w-72 lg:w-80 text-center transform rotate-2">
//           <h3 className="text-purple-700 font-bold mb-4">Trello</h3>
//           <ul className="text-gray-800 text-sm sm:text-base space-y-2">
//             <li>Role: Junior Backend Engineer</li>
//             <li>Duration: 2022 - 2024</li>
//             <li>Focused on SaaS, fintech, and app development.</li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-sky-100 p-4 rounded-lg shadow-md w-72 lg:w-80 text-center transform rotate-[-2deg]">
//           <h3 className="text-sky-700 font-bold mb-4">Dropella</h3>
//           <ul className="text-gray-800 text-sm sm:text-base space-y-2">
//             <li>Full Stack Engineer</li>
//             <li>Duration: 2024 - Present</li>
//             <li>Worked with clients in AI, medtech, and more.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
