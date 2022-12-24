import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'kiriti',
    age: '27',
    message: 'hello Kiriti'
  })

  const changeMessage = (message) => setPerson({ ...person, message: 'hello world' });

  return (
    <>
      <h2>useState object example</h2>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.message}</p>
      <button className='btn' onClick={() => changeMessage()}>change message</button>
    </>
  )
};

export default UseStateObject;
