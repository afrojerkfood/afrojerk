import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodTruck from './FoodTruck';

export default function Hero() {
  const isOpen = true; // This would be determined by your backend

  return (
    <div className="relative min-h-[90vh] flex items-center pt-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      <FoodTruck />
      
      <div className="container mx-auto px-4 z-10 mt-8">
        <div className="max-w-3xl">
          <img 
            src="https://cnkalkntbjisvbpjtojk.supabase.co/storage/v1/object/public/media//afro%20jerk%20logo@0%20(1).5x"
            alt="Afro Jerk Logo"
            className="w-64 h-auto mb-8 animate-fade-in"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Where Africa Meets Caribbean
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            Experience the perfect fusion of African and Caribbean flavors, 
            bringing you a unique culinary journey on wheels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/locate"
              className="flex items-center gap-2 bg-[#eb1924] text-white px-6 py-3 rounded-full hover:bg-[#eb1924]/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Find Us Now
            </Link>
            
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-medium">
                {isOpen ? 'Open Now' : 'Closed'}
              </span>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#01a952]' : 'bg-[#eb1924]'}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}