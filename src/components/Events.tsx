import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  { name: 'Tournoi Call of Duty', date: 'Tous les samedis', time: '18h00' },
  { name: 'Soirée rétro arcade', date: 'Dernier vendredi du mois', time: '20h00' },
  { name: 'Compétition FIFA', date: 'Chaque dimanche', time: '15h00' },
  { name: 'Marathon League of Legends', date: 'Premier samedi du mois', time: '14h00' },
];

const Events: React.FC = () => {
  return (
    <section id="événements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-accent2 to-accent3 text-transparent bg-clip-text">
          Calendrier des Événements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.name} className="bg-gray-900 p-6 rounded-lg neon-border">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-2 text-accent2" />
                <h3 className="text-xl font-orbitron font-bold">{event.name}</h3>
              </div>
              <p className="text-gray-400">{event.date} à {event.time}</p>
              <button className="mt-4 text-accent1 hover:text-accent3 transition-colors duration-200 font-bold">
                Détails et inscription
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;