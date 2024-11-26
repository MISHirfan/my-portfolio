"use client"

import React, { useEffect } from 'react';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Project from "@/components/projects"
import Skills from "@/components/Skills"
import Contact from '@/components/Contact';
import About from '@/components/About';
import  AOS from  "aos"
import 'aos/dist/aos.css';


export default function Home() {
  useEffect (() => {
  AOS.init({
    easing : "ease-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "bottom-bottom",
    offset: 160,
  });
  AOS.refresh();
  },[])
  return (
    <>    <div>
  
      <Navbar/>
      <img />
      { <Header /> }
      <div className="body min-h-[130vh]  flex   flex-col">
      <Image src={'/bussines-woman.jpg'}  width={400} height={200} alt="public"/>
      <h2>Here is My Portfolio</h2>
      <br />
      <br />
      <br />

      <Project />
      <Skills/ >
      <Contact />
      <About/>
      </div>
    </div>
    </>

  );
}
