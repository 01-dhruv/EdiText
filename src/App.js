// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  // Link,
  Route,
  Routes,
} from "react-router-dom";
// import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <>
    <Router>
    <Navbar title="EdiText" mode = {mode} changeMode = {changeMode}/>
    <div className='container my-3'>

    {/* <About/> */}
    {/* <Alerts/> */}

    <Routes>
      <Route exact path='/' element={<TextForm mode = {mode}/> } />
        <Route path='/about' element={<About mode = {mode}/>} />
        {/* <Route path='/Login' element={<Login />} /> */}
    </Routes>

    {/* <TextForm/> */}

    </div>
    </Router>
    </>
  );
}

export default App;
