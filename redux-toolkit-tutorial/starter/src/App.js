import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'

function App() {
  const store = useSelector((store) => store.modal)
  return (
    <main>
      {store.isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
export default App;
