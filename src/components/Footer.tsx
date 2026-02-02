import { Instagram, Facebook, Twitter } from "lucide-react";
import roseImg from "@/assets/flower-rose.jpg";
import lilyImg from "@/assets/flower-lily.jpg";
import tulipImg from "@/assets/flower-tulip.jpg";
import orchidImg from "@/assets/flower-orchid.jpg";
import sunflowerImg from "@/assets/flower-sunflower.jpg";
import romanticImg from "@/assets/bouquet-romantic.jpg";

const instagramImages = [roseImg, lilyImg, tulipImg, orchidImg, sunflowerImg, romanticImg];

const Footer = () => {
  return (
    <footer className="bg-forest text-card">
      {/* Instagram Strip */}
      <div className="grid grid-cols-3 md:grid-cols-6">
        {instagramImages.map((img, index) => (
          <a
            key={index}
            href="#"
            className="relative group overflow-hidden aspect-square"
          >
            <img
              src={img}
              alt="Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-card" />
            </div>
          </a>
        ))}
      </div>

      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif mb-4">
                Bloom <span className="text-primary">&</span> Grace
              </h3>
              <p className="text-card/70 mb-6 max-w-md">
                Bringing nature's beauty to your most precious moments. 
                We craft memorable floral experiences with love and dedication.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#flowers" className="text-card/70 hover:text-primary transition-colors">
                    Fresh Flowers
                  </a>
                </li>
                <li>
                  <a href="#bouquets" className="text-card/70 hover:text-primary transition-colors">
                    Bouquets
                  </a>
                </li>
                <li>
                  <a href="#decor" className="text-card/70 hover:text-primary transition-colors">
                    Event Decor
                  </a>
                </li>
                <li>
                  <a href="#accessories" className="text-card/70 hover:text-primary transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-card/70 hover:text-primary transition-colors">
                    Delivery Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-card/70 hover:text-primary transition-colors">
                    Care Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-card/70 hover:text-primary transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-card/70 hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-card/10 text-center text-card/50 text-sm">
            <p>© 2024 Bloom & Grace. All rights reserved. Made with 🌸 in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;