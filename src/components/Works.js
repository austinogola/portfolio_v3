import React, { useState } from 'react';

const Works = () => {
    return(
        <section id="works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* <h2 className="text-4xl font-bold mb-12">Selected works from<br />2020 to the present</h2> */}
          <h2 className="text-4xl font-bold mb-12">Selected Works from<br />the Past</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">GhostWrite</h3>
              {/* <p className="text-gray-600 mb-4">🇩🇪 Germany, angel investors</p> */}
              <p className="text-gray-600 mb-4">
               Powerful ChatGPT email assistant, designed to intelligently draft, reply, and optimize emails with precision and speed.
              </p>
              <button className="text-black hover:underline">
                <a href='https://app.ghostwrite.rip/get' target='_blank' rel='noreferrer'> Open case →</a>
              
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">LALAL AI</h3>
              {/* <p className="text-gray-600 mb-4">🇺🇾 Uruguay, self-funded</p> */}
              <p className="text-gray-600 mb-4"> 
              Advanced AI-powered audio stem splitter I , enabling fast, high-quality vocal and instrumental isolation from any track.
              </p>
              <button className="text-black hover:underline">
                <a href='https://www.lalal.ai/' target='_blank' rel='noreferrer'> Open case →</a>
              
              </button>
              
            </div>
          </div>

            {/* 
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">MPESA Mini App</h3>
        
              <p className="text-gray-600 mb-4">Organise, take notes and discuss the web without context switches & copy pasting. By yourself, with your peers & enhanced by AI.</p>
              <button className="text-black hover:underline">Open case →</button>
            </div> */}

            
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Servercore</h3>
        
              <p className="text-gray-600 mb-4">
               Website and web app for Servercore, an IaaS provider offering scalable cloud infrastructure for businesses and individuals.
              </p>
              <button className="text-black hover:underline">
                <a href='https://servercore.com/' target='_blank' rel='noreferrer'> Open case →</a>
              
              </button>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">React OAuth Ninja</h3>
              {/* <p className="text-gray-600 mb-4">🇺🇾 Uruguay, self-funded</p> */}
              <p className="text-gray-600 mb-4">
               Lightweight React npm package for seamless Google OAuth integration.
               {/* simplifying authentication with minimal setup and clean, reusable components. */}
              </p>
               <button className="text-black hover:underline">
                <a href='https://www.npmjs.com/package/react-oauth-ninja' target='_blank' rel='noreferrer'> Open case →</a>
              
              </button>
            </div>
          </div>
        </div>

        
      </section>
    )
}


export default Works;