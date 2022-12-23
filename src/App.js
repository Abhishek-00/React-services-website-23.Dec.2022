import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
