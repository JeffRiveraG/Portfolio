import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const options = { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setTime(`${timeString} PST`);
    }

    const intervalId = setInterval(updateTime, 1000);
    updateTime(); 

    return () => clearInterval(intervalId);
  }, []);

  return <p id="time" className='font-bold'>{time}</p>;
}

export default Time;