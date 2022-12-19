
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Router,Routes, Route } from 'react-router-dom';
import Image_part from './components/Image_part';
import "./components/style.css"
import Icon from './components/Icon.js'
import All_icons from './components/All_icons';
import Cards from './components/Cards';

function App() {
  const [subsButton, setSubsButton] = useState(false);

  return (
    <div className={subsButton==false?'whole_body':'whole_body filter-onClick'}>
      <Image_part  subsButton={subsButton}  setSubsButton={setSubsButton}/>
      <All_icons/>
      <Cards/>
    </div>
  

  );
}

export default App;
