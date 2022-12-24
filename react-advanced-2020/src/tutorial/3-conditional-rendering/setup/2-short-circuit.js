import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState('');
  const [isError, setIsError] = useState(false);
  // const [text, settext] = useState('peter');
  // const firstValue = text || 'hello';
  // const secondValue = text && 'hello';

  return (
    <>
      <h1>{text || 'hello world'}</h1>
      <button className='btn' onClick={() => { setIsError(!isError) }}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>There is an Error...</h1> : <h1>Success</h1>}
    </>
  )
};

export default ShortCircuit;
