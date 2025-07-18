import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Medal, Calendar, MapPin, ChevronRight, X, Phone, Clock, Star, Plus, ArrowRight, Target, Crown, Badge, Award, IndianRupee } from 'lucide-react';

const Home = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);

  // Sample tournament photos - in real implementation, these would be actual photos
  const tournamentPhotos = [
    {
      id: 1,
      url: 'images/Gallary/03.jpg',
      alt: 'Cricket Ground',
      title: 'Tournament Ground',
      description: 'Koyla Veer Baba Cricket Ground - Our prestigious tournament venue'
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
    date: '',
    endDate: '',
    status: 'upcoming',
    description: 'The biggest cricket tournament of the year is coming back with more excitement and bigger prizes! Register your team now for the most prestigious cricket championship.',
    features: ['Increased Prize Money', 'Max 16+ Teams Participate', 'Professional Commentary', 'Digital Scoreboard', 'Player and Team Statistics'],

    // registrationDeadline: '2026-01-15',
    
    venue: 'Koyla Veer Baba Cricket Ground, Ballia',
    registrationFee: '₹11,000 per team',
    prizePool: '₹70,000',
    runnerUpTeam: '₹35,000',
    // categories: ['Open Category', 'No minimum and maximum age required']
    playerOfTheTournament: '₹15,000',
    bestBatsman: '₹5,100',
    bestBowler: '₹5,100'
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

      // date: '2026-01-15',
      // time: '10:00 AM',

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

      // date: '2026-01-16',
      // time: '2:00 PM',

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

  // Tournament winner data for 2025 only
  const tournamentWinner2025 = {
    year: '2025',
    champion: {
      name: 'Dwaba Ekadash',
      logo: '/images/teams/thunder-bolts.png',
      fallbackLogo: '⚡',
      captain: 'Golu Giri',
      prize: '₹21,000'
    },
    runnerUp: {
      name: 'Reoti Royals',
      logo: '/images/teams/fire-eagles.png',
      fallbackLogo: '🔥',
      captain: 'Ashish Tiwari',
      prize: '₹11,000'
    },
    manOfTournament: {
      name: 'Bechan Yadav',
      team: 'Dwaba Ekadash',
      stats: '202 runs, 6 wickets'
    }
  };

  // Custom Logo Component with fallback
  const CustomLogo = ({ size = 'h-16 w-16' }) => {
    return (
      <div className={`${size} rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 shadow-2xl flex items-center justify-center overflow-hidden mx-auto`}>
        {!logoError ? (
          <img
            src="/images/logo.png"
            alt="MSJ Champions Trophy Logo"
            className={`${size} rounded-full object-cover object-center`}
            onError={() => {
              // Try JPG format if PNG fails
              const img = document.createElement('img');
              img.src = '/images/logo.jpg';
              img.onload = () => {
                // JPG exists, update the src
                const logoImg = document.querySelector('img[alt="MSJ Champions Trophy Logo"]');
                if (logoImg) logoImg.src = '/images/logo.jpg';
              };
              img.onerror = () => {
                // Both PNG and JPG failed, show fallback
                setLogoError(true);
              };
            }}
          />
        ) : (
          <Trophy className={`${size} text-white`} />
        )}
      </div>
    );
  };

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

  const tournamentPoints = [
    { 
      team: 'Durjanpur Warriors', 
      logo: '🏏', 
      color: 'from-blue-600 to-blue-800',
      matches: 4, 
      wins: 3, 
      losses: 1, 
      points: 6, 
      runRate: '+1.25' 
    },
    { 
      team: 'Ballia Blazers', 
      logo: '⚡', 
      color: 'from-yellow-500 to-orange-600',
      matches: 4, 
      wins: 3, 
      losses: 1, 
      points: 6, 
      runRate: '+0.85' 
    },
    { 
      team: 'Nai Basti Knights', 
      logo: '⚔️', 
      color: 'from-purple-600 to-purple-800',
      matches: 4, 
      wins: 2, 
      losses: 2, 
      points: 4, 
      runRate: '+0.45' 
    },
    { 
      team: 'Bairia Bullets', 
      logo: '🎯', 
      color: 'from-red-600 to-red-800',
      matches: 4, 
      wins: 2, 
      losses: 2, 
      points: 4, 
      runRate: '-0.32' 
    },
    { 
      team: 'UP Challengers', 
      logo: '🔥', 
      color: 'from-green-600 to-green-800',
      matches: 4, 
      wins: 0, 
      losses: 4, 
      points: 0, 
      runRate: '-1.85' 
    },
  ];

  const bestBatsmen = [
    { 
      name: 'Rajesh Kumar', 
      team: 'Durjanpur Warriors', 
      logo: '🏏',
      color: 'from-blue-600 to-blue-800',
      runs: 245, 
      average: 61.25 
    },
    { 
      name: 'Amit Singh', 
      team: 'Ballia Blazers', 
      logo: '⚡',
      color: 'from-yellow-500 to-orange-600',
      runs: 198, 
      average: 49.5 
    },
    { 
      name: 'Suresh Yadav', 
      team: 'Nai Basti Knights', 
      logo: '⚔️',
      color: 'from-purple-600 to-purple-800',
      runs: 176, 
      average: 44.0 
    },
    { 
      name: 'Vikash Gupta', 
      team: 'Bairia Bullets', 
      logo: '🎯',
      color: 'from-red-600 to-red-800',
      runs: 165, 
      average: 41.25 
    },
    { 
      name: 'Ravi Sharma', 
      team: 'UP Challengers', 
      logo: '🔥',
      color: 'from-green-600 to-green-800',
      runs: 132, 
      average: 33.0 
    },
  ];

  const bestBowlers = [
    { 
      name: 'Mohan Prasad', 
      team: 'Ballia Blazers', 
      logo: '⚡',
      color: 'from-yellow-500 to-orange-600',
      wickets: 12, 
      average: 8.5 
    },
    { 
      name: 'Deepak Verma', 
      team: 'Durjanpur Warriors', 
      logo: '🏏',
      color: 'from-blue-600 to-blue-800',
      wickets: 10, 
      average: 9.2 
    },
    { 
      name: 'Santosh Kumar', 
      team: 'Nai Basti Knights', 
      logo: '⚔️',
      color: 'from-purple-600 to-purple-800',
      wickets: 9, 
      average: 10.8 
    },
    { 
      name: 'Ajay Singh', 
      team: 'Bairia Bullets', 
      logo: '🎯',
      color: 'from-red-600 to-red-800',
      wickets: 8, 
      average: 12.0 
    },
    { 
      name: 'Ramesh Yadav', 
      team: 'UP Challengers', 
      logo: '🔥',
      color: 'from-green-600 to-green-800',
      wickets: 6, 
      average: 15.3 
    },
  ];

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
      <section className="relative bg-gradient-to-r from-white via-white to-white text-white py-10">
        {/* Stadium Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(/images/Gallary/Background1.png)` }}>
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
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Know more
            </Link>
          </div>
        </div>
      </section>  


      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
            Tournament Summary for 2026
        </h2>

    {/* ✅ Change starts here */}
    <div className="flex flex-wrap justify-center items-center gap-14">
      {/* Card 1 */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Users className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">₹11,000</h3>
        <p className="text-gray-600">Entry Fee</p>
      </div>

      {/* Card 2 */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Trophy className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">₹70,000</h3>
        <p className="text-gray-600">Winner Prize Money</p>
      </div>

      {/* Card 3 */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Award className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">₹35,000</h3>
        <p className="text-gray-600">Runner-up Prize</p>
      </div>

      {/* Card 4 */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Target className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">₹15,000</h3>
        <p className="text-gray-600">Player of the Tournament</p>
      </div>

      {/* Card 5 */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <IndianRupee className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">₹5,100</h3>
        <p className="text-gray-600">Best Batsman</p>
      </div>

      {/* Card 6 */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <IndianRupee className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">₹5,100</h3>
        <p className="text-gray-600">Best Bowler</p>
      </div>
    </div>
  </div>
</section>

      {/* <section className="py-10 bg-indigo-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Tournament Summary for 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹11,000</h3>
              <p className="text-gray-600">Entry Fee</p>
            </div>


            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹70,000</h3>
              <p className="text-gray-600">Winner Prize Money</p>
            </div>

            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹35,000</h3>
              <p className="text-gray-600">Runner-up Prize </p>
            </div>


            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹15,000</h3>
              <p className="text-gray-600">Player of the Tournament</p>
            </div>


            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹5,100</h3>
              <p className="text-gray-600">Best Batsman</p>
            </div>


            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹5,100</h3>
              <p className="text-gray-600">Best Bowler</p>
            </div> */}


            {/* <div className="text-center">
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
            </div> */}

          {/* </div>
        </div>
      </section> */}


      {/* Upcoming Tournament 2026 Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-200 via-indigo-500 to-indigo-200">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              MSJ Champions Trophy 2026
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
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


                  {/* <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg">{formatDate(upcomingTournament.date)} - {formatDate(upcomingTournament.endDate)}</span>
                  </div> */}


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
                      <Clock className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">Registration Fee: <strong className="text-gray-900">{upcomingTournament.registrationFee}</strong></span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-600">Prize Pool: <strong className="text-gray-900">{upcomingTournament.prizePool}</strong></span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Medal className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">Runner up Team: <strong className="text-gray-900">{upcomingTournament.runnerUpTeam}</strong></span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Medal className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">Best Batsman:<strong className="text-gray-900">{upcomingTournament.bestBatsman}</strong></span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Medal className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">Best Bowler:<strong className="text-gray-900">{upcomingTournament.bestBowler}</strong></span>
                      </div>

                      {/* <div className="mt-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Categories</h5>
                        <ul className="space-y-2">
                          {upcomingTournament.categories.map((category, index) => (
                            <li key={index} className="flex items-center space-x-2 text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>{category}</span>
                            </li>
                          ))}
                        </ul>
                      </div> */}


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

      {/* Tournament Winner 2025 Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-200 via-indigo-500 to-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-white to-gray-100 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
              <Crown className="h-12 w-12 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">🏆 2025 Tournament Champions</h2>
            <p className="text-xl text-yellow-100">Celebrating our 2025 winners and their incredible achievements</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300">
              {/* Year Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">MSJ Champions Trophy {tournamentWinner2025.year}</h3>
                <div className="flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">Tournament Winners</span>
                </div>
              </div>

              {/* Winners Display */}
              <div className="p-6">
                {/* Champion */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl mb-6 border-2 border-yellow-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Crown className="h-8 w-8 text-yellow-600 mr-3" />
                      <span className="text-lg font-bold text-yellow-800">CHAMPION</span>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-bold">
                      {tournamentWinner2025.champion.prize}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TeamLogo team={tournamentWinner2025.champion} size="w-16 h-16" />
                      <div className="ml-4">
                        <h4 className="font-bold text-blue-800 text-xl">{tournamentWinner2025.champion.name}</h4>
                        <p className="text-blue-600">Captain: {tournamentWinner2025.champion.captain}</p>
                      </div>
                    </div>
                    <Medal className="h-12 w-12 text-yellow-500" />
                  </div>
                </div>

                {/* Runner Up */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-6 border-2 border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Medal className="h-8 w-8 text-gray-600 mr-3" />
                      <span className="text-lg font-bold text-gray-800">RUNNER UP</span>
                    </div>
                    <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-full font-bold">
                      {tournamentWinner2025.runnerUp.prize}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TeamLogo team={tournamentWinner2025.runnerUp} size="w-16 h-16" />
                      <div className="ml-4">
                        <h4 className="font-bold text-blue-800 text-xl">{tournamentWinner2025.runnerUp.name}</h4>
                        <p className="text-blue-600">Captain: {tournamentWinner2025.runnerUp.captain}</p>
                      </div>
                    </div>
                    <Medal className="h-12 w-12 text-gray-500" />
                  </div>
                </div>

                {/* Man of the Tournament */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
                  <div className="flex items-center mb-4">
                    <Star className="h-8 w-8 text-blue-600 mr-3" />
                    <span className="text-lg font-bold text-blue-800">MAN OF THE TOURNAMENT</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-blue-800 text-xl">{tournamentWinner2025.manOfTournament.name}</h4>
                      <p className="text-blue-600">Team: {tournamentWinner2025.manOfTournament.team}</p>
                      <p className="text-blue-500 text-sm">{tournamentWinner2025.manOfTournament.stats}</p>
                    </div>
                    <Star className="h-12 w-12 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-xl text-white mb-6">Will your team be the next champion?</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white hover:bg-gray-100 text-yellow-600 font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Trophy className="h-6 w-6 mr-3" />
                Register for 2026
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <TeamLogo team={match.team1} size="w-20 h-20" />
                    <h3 className="font-bold text-blue-800 text-lg mb-2">{match.team1.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">{match.team1.score}</p>
                  </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <div className="flex justify-center mb-3">
                        <TeamLogo team={match.team1} size="w-20 h-20" />
                      </div>
                    <h3 className="font-bold text-blue-800 text-lg mb-2">{match.team1.name}</h3>
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
                    
                    <div className="flex justify-center mb-3">
                      <TeamLogo team={match.team2} size="w-20 h-20" />
                    </div>

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

      {/* Live Points Tables */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Live Points Tables</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tournament Points Table */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl shadow-2xl p-6 border border-blue-200">
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-indigo-800">Points Table</h3>
              </div>
              <div className="space-y-3">
                {[...tournamentPoints].sort((a, b) => b.points - a.points).map((team, index) => (
                  <div key={index} className={`bg-gradient-to-r ${team.color} rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                          index === 0 ? 'bg-yellow-500 ring-4 ring-yellow-300' : 
                          index === 1 ? 'bg-gray-400 ring-4 ring-gray-300' : 
                          index === 2 ? 'bg-orange-500 ring-4 ring-orange-300' : 
                          'bg-white bg-opacity-20'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="text-3xl">{team.logo}</div>
                        <div>
                          <div className="font-bold text-lg">{team.team}</div>
                          <div className="text-sm opacity-90">
                            M: {team.matches} | W: {team.wins} | L: {team.losses}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{team.points}</div>
                        <div className={`text-sm font-semibold ${
                          team.runRate.startsWith('+') ? 'text-green-200' : 'text-red-200'
                        }`}>
                          NRR: {team.runRate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Batsman Leaderboard */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl shadow-2xl p-6 border border-green-200">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-emerald-800">Top Batsmen</h3>
              </div>
              <div className="space-y-3">
                {bestBatsmen.map((player, index) => (
                  <div key={index} className={`bg-gradient-to-r ${player.color} rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                          index === 0 ? 'bg-yellow-500 ring-4 ring-yellow-300' : 
                          index === 1 ? 'bg-gray-400 ring-4 ring-gray-300' : 
                          index === 2 ? 'bg-orange-500 ring-4 ring-orange-300' : 
                          'bg-white bg-opacity-20'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="text-2xl">{player.logo}</div>
                        <div>
                          <div className="font-bold text-lg">{player.name}</div>
                          <div className="text-sm opacity-90">{player.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{player.runs}</div>
                        <div className="text-sm opacity-90">Avg: {player.average}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Bowler Leaderboard */}
            <div className="bg-gradient-to-br from-rose-50 to-red-100 rounded-xl shadow-2xl p-6 border border-red-200">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-800">Top Bowlers</h3>
              </div>
              <div className="space-y-3">
                {bestBowlers.map((player, index) => (
                  <div key={index} className={`bg-gradient-to-r ${player.color} rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                          index === 0 ? 'bg-yellow-500 ring-4 ring-yellow-300' : 
                          index === 1 ? 'bg-gray-400 ring-4 ring-gray-300' : 
                          index === 2 ? 'bg-orange-500 ring-4 ring-orange-300' : 
                          'bg-white bg-opacity-20'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="text-2xl">{player.logo}</div>
                        <div>
                          <div className="font-bold text-lg">{player.name}</div>
                          <div className="text-sm opacity-90">{player.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{player.wickets}</div>
                        <div className="text-sm opacity-90">Avg: {player.average}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-500">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Star className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            To Become Our Sponsor
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
      
      

      {/* Tournament Photos Section with Enhanced Viewer */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tournament Highlights (2025)
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
      {/* <section className="py-16 bg-white">
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
      </section> */}



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
                    <p className="text-gray-600">Durjanpur, Bairia, Ballia, Uttar Pradesh. PIN - 277208</p>
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