
import './App.css';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PoolGallary from './components/PoolGallary/PoolGallary';
import PoolInfo from './components/PoolInfo/PoolInfo';
import PoolMod from './components/PoolMod/PoolMod';
import PoolSpec from './components/PoolSpec/PoolSpec';
import Products from './components/Products/Products';
import Productsinfo from './components/ProductsInfo/Productsinfo';
import Signup from './components/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About/>} />
          <Route path='/poolinfo' element={<PoolInfo/>}/>
          <Route path='/poolspecification' element={<PoolSpec/>}/>
          <Route path='/poolmodel' element={<PoolMod/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/poolgallary' element={<PoolGallary/>}/>
          <Route path='/productinfo' element={<Productsinfo/>}/>

  </Routes>
        <Footer />
      </BrowserRouter>




    </>
  );
}

export default App;
