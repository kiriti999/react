import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (question) => {
  const [showInfo, setshowInfo] = useState(false);
  const { id, title, info } = question;
  return (
    <article className="question">
      <header>
        <h2>{title}</h2>
        <button className="btn" onClick={() => setshowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  )
};

export default Question;
