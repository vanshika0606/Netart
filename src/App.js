
import './App.css';

import { BrowserRouter, Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    
  <Routes>  
    
    <Route exact path="/" element={<Home/>}/>
  </Routes>
    
    <Routes>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
