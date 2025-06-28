import React from 'react';
import { Star, Trophy, Users, Target, Phone, Mail, MapPin, ExternalLink, Award, Handshake, TrendingUp } from 'lucide-react';

/**
 * Sponsorship page component for tournament sponsors
 * Features:
 * - Sponsorship packages and benefits
 * - Google Forms integration for sponsor registration
 * - Contact information for sponsors
 * - Dream11-style blue theme
 */
const Sponsorship = () => {
  // Google Form URL for sponsorship registration
  const sponsorshipFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe98E-eDz70SSHFGVVEwAzbNL4DvqTecgk2Pl2SG_FPuTu9rQ/viewform?usp=header";

  const sponsorshipPackages = [
    {
      name: 'Title Sponsor',
      price: '₹2,00,000',
      color: 'from-yellow-500 to-yellow-600',
      benefits: [
        'Tournament named after your brand',
        'Logo on all promotional materials',
        'Prime position branding at venue',
        'Social media promotion',
        'Trophy presentation rights',
        'VIP hospitality for 10 guests'
      ]
    },
    {
      name: 'Presenting Sponsor',
      price: '₹1,00,000',
      color: 'from-blue-600 to-blue-700',
      benefits: [
        'Co-branding with tournament',
        'Logo on team jerseys',
        'Boundary advertising boards',
        'Digital marketing inclusion',
        'Award ceremony participation',
        'VIP hospitality for 6 guests'
      ]
    },
    {
      name: 'Associate Sponsor',
      price: '₹50,000',
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Logo on promotional materials',
        'Ground advertising space',
        'Social media mentions',
        'Program booklet advertisement',
        'Certificate of appreciation',
        'VIP hospitality for 4 guests'
      ]
    }
  ];

  const sponsorshipBenefits = [
    {
      icon: Target,
      title: 'Brand Visibility',
      description: 'Reach thousands of cricket enthusiasts and rural communities'
    },
    {
      icon: Users,
      title: 'Community Connect',
      description: 'Connect with local communities and build lasting relationships'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Expand your market presence in rural areas'
    },
    {
      icon: Handshake,
      title: 'CSR Initiative',
      description: 'Support rural sports development and social causes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(/images/Gallary/17.jpg)` }}>
          </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-blue-300 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Star className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become Our Sponsor</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Partner with MSJ Champions Trophy 2026 and support rural cricket talent development
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text pb-6 text-transparent mb-4">
              Why Sponsor MSJ Champions Trophy?
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Join us in promoting rural sports talent and gain valuable brand exposure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full shadow-lg w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{benefit.title}</h3>
                  <p className="text-blue-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text pb-6 text-transparent mb-4">
              Sponsorship Packages
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Choose the perfect sponsorship package that aligns with your brand goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white text-center`}>
                  <Trophy className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-blue-800 mb-4">Package Benefits:</h4>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <Handshake className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text pb-6 text-transparent mb-4">
              Register as Sponsor
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Fill out our sponsorship form to partner with us and support rural cricket development
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-8 md:p-12 rounded-2xl shadow-xl border border-blue-200">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
                <Star className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Sponsorship Registration Form
              </h3>
              <p className="text-blue-700 text-lg mb-6">
                Complete the form below to express your interest in sponsoring MSJ Champions Trophy 2026
              </p>
              
              <div className="bg-white p-6 rounded-xl border-2 border-blue-200 mb-6 shadow-lg">
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">Required Information:</h4>
                <ul className="text-left text-blue-700 space-y-3">
                  <li className="flex items-center"><Star className="h-5 w-5 text-blue-600 mr-3" />Company/Organization Details</li>
                  <li className="flex items-center"><Star className="h-5 w-5 text-yellow-600 mr-3" />Contact Person Information</li>
                  <li className="flex items-center"><Star className="h-5 w-5 text-blue-600 mr-3" />Preferred Sponsorship Package</li>
                  <li className="flex items-center"><Star className="h-5 w-5 text-yellow-600 mr-3" />Marketing Requirements</li>
                </ul>
              </div>

              <a
                href={sponsorshipFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              >
                <Star className="mr-3 h-6 w-6" />
                Register as Sponsor
                <ExternalLink className="ml-3 h-6 w-6" />
              </a>
              
              <p className="text-sm text-blue-500 mt-4">
                Registration opens in a new window via Google Forms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions about sponsorship? Contact our team for detailed information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Phone className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <div className="space-y-2">
                <a href="tel:+919120186401" className="block text-blue-100 hover:text-white transition-colors">
                  Sudhir Gond: 9120186401
                </a>
                <a href="tel:+916307326892" className="block text-blue-100 hover:text-white transition-colors">
                  Shakti Singh: 6307326892
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Mail className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <a href="mailto:msjchampionstrophy@email.com" className="text-blue-100 hover:text-white transition-colors">
                msjchampionstrophy@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MapPin className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <div className="text-blue-100">
                <p>Koyla Veer Baba Cricket Ground</p>
                <p>Durjanpur (Nai Basti)</p>
                <p>Ballia, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in supporting rural cricket talent and be part of this prestigious tournament. 
            Your sponsorship will help nurture the next generation of cricket stars.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href={sponsorshipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Star className="h-6 w-6 mr-3" />
              Become Sponsor
              <ExternalLink className="ml-3 h-6 w-6" />
            </a>
            <a
              href="tel:+919120186401"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call: 9120186401
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;