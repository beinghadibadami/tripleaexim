
import { Ship, Plane, Truck, FileText, Shield, Clock } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for large volume shipments with full container and LCL options."
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments with global coverage."
    },
    {
      icon: Truck,
      title: "Land Transport",
      description: "Comprehensive ground transportation services connecting major trade routes and destinations."
    },
    {
      icon: FileText,
      title: "Customs Clearance",
      description: "Expert customs documentation and clearance services to ensure smooth border crossings."
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments throughout the journey."
    },
    {
      icon: Clock,
      title: "24/7 Tracking",
      description: "Real-time shipment tracking and status updates to keep you informed every step of the way."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive import and export solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
