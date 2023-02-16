import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import cartItems from './cartItems';

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.modal);
  const cartStore = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (cartStore.isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {store.isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
export default App;
