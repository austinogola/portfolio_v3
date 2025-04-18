import React from "react";

const About = () => {
  return (
    // <section className="bg-white px-6 md:px-12 lg:px-24 py-20" id='about'>
    <section className="bg-white  py-20" id='about'>
    <h2 className="text-4xl font-bold mb-12">A Little About Me</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start space-x-4 border hidden">
          <div className="relative">
            <img
              src="/path/to/image1.jpg"
              alt="Image 1"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 object-cover rounded-md shadow-lg transform rotate-[-3deg]"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-sm sm:text-base px-2 py-1 rounded-md shadow-md -rotate-3">
              Wow, it’s like I’m holding an obelisk on my hand ^_^
            </p>
          </div>
          <div className="relative">
            <img
              src="/path/to/image2.jpg"
              alt="Image 2"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 object-cover rounded-md shadow-lg transform rotate-2"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-sm sm:text-base px-2 py-1 rounded-md shadow-md rotate-2">
              My Family ❤️
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Based in Nairobi, Kenya, I’ve spent the past 4+ years bringing ideas to life by building scalable and impactful applications 
          for startups and independent clients.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I collaborate with founders to design and develop fullstack solutions—from intuitive user interfaces to robust backend systems. 
          My work ensures their products run seamlessly, resonate with users, and are ready to scale
          </p>
          {/* <div>
            <p className="text-gray-500 text-sm mb-2">
              So far I helped 10+ products funded by the best:
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="/path/to/y-combinator-logo.png"
                alt="Y Combinator"
                className="h-8"
              />
              <img
                src="/path/to/accel-logo.png"
                alt="Accel"
                className="h-8"
              />
              <img
                src="/path/to/plug-play-logo.png"
                alt="Plug and Play"
                className="h-8"
              />
              <img
                src="/path/to/ven-tech-logo.png"
                alt="Vent Tech"
                className="h-8"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
