import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Books from './Books';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    
    <div id="page-wrap">
    <Header title= "Primo sito in React"/>,
    <NavBar />,
    <Books />,
    <About />,
    <Footer />
    </div>
  )
}

export default App
