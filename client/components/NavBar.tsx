import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RTR</span>
            </div>
            <span className="font-bold text-lg text-navy hidden sm:inline">
              Ready to Ride
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-gold transition-colors font-medium">
              Home
            </Link>
            <a href="#cars" className="text-foreground hover:text-gold transition-colors font-medium">
              Cars
            </a>
            <a href="#reviews" className="text-foreground hover:text-gold transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-gold transition-colors font-medium">
              Contact
            </a>
            <a
              href="https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20would%20like%20to%20view%20your%20latest%20car%20catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              to="/"
              className="text-foreground hover:text-gold transition-colors font-medium px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#cars"
              className="text-foreground hover:text-gold transition-colors font-medium px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Cars
            </a>
            <a
              href="#reviews"
              className="text-foreground hover:text-gold transition-colors font-medium px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-gold transition-colors font-medium px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20would%20like%20to%20view%20your%20latest%20car%20catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-2 rounded-lg transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp Catalog
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
