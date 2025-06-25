
import { Users, Award, Globe, TrendingUp } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About GlobalTrade</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in international trade, GlobalTrade has established itself 
              as a trusted partner for businesses looking to expand their global reach. We specialize in 
              providing comprehensive import and export solutions that streamline your supply chain operations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced professionals understands the complexities of international trade 
              and works tirelessly to ensure your shipments reach their destination safely, on time, and 
              within budget.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="About our company" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
