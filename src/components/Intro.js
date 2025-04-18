import React, { useState } from 'react';

const Intro= () => {
    return(
        <section className="space-y-8 pb-20" id='intro'>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="wave" className="text-xl">👋</span>
            <p className="text-xl text-gray-600">Hi, I'm Austin Ogola, passionate about crafting seamless systems and...</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          helping digital founders
            <br />
            bring bold ideas to life
            <br />
            with scalable, user-centric fullstack solutions.
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              { text: 'webapps', color: 'bg-green-100' },
              { text: 'backend', color: 'bg-blue-100' },
              { text: 'frontend', color: 'bg-red-100' },
              { text: 'integrations', color: 'bg-orange-100' },
              { text: 'automation', color: 'bg-purple-100' },
            ].map((tag) => (
              <span
                key={tag.text}
                className={`px-4 py-2 rounded-full text-sm ${tag.color}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </section>
    )
}


export default Intro
;