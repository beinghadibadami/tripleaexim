
import { ArrowRight, Ship, Truck, Plane } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Global Trade <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted partner for seamless import and export operations worldwide. 
              We connect businesses across continents with reliable, efficient, and cost-effective trade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Start Trading Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                Explore Services
              </a>
            </div>
            <div className="flex items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Ship className="h-6 w-6 text-blue-600" />
                <span>Sea Freight</span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane className="h-6 w-6 text-blue-600" />
                <span>Air Freight</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-blue-600" />
                <span>Land Transport</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/placeholder.svg" 
                alt="Global shipping and logistics" 
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Shipments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
