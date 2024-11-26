
import react from 'react';

const Skills = () => {
    return (

        <div id='Skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-centre'>
                <div data-aos="zoom-in-down">
                    <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
                    <br/>
                    <p className='text-white-500 pt-2'>Learn more
Technology skills are the abilities that allow people to interact with the digital world. They are important for working efficiently and can make people more appealing to employers. Some examples of technology skills include: 
Data management: Using programs to record, organize, and store information on a computer system. Data management skills can help people process and analyze data efficiently. 
Word processing and emailing: Basic skills that are useful for many jobs. 
User experience (UX) skills: Another important technology skill. </p>
                </div>
                <div>
                    <div className='grid grid-col-2 text-green 600 text-2xl sm:text-5xl'>
                        <div className='space -y-2'></div>
                        <h2 data-aos="zoom-in-down">Typescript</h2>
                        <h2 data-aos="zoom-in-down">Next.js</h2>
                        <h2 data-aos="zoom-in-down">HTML,CSS</h2>
                        <h2 data-aos="zoom-in-down">Node.js</h2>
                        <h2 data-aos="zoom-in-down">Tailwand</h2>
                    </div>

                </div>
            </div>
          

        </div>
    )
}
  
export default Skills;
