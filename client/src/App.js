import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/Home/Home';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Productitem from './Pages/ProductPage/ProductItem';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import { useFetch } from "./Hooks/useFetch";
import { useEffect } from "react";

function App() {
  const location=useLocation();
  useFetch();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.pathname])
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<CategoryPage />} />
        <Route path='/product/:id' element={<Productitem />} />
      </Routes>
      <Footer/>
      <Cart />
    </div>
  );
}

export default App;
