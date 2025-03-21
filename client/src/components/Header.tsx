import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="relative">
      <div 
        className="bg-cover bg-center h-80 md:h-96"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2 text-center">Hotel Path Annapurna</h1>
          <div className="w-16 h-1 bg-gold mb-4"></div>
          <p className="text-lg md:text-xl font-light max-w-lg text-center">
            Experience authentic Nepali cuisine with breathtaking mountain views
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
