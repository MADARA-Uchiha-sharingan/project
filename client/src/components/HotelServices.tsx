import { FC } from "react";
import { Button } from "@/components/ui/button";
import { RoomServiceIcon, SpaIcon, CheckIcon } from "@/lib/icons";

const HotelServices: FC = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-playfair text-3xl font-bold text-burgundy">Hotel Services</h2>
        <div className="w-24 h-1 bg-gold"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-white mr-4">
                <RoomServiceIcon className="h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold">Room Service</h3>
            </div>
            <p className="text-gray-600 mb-4">Enjoy our premium dining in the comfort of your room. Available 24/7.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>Breakfast served from 6:00 AM to 10:30 AM</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>All day dining menu available 11:00 AM to 11:00 PM</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>Late night menu available 11:00 PM to 6:00 AM</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-6 border border-burgundy text-burgundy hover:bg-burgundy hover:text-white">
              View Menu
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-white mr-4">
                <SpaIcon className="h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold">Additional Services</h3>
            </div>
            <p className="text-gray-600 mb-4">Enhance your stay with our premium hotel services.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>Himalayan Spa Treatments</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>Mountain View Fitness Center</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>Local Trekking Guides</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-forest mr-2 h-4 w-4" />
                <span>Cultural Experiences</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-6 border border-burgundy text-burgundy hover:bg-burgundy hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelServices;
