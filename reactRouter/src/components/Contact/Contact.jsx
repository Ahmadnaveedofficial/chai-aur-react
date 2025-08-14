import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
        <p className="text-gray-600 text-center mb-12">
          We'd love to hear from you. Reach out for collaborations or inquiries!
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1 bg-white shadow-lg rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 bg-white shadow-lg rounded-xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              You can reach us via the following channels. We are happy to assist you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-orange-600 font-semibold">📍</span>
                <span className="text-gray-700">Lahore,Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-600 font-semibold">📧</span>
                <span className="text-gray-700">ahmad@aurabags.pk</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-600 font-semibold">📞</span>
                <span className="text-gray-700">+92 323 9942960</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-600 font-semibold">🔗</span>
                <a
                  href="https://www.linkedin.com/in/ahmad-naveed-7b539521a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition duration-200"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
