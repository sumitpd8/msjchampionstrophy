import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Medal, Calendar, MapPin, ChevronRight, X, Phone, Clock, Star, Plus, ArrowRight } from 'lucide-react';

const Home = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample tournament photos - in real implementation, these would be actual photos
  const tournamentPhotos = [
    {
      id: 1,
      url: 'images/Gallary/03.jpg',
      alt: 'Cricket Ground',
      title: 'Tournament Ground',
      description: 'Koyla Veer Baba Stadium - Our prestigious tournament venue'
    },
    {
      id: 2,
      url: 'images/Gallary/02.jpg',
      alt: 'Team Photo',
      title: 'Participating Teams',
      description: 'Teams gathering for the championship trophy'
    },
    {
      id: 3,
      url: 'images/Gallary/01.jpg',
      alt: 'Cricket Pitch',
      title: 'ceremonial even(Ribbon cutting)',
      description: 'Intense cricket action during the tournament'
    },
    {
      id: 4,
      url: 'images/Gallary/04.jpg',
      alt: 'Awards Ceremony',
      title: 'Awards Ceremony',
      description: 'Victory celebration and prize distribution'
    },
    {
      id: 5,
      url: '/images/Gallary/ChiefGuest.jpg',
      alt: 'Guest Photo',
      title: 'Chief Guests',
      description: 'Distinguished guests at the tournament opening'
    },
    {
      id: 6,
      url: '/images/Gallary/VictoryCelebration.jpg',
      alt: 'Team Celebration',
      title: 'Victory Celebration',
      description: 'Champions celebrating their victory'
    }
  ];

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

  // Upcoming tournament data - 2026 only
  const upcomingTournament = {
    id: 1,
    title: 'MSJ Champions Trophy 2026',
    date: '2026-02-15',
    endDate: '2026-02-28',
    status: 'upcoming',
    description: 'The biggest cricket tournament of the year is coming back with more excitement and bigger prizes! Register your team now for the most prestigious cricket championship.',
    features: ['Increased Prize Money', 'Max 16+ Teams Participate', 'Professional Commentary', 'Digital Scoreboard', 'Player and Team Statistics'],
    registrationDeadline: '2026-01-15',
    venue: 'Koyla Veer Baba Stadium, Ballia',
    prizePool: '₹51,000',
    registrationFee: '₹5100 per team',
    runnerUpTeam: '₹21,000',
    categories: ['Open Category', 'No minimum and maximum age required']
  };

   // Cricket scoreboard data with custom team logos
  const upcomingMatches = [
    {
      id: 1,
      team1: { 
        name: 'Thunder Bolts', 
        logo: '/images/teams/thunder-bolts.png', // Your custom logo here
        fallbackLogo: '⚡', 
        score: '0/0' 
      },
      team2: { 
        name: 'Fire Eagles', 
        logo: '/images/teams/fire-eagles.jpg', // Your custom logo here
        fallbackLogo: '🔥', 
        score: '0/0' 
      },
      date: '2026-01-15',
      time: '10:00 AM',
      status: 'Upcoming'
    },
    {
      id: 2,
      team1: { 
        name: 'Storm Riders', 
        logo: '/images/teams/storm-riders.png', // Your custom logo here
        fallbackLogo: '🌪️', 
        score: '0/0' 
      },
      team2: { 
        name: 'Royal Kings', 
        logo: '/images/teams/royal-kings.jpg', // Your custom logo here
        fallbackLogo: '👑', 
        score: '0/0' 
      },
      date: '2026-01-16',
      time: '2:00 PM',
      status: 'Upcoming'
    },
    // {
    //   id: 3,
    //   team1: { 
    //     name: 'Lightning Warriors', 
    //     logo: '/images/teams/lightning-warriors.png', // Your custom logo here
    //     fallbackLogo: '⚔️', 
    //     score: '0/0' 
    //   },
    //   team2: { 
    //     name: 'Golden Panthers', 
    //     logo: '/images/teams/golden-panthers.jpg', // Your custom logo here
    //     fallbackLogo: '🐆', 
    //     score: '0/0' 
    //   },
    //   date: '2026-01-17',
    //   time: '10:00 AM',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 4,
    //   team1: { 
    //     name: 'Blue Sharks', 
    //     logo: '/images/teams/blue-sharks.png', // Your custom logo here
    //     fallbackLogo: '🦈', 
    //     score: '0/0' 
    //   },
    //   team2: { 
    //     name: 'Red Dragons', 
    //     logo: '/images/teams/red-dragons.jpg', // Your custom logo here
    //     fallbackLogo: '🐉', 
    //     score: '0/0' 
    //   },
    //   date: '2026-01-18',
    //   time: '2:00 PM',
    //   status: 'Upcoming'
    // }
  ];

  // Team logo component with fallback for custom images
  const TeamLogo = ({ team, size = 'w-16 h-16' }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <div className={`${size} rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center border-2 border-blue-300 shadow-lg overflow-hidden`}>
        {!imageError ? (
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className={`${size} rounded-full object-cover`}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-2xl">{team.fallbackLogo}</span>
        )}
      </div>
    );
  };


  const openPhoto = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % tournamentPhotos.length;
    setCurrentImageIndex(nextIndex);
    setSelectedPhoto(tournamentPhotos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + tournamentPhotos.length) % tournamentPhotos.length;
    setCurrentImageIndex(prevIndex);
    setSelectedPhoto(tournamentPhotos[prevIndex]);
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (

    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900 text-white py-20">
        {/* Stadium Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/Gallary/05.png)` }}>

          </div>
        
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            MSJ Champions Trophy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A prestigious cricket tournament dedicated to promoting rural sports talents and community spirit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register Your Team
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>      
      {/* Upcoming Tournament 2026 Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MSJ Champions Trophy 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most awaited cricket tournament is back! Register now for the biggest championship of 2026
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{upcomingTournament.title}</h3>
                  <span className="px-4 py-2 rounded-full text-sm font-medium border bg-green-100 text-green-800 border-green-200">
                    Upcoming
                  </span>
                </div>
                <p className="text-blue-100 mb-6 text-lg">{upcomingTournament.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg">{formatDate(upcomingTournament.date)} - {formatDate(upcomingTournament.endDate)}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{upcomingTournament.venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl">Tournament Features</h4>
                    <ul className="space-y-3">
                      {upcomingTournament.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-600">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl">Tournament Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-600">Prize Pool: <strong className="text-gray-900">{upcomingTournament.prizePool}</strong></span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">Registration Fee: <strong className="text-gray-900">{upcomingTournament.registrationFee}</strong></span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Medal className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">Runner up Team: <strong className="text-gray-900">{upcomingTournament.runnerUpTeam}</strong></span>
                      </div>
                      <div className="mt-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Categories</h5>
                        <ul className="space-y-2">
                          {upcomingTournament.categories.map((category, index) => (
                            <li key={index} className="flex items-center space-x-2 text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>{category}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <p className="text-yellow-800 font-semibold">
                      Registration Deadline: {formatDate(upcomingTournament.registrationDeadline)}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                  >
                    Register Your Team Now
                  </Link>
                  <Link
                    to="/notice"
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center text-lg"
                  >
                    View Tournament Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cricket Scoreboard Section with Custom Team Logos */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">🏏 Upcoming Matches</h2>
            <p className="text-xl text-blue-100">Get ready for exciting cricket action with your favorite teams!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <TeamLogo team={match.team1} size="w-20 h-20" />
                    <h3 className="font-bold text-blue-800 text-lg mt-3">{match.team1.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">{match.team1.score}</p>
                  </div>
                  
                  <div className="text-center px-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 px-4 rounded-full text-sm">
                      VS
                    </div>
                    <p className="text-blue-600 font-semibold mt-2">{match.date}</p>
                    <p className="text-blue-500 text-sm">{match.time}</p>
                  </div>
                  
                  <div className="text-center flex-1">
                    <TeamLogo team={match.team2} size="w-20 h-20" />
                    <h3 className="font-bold text-blue-800 text-lg mt-3">{match.team2.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">{match.team2.score}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {match.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Matches Button */}
          <div className="text-center mt-12">
            <Link
              to="/matches"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Trophy className="h-5 w-5 mr-2" />
              View All Matches
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* Sponsorship Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Star className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become Our Sponsor
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in promoting rural cricket talent. Partner with MSJ Champions Trophy 2026 
            and be part of this prestigious tournament.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              to="/sponsorship"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Star className="h-6 w-6 mr-3" />
              Sponsor Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
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
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹51,000</h3>
              <p className="text-gray-600">Prize Money</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">16+</h3>
              <p className="text-gray-600">Teams Participated</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual</h3>
              <p className="text-gray-600">Tournament</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1</h3>
              <p className="text-gray-600">Premium Venue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Photos Section with Enhanced Viewer */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tournament Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Glimpses from our prestigious cricket tournament showcasing the spirit of competition and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tournamentPhotos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="group cursor-pointer"
                onClick={() => openPhoto(photo, index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-blue-100">{photo.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Photos & Videos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Modal with Navigation */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={closePhoto}
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors duration-200 z-10 bg-blue-600/50 rounded-full p-2"
            >
              <ChevronRight className="h-8 w-8 rotate-180" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors duration-200 z-10 bg-blue-600/50 rounded-full p-2"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl border-2 border-blue-200">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPhoto.title}</h3>
                <p className="text-gray-600">{selectedPhoto.description}</p>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Image {currentImageIndex + 1} of {tournamentPhotos.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      
      {/* Quick Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Contact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need immediate assistance? Call our organizers directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {contactPersons.map((person, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-gray-600 mb-4">{person.role}</p>
                  <button
                    onClick={() => handleCall(person.phone)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call {person.phone}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tournament Venue
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Koyla Veer Baba Cricket Ground</h3>
                    <p className="text-gray-600">Durjanpur (Nai Basti), Ballia (Uttar Pradesh)</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our tournament venue is not only a hub for local sports enthusiasts but also 
                  symbolizes a confluence of sports, culture, and traditional values. The stadium 
                  provides excellent facilities for both players and spectators.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Gallary/05.png"
                alt="Cricket Stadium"
                className="rounded-lg shadow-xl w-full h-80 object-cover border-2 border-blue-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-800 via-pink-800 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Championship?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register your team today and be part of this prestigious cricket tournament
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {contactPersons.map((person, index) => (
                <button
                  key={index}
                  onClick={() => handleCall(person.phone)}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call {person.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default Home;