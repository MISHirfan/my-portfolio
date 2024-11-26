import React from 'react';
import Navbar from './navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <div> 
      {/* <Image src={'/bussines-woman.jpg'}  width={100} height={40} alt="public"/> */ }
  
    
      {/* <Navbar /> */}
      <div className="container grid lg:grid-cols-2 h-[calc(12vh-40px)]">
      <div className='hidden lg:block' ></div>
      <div className='text-[100px] sm:text-[100px] font-bold leading-tight flex justify-centre items-centre'>
      <div>
      <p data-aos="zoom-in-down" >I`m</p>
      <p data-aos="zoom-in-down" >Mehwish</p>
      <p  data-aos="zoom-in-down">Malik</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Header;