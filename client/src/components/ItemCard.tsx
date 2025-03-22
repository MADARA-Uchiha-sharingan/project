import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/lib/types";

interface ItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

const ItemCard: FC<ItemCardProps> = ({ item, onClick }) => {
  return (
    <Card className="overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            // Try to access the image directly if the assets path fails
            (e.target as HTMLImageElement).src = item.image.replace('/assets/', '/');
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 flex items-center justify-center hover:opacity-100">
          <Button onClick={onClick} variant="outline" className="bg-white text-burgundy hover:bg-white/90">
            View Details
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-playfair text-xl font-bold">{item.name}</h3>
          <span className="text-burgundy font-bold">Rs. {item.price}</span>
        </div>
        <p className="text-sm text-gray-600">{item.shortDescription}</p>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
