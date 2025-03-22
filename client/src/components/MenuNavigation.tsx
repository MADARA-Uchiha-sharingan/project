import { useState } from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/lib/types";

interface MenuNavigationProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string | number) => void;
}

const MenuNavigation = ({ categories, activeCategory, setActiveCategory }: MenuNavigationProps) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8 py-2 min-w-max">
          <button
            className={cn(
              "menu-tab font-playfair text-lg px-1 py-2 focus:outline-none transition",
              activeCategory === "all" && "active text-gold border-b-2 border-gold"
            )}
            onClick={() => setActiveCategory("all")}
          >
            All Items
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "menu-tab font-playfair text-lg px-1 py-2 focus:outline-none transition",
                activeCategory === category.id.toString() && "active text-gold border-b-2 border-gold"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
