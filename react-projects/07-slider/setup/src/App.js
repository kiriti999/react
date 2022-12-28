/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setpeople] = useState(data);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setindex(lastIndex);
    }

    if (index === people.length) {
      setindex(0);
    }
  }, [index, people])

  useEffect(() => {
    const interval = setInterval(() => {
      setindex(index + 1)
    }, 2000);
    return (() => clearInterval(interval))
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span></span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h2>
                {name}
              </h2>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon'></FaQuoteRight>
            </article>
          )
        })}
        <button className="prev" onClick={() => setindex(index - 1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={() => setindex(index + 1)}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  )
}

export default App;
