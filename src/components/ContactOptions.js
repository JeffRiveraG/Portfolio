import React from "react";
import Arrow from '../images/Vector.svg';

function ContactOptions({ text }) {
    return(
        <div className="flex space-x-2">
            <p className="text-lg">{text}</p>
            <img src={Arrow} alt="arrow"></img>
        </div>
    );
}

export default ContactOptions;