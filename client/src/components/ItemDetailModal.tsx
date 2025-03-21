import { FC } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Clock, Flame } from "lucide-react";
import { MenuItem } from "@/lib/types";

interface ItemDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ItemDetailModal: FC<ItemDetailModalProps> = ({ item, isOpen, onClose }) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 p-0 overflow-hidden">
        <div className="relative">
          <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
          <DialogClose className="absolute top-4 right-4 bg-white text-burgundy rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
            <X className="h-4 w-4" />
          </DialogClose>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-playfair text-2xl font-bold text-burgundy">{item.name}</h3>
            <span className="text-burgundy font-bold text-xl">Rs. {item.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Flame className="text-gold mr-1 h-4 w-4" />
              <span className="text-sm text-gray-600">Spice Level: {item.spiceLevel || 'Medium'}</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-gold mr-1 h-4 w-4" />
              <span className="text-sm text-gray-600">Prep Time: {item.prepTime || '20 mins'}</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <Button className="bg-burgundy text-white hover:bg-burgundy/90">
              Add to Order
            </Button>
            <Button variant="outline" className="ml-4 border border-burgundy text-burgundy hover:bg-burgundy hover:text-white">
              Special Instructions
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal;
