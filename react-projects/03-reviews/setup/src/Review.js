import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setindex((index) => checkNumber(--index))
  }

  const nextPerson = () => {
    setindex((index) => checkNumber(++index))
  }

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const randomPerson = () => {
    let randomNumber = (Math.ceil(Math.random() * people.length));
    if (randomNumber === index) {
      randomNumber += 1;
    }
    setindex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
        <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
        <button className="random-btn" onClick={randomPerson}>surprise me</button>
      </div>
    </article>
  )
};

export default Review;