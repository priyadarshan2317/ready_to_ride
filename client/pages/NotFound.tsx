import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl md:text-7xl font-bold text-navy mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. This might be a
            feature coming soon!
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-blue-900 mb-2 font-semibold">
              Looking for something?
            </p>
            <p className="text-sm text-blue-800">
              We're continuously expanding our website. If you're looking for a
              specific feature or page, please let us know through WhatsApp or
              email, and we'll be happy to help!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-navy hover:bg-primary text-white font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Back to Home
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
