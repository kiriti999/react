import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    console.log('use effect called');
    window.addEventListener('resize', checkSize);
    // return () => {
    //   console.log('clean up');
    //   window.removeEventListener('resize', checkSize);
    // }
  }, [])

  return (
    <>
      <h2>Window</h2>
      <h2>{size} px</h2>
    </>
  )
};

export default UseEffectCleanup;
