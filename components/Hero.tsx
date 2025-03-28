import React from 'react';
import { Layers, FileSpreadsheet } from 'lucide-react';

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] via-[#F0F8FF] to-[#E6E6FA]">
          {/* Hero Section */}
          <div className="pt-32 pb-20 px-4 justify-center items-center flex flex-col min-h-screen">
            <div className="max-w-4xl mx-auto text-center justify-center items-center flex flex-col">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Real-Time Personal Finance Tracker
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Track your spending, manage your budget, and achieve your financial goals with our intuitive and user-friendly platform.
              </p>
            </div>
          </div>
          <div>
            
          </div>
        </div>

    );
}

export default Hero
