import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [, setLocation] = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setAnimate(true);
  }, []);

  const handleNavigate = (path: string) => {
    setAnimate(false);
    // Delay navigation to allow exit animation to complete
    setTimeout(() => {
      setLocation(path);
    }, 500);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-amber-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: animate ? 1 : 0, 
          y: animate ? 0 : 50 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto pt-8"
      >
        <Card className="border-2 border-amber-300 shadow-xl overflow-hidden">
          <div className="bg-amber-700 p-6 text-center">
            <h1 className="text-3xl font-serif font-bold text-amber-50">Hotel Path Annapurna</h1>
          </div>
          
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: animate ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-amber-800 mb-4">About Our Hotel</h2>
              <p className="text-amber-700 leading-relaxed">
                Hotel Path Annapurna offers a perfect blend of traditional Nepalese hospitality and 
                modern comfort. Located in the heart of the city with breathtaking mountain views, 
                our hotel provides an unforgettable experience for both tourists and business travelers. 
                Our dedicated staff ensures your stay is comfortable and memorable, with 
                attention to every detail of your experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            >
              <Card className="border-amber-200 hover:border-amber-400 transition-colors duration-300 cursor-pointer"
                onClick={() => handleNavigate("/services")}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2H2v10h10V2z"/>
                      <path d="M12 12H2v10h10V12z"/>
                      <path d="M22 2h-10v10h10V2z"/>
                      <path d="M22 12h-10v10h10V12z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Services We Have</h3>
                  <p className="text-amber-600 text-center">
                    Explore our premium hotel services, amenities, and facilities
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 hover:border-amber-400 transition-colors duration-300 cursor-pointer"
                onClick={() => handleNavigate("/menu")}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                      <line x1="6" x2="18" y1="17" y2="17"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Food We Serve</h3>
                  <p className="text-amber-600 text-center">
                    Discover our exquisite menu with a variety of delicious options
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}