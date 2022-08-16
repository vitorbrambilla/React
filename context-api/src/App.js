import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
