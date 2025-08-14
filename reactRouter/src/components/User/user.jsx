import React from 'react';
import { useParams } from 'react-router-dom';

// User component to display user profile

export default function User() {
    
    const { id } = useParams(); 
  return (

    <section className="py-12 bg-gray-50">
        <div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile: {id}</h1>
        </div>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Profile Picture */}
        <div className="flex justify-center mt-6">
          <img
            className="w-32 h-32 rounded-full border-4 border-orange-600 shadow-lg"
            src="an3.pnj"
            alt=""
          />
        </div>

        {/* User Info */}
        <div className="text-center px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Ahmad Naveed</h2>
          <p className="text-gray-600 mt-2">Aurabags & Company</p>
          <p className="text-gray-500 mt-2 text-sm">
            Based in Lahore, Pakistan. Passionate about strategy, consulting, and driving business growth.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/ahmad-naveed-7b539521a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 transition duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-naveed-7b539521a/"
            className="text-orange-600 hover:text-orange-700 transition duration-200"
          >
            Twitter
          </a>
          <a
            href="https://github.com/Ahmadnaveedofficial"
            className="text-orange-600 hover:text-orange-700 transition duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
