import React from 'react';
import projectImage1 from '../images/ncas team.png';
import projectImage2 from '../images/ncas swe diagram.png';
import projectImage3 from '../images/rover.png';

function NCAS() {
  return (
    <div className='home'>
      <div className='text-3xl flex justify-between mt-28'> {/* Added mt-52 to add logo */}
        <h1 className='font-bold ml-[11.25rem]'>
          NASA Community College Aerospace Scholars (NCAS)
        </h1>
        <h1 className='font-bold mr-[11.25rem]'>Jan 2023 - Mar 2023</h1>
      </div>
      <div className='flex justify-between'>
      <div className='flex flex-col mt-9'>
        <h2 className='font-bold text-lg ml-[11.25rem]'>About</h2>
        <p className='text-sm ml-[11.25rem]'>Collaborated in a fictious role as a NASA employees with a team of community college<br/>
            students around the Unites States to gain exposure to project structure and lunar mission design.<br/> 
            Designed and presented a mock rover proposal to NASA engineers, focusing on space exploration<br/>
            objectives and the design of a rover to meet the needs of a specific mission.<br/>
            My role was software specialist, focusing on the software needed for a succussful rover mission.
        </p>
      </div>
      <div className='flex space-x-20 mt-10 mr-[11.25rem]'>
        <a href='/NCAS presentation.pdf' target='_blank' rel='noreferrer' className='flex justify-center items-center text-white rounded-2xl bg-black w-20 h-10 font-bold text-sm'>Visit</a>
      </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>TEAM</h2>
        <div className='space-y-7'>
          <img src={projectImage1} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>SOFTWARE ARCITECTURE</h2>
        <div className='space-y-7'>
          <img src={projectImage2} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>ROVER (HARDWARE)</h2>
        <div className='space-y-7'>
          <img src={projectImage3} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-11 mt-36 mb-32'>
        <h1 className='text-3xl font-bold'>View the presentation</h1>
        <a href='/NCAS presentation.pdf' target='_blank' rel='noreferrer' className='flex justify-center items-center text-white rounded-2xl bg-black w-20 h-10 font-bold text-sm'>Visit</a>
      </div>
    </div>
  );
}

export default NCAS;