import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Menu from './components/Menu';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>  
        <Route path="/" element={<Home/> } /> 
        <Route path="/about" element={<About/> } /> 
        <Route path="/products" element={<Products/> } /> 
      </Routes> 
    </div>
  );
}

export default App;
