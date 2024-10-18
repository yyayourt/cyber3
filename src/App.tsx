import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <Games />
        <Events />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;