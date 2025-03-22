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
    // Accommodation & Room Services
    {
      id: 1,
      title: "Comfortable Rooms",
      description: "Well-furnished rooms with cozy bedding and all modern amenities for a relaxing stay.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 8h20M2 14h20M2 20h20"/>
          <path d="M6 4v4M12 4v4M18 4v4M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "24/7 Room Service",
      description: "Get food and amenities delivered anytime with our round-the-clock room service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 3a8 8 0 0 0-8 8v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a8 8 0 0 0-8-8Z"></path>
          <path d="M11 3v9h9"></path>
          <path d="M2 11h20"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Free Wi-Fi Access",
      description: "Stay connected with our high-speed internet available throughout the hotel premises.",
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
      id: 4,
      title: "Laundry Service",
      description: "Convenient clothes washing and ironing services available for all guests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 8v1"></path>
          <path d="M12 15v1"></path>
          <path d="M16 12h-1"></path>
          <path d="M9 12H8"></path>
        </svg>
      )
    },
    
    // Dining & Food Services
    {
      id: 5,
      title: "Restaurant & Café",
      description: "Enjoy fresh local and international dishes in our restaurant and café.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2h3v20H3zM18 9h3v13h-3zM6 16c0-2.5 1.5-6 6-6s6 3.5 6 6H6z"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Bar & Beverage Service",
      description: "Choose from our wide variety of alcoholic and non-alcoholic drinks at our bar.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8"></path>
          <path d="M12 11v11"></path>
          <path d="M18.6 4a9 9 0 0 0-17.2 0"></path>
          <path d="M6 4h12L12 11 6 4z"></path>
        </svg>
      )
    },
    
    // Reception & Guest Assistance
    {
      id: 7,
      title: "24/7 Reception Desk",
      description: "Our front desk staff is available around the clock to assist with any needs or inquiries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 8,
      title: "Travel & Tour Assistance",
      description: "Get expert help planning local sightseeing tours and trekking arrangements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      id: 9,
      title: "Airport Transfer",
      description: "We offer convenient airport pickup and drop-off services for our guests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17h13v2H3zM19 6.5A6.5 6.5 0 1 0 5.6 12L6 17h12l.4-5z"></path>
          <path d="M9 9h6"></path>
        </svg>
      )
    },
    
    // Outdoor & Recreational Facilities
    {
      id: 10,
      title: "Rooftop Seating Area",
      description: "Relax and enjoy scenic views from our comfortable rooftop seating area.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20"></path>
          <path d="m2 8 9-5 9 5"></path>
          <path d="M12 3v17"></path>
          <path d="m9 20 3-8 3 8"></path>
        </svg>
      )
    },
    {
      id: 11,
      title: "Bonfire & BBQ Arrangement",
      description: "Enjoy an evening with firewood and delicious BBQ, available upon request.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2s-2-.897-2-2V4c0-1.103.897-2 2-2z"></path>
          <path d="m9 10 1.5 4-4-2"></path>
          <path d="m15 10-1.5 4 4-2"></path>
          <path d="M7 16a6 4 0 1 0 10 0"></path>
          <path d="M12 12v7"></path>
        </svg>
      )
    },
    
    // Safety & Emergency Services
    {
      id: 12,
      title: "24/7 Security",
      description: "Rest assured with our round-the-clock security for a safe and secure stay.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      id: 13,
      title: "Doctor on Call",
      description: "Medical assistance is available whenever needed through our on-call doctor service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    
    // Special Services & Events
    {
      id: 14,
      title: "Party Arrangements",
      description: "We can help set up birthday celebrations and special events on request.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.8 11.3 2 22l10.7-3.79"></path>
          <path d="M4 3h.01"></path>
          <path d="M22 8h.01"></path>
          <path d="M15 2h.01"></path>
          <path d="M22 20h.01"></path>
          <path d="m20 13 1 8"></path>
          <path d="M15 9 4 15h8l-4 8 11-6-7.5-2"></path>
        </svg>
      )
    },
    {
      id: 15,
      title: "Festival & Cultural Events",
      description: "Experience traditional and cultural celebrations hosted during festival seasons.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="16" rx="2"></rect>
          <path d="M12 4v2"></path>
          <path d="M10 2h4"></path>
          <path d="M8 14h0"></path>
          <path d="M12 14h0"></path>
          <path d="M16 14h0"></path>
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