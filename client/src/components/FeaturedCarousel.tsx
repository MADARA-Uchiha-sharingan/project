import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MenuItem } from "@/lib/types";

interface FeaturedCarouselProps {
  items: MenuItem[];
}

const FeaturedCarousel = ({ items }: FeaturedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-playfair text-3xl font-bold text-burgundy">Featured Items</h2>
        <div className="w-24 h-1 bg-gold"></div>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {items.map((item) => (
              <div 
                key={item.id} 
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] p-4"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <Card className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-burgundy font-bold">Rs. {item.price}</span>
                      <Button className="bg-burgundy text-white hover:bg-burgundy/90">
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-burgundy rounded-full w-10 h-10 shadow-lg z-10 ml-2"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-burgundy rounded-full w-10 h-10 shadow-lg z-10 mr-2"
          onClick={handleNext}
          disabled={currentIndex >= items.length - slidesToShow}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
