import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold">RTR</span>
              </div>
              <span className="font-bold text-xl">Ready to Ride</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium pre-owned cars at unbeatable prices. Your trusted partner in finding the perfect vehicle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cars" className="text-gray-300 hover:text-gold transition-colors">
                  Our Cars
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-gold transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Business Hours</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex gap-2">
                <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+918754953653"
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>+91 8754953653</span>
              </a>
              <a
                href="mailto:info@readytoride.com"
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>info@readytoride.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Ready to Ride Showroom</p>
                  <p>Premium Pre-Owned Cars</p>
                  <p>Your City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gold hover:bg-gold-dark rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-navy" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold hover:bg-gold-dark rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-navy" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold hover:bg-gold-dark rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-navy" />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2024 Ready to Ride Cars. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
