import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [text, setText] = useState('random title');

  useEffect(() => {
    console.log('initial render');
  }, [])

  useEffect(() => {
    console.log('test use effect with value: ', text);
  }, [text])

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  }
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>change title</button>
    </>
  )
};

export default UseEffectBasics;
