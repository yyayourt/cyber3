import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="presentation" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-accent1 via-accent2 to-accent3 text-transparent bg-clip-text">
          Bienvenue chez Cybergamer
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          L'endroit où la passion du jeu prend vie. Avec des installations de pointe, nous vous offrons un espace idéal pour des sessions intenses de gaming, des compétitions et des soirées à thème inoubliables.
        </p>
        <a
          href="#jeux"
          className="bg-accent2 hover:bg-accent1 text-background font-bold py-3 px-6 rounded-full transition-colors duration-200 inline-block"
        >
          Découvrir nos jeux
        </a>
      </div>
    </section>
  );
};

export default Hero;