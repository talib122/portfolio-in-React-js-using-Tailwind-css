import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../images/w_line.png';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location=useLocation();
  const isActive=(path)=>location.pathname===path;
  const handleHamburger = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between shadow-xl fixed w-full px-10 md:px-16 py-4 top-0 bg-gradient-to-r from-black to-slate-500 z-50">
      <div>
      <a href="#" class="sm:text-2xl font-bold border-2 px-2 py-1 whitespace-nowrap text-white">Talib's Portfolio</a>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-[20px] lg:gap-[42px] text-white">
          <li>
            <Link to="/about" className={`hover:text-[#c72092] border-b-2 ${
              isActive('/about') || isActive('/')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`hover:text-[#c72092] border-b-2 ${
              isActive('/skills')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`hover:text-[#c72092] border-b-2 ${
              isActive('/projects')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/experience" className={`hover:text-[#c72092] border-b-2 ${
              isActive('/experience')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`hover:text-[#c72092] border-b-2 ${
              isActive('/contact')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
            CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block md:w-[100px] -mr-8 lg:w-[170px]">
        <img src={img1} className='hover:text-gray-950'/>
      </div>
      <span
        className="md:hidden bg-gray-500 text-white px-3 py-[5px] fa-xl rounded-sm cursor-pointer"
        onClick={handleHamburger}
      >
        <FontAwesomeIcon icon={!menuOpen ? faBars : faXmark} />
      </span>
      {menuOpen && (
        <div className="flex md:hidden items-center justify-center absolute top-16 left-0 bg-gray-200 w-full z-50">
          <ul className="flex flex-col items-center w-full py-4">
          <li className='mb-3 w-full text-center'>
            <Link to="/about" onClick={()=>setMenuOpen(false)} className={`hover:text-[#c72092] border-b-2 ${
              isActive('/about') || isActive('/')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              ABOUT
            </Link>
          </li>
          <li className='mb-3 w-full text-center'>
            <Link to="/skills" onClick={()=>setMenuOpen(false)} className={`hover:text-[#c72092] border-b-2 ${
              isActive('/skills')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              SKILLS
            </Link>
          </li>
          <li className='mb-3 w-full text-center'>
            <Link to="/projects" onClick={()=>setMenuOpen(false)} className={`hover:text-[#c72092] border-b-2 ${
              isActive('/projects')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              PROJECTS
            </Link>
          </li>
          <li className='mb-3 w-full text-center'>
            <Link to="/experience" onClick={()=>setMenuOpen(false)} className={`hover:text-[#c72092] border-b-2 ${
              isActive('/experience')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
              EXPERIENCE
            </Link>
          </li>
          <li className='mb-3 w-full text-center'>
            <Link to="/contact" onClick={()=>setMenuOpen(false)} className={`hover:text-[#c72092] border-b-2 ${
              isActive('/contact')? "border-blue-700 text-purple-500":"border-transparent"
            }`}>
            CONTACT
            </Link>
          </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
