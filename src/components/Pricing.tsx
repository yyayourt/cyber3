import React from 'react';
import { Clock, Calendar, Infinity } from 'lucide-react';

const pricingPlans = [
  { name: 'Session PC', price: '1000 FCFA', duration: '/ heure', icon: Clock },
  { name: 'Session Console', price: '1500 FCFA', duration: '/ heure', icon: Clock },
  { name: 'Pack journée illimitée', price: '8000 FCFA', duration: '/ jour', icon: Infinity },
];

const Pricing: React.FC = () => {
  return (
    <section id="tarifs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-accent3 to-accent1 text-transparent bg-clip-text">
          Nos Tarifs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="bg-background p-8 rounded-lg neon-border text-center transition-all duration-300 hover:scale-105">
              <plan.icon className="w-16 h-16 mx-auto mb-6 text-accent2" />
              <h3 className="text-2xl font-orbitron font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.duration}</p>
              <button className="bg-accent1 hover:bg-accent2 text-background font-bold py-2 px-6 rounded-full transition-colors duration-200">
                Réserver
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;