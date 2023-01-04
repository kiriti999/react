import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('file: 1-useRef-basics.js:9 :: refContainer', refContainer.current.value)
  }

  useEffect(() => refContainer.current.focus());

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" ref={refContainer} />
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default UseRefBasics;
