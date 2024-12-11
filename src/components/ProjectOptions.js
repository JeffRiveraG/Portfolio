import React from 'react';
import Arrow from '../images/Vector.svg';
import { Link } from 'react-router-dom';

function ProjectOptions({ imageSrc, title, description, projectPage }) {
  return (
    <div className="relative group m-5 project-option">
      <img src={imageSrc} className="w-[32.94rem] h-[16.25rem] rounded-2xl" alt='project-image' />
      <div className="absolute h-full w-full bg-black flex items-end rounded-2xl -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-60 transition-all duration-300">
        <div className='text-white flex flex-col space-y-2 ml-8 mb-11'>
          <div className='flex flex-col text-left'>
            <h1 className='font-bold text-[1.125rem]'>{title}</h1>
            <p className='text-sm max-w-[80%]'>{description}</p>
          </div>
          <Link to={projectPage} className="flex space-x-2 hover-underline w-[75px] text-nowrap">
            <p className='text-sm hover-underline'>More Info</p>
            <img src={Arrow} alt='arrow'/>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectOptions;