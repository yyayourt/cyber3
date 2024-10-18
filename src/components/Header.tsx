import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-background/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="w-8 h-8 text-accent1" />
          <span className="text-2xl font-orbitron font-bold bg-gradient-to-r from-accent1 via-accent2 to-accent3 text-transparent bg-clip-text">
            Cybergamer
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Présentation', 'Jeux', 'Événements', 'Tarifs', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-text hover:text-accent2 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;