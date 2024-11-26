import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
      
        <div className="text-xl font-xl">Hey, This Is Mehwish Malik</div>
        <ul className="gap-16 lg:gap-16 hidden md:flex flex">
          <li className="menuLink"><a href="#header">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#Skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>
         <GiHamburgerMenu size={35} />
      </div>
    </div>
  );
};

export default Navbar;