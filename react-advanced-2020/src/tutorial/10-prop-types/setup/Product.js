import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  console.log(image, name, price);
  return (
    <article className="product">
      <h4>Single product</h4>
      <img src={image.url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  )
};

Product.prototypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired
}

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage
}

export default Product;
