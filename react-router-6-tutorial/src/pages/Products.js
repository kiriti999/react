import { Link } from 'react-router-dom';
import products from '../data';
const Products = () => {
  return (
    <section className='section'>
      <h2>products</h2>
      <div className="products">
        {products.map((item) => {
          return (
            <article key={item.id}>
              <h5>{item.name}</h5>
              <img src={item.image} alt="" width="330" />
              <div>
                <Link to={`/products/${item.id}`}>more info</Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
};

export default Products;
