import React from 'react';
import arrow from '../images/vector light.svg';
import me from '../images/mememe.jpg';
import Time from '../components/Time';
import CircleText from '../components/CircleText';
import LastFM from '../components/LastFM';
import { Link } from 'react-router-dom';


function About() {
    return (
        <div className='home'>
            <div className='flex min-h-screen items-center justify-between'>
                <div className='flex flex-col ml-[11.25rem] space-y-9'>
                    <h1 className='text-3xl font-bold'>
                        About Me
                    </h1>
                    <p className='text-base'>
                        Hello, my name is Jeffrey Rivera. Based in Orange, California, I am a software engineer<br/>
                        studying at California State University, Fullerton. I am passionate about making aesthetic<br/>
                        and functional applications that hopefully inspire other developers like me. I study and implement<br/>
                        new technologies or topics that I find interesting or cool and bring them to life in my projects.<br/>
                        I am always looking for new opportunities to learn and grow as a developer.<br/><br/>
                        Besides developing, I enjoy playing video games, listening to music, going to the gym, and<br/> 
                        hanging out with friends.<br/><br/>
                        Also take a look into the things that inspire my style and work. I recently have been inspired by<br/>
                        aesthetics that make me feel nostalgic or simply just happy. Hopefully these can inspire you in an<br/>
                        odd way like they do for me.
                    </p>
                    <div className='flex space-x-9'>
                        <a href='/Resume - Jeffrey Rivera.pdf' target='_blank' rel='noreferrer' className='hover-underline-dark w-16'>
                            <div className='flex space-x-2 hover-underline-dark w-16'>
                                <p>resume</p>
                                <img src={ arrow } alt='arrow'/>
                            </div>
                        </a>
                        <Link to='/inspo' className='flex space-x-2 hover-underline-dark w-14'>
                            <p>inspo</p>
                            <img src={ arrow } alt='arrow'/>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[18.125rem] h-[22.8125rem] mr-[11.25rem] relative'>
                    <Time />
                    <img src={me} alt='me' className='max-w-full h-auto'></img>
                    <div className='absolute bottom-[-6rem] right-0 flex justify-center items-center'>
                        <CircleText />
                        <LastFM />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;