
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';


function App() {
  let cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
        />
    )
  })
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <section className="cards--container">{cards}</section>
    </div>
  );
}

export default App;
