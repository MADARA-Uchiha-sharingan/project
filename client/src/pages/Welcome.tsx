import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setAnimate(true);
  }, []);

  const handleContinue = () => {
    setAnimate(false);
    // Delay navigation to allow exit animation to complete
    setTimeout(() => {
      setLocation("/home");
    }, 500);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: animate ? 1 : 0, 
          scale: animate ? 1 : 0.8,
          y: animate ? 0 : 50
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full"
      >
        <Card className="border-2 border-amber-300 shadow-xl overflow-hidden">
          <div className="bg-amber-700 p-6 text-center">
            <motion.h1 
              className="text-3xl font-serif font-bold text-amber-50"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Welcome to
            </motion.h1>
            <motion.h1 
              className="text-4xl font-serif font-bold mt-2 text-amber-50"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hotel Path Annapurna
            </motion.h1>
          </div>
          
          <CardContent className="p-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: animate ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="my-8 text-center"
            >
              <p className="text-lg text-amber-800">
                Discover our exquisite cuisine and premium services
              </p>
              
              <div className="mt-12 border-2 border-amber-200 p-4 rounded-lg">
                <p className="text-sm text-amber-700 mb-2">Scan QR to view digital menu</p>
                <div className="bg-white p-4 inline-block rounded-md">
                  {/* Placeholder for QR code - We'll replace this with a real QR code */}
                  <div className="w-32 h-32 bg-gray-800 mx-auto rounded-sm grid grid-cols-4 grid-rows-4 p-1">
                    <div className="col-span-1 row-span-1 bg-white m-0.5 rounded-sm"></div>
                    <div className="col-span-1 row-span-1 bg-white m-0.5 rounded-sm col-start-4"></div>
                    <div className="col-span-1 row-span-1 bg-white m-0.5 rounded-sm row-start-4"></div>
                    <div className="col-span-1 row-span-1 bg-white m-0.5 rounded-sm col-start-4 row-start-4"></div>
                    <div className="col-span-2 row-span-2 bg-white m-0.5 rounded-sm col-start-2 row-start-2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button 
                onClick={handleContinue}
                className="px-8 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md"
              >
                Thanks
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}