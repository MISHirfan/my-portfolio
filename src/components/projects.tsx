import React from 'react';
import Heading from './heading';
import Card from './card';

const data =[
    {
    id: 0,
    title: "Todo list",
    desc: "A react & typescript based app for managing your task effeciently.",
    img: "/to-do project.webp",
    tags:["React", "Typescript" ,"Nodes","CSS"],
},
{
id: 1,
title: "Cowntown Timer",
desc: "A Nextjs and typescript powerd website to track time with an intractive cowndown features .",
img: "/countdown-project.png",
tags:["Next.Js", "Typescript" ,"Nodes","CSS"],
},
{
    
id: 2,
title: "Weather widget",
desc: "A Nextjs and typescript based tool for fetching and displaying real-time weather data .",
img: "/weather-project.png",
tags:["Next.Js", "Typescript" ,"Nodes","CSS"],
},
{

    id: 3,
    title: "Static Interactive Resume",
    desc: "A typescript based interactive resume  built with HTML and CSS allowing user to showcase thier skills dynamically .",
    img: "/Planner_Mum_Interactive_Resume_1.webp",
    tags:["Next.Js", "Typescript" ,"HTML","CSS"],
},
]

const projects = () => {
  return (
    <div id='projects' className='containerpt-32'>
    <Heading  title='Here is My Project'/>
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-centre'>
    {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        
        />))}
    </div>
    </div>
  )
}

export default projects