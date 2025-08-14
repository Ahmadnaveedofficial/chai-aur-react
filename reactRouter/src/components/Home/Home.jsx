import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative bg-gray-50 rounded-lg overflow-hidden mt-10 sm:mt-16">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col-reverse sm:flex-row items-center justify-between">
          {/* Text */}
          <div className="text-center sm:text-left sm:max-w-lg space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Discover <span className="text-orange-600">My Function API</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Seamlessly integrate and utilize functions in your apps. Fast, reliable, and easy to use.
            </p>
            <Link
              to="/download"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                
              </svg>
              Download Now
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-10 sm:mb-0">
            <img
              src="hero.png"
              alt="Hero"
              className="w-80 sm:w-96 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Secondary Image Section */}
      <section className="flex justify-center mt-16">
        <img
          src="api.png"
          alt="Feature"
          className="w-48 sm:w-96"
        />
      </section>

      {/* Heading / Content Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl sm:text-5xl font-medium text-gray-800">
          
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our features and see how easily you can integrate them into your applications.
        </p>
      </section>
    </div>
  );
}
