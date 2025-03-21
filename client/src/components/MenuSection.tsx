import { FC } from "react";
import ItemCard from "./ItemCard";
import { MenuItem } from "@/lib/types";

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
  isVisible: boolean;
}

const MenuSection: FC<MenuSectionProps> = ({ title, items, onItemClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <section className="mb-16 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-playfair text-3xl font-bold text-burgundy">{title}</h2>
        <div className="w-24 h-1 bg-gold"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onClick={() => onItemClick(item)} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
