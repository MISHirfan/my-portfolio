import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";



const Contact = () => {
  return (

    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-8-y'>
            <h2 className='text-5xl'data-aos="zoom-in-down">Get In Touch</h2>
            <br/>
            <p className='text-grey-600 text-[18px] pt-2' data-aos="zoom-in-down">Sent Me A Messages Mails And Calls By Submitting The Foam.</p>
            <br/>
            <div className='flex gap-3 items-centre' data-aos="zoom-in-down">
                <FaMailBulk size={30}/> mishkhan636@gmail.com
            </div>
                  
            <div className='flex gap-3 items-centre' data-aos="zoom-in-down">
                <BsFillTelephoneInboundFill size={30}/> (0316-2956989)
             </div>
           </div> 
           <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transperent border border-accent' 
                id='name'/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transperent border border-accent' 
                id='email'/>
              </div>
              
              <div className='flex flex-col gap-1'>
                <label htmlFor="message">Message</label>
                <textarea
                className='bg-transperent border border-accent' 
                id='message' rows={8}>
                </textarea>

             </div>
             <button className='bg-green 60fixed p-5 px-10 border bottom-0 w-half'>Sent</button>
            </div> 
        </div>
     </div>
  )
}

export default Contact