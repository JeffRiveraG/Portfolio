import React from 'react';
import githubLightLogo from '../images/github lightmode.svg';
import projectImage1 from '../images/statify login.png';
import projectImage2 from '../images/statify landing page.png'
import projectImage3 from '../images/statify top artists.png'
import projectImage4 from '../images/statify charts.png'
import projectImage5 from '../images/statify playlist.png'


function URE() {
  return (
    <div className='home'>
      <div className='text-3xl flex justify-between mt-28'> {/* Added mt-52 to add logo */}
        <h1 className='font-bold ml-[11.25rem]'>
          URE - Project Raise
        </h1>
        <h1 className='font-bold mr-[11.25rem]'>June 2022 - Aug 2022</h1>
      </div>
      <div className='flex justify-between'>
      <div className='flex flex-col mt-9'>
        <h2 className='font-bold text-lg ml-[11.25rem]'>About</h2>
        <p className='text-sm ml-[11.25rem]'>URE Project Raise is an 8-week research program where I worked with a team of<br/>
            grad students and a professor to develop a forest fire prevention system to combat<br/>
            the increasing number of man-made forest fires in California using LoRa radios to<br/>
            send and recieve data from sensors to detect any potential fires in real-time.
        </p>
      </div>
      <div className='flex space-x-20 mt-10 mr-[11.25rem]'>
        <a href='https://github.com/JeffRiveraG/Forest-Fire-Prevention-Prototype-Project-Raise-Summer-2022-Undergraduate-Research-Opportunity' target='_blank' rel='noreferrer'><img src={githubLightLogo} className='w-8 h-8' alt='github-logo' /></a>
      </div>
      </div>
      <div className='flex flex-col mt-9 ml-[11.25rem]'>
        <h2 className='font-bold text-lg'>Technologies</h2>
        <p className='text-sm italic'>C, ESP-IDF, LoRa Radios</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>LOGIN PAGE</h2>
        <div className='space-y-7'>
          <img src={projectImage1} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>TOP ITEMS PAGE</h2>
        <div className='space-y-7'>
          <img src={projectImage2} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
          <img src={projectImage3} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
          <img src={projectImage4} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
          <img src={projectImage5} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-11 mt-36 mb-32'>
        <h1 className='text-3xl font-bold'>Check it out!</h1>
        <a href='https://github.com/JeffRiveraG/Forest-Fire-Prevention-Prototype-Project-Raise-Summer-2022-Undergraduate-Research-Opportunity' target='_blank' rel='noreferrer' className='flex justify-center items-center text-white rounded-2xl bg-black w-20 h-10 font-bold text-sm'>Visit</a>
      </div>
    </div>
  );
}

export default URE;