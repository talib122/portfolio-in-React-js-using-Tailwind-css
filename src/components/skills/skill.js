import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  { percentage: 95, label: 'HTML' },
  { percentage: 91, label: 'CSS' },
  { percentage: 85, label: 'Tailwind CSS' },
  { percentage: 75, label: 'Bootstrap' },
  { percentage: 78, label: 'React JS' },
  { percentage: 55, label: 'Node JS' },
  { percentage: 80, label: 'Time Management' },
  { percentage: 75, label: 'Problem Solving' },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillsData.length - 2 : prevIndex - 2
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skillsData.length - 2 ? 0 : prevIndex + 2
    );
  };

  // Get the two skills to display in the current view
  const currentSkills = skillsData.slice(currentIndex, currentIndex + 2);

  return (
    <section className="bg-gray-700 pt-[200px] pb-[130px] relative">
      <div className="-mt-[25px] md:mt-0 bg-slate-900 rounded-lg mx-[50px] md:mx-[130px] py-[80px]">
        <div className="text-center mb-8">
          <h2 className="text-white text-5xl font-bold mb-10">Skills</h2>
          <p className="px-[25px] md:px-[0px] text-gray-400 max-w-md mx-auto mb-12">
            Here below are some of my skills that I want to polish more so that I can become a better developer.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrevClick}
            className="text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          {/* Display Two Progress Bars */}
          <div className="flex space-x-8">
            {currentSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 md:w-32 h-24 md:h-32">
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      textColor: '#fff',
                      pathColor: '#8a3cff',
                      trailColor: '#373737',
                    })}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mt-4">
                  {skill.label}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextClick}
            className="text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
