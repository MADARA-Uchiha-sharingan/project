import { FC } from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Hotel Path Annapurna</h3>
            <p className="text-gray-300 mb-4">Experience authentic Nepali cuisine with breathtaking mountain views.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Lakeside Road, Pokhara, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+977 61 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@pathannapurna.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>7:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Room Service</span>
                <span>24/7</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hotel Path Annapurna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
