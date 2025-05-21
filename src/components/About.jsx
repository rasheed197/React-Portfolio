import React from "react";

function About() {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Tiamiyu Rasheed
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate and versatile full-stack developer with a strong
            foundation in JavaScript, Python, React, and WordPress. I specialize
            in building responsive web applications, APIs, and user-friendly
            interfaces that blend functionality with great design.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="images/profile_pic.png"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              My journey in tech began with a deep curiosity about how things
              work behind the scenes. Over time, I’ve gained hands-on experience
              in IT support, web development, and backend engineering using
              Django and FastAPI. I enjoy solving problems, learning new
              technologies, and turning ideas into real-world applications.
            </p>
            <p className="text-lg text-gray-600">
              Whether it's developing a dynamic frontend, crafting a RESTful
              API, or deploying applications with CI/CD pipelines, I take pride
              in writing clean, maintainable code and building solutions that
              make an impact.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user interfaces with React,
              Vue.js, and modern CSS frameworks
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Building robust and scalable server solutions with Node.js,
              Python, and cloud services
            </p>
          </div>
          {/* <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Designing intuitive and engaging user experiences with a focus on
              accessibility and performance
            </p>
          </div> */}
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Open Source Contributor
              </h3>
              <p className="text-lg text-gray-600">
                Active contributor to various open-source projects, focusing on
                developer tools and web frameworks
              </p>
            </div>
            {/* <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-600">
                Regular speaker at tech meetups and conferences, sharing
                knowledge about web development
              </p>
            </div> */}
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Mentorship
              </h3>
              <p className="text-lg text-gray-600">
                Dedicated to mentoring junior developers and helping them grow
                in their careers
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
