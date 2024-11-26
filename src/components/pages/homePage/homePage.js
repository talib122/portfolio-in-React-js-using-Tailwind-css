import React, { useState, useEffect } from 'react';
import img1 from '../../images/manSpace.png';
import './homePage.css'; 

const HomePage = () => {
  const fullText = "Hi!! I am Talib Hussain";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= fullText.length) {
            setIsComplete(true);
            clearInterval(typingInterval);
          }
          return nextIndex;
        });
      }, 200); // Typing speed (200ms)
      
      return () => clearInterval(typingInterval);
    }

    if (isComplete) {
      // Loop after a delay (optional)
      const loopTimeout = setTimeout(() => {
        setDisplayedText("");  // Clear text
        setIndex(0);  // Reset index to start typing again
        setIsComplete(false);  // Reset typing completion
      }, 2000); // 2 second delay before restarting the loop

      return () => clearTimeout(loopTimeout);
    }
  }, [index, isComplete, fullText]);

  return (
    <div className="w-full h-[600px] grid grid-cols-2 justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-800">
      {/* Left div */}
      <div className='flex mt-[180px] ml-[66px]'>
        <div className="mb-14">
          <div className="sm:text-1xl -ml-10 md:ml-0  font-bold border-2 px-2 py-1 whitespace-nowrap text-white bg-gradient-to-b from-pink-200 to-purple-900">
            Welcome to my portfolio
          </div>
        </div>
        <div className="-ml-[210px] mt-20 pr-[10px] md:pr-[120px]">
          <h1 className="text-2xl text-white h-14 ml-2 sm:-ml-[70px] md:-ml-[80px] lg:-ml-[210px] xl:-ml-[240px]">
            {displayedText}
          </h1>
          <h4 className=" ml-3 md:ml-[0px] mt-4 text-white">
            A passionate web developer Seeking for a position where I can utilize my skills in career opportunities.
            I am a responsible and hard working person.
          </h4>
        </div>
      </div>

      {/* Right div*/}
      <div className='mt-24 flex'>
        <img src={img1} className="floating-image h-[450px] ml-14" alt="Floating Man" />
      </div>
    </div>
  );
}

export default HomePage;
