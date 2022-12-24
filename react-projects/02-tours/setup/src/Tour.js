import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  const { name, id, image, info, price, removeTour } = props;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
          <button className="delete-btn" onClick={() => removeTour(id)}>delete</button>
        </div>
      </footer>
    </article>
  )
};

export default Tour;
