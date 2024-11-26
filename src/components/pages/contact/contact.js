import React from 'react';
import img1 from '../../images/contact.jpg'
const ContactSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 pt-[130px] pb-[120px]">
      <div className="container -mt-12 md:mt-0 mx-auto p-8 flex flex-wrap lg:flex-nowrap items-center">
        {/* Left Side*/}
        <div className="mx-auto lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={img1} 
            alt="Get In Touch Image"
            className="lg:w-[500px]  h-auto"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
