import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Products from './pages/Products';
import SharedProductLayout from './pages/SharedProductLayout';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useState } from 'react';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null)
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>

        <Route path="products" element={<SharedProductLayout />}>
          <Route index element={<Products />}></Route>
          <Route path=":productId" element={<SingleProduct />}></Route>
        </Route>

        <Route path="login" element={<Login setUser={setUser}></Login>}></Route>
        <Route path="dashboard" element={<ProtectedRoute user={user}><Dashboard user={user}></Dashboard></ProtectedRoute>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
