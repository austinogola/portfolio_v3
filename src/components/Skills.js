import React, { useState } from 'react';
// import React from "react";

// const Skills = () => {
//   return (
//     <section className="w-full bg-gray-100 py-16 px-4">
//       <div className="max-w-5xl mx-auto text-center">
//         <p className="text-sm text-gray-600 italic mb-2">
//           when I&apos;m not out with my wife & dog...
//         </p>
//         <h2 className="text-2xl md:text-4xl font-semibold mb-8">
//           You&apos;ll catch me doing a combo of these things:
//         </h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {/* Card 1 */}
//           <div className="bg-green-100 p-4 rounded-2xl shadow-md max-w-xs">
//             <h3 className="text-lg font-medium mb-3">things I create</h3>
//             <ul className="text-left text-gray-700 space-y-2">
//               <li>websites</li>
//               <li>app design</li>
//               <li>visual identity</li>
//               <li>illustrations</li>
//               <li>design systems</li>
//               <li>ui animation</li>
//             </ul>
//           </div>
//           {/* Card 2 */}
//           <div className="bg-purple-100 p-4 rounded-2xl shadow-md max-w-xs">
//             <h3 className="text-lg font-medium mb-3">for products in</h3>
//             <ul className="text-left text-gray-700 space-y-2">
//               <li>saas</li>
//               <li>fintech</li>
//               <li>web3.0</li>
//               <li>ai</li>
//               <li>medtech</li>
//               <li>and more</li>
//             </ul>
//           </div>
//           {/* Card 3 */}
//           <div className="bg-blue-100 p-4 rounded-2xl shadow-md max-w-xs">
//             <h3 className="text-lg font-medium mb-3">using tools like</h3>
//             <ul className="text-left text-gray-700 space-y-2">
//               <li>figma</li>
//               <li>after effects</li>
//               <li>framer</li>
//               <li>illustrator</li>
//               <li>photoshop</li>
//               <li>spline</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



const Skills = () => {
    return(
        <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* <p className="text-gray-500 italic mb-4">when I'm not out with my wife & dog...</p> */}
          {/* <h2 className="text-4xl font-bold mb-12">You'll catch me doing<br />a combo of these things:</h2> */}
          <h2 className="text-4xl font-bold mb-12">Combination of What I do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-green-100 inline-block px-3 py-1 rounded-full text-sm mb-4">things i create</div>
              <ul className="space-y-2">
                {['Web applications', 'RESTful APIs', 'Server architectures', 'Integration solutions', 'Devops pipelines','Web extensions'].map((skill) => (
                  <li key={skill} className="text-gray-800">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-100 inline-block px-3 py-1 rounded-full text-sm mb-4">for products in</div>
              <ul className="space-y-2">
                {['SaaS', 'Fintech', 'AI', 'E-commerce', 'Marketing'].map((industry) => (
                  <li key={industry} className="text-gray-800">{industry}</li>
                ))}
              </ul>
              <p className="text-gray-400">and more</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-sm mb-4">using tools like</div>
              <ul className="space-y-2">
                {['MERN stack', 'PostgreSQL',  'Tailwind', 'Docker', 'Kubernetes ', 'Nginx',].map((tool) => (
                  <li key={tool} className="text-gray-800">{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Skills;
