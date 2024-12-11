import React from 'react';
import projectImage1 from '../images/pulsify landing.png';
import projectImage2 from '../images/pulsify mixing.png';
import projectDEMO from '../videos/pulsify demo.mp4'; 

function Pulsify() {
  return (
    <div className='home'>
      <div className='text-3xl flex justify-between mt-28'> {/* Add mt-52 to add logo */}
        <h1 className='font-bold ml-[11.25rem]'>
          Pulsify
        </h1>
        <h1 className='font-bold mr-[11.25rem]'>Aug 2024 - Present</h1>
      </div>
      <div className='flex justify-between'>
      <div className='flex flex-col mt-9'>
        <h2 className='font-bold text-lg ml-[11.25rem]'>About</h2>
        <p className='text-sm ml-[11.25rem]'>Pulsify is a beginner's first mixing board. This project focuses on the user experience<br/>
          and simplifies sound separation through machine learning. You can log into your Spotify account<br/>
          or upload your own .mp3 of a song to separate from four different sound sources. Karaoke?<br/> 
          Want to listen the instrumentals? Breakdown your favorite songs to it's components.<br/>
          This project is still in development and will be released soon.
        </p>
      </div>
      {/* This is where github icon and link to project go*/}
      </div>
      <div className='flex flex-col mt-9 ml-[11.25rem]'>
        <h2 className='font-bold text-lg'>Technologies</h2>
        <p className='text-sm italic'>Python, React, Tailwind, Django, TensorFlow, SpotifyAPI</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>SNEAK PEAK</h2>
        <div className='space-y-7'>
          <video width="970" loop autoPlay muted>
            <source src={projectDEMO} type="video/mp4" />
            Your browser does not support the video tag.s
          </video>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>LOG IN</h2>
        <div className='space-y-7'>
          <img src={projectImage1} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>MIXING PAGE</h2>
        <div className='space-y-7'>
          <img src={projectImage2} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-11 mt-36 mb-32'>
        <h1 className='text-3xl font-bold'>Still working on it!</h1>
      </div>
    </div>
  );
}

export default Pulsify;