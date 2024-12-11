import React from 'react';
import githubLightLogo from '../images/github lightmode.svg';
import projectImage1 from '../images/statify login.png';
import projectImage2 from '../images/statify landing page.png'
import projectImage3 from '../images/statify top artists.png'
import projectImage4 from '../images/statify charts.png'
import projectImage5 from '../images/statify playlist.png'


function Statify() {
  return (
    <div className='home'>
      <div className='text-3xl flex justify-between mt-28'> {/* Added mt-52 to add logo */}
        <h1 className='font-bold ml-[11.25rem]'>
          Statify
        </h1>
        <h1 className='font-bold mr-[11.25rem]'>Aug 2023 - Dec 2023</h1>
      </div>
      <div className='flex justify-between'>
      <div className='flex flex-col mt-9'>
        <h2 className='font-bold text-lg ml-[11.25rem]'>About</h2>
        <p className='text-sm ml-[11.25rem]'>A Spotify Wrapped clone that allows you to view your top tracks,<br/>
            artists, and genres from as far back as one year ago, with interactive<br/>
            graphs and data visualizations. Need some new song suggestions?<br/>
            We got you covered with a curated playlist based on your top genres<br/>
            Don't like the suggestions? Ask for another one and watch the color scheme change!<br/>
            Currently for personal use only, but will be released soon.
        </p>
      </div>
      <div className='flex space-x-20 mt-10 mr-[11.25rem]'>
        <a href='https://github.com/JeffRiveraG/SpotReveal-Final-Release' target='_blank' rel='noreferrer'><img src={githubLightLogo} className='w-8 h-8' alt='github-logo' /></a>
      </div>
      </div>
      <div className='flex flex-col mt-9 ml-[11.25rem]'>
        <h2 className='font-bold text-lg'>Technologies</h2>
        <p className='text-sm italic'>HTML, CSS, Python, Flask, SpotifyAPI</p>
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
        <h1 className='text-3xl font-bold'>Shipping Soon!</h1>
        <a href='https://sound-visualizer-design-workshop.vercel.app/' target='_blank' rel='noreferrer' className='flex justify-center items-center text-white rounded-2xl bg-black w-20 h-10 font-bold text-sm'>Visit</a>
      </div>
    </div>
  );
}

export default Statify;