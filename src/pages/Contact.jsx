import React from 'react';
import { ExternalLink, Phone, MapPin, Clock, Mail, Globe } from 'lucide-react';

const Contact = () => {
  const contactPersons = [
    {
      name: 'Sudhir Gond',
      role: 'President',
      phone: '9120186401'
    },
    {
      name: 'Shakti Singh Yadav',
      role: 'Treasurer',
      phone: '6307326892'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Team Registration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Register your team for the Maa Shayar Jagdamba Champions Trophy and get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Team Registration Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Registration</h2>
            <p className="text-gray-600 mb-6">
              Click the button below to register your team using our Google Form. 
              All team details and player information can be submitted through this form.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-orange-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Registration Requirements:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Team name and captain details</li>
                <li>• Complete player roster (minimum 11 players)</li>
                <li>• Contact information</li>
                <li>• Registration fee payment confirmation</li>
              </ul>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe98E-eDz70SSHFGVVEwAzbNL4DvqTecgk2Pl2SG_FPuTu9rQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
            >
              Register Your Team
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <p className="text-sm text-gray-500 mt-4">
              * This will open Google Forms in a new tab where you can fill out your team registration details.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            {/* Venue */}
            <div className="mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Tournament Venue</h3>
                  <p className="text-gray-600">Koyla Veer Baba Stadium</p>
                  <p className="text-gray-600">Durjanpur (Nai Basti), Ballia (Uttar Pradesh)</p>
                </div>
              </div>
            </div>

            {/* Contact Hours */}
            <div className="mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Hours</h3>
                  <p className="text-gray-600">8:00 AM to 11:00 PM (Daily)</p>
                </div>
              </div>
            </div>

            {/* Contact Persons */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Persons</h3>
              <div className="space-y-4">
                {contactPersons.map((person, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{person.name}</h4>
                        <p className="text-sm text-gray-600">{person.role}</p>
                        <a 
                          href={`tel:${person.phone}`}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {person.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Website */}
            <div className="mb-8">
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Website</h3>
                  <p className="text-gray-600">msjchampionstrophy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-3">Registration Deadline</h3>
                <p>Teams must register at least 15 days before the tournament start date.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Tournament Format</h3>
                <p>Knockout format with group stages followed by elimination rounds.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Eligibility</h3>
                <p>Open to all amateur cricket teams with proper documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;