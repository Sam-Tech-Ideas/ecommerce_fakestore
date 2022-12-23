import React from 'react'
import Sidebar from './components/Sidebar';
 import Footer from "./components/Footer";
 import Header from "./components/Header";
 import Home from './pages/Home'
 import ProductDetails from './pages/ProductDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
      <Footer/>
    </Router>
  );
}

export default App