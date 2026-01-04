import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Star, Shield, Zap, TrendingDown, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  // Featured cars data
  const cars = [
    {
      id: 1,
      name: "Audi A4",
      year: 2022,
      price: "₹ 45,00,000",
      mileage: "12,500 km",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=400&fit=crop",
      badge: "Best Price",
    },
    {
      id: 2,
      name: "BMW X5",
      year: 2021,
      price: "₹ 55,00,000",
      mileage: "18,000 km",
      fuel: "Diesel",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=400&fit=crop",
      badge: "Premium",
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      year: 2020,
      price: "₹ 42,00,000",
      mileage: "25,000 km",
      fuel: "Diesel",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Jaguar F-PACE",
      year: 2021,
      price: "₹ 58,00,000",
      mileage: "16,000 km",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=400&fit=crop",
      badge: "Hot Deal",
    },
    {
      id: 5,
      name: "Porsche 911",
      year: 2019,
      price: "₹ 72,00,000",
      mileage: "28,000 km",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=400&fit=crop",
      badge: "Luxury",
    },
    {
      id: 6,
      name: "Range Rover Evoque",
      year: 2022,
      price: "₹ 65,00,000",
      mileage: "8,000 km",
      fuel: "Diesel",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=400&fit=crop",
      badge: "Low Mileage",
    },
  ];

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service! Found my dream car at Ready to Ride. The team was very professional and transparent throughout the process.",
      initials: "RK",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      text: "Best pre-owned car showroom in the city. Great collection and competitive prices. Highly recommended!",
      initials: "PS",
    },
    {
      id: 3,
      name: "Anil Patel",
      rating: 4,
      text: "Very satisfied with my purchase. The car inspection was thorough and the warranty is comprehensive.",
      initials: "AP",
    },
    {
      id: 4,
      name: "Deepika Singh",
      rating: 5,
      text: "Amazing experience! The staff helped me choose the perfect car within my budget. Will definitely recommend to friends.",
      initials: "DS",
    },
    {
      id: 5,
      name: "Vikram Gupta",
      rating: 5,
      text: "Outstanding quality and service. Fair pricing and excellent after-sales support. Worth every penny!",
      initials: "VG",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=900&fit=crop')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Premium Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)"
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gold/30 text-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Premium Pre-Owned Cars
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                Find Your <span className="text-gold">Perfect Car</span> Today
              </h1>
              <p className="text-lg text-gray-100 max-w-lg drop-shadow-md leading-relaxed font-light">
                Where luxury meets affordability. Discover handpicked premium vehicles with unmatched quality and exceptional value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#cars"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Explore Our Collection
                  <ArrowRight size={20} />
                </a>
                <a
                  href="https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20would%20like%20to%20view%20your%20latest%20car%20catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-navy font-bold px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  View Featured Cars
                </a>
              </div>

              <div className="flex gap-8 pt-8">
                <div className="border-l-2 border-gold pl-6">
                  <p className="text-gold font-bold text-2xl">500+</p>
                  <p className="text-gray-200 text-sm">Happy Customers</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <p className="text-gold font-bold text-2xl">1000+</p>
                  <p className="text-gray-200 text-sm">Cars Delivered</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <p className="text-gold font-bold text-2xl">4.8★</p>
                  <p className="text-gray-200 text-sm">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Right Side - Empty for Image Breathing Room */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* Your Trusted Partner Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Trusted Partner in <span className="text-gold">Premium</span> Cars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At the heart of Ready to Ride is a promise to bring quality pre-owned vehicles that meet your needs and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-gold" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Certified Quality
              </h3>
              <p className="text-muted-foreground text-sm">
                Every vehicle undergoes rigorous inspection for quality assurance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-gold" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Best Prices
              </h3>
              <p className="text-muted-foreground text-sm">
                Unbeatable pricing with transparent negotiations and no hidden costs
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="text-gold" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Premium Selection
              </h3>
              <p className="text-muted-foreground text-sm">
                Handpicked collection of luxury and premium pre-owned vehicles
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-gold" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Expert Support
              </h3>
              <p className="text-muted-foreground text-sm">
                Dedicated team to guide you through every step of the purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">
                500+
              </p>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">
                1000+
              </p>
              <p className="text-gray-300">Cars Delivered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">
                4.8★
              </p>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">
                100%
              </p>
              <p className="text-gray-300">Transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Price Challenge Section */}
      <section id="cars" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Best Price <span className="text-gold">Challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our premium collection of pre-owned vehicles. We have the best price for every car sold in our showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20am%20looking%20for%20more%20car%20options"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-lg transition-colors"
            >
              View More Cars on WhatsApp Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Live Inventory CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy via-blue-900 to-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See Our <span className="text-gold">Live Inventory?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Click below to view our updated car catalog on WhatsApp. Get instant access to the latest vehicles, prices, and specifications.
          </p>
          <a
            href="https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20would%20like%20to%20view%20your%20live%20inventory%20catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            WhatsApp Catalog
            <ArrowRight size={24} />
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Updated catalog link • +91 8754953653
          </p>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-gold">Customers</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from satisfied customers who found their perfect car with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{review.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-navy font-bold text-sm">
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              ⭐ 4.8/5 Rating • 5000+ Reviews Across Platforms
            </p>
          </div>
        </div>
      </section>

      {/* Visit Our Showroom Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our <span className="text-gold">Showroom</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience luxury and quality firsthand at our state-of-the-art showroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <MapPin className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Main Showroom
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Premium Location, City Center
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <p className="text-muted-foreground">
                    Mon-Sat: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-muted-foreground">Sun: 10:00 AM - 6:00 PM</p>
                </div>
                <a
                  href="tel:+918754953653"
                  className="inline-block bg-navy hover:bg-primary text-white font-bold px-6 py-2 rounded-lg transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <MapPin className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Branch Showroom
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Business District Location
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <p className="text-muted-foreground">
                    Mon-Sat: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-muted-foreground">Sun: 10:00 AM - 6:00 PM</p>
                </div>
                <a
                  href="https://wa.me/918754953653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy hover:bg-primary text-white font-bold px-6 py-2 rounded-lg transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
