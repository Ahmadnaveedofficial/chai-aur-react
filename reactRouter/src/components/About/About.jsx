import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="an3.png"
            alt="Ahmad Naveed"
            className="w-32 h-32  mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">Ahmad Naveed</h2>
          <p className="text-gray-600 text-lg mt-2"> AuraBags & Company | Lahore, Pakistan</p>
        </div>

        {/* Summary */}
        <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
          I specialize in strategic decision-making, consulting, and optimizing business operations to deliver exceptional value. With extensive experience in leading high-impact projects and driving organizational growth, I am passionate about creating meaningful solutions that make a difference.
        </p>

        {/* Skills / Expertise */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Strategic Planning', 'Business Consulting', 'Operations', 'Project Management', 'Leadership', 'Problem Solving'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-orange-100 text-orange-700 font-medium rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/ahmad-naveed-7b539521a/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-200"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
