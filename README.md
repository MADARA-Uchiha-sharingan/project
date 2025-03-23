# Gourmet Delights - Digital Menu Book

A modern, interactive digital menu book for restaurants built with React, TypeScript, and Node.js.

## Features

- Beautiful book-like interface for menu browsing
- Responsive design that works on all devices
- Interactive food item cards with images
- Detailed item information with spice levels and preparation times
- Category-based navigation
- Featured items carousel
- Dark/Light mode support

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: PostgreSQL
- Image Hosting: External CDN

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gourmet-delights.git
cd gourmet-delights
```

2. Install dependencies:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:
Create a `.env` file in the server directory with the following variables:
```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
```

4. Start the development servers:
```bash
# Start the client (from client directory)
npm run dev

# Start the server (from server directory)
npm run dev
```

## Deployment

This project is configured for deployment on Render. The deployment process is automated through GitHub integration.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 