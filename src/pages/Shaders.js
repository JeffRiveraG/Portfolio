import React from 'react';
import githubLightLogo from '../images/github lightmode.svg';
import projectImage1 from '../images/design dark sphere.png';
import projectImage2 from '../images/design dark box.png';
import projectImage3 from '../images/design color sphere.png'; 
import projectImage4 from '../images/design color box.png';

function Shaders() {
  return (
    <div className='home'>
      <div className='text-3xl flex justify-between mt-28'> {/* Added mt-52 to add logo */}
        <h1 className='font-bold ml-[11.25rem]'>
          Shaders P5.js Design Workshop - ACM
        </h1>
        <h1 className='font-bold mr-[11.25rem]'>Nov 2024</h1>
      </div>
      <div className='flex justify-between'>
      <div className='flex flex-col mt-9'>
        <h2 className='font-bold text-lg ml-[11.25rem]'>About</h2>
        <p className='text-sm ml-[11.25rem]'>A demo to show built-in shader libraries from P5.js.<br/>
          It's a shader that reacts to music and changes different shape depending on the volume<br/>
          of the music. This project was used to showcase creative coding for ACM Design Workshop.
        </p>
      </div>
      <div className='flex space-x-20 mt-10 mr-[11.25rem]'>
        <a href='https://github.com/JeffRiveraG/Sound-Visualizer---Design-Workshop' target='_blank' rel='noreferrer'><img src={githubLightLogo} className='w-8 h-8' alt='github-logo' /></a>
        <a href='https://sound-visualizer-design-workshop.vercel.app/' target='_blank' rel='noreferrer' className='flex justify-center items-center text-white rounded-2xl bg-black w-20 h-10 font-bold text-sm'>Visit</a>
      </div>
      </div>
      <div className='flex flex-col mt-9 ml-[11.25rem]'>
        <h2 className='font-bold text-lg'>Technologies</h2>
        <p className='text-sm italic'>HTML, CSS, P5.js GLSL</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>DARK MODE</h2>
        <div className='space-y-7'>
          <img src={projectImage1} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
          <img src={projectImage2} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-lg mt-10 mb-6'>COLOR MODE</h2>
        <div className='space-y-7'>
          <img src={projectImage3} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
          <img src={projectImage4} className='w-[60.625rem] h-[36.875rem]' alt='project-image' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-11 mt-36 mb-32'>
        <h1 className='text-3xl font-bold'>Check it out</h1>
        <a href='https://sound-visualizer-design-workshop.vercel.app/' target='_blank' rel='noreferrer' className='flex justify-center items-center text-white rounded-2xl bg-black w-20 h-10 font-bold text-sm'>Visit</a>
      </div>
    </div>
  );
}

export default Shaders;