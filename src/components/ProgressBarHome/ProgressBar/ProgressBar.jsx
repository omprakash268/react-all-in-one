import React, { useEffect, useState } from 'react';
import "./ProgressBar.css";

export const ProgressBar = ({ progress }) => {
  const [animateProgress, setAnimateProgress] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateProgress(progress);
    }, 100);

    return () => clearTimeout(timeout);
  }, [progress]);
  return (
    <>
      <p>Using transform :</p>
      <div className='progress-container'>
        <div className='inner-progress' style={{ color: animateProgress < 5 ? 'black' : 'white', transform: `translateX(${animateProgress - 100}%)` }}>
          {progress} %
        </div>
      </div>

      <p>Using width :</p>
      <div className='progress-container'>
        <div className='inner-progress' style={{ color: animateProgress < 5 ? 'black' : 'white', width: `${animateProgress}%` }}>
          {progress} %
        </div>
      </div>
    </>
  )
}
