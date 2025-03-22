import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import MenuNavigation from "@/components/MenuNavigation";
import MenuSection from "@/components/MenuSection";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import HotelServices from "@/components/HotelServices";
import ItemDetailModal from "@/components/ItemDetailModal";
import Footer from "@/components/Footer";
import { Category, MenuItem } from "@/lib/types";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });

  const { data: menuItems = [] } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  const { data: featuredItems = [] } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu/featured'],
  });

  const openItemModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeItemModal = () => {
    setIsModalOpen(false);
  };

  const getItemsByCategory = (categoryId: string) => {
    if (categoryId === "all") return menuItems;
    return menuItems.filter(item => item.categoryId.toString() === categoryId);
  };

  return (
    <div className="bg-cream text-charcoal font-montserrat">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <MenuNavigation 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Render All Sections if "all" is selected */}
        {activeCategory === "all" && categories.map(category => (
          <MenuSection
            key={category.id}
            title={category.name}
            items={getItemsByCategory(category.id)}
            onItemClick={openItemModal}
            isVisible={true}
          />
        ))}

        {/* Render Single Section if specific category is selected */}
        {activeCategory !== "all" && categories.map(category => (
          <MenuSection
            key={category.id}
            title={category.name}
            items={getItemsByCategory(category.id)}
            onItemClick={openItemModal}
            isVisible={category.id === activeCategory}
          />
        ))}

        {featuredItems.length > 0 && <FeaturedCarousel items={featuredItems} />}
        
        <HotelServices />
      </main>
      
      <ItemDetailModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={closeItemModal} 
      />
      
      <Footer />
    </div>
  );
};

export default Menu;
