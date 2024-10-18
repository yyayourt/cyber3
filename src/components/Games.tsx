import React from 'react';
import { Gamepad, Users, Trophy, Car, Crosshair } from 'lucide-react';

const games = [
  { name: 'Call of Duty: Modern Warfare', description: 'FPS compétitif', icon: Crosshair },
  { name: 'FIFA 24', description: 'Simulation de football', icon: Users },
  { name: 'League of Legends', description: 'MOBA stratégique', icon: Trophy },
  { name: 'Mario Kart', description: 'Jeu de course amusant', icon: Car },
  { name: 'Fortnite', description: 'Battle Royale', icon: Gamepad },
];

const Games: React.FC = () => {
  return (
    <section id="jeux" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text">
          Nos Jeux
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.name} className="game-card bg-background p-6 rounded-lg neon-border transition-all duration-300 hover:scale-105">
              <game.icon className="w-12 h-12 mb-4 text-accent1" />
              <h3 className="text-xl font-orbitron font-bold mb-2">{game.name}</h3>
              <p className="text-gray-400 mb-4">{game.description}</p>
              <button className="text-accent2 hover:text-accent3 transition-colors duration-200 font-bold">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;