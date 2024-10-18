import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-orbitron font-bold mb-4 text-accent1">Cybergamer</h3>
            <p className="text-gray-400">L'ultime expérience gaming à Abidjan</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-accent2" />
                <span>Rue des Gamers, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-accent2" />
                <span>+225 07 07 07 07 07</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-accent2" />
                <span>contact@cybergamer.ci</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {['Présentation', 'Jeux', 'Événements', 'Tarifs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-accent3 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent2 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent3 transition-colors duration-200">
                <Twitch className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Cybergamer. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;