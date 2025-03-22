import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Category, MenuItem } from "@/lib/types";

import { usePageTurnSound } from "@/lib/usePageTurnSound";

export default function MenuBook() {
  const [, setLocation] = useLocation();
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"english" | "nepali">("english");
  
  // Use custom sound hook for page turning
  const pageTurnSound = usePageTurnSound();

  // Fetch menu categories
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  // Fetch menu items
  const { data: menuItems = [] } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu/items"],
  });

  // Group menu items by category
  const menuItemsByCategory = categories.reduce<Record<string, MenuItem[]>>((acc, category) => {
    acc[category.id] = menuItems.filter(item => item.categoryId === category.id);
    return acc;
  }, {});

  // Maximum number of pages (intro + categories)
  const maxPages = 1 + Math.ceil(categories.length / 1);

  const handleOpenBook = () => {
    setIsBookOpen(true);
  };

  const handleCloseBook = () => {
    setIsBookOpen(false);
    setTimeout(() => {
      setCurrentPage(0);
    }, 500);
  };

  const handlePageTurn = (direction: "next" | "prev") => {
    if (isPageTurning) return;
    
    setIsPageTurning(true);
    pageTurnSound.play();
    
    setTimeout(() => {
      if (direction === "next" && currentPage < maxPages) {
        setCurrentPage(prev => prev + 1);
      } else if (direction === "prev" && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      }
      setIsPageTurning(false);
    }, 300);
  };

  const handleBack = () => {
    setLocation("/home");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "english" ? "nepali" : "english");
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-amber-50 to-amber-100'} p-4 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto pt-4">
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className={`flex items-center ${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-800 hover:text-amber-600'}`}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              onClick={toggleDarkMode}
              className={`${isDarkMode ? 'bg-gray-800 text-amber-400 border-amber-700' : 'bg-amber-50 text-amber-800 border-amber-300'}`}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={toggleLanguage}
              className={`${isDarkMode ? 'bg-gray-800 text-amber-400 border-amber-700' : 'bg-amber-50 text-amber-800 border-amber-300'}`}
            >
              {language === "english" ? "नेपाली" : "English"}
            </Button>
          </div>
        </div>

        {!isBookOpen ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[70vh]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`relative w-64 h-80 md:w-80 md:h-100 cursor-pointer mx-auto ${isDarkMode ? 'shadow-[0_0_50px_rgba(245,158,11,0.3)]' : 'shadow-xl'} rounded-r-lg`}
              onClick={handleOpenBook}
            >
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-amber-900' : 'bg-amber-700'} rounded-r-lg p-8 flex flex-col items-center justify-center`}>
                <div className={`text-center ${isDarkMode ? 'text-amber-100' : 'text-amber-50'}`}>
                  <h2 className="text-4xl font-serif font-bold mb-4">MENU</h2>
                  <h3 className="text-2xl font-serif font-bold mb-6">Hotel Path Annapurna</h3>
                  <p className="text-md italic mb-10">- Established 2019 -</p>
                  
                  <div className="mt-8 border-2 border-dashed border-amber-400 rounded-md py-3 px-5 inline-block">
                    <span className="text-amber-200 font-medium">TAP TO OPEN</span>
                  </div>
                </div>
              </div>
              
              {/* Book binding effect */}
              <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-amber-950 to-amber-800 rounded-l-sm"></div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="relative min-h-[80vh] flex justify-center">
            {/* Book pages container */}
            <motion.div 
              initial={{ rotateY: -30 }}
              animate={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-full max-w-4xl h-[80vh] perspective-1000"
            >
              {/* Book cover and pages */}
              <div className={`relative w-full h-full rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'bg-amber-50 shadow-2xl'} transition-colors duration-500`}>
                <AnimatePresence mode="wait">
                  {/* Welcome/Intro Page */}
                  {currentPage === 0 && (
                    <motion.div
                      key="intro"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 p-8 flex flex-col items-center justify-center ${isDarkMode ? 'text-amber-100' : 'text-amber-900'}`}
                    >
                      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
                        {language === "english" ? "Our Delicious Menu" : "हाम्रो स्वादिष्ट मेनु"}
                      </h1>
                      <p className="text-lg max-w-2xl text-center mb-10">
                        {language === "english" 
                          ? "Welcome to Hotel Path Annapurna's culinary experience. We take pride in offering a diverse selection of authentic Nepalese and international cuisine prepared with fresh, local ingredients." 
                          : "होटल पाथ अन्नपूर्णको पाकशास्त्रीय अनुभवमा स्वागत छ। हामी ताजा, स्थानीय सामग्रीहरू प्रयोग गरेर तयार पारिएको प्रामाणिक नेपाली र अन्तर्राष्ट्रिय व्यञ्जनहरूको विविध चयन प्रदान गर्न गर्व गर्दछौं।"}
                      </p>
                      
                      <Button 
                        size="lg"
                        onClick={() => handlePageTurn("next")}
                        className={`mt-6 ${
                          isDarkMode 
                            ? 'bg-amber-700 hover:bg-amber-600 text-amber-50' 
                            : 'bg-amber-600 hover:bg-amber-700 text-white'
                        }`}
                      >
                        {language === "english" ? "Browse Our Menu" : "हाम्रो मेनु हेर्नुहोस्"}
                      </Button>
                    </motion.div>
                  )}
                  
                  {/* Category Pages */}
                  {currentPage > 0 && currentPage <= categories.length && (
                    <motion.div
                      key={`category-${currentPage}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 p-6 overflow-y-auto ${isDarkMode ? 'text-amber-100' : 'text-amber-900'}`}
                    >
                      {categories[currentPage - 1] && (
                        <>
                          <h2 className="text-3xl font-serif font-bold mb-6 text-center">
                            {categories[currentPage - 1].name}
                          </h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            {menuItemsByCategory[categories[currentPage - 1].id]?.map((item) => (
                              <motion.div
                                key={item.id}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                <Card className={`overflow-hidden h-full ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-amber-200'}`}>
                                  <div className="flex flex-col md:flex-row h-full">
                                    <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                                      <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="p-4 w-full md:w-2/3 flex flex-col">
                                      <div className="flex justify-between items-start mb-2">
                                        <h3 className={`text-xl font-medium ${isDarkMode ? 'text-amber-300' : 'text-amber-800'}`}>
                                          {item.name}
                                        </h3>
                                        <Badge className={isDarkMode ? 'bg-amber-700 text-amber-100' : 'bg-amber-100 text-amber-800'}>
                                          Rs. {item.price}
                                        </Badge>
                                      </div>
                                      
                                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-amber-700'}`}>
                                        {item.shortDescription}
                                      </p>
                                      
                                      <div className="mt-auto flex flex-wrap gap-2">
                                        {item.spiceLevel && (
                                          <Badge variant="outline" className={isDarkMode ? 'text-amber-400 border-amber-700' : 'text-amber-700 border-amber-200'}>
                                            {item.spiceLevel}
                                          </Badge>
                                        )}
                                        {item.prepTime && (
                                          <Badge variant="outline" className={isDarkMode ? 'text-amber-400 border-amber-700' : 'text-amber-700 border-amber-200'}>
                                            {item.prepTime}
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation controls */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => handlePageTurn("prev")}
                    disabled={currentPage === 0 || isPageTurning}
                    className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-800 hover:text-amber-600'} ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft className="h-6 w-6 mr-2" />
                    {language === "english" ? "Previous" : "अघिल्लो"}
                  </Button>
                  
                  {currentPage >= maxPages - 1 ? (
                    <Button
                      onClick={handleCloseBook}
                      className={isDarkMode ? 'bg-amber-700 hover:bg-amber-600 text-amber-50' : 'bg-amber-600 hover:bg-amber-700 text-white'}
                    >
                      {language === "english" ? "Close Menu" : "मेनु बन्द गर्नुहोस्"}
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={() => handlePageTurn("next")}
                      disabled={currentPage >= maxPages - 1 || isPageTurning}
                      className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-800 hover:text-amber-600'} ${currentPage >= maxPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {language === "english" ? "Next" : "अर्को"}
                      <ChevronRight className="h-6 w-6 ml-2" />
                    </Button>
                  )}
                </div>
                
                {/* Page number indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className={`text-sm ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                    {currentPage > 0 ? `${currentPage}/${maxPages - 1}` : ''}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}