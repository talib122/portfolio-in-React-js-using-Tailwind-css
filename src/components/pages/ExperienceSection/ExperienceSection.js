import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gLogo from '../../images/gameLogo.png';
import hLogo from '../../images/htmlLogo.jpg'; 
import wpLogo from '../../images/wp2.PNG'
import cALogo from '../../images/ca.jpeg' 
const experienceData = [
  {
    Logo: cALogo, 
    role: "React JS Internship at codeAlpha",
    duration: "Sep 2024-Oct 2024",
    location: "Remote",
    details: [
      "Creted responsive Portfolio",
      "Creted responsive image gallery app",
      "Creted responsive Calculator app",
    ],
  },
  {
    Logo: gLogo, 
    role: "Mern Bootcamp at Game Trin",
    duration: "July 2024-Sep 2024",
    location: "Lahore, Pakistan",
    details: [
      "Creted responsive E-commerce app",
      "Creted responsive weather app",
      "Creted responsive ToDo app",
      "Worked in a team",
    ],
  },
  {
    Logo: hLogo, 
    role: "Frontend with Html, Css, Js",
    duration: "March 2024-June 2024",
    location: "Lahore, Pakistan",
    details: [
      "Worked on different UI's",
      "Converted some figma in HTML,CSS with JS functionalities like filter, dropdown",
    ],
  },
  {
    Logo: wpLogo, 
    role: "WordPress Internship",
    duration: "Nov 2023-Feb 2024",
    location: "Lahore, Pakistan",
    details: [
      "Worked on themes",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when the card comes into view
    threshold: 0.2,    // Trigger when 20% of the card is in view
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-blue-900 text-white p-6 mb-6 mx-10 rounded-lg shadow-lg border-l-4 border-green-400"
    >
      <div className="flex items-center mb-4">
        <img src={experience.Logo} alt={experience.role} className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <p className="text-sm text-green-400">{experience.duration}</p>
          <p className="text-sm">{experience.location}</p>
        </div>
      </div>
      <ul className="list-disc pl-5">
        {experience.details.map((detail, idx) => (
          <li key={idx} className="text-sm">{detail}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <span className='text-center'><h2 className="text-4xl font-bold mt-14 mb-12">Experience</h2></span>
        {experienceData.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
