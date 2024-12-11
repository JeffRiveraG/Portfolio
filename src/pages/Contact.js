import React from "react";
import arrow from '../images/vector light.svg';

function Contact() {
    return(
        <div className="mt-28 home">
            <h1 className="text-3xl font-bold mb-8 ml-[11.4375rem]">Contact</h1>
            <p className="ml-[11.4375rem] mb-20">Want to keep in touch? You can reach me with any of these options.<br/><br/>
                Let's build something amazing together!
            </p>
            <div className="flex flex-col ml-[11.4375rem] space-y-7">
                <a href='mailto:rjeffrey0929@gmail.com' className='hover-underline-dark w-[3.375rem]'>
                    <div className='flex space-x-2 hover-underline-dark w-[3.375rem]'>
                        <p>email</p>
                        <img src={ arrow } alt='arrow'></img>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/jeffreyriveragarcia/' target="_blank" rel="noreferrer" className='hover-underline-dark w-[4.25rem]'>
                    <div className='flex space-x-2 hover-underline-dark w-[4.25rem]'>
                        <p>linkedin</p>
                        <img src={ arrow } alt='arrow'></img>
                    </div>
                </a>
                <a href='https://github.com/JeffRiveraG' target="_blank" rel="noreferrer" className='hover-underline-dark w-[3.75rem]'>
                    <div className='flex space-x-2 hover-underline-dark w-[3.75rem]'>
                        <p>github</p>
                        <img src={ arrow } alt='arrow'></img>
                    </div>
                </a>
                <a href='https://www.instagram.com/chepp.ies/' target="_blank" rel="noreferrer" className='hover-underline-dark w-20'>
                    <div className='flex space-x-2 hover-underline-dark w-20'>
                        <p>instagram</p>
                        <img src={ arrow } alt='arrow'></img>
                    </div>
                </a>
            </div>
        </div>
    );

}

export default Contact;