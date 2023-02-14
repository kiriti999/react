import { useParams } from 'react-router-dom';
import products from '../data';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
  const params = useParams();
  const product = products.find(item => item.id === params.productId)
  const { image, name } = product;
  return (
    <section className='section product'>
      <h5>{name}</h5>
      <img src={image} alt="" />
      <div>
        <Link to='/products'>Back to products page</Link>
      </div>
    </section>
  );
};

export default SingleProduct;
