import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import WelcomeModal from "@/components/WelcomeModal";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import HotelServices from "@/components/HotelServices";
import Footer from "@/components/Footer";
import { MenuItem } from "@/lib/types";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const { data: featuredItems = [] } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu/featured'],
  });

  return (
    <div className="bg-cream text-charcoal font-montserrat">
      <WelcomeModal isOpen={showWelcome} onClose={() => setShowWelcome(false)} />
      
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Content */}
        <section className="text-center my-12">
          <h2 className="font-playfair text-4xl font-bold text-burgundy mb-4">
            Welcome to Hotel Path Annapurna
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Discover authentic Nepali cuisine and international favorites with our premium dining experience.
            Enjoy breathtaking views of the Himalayas while savoring our carefully crafted dishes.
          </p>
          <Link href="/menu">
            <Button className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-3 text-lg">
              View Our Menu
            </Button>
          </Link>
        </section>
        
        {featuredItems.length > 0 && <FeaturedCarousel items={featuredItems} />}
        
        <HotelServices />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
