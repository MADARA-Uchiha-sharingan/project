import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Services() {
  const [, setLocation] = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setAnimate(true);
  }, []);

  const handleBack = () => {
    setAnimate(false);
    // Delay navigation to allow exit animation to complete
    setTimeout(() => {
      setLocation("/home");
    }, 500);
  };

  const services: Service[] = [
    {
      id: 1,
      title: "Free Wi-Fi",
      description: "Stay connected with our high-speed Wi-Fi available throughout the hotel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13a10 10 0 0 1 14 0"></path>
          <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
          <path d="M2 8.82a15 15 0 0 1 20 0"></path>
          <line x1="12" x2="12" y1="20" y2="20"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: "Room Service",
      description: "Enjoy our 24/7 room service with a wide variety of food and beverage options.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 3a8 8 0 0 0-8 8v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a8 8 0 0 0-8-8Z"></path>
          <path d="M11 3v9h9"></path>
          <path d="M11 3v9h9"></path>
          <path d="M2 11h20"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our spa services and wellness treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M12 8v1"></path>
          <path d="M12 15v1"></path>
          <path d="M16 12h-1"></path>
          <path d="M9 12H8"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Airport Transfer",
      description: "We offer convenient airport pickup and drop-off services for our guests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17h13v2H3zM19 6.5A6.5 6.5 0 1 0 5.6 12L6 17h12l.4-5z"></path>
          <path d="M9 9h6"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Tour Arrangements",
      description: "Plan your perfect tour with our expert guides and customized packages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m7 15 5-5 5 5"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Currency Exchange",
      description: "Exchange your currency conveniently at our hotel's exchange service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"></circle>
          <line x1="3" x2="6" y1="3" y2="6"></line>
          <line x1="21" x2="18" y1="3" y2="6"></line>
          <line x1="3" x2="6" y1="21" y2="18"></line>
          <line x1="21" x2="18" y1="21" y2="18"></line>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-amber-100 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animate ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto pt-8"
      >
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="flex items-center text-amber-800 hover:text-amber-600"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-serif font-bold text-amber-800">Our Services</h1>
          <div className="w-[100px]"></div> {/* Empty div for flex spacing */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: animate ? 1 : 0,
            y: animate ? 0 : 30
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: animate ? 1 : 0,
                y: animate ? 0 : 20
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1)
              }}
            >
              <Card className="h-full border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mt-4 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-amber-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-amber-600 flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}