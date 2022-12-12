import Aos from 'aos';
import "../node_modules/aos/src/sass/aos.scss";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Product from './components/products/Product';
import Products from './components/products/Products';
import notebookData from './data/notebooks';
import { fetchingProducts } from './store/actions';

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Animate On Scroll
    Aos.init();
    // Fetching products
    dispatch(fetchingProducts(notebookData));
    setTimeout(() => {
      setLoading(true);
    }, 3000)
  }, []);

  return (
    <>
      {/* Components */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home status={loading} />} />
        <Route path='/products' element={<Products status={loading} />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs status={loading} />} />
      </Routes>
      <Footer />
    </>
  )
}
