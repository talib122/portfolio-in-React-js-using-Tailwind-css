import React, { useState } from 'react';
import img1 from '../../images/ecommece.PNG';
import img2 from '../../images/html,css.PNG';
import img3 from '../../images/wp1.PNG'
// Sample project data for each tab
const projectData = {
  project1: [
    { 
      title: 'E-Commerce shoes app', 
      image: img1, 
      description: 'I Created this in MERN using Tailwind CSS.',
      features: 'Register, Login, forget password, Product Display, Add to Cart, Checkout, logout',
    },
  ],
  project2: [
    { 
      title: 'E-Commerce shoes app', 
      image: img2, 
      description: 'I Created it in Html, Css, Javascript.',
      features: 'Responsive UI,icon animation',
    },
  ],
  project3: [
    { 
      title: 'Wordpress site', 
      image: img3, 
      description: 'I Created it in wordpress phlox theme, usimg mailchamp.',
      features: 'Responsive UI',
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('project1');

  const activeProject = projectData[activeTab][0];

  // Split the features string into an array and display each feature in a new line
  const featureList = activeProject.features.split(',').map((feature, index) => (
    <li key={index} className="text-gray-400 text-lg">{feature.trim()}</li>
  ));

  return (
    <section className="bg-gray-900 pt-[140px] pb-[170px] relative pt-[130px]">
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Some projects created by me are listed below
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        <button
          className={`px-6 py-2 rounded-full transition ${
            activeTab === 'project1' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gray-800 text-gray-400'
          }`}
          onClick={() => setActiveTab('project1')}
        >
          Project 1
        </button>
        <button
          className={`px-6 py-2 rounded-full transition ${
            activeTab === 'project2' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gray-800 text-gray-400'
          }`}
          onClick={() => setActiveTab('project2')}
        >
          Project 2
        </button>
        <button
          className={`px-6 py-2 rounded-full transition ${
            activeTab === 'project3' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gray-800 text-gray-400'
          }`}
          onClick={() => setActiveTab('project3')}
        >
          Project 3
        </button>
      </div>

      {/* Project Card */}
      <div className="flex justify-center mt-[67px]">
        <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row w-3/4 p-6">
          {/* Image on the left side */}
          <img src={activeProject.image} alt={activeProject.title} className="mb-8 md:mb-0 w-[420px] md:w-[350px] h-auto rounded-lg" style={ {backgroundSize:'center'}}/>

          {/* Title, description, and features on the right side */}
          <div className="ml-6 flex flex-col justify-center">
            <h3 className="text-white text-2xl font-bold mb-4">{activeProject.title}</h3>
            <p className="text-gray-400 text-lg mb-4">{activeProject.description}</p>
            <ul><span className='text-white font-semibold text-2xl'>Features:</span>{featureList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
