import React from 'react';
import ProjectOptions from '../components/ProjectOptions';
import projectImage1 from '../images/pulsify landing.png';
import projectImage2 from '../images/statify landing.png';
import projectImage3 from '../images/rover.png';
import projectImage4 from '../images/URE project photo.JPG';
import projectImage5 from '../images/design screenshot.png';

function Works() {
  return (
    <div className='min-h-screen flex flex-col mt-28 home'>
      <h1 className='text-3xl font-bold mb-8 ml-[11.4375rem]'>Works</h1>
      <div className='flex justify-center items-center space-x-5'>
        <ProjectOptions 
          imageSrc={projectImage1}  
          title={'Pulsify'}
          description={'A simplified audio remix webapp. Remix and listen to music by turning individual sources on or off for a unique listening experience'}
          projectPage={'/projects/pulsify'}
          />
        <ProjectOptions 
          imageSrc={projectImage2} 
          title={'Statify'}
          description={'A Spotify Wrapped inspired webapp. View your top tracks, artists, and genres of all time or the last 6 months'}
          projectPage={'/projects/statify'}
        />
      </div>
      <div className='flex justify-center items-center space-x-5'>
        <ProjectOptions 
          imageSrc={projectImage3}  
          title={'NCAS - NASA'}
          description={'Presented a mock rover proposal to NASA engineers, focusing on space exploration objectives and the design of a rover to meet the needs of a specific mission.'}
          projectPage={'/projects/ncas'}
          />
        <ProjectOptions 
          imageSrc={projectImage4} 
          title={'Forest Fire Prevention - Project Raise'}
          description={'A forest fire prevention system that uses LoRa radios and microcontrollers to detect and prevent potential forest fires in real-time.'}
          projectPage={'/projects/ure'}
        />
      </div>
      <div className='flex justify-center items-center space-x-5'>
        <ProjectOptions
            imageSrc={projectImage5}
            title={'Shaders P5.js Design Workshop - ACM'}
            description={'A project to showcase the P5.js Library using built-in shaders to create a unique listening experience'}
            projectPage={'/projects/shaders'}
        />
      </div>
    </div>
  );
}

export default Works;