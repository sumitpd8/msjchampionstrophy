import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white-400">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-black-400" />
                <p className="text-sm">Koyla Veer Baba Cricket Ground, Durjanpur (Nai Basti), Ballia, Uttar Pradesh. PIN - 277208</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-black-400" />
                <div className="text-sm">
                  <p>Sudhir Gond: 9120186401</p>
                  <p>Shakti Singh Yadav: 6307326892</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-white-400" />
                <p className="text-sm">8:00 AM to 11:00 PM</p>
              </div>
            </div>
          </div>


          {/* Techanical Support */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-white-400">Contact For Techanical services</h3>
            <h3 className="text-sm mb-1 text-white-400">We specialize in building scalable, modern, and visually stunning solutions tailored to your needs. Our services include:</h3>
            <h3 className="text-sm mb-1 text-white-400">Web Development: Crafting responsive and feature-rich websites to enhance your online presence.</h3>
            <h3 className="text-sm mb-1 text-white-400">Application Development: Developing intuitive and user-friendly apps for various platforms.</h3>
             <h3 className="text-sm mb-1 text-white-400">Technical Support: Providing reliable and timely assistance to ensure smooth operations.</h3>
             
            <div className="space-y-4">
              <div className="flex items-center space-x-3"> */}
                {/* <MapPin className="h-5 w-5 text-black-400" /> */}
                {/* <p className="text-sm">📍 Kolkata, West Bengal</p>
              </div>
              <div className="flex items-center space-x-3"> */}
                {/* <Phone className="h-5 w-5 text-black-400" /> */}
                {/* <div className="text-sm">
                  <p>📞 Sumit Prasad: 9519415846</p>
                  <p>📞 Akash Kumar Sinha: 6205474903</p>
                </div>
              </div> */}
              {/* <div className="flex items-center space-x-3"> */}
                {/* <Clock className="h-5 w-5 text-white-400" /> */}
                {/* <p className="text-sm">🕒10:00 AM                 to 07:00 PM</p>
              </div>
            </div>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:text-blue-400 transition-colors">Register Team</a></li>
              <li><a href="/notice" className="text-sm hover:text-blue-400 transition-colors">Notice Board</a></li>
              <li><a href="/gallery" className="text-sm hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="/sponsorship" className="text-sm hover:text-blue-400 transition-colors">Sponsorship</a></li>
            </ul>
          </div>

          {/* About Tournament */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black-400">About Tournament</h3>
            <p className="text-sm text-black">
              Maa Shayar Jagdamba Champions Trophy is a prestigious cricket tournament 
              dedicated to promoting rural sports talents and fostering community spirit.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-black-400">
            © 2026 Maa Shayar Jagdamba Champions Trophy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;