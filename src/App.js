import React from 'react'
import './App.css';
import LoginBox from './components/LoginBox/LoginBox';
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import successfulLogin from './components/pages/successfulLogin';

function App() {
  return (
  <div className="App">
    <Navbar/>
    <LoginBox/>
    <Footer/>
    <successfulLogin/>
  </div>
  );
}

export default App;