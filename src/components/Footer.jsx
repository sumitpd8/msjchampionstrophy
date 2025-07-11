import React from 'react';
import { Trophy, MapPin, Phone, Clock, Mail } from 'lucide-react';

/**
 * Footer component with contact information and tournament details
 * Features:
 * - Tournament branding and contact details
 * - Responsive grid layout
 * - Dream11-style blue gradient background
 * - Social media and contact information
 */
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-700 via-blue-700 to-blue-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tournament Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full shadow-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg text-yellow-400">MSJ Champions Trophy</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Maa Shayar Jagdamba Champions Trophy - A prestigious cricket tournament 
              dedicated to promoting rural sports talents and carrying forward the 
              spirit of Mukhdev Bhagat Ji.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <a href="tel:+919120186401" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Sudhir Gond: 9120186401
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <a href="tel:+916307326892" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Shakti Singh: 6307326892
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-sm text-blue-100">msjchampionstrophy@gmail.com</span>
              </div>

              <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-300" />
              <span className="text-sm text-blue-100">8:00 AM - 11:00 PM</span>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              Available for inquiries, team registrations, and tournament information.
            </p>
            </div>
          </div>

          {/* Venue Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">Venue</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
              <div className="text-sm text-blue-100">
                <p>Koyla Veer Baba Cricket Ground</p>
                <p>Durjanpur, Bairia</p>
                <p>Ballia, Uttar Pradesh. PIN - 277208</p>
              </div>
            </div>
          </div>

           {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:text-blue-400 transition-colors">Register Team</a></li>
              <li><a href="/notice" className="text-sm hover:text-blue-400 transition-colors">Notice Board</a></li>
              <li><a href="/gallery" className="text-sm hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="/sponsorship" className="text-sm hover:text-blue-400 transition-colors">Sponsorship</a></li>
            </ul>
          </div>

          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-sm text-white-200">
            © 2025 Maa Shayar Jagdamba Champions Trophy. Organized by Maa Shayar Jagdamba Seva Sansthan.
          </p>
          <p className="text-xs text-white mt-2">
            Dedicated to the sacred memory of Mukhdev Bhagat Ji
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;