import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobal } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobal();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={openModal}>Show modal</button>
    </main>
  )
}

export default Home
