import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, Users, Filter, Search, ChevronRight, User, Star } from 'lucide-react';

/**
 * Matches page component displaying scheduled tournament matches
 * Features:
 * - List of all scheduled matches with team logos
 * - Match details including date, time, venue, captain, and players
 * - Filter options for different match types
 * - Search functionality for teams
 * - Responsive design with Dream11-style blue theme
 * - Custom team logos support
 * - Expandable match cards showing team details
 */
const Matches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [expandedMatch, setExpandedMatch] = useState(null);

  // Sample matches data with custom team logos and player details
  // Replace these logo paths with your actual team logo files
  const matches = [
    {
      id: 1,
      team1: {
        name: 'Team 1',
        logo: '/images/teams/thunder-bolts.png', // Add your logo here
        fallbackLogo: '⚡',
        captain: 'Sudhir Gond',
        players: [
          'Rajesh Kumar (C)', 'Amit Singh', 'Pradeep Yadav', 'Suresh Gupta', 'Vikash Sharma',
          'Deepak Kumar', 'Ravi Verma', 'Santosh Singh', 'Manoj Yadav', 'Ashok Kumar',
          'Dinesh Prasad', 'Ramesh Singh', 'Mukesh Yadav', 'Sunil Kumar', 'Ajay Verma'
        ]
      },
      team2: {
        name: 'Team 2',
        logo: '/images/teams/fire-eagles.png', // Add your logo here
        fallbackLogo: '🔥',
        captain: 'Shakti Yadav',
        players: [
          'Sanjay Yadav (C)', 'Vinod Kumar', 'Anil Singh', 'Rakesh Verma', 'Pankaj Yadav',
          'Shyam Sundar', 'Gopal Singh', 'Bharat Kumar', 'Naresh Yadav', 'Umesh Singh',
          'Kamal Verma', 'Jagdish Kumar', 'Brijesh Yadav', 'Satish Singh', 'Mohan Kumar'
        ]
      },
      date: '',
      time: '',
      venue: 'Koyla Veer Baba Cricket Ground',
      matchType: 'Group Stage',
      status: 'Upcoming'
    },
    // {
    //   id: 2,
    //   team1: {
    //     name: 'Storm Riders',
    //     logo: '/images/teams/storm-riders.png', // Add your logo here
    //     fallbackLogo: '🌪️',
    //     captain: 'Ankit Sharma',
    //     players: [
    //       'Ankit Sharma (C)', 'Rohit Gupta', 'Sachin Yadav', 'Manish Kumar', 'Vivek Singh',
    //       'Arjun Verma', 'Kiran Kumar', 'Nitin Yadav', 'Rahul Singh', 'Gaurav Kumar',
    //       'Shivam Verma', 'Aman Singh', 'Harsh Yadav', 'Yash Kumar', 'Dev Singh'
    //     ]
    //   },
    //   team2: {
    //     name: 'Royal Kings',
    //     logo: '/images/teams/royal-kings.png', // Add your logo here
    //     fallbackLogo: '👑',
    //     captain: 'Abhishek Verma',
    //     players: [
    //       'Abhishek Verma (C)', 'Shubham Singh', 'Akash Yadav', 'Vishal Kumar', 'Neeraj Gupta',
    //       'Lokesh Verma', 'Praveen Singh', 'Jitendra Yadav', 'Saurabh Kumar', 'Ranjan Singh',
    //       'Deepak Verma', 'Anuj Yadav', 'Sumit Kumar', 'Varun Singh', 'Rishabh Verma'
    //     ]
    //   },
    //   date: '2026-01-16',
    //   time: '2:00 PM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Group Stage',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 3,
    //   team1: {
    //     name: 'Lightning Warriors',
    //     logo: '/images/teams/lightning-warriors.png', // Add your logo here
    //     fallbackLogo: '⚔️',
    //     captain: 'Dheeraj Singh',
    //     players: [
    //       'Dheeraj Singh (C)', 'Ajit Kumar', 'Bhupendra Yadav', 'Chandan Verma', 'Dilip Singh',
    //       'Eshwar Kumar', 'Firoz Yadav', 'Ghanshyam Singh', 'Harish Verma', 'Indra Kumar',
    //       'Javed Yadav', 'Kishore Singh', 'Lalit Verma', 'Mahesh Kumar', 'Narayan Singh'
    //     ]
    //   },
    //   team2: {
    //     name: 'Golden Panthers',
    //     logo: '/images/teams/golden-panthers.png', // Add your logo here
    //     fallbackLogo: '🐆',
    //     captain: 'Ravi Shankar',
    //     players: [
    //       'Ravi Shankar (C)', 'Omprakash Yadav', 'Pappu Singh', 'Qadir Verma', 'Rambabu Kumar',
    //       'Shailendra Singh', 'Tribhuvan Yadav', 'Upendra Verma', 'Vinay Kumar', 'Wasim Singh',
    //       'Xylem Yadav', 'Yogesh Verma', 'Zafar Kumar', 'Bablu Singh', 'Chunnu Yadav'
    //     ]
    //   },
    //   date: '2026-01-17',
    //   time: '10:00 AM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Group Stage',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 4,
    //   team1: {
    //     name: 'Blue Sharks',
    //     logo: '/images/teams/blue-sharks.png', // Add your logo here
    //     fallbackLogo: '🦈',
    //     captain: 'Santosh Kumar',
    //     players: [
    //       'Santosh Kumar (C)', 'Babloo Singh', 'Chotu Yadav', 'Dharmendra Verma', 'Eklavya Kumar',
    //       'Fateh Singh', 'Guddu Yadav', 'Hemant Verma', 'Ishwar Kumar', 'Jitesh Singh',
    //       'Kailash Yadav', 'Lallan Verma', 'Munna Kumar', 'Nanhe Singh', 'Om Yadav'
    //     ]
    //   },
    //   team2: {
    //     name: 'Red Dragons',
    //     logo: '/images/teams/red-dragons.png', // Add your logo here
    //     fallbackLogo: '🐉',
    //     captain: 'Mukesh Singh',
    //     players: [
    //       'Mukesh Singh (C)', 'Pappu Yadav', 'Qasim Verma', 'Raju Kumar', 'Sonu Singh',
    //       'Tinku Yadav', 'Uday Verma', 'Vinod Kumar', 'Waseem Singh', 'Xylo Yadav',
    //       'Yogi Verma', 'Zakir Kumar', 'Bunty Singh', 'Chintu Yadav', 'Dablu Verma'
    //     ]
    //   },
    //   date: '2026-01-18',
    //   time: '2:00 PM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Group Stage',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 5,
    //   team1: {
    //     name: 'Green Vipers',
    //     logo: '/images/teams/green-vipers.png', // Add your logo here
    //     fallbackLogo: '🐍',
    //     captain: 'Ashish Yadav',
    //     players: [
    //       'Ashish Yadav (C)', 'Bittu Singh', 'Chandan Verma', 'Deepu Kumar', 'Eshwar Singh',
    //       'Firoz Yadav', 'Golu Verma', 'Harsh Kumar', 'Imran Singh', 'Jitu Yadav',
    //       'Kanha Verma', 'Lucky Kumar', 'Monu Singh', 'Nandu Yadav', 'Omi Verma'
    //     ]
    //   },
    //   team2: {
    //     name: 'Silver Hawks',
    //     logo: '/images/teams/silver-hawks.png', // Add your logo here
    //     fallbackLogo: '🦅',
    //     captain: 'Prashant Kumar',
    //     players: [
    //       'Prashant Kumar (C)', 'Pintu Singh', 'Qurban Yadav', 'Rinku Verma', 'Sunny Kumar',
    //       'Tillu Singh', 'Ujjwal Yadav', 'Vicky Verma', 'Wajid Kumar', 'Xylem Singh',
    //       'Yuvraj Yadav', 'Zeeshan Verma', 'Bunny Kumar', 'Chiku Singh', 'Dolly Yadav'
    //     ]
    //   },
    //   date: '2026-01-19',
    //   time: '10:00 AM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Quarter Final',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 6,
    //   team1: {
    //     name: 'Black Tigers',
    //     logo: '/images/teams/black-tigers.png', // Add your logo here
    //     fallbackLogo: '🐅',
    //     captain: 'Rohit Verma',
    //     players: [
    //       'Rohit Verma (C)', 'Bittu Yadav', 'Chotu Singh', 'Deepak Verma', 'Eshwar Kumar',
    //       'Firoz Singh', 'Guddu Yadav', 'Hemant Verma', 'Imran Kumar', 'Jitesh Singh',
    //       'Kailash Yadav', 'Lallan Verma', 'Munna Kumar', 'Nanhe Singh', 'Om Yadav'
    //     ]
    //   },
    //   team2: {
    //     name: 'White Lions',
    //     logo: '/images/teams/white-lions.png', // Add your logo here
    //     fallbackLogo: '🦁',
    //     captain: 'Sunil Yadav',
    //     players: [
    //       'Sunil Yadav (C)', 'Pappu Singh', 'Qasim Verma', 'Raju Kumar', 'Sonu Singh',
    //       'Tinku Yadav', 'Uday Verma', 'Vinod Kumar', 'Waseem Singh', 'Xylo Yadav',
    //       'Yogi Verma', 'Zakir Kumar', 'Bunty Singh', 'Chintu Yadav', 'Dablu Verma'
    //     ]
    //   },
    //   date: '2026-01-20',
    //   time: '2:00 PM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Quarter Final',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 7,
    //   team1: {
    //     name: 'Purple Wolves',
    //     logo: '/images/teams/purple-wolves.png', // Add your logo here
    //     fallbackLogo: '🐺',
    //     captain: 'Manoj Kumar',
    //     players: [
    //       'Manoj Kumar (C)', 'Bittu Verma', 'Chandan Singh', 'Deepu Yadav', 'Eshwar Verma',
    //       'Firoz Kumar', 'Golu Singh', 'Harsh Yadav', 'Imran Verma', 'Jitu Kumar',
    //       'Kanha Singh', 'Lucky Yadav', 'Monu Verma', 'Nandu Kumar', 'Omi Singh'
    //     ]
    //   },
    //   team2: {
    //     name: 'Orange Foxes',
    //     logo: '/images/teams/orange-foxes.png', // Add your logo here
    //     fallbackLogo: '🦊',
    //     captain: 'Vikash Yadav',
    //     players: [
    //       'Vikash Yadav (C)', 'Pintu Verma', 'Qurban Kumar', 'Rinku Singh', 'Sunny Yadav',
    //       'Tillu Verma', 'Ujjwal Kumar', 'Vicky Singh', 'Wajid Yadav', 'Xylem Verma',
    //       'Yuvraj Kumar', 'Zeeshan Singh', 'Bunny Yadav', 'Chiku Verma', 'Dolly Kumar'
    //     ]
    //   },
    //   date: '2026-01-21',
    //   time: '10:00 AM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Semi Final',
    //   status: 'Upcoming'
    // },
    // {
    //   id: 8,
    //   team1: {
    //     name: 'Crimson Bulls',
    //     logo: '/images/teams/crimson-bulls.png', // Add your logo here
    //     fallbackLogo: '🐂',
    //     captain: 'Ajay Singh',
    //     players: [
    //       'Ajay Singh (C)', 'Bittu Kumar', 'Chotu Verma', 'Deepak Singh', 'Eshwar Yadav',
    //       'Firoz Verma', 'Guddu Kumar', 'Hemant Singh', 'Imran Yadav', 'Jitesh Verma',
    //       'Kailash Kumar', 'Lallan Singh', 'Munna Yadav', 'Nanhe Verma', 'Om Kumar'
    //     ]
    //   },
    //   team2: {
    //     name: 'Azure Falcons',
    //     logo: '/images/teams/azure-falcons.png', // Add your logo here
    //     fallbackLogo: '🦅',
    //     captain: 'Ravi Kumar',
    //     players: [
    //       'Ravi Kumar (C)', 'Pappu Verma', 'Qasim Singh', 'Raju Yadav', 'Sonu Verma',
    //       'Tinku Kumar', 'Uday Singh', 'Vinod Yadav', 'Waseem Verma', 'Xylo Kumar',
    //       'Yogi Singh', 'Zakir Yadav', 'Bunty Verma', 'Chintu Kumar', 'Dablu Singh'
    //     ]
    //   },
    //   date: '2026-01-22',
    //   time: '2:00 PM',
    //   venue: 'Koyla Veer Baba Cricket Ground',
    //   matchType: 'Final',
    //   status: 'Upcoming'
    // }
  ];

  // Filter matches based on search term and filter type
  const filteredMatches = matches.filter(match => {
    const matchesSearch = 
      match.team1.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.team2.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.team1.captain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.team2.captain.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || match.matchType.toLowerCase().includes(filterType.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  // Team logo component with fallback
  const TeamLogo = ({ team, size = 'w-16 h-16' }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <div className={`${size} rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center border-2 border-blue-300 shadow-lg`}>
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

  const getMatchTypeColor = (matchType) => {
    switch (matchType.toLowerCase()) {
      case 'group stage':
        return 'from-blue-500 to-blue-600';
      case 'quarter final':
        return 'from-yellow-500 to-yellow-600';
      case 'semi final':
        return 'from-orange-500 to-orange-600';
      case 'final':
        return 'from-red-500 to-red-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const toggleMatchExpansion = (matchId) => {
    setExpandedMatch(expandedMatch === matchId ? null : matchId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-blue-800 to-blue-700 text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(/images/Gallary/15.jpg)` }}>
          </div>
        {/* Cricket Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-blue-300 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Trophy className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tournament Matches</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Complete schedule of all matches in MSJ Champions Trophy 2026
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search teams or captains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-full focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-3 border-2 border-blue-200 rounded-full focus:border-blue-500 focus:outline-none transition-colors bg-white"
              >
                <option value="all">All Matches</option>
                <option value="group">Group Stage</option>
                <option value="quarter">Quarter Final</option>
                <option value="semi">Semi Final</option>
                <option value="final">Final</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            {filteredMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100">
                {/* Match Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${getMatchTypeColor(match.matchType)} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      {match.matchType}
                    </div>
                    <div className="text-blue-600 font-semibold">
                      Match #{match.id}
                    </div>
                  </div>

                  {/* Teams Display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Team 1 */}
                    {/* <div className="text-center">
                      <TeamLogo team={match.team1} size="w-20 h-20 md:w-24 md:h-24" />
                      <h3 className="font-bold text-blue-800 text-lg mt-3">{match.team1.name}</h3>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-blue-600 font-semibold">{match.team1.captain}</span>
                      </div>
                    </div> */}
                    
                    <div className="text-center">
                      <div className="flex justify-center mb-3">
                        <TeamLogo team={match.team1} size="w-24 h-24 md:w-24 md:h-24" />
                      </div>
                      <h3 className="font-bold text-blue-800 text-lg mb-2">{match.team1.name}</h3>
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-blue-600 font-semibold">{match.team1.captain}</span>
                      </div>
                    </div>

                    {/* VS and Match Info */}
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-6 rounded-full text-xl mb-4">
                        VS
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center text-blue-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-semibold">{new Date(match.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-center text-blue-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{match.time}</span>
                        </div>
                        <div className="flex items-center justify-center text-blue-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{match.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Team 2 */}
                    {/* <div className="text-center">
                      <TeamLogo team={match.team2} size="w-20 h-20 md:w-24 md:h-24" />
                      <h3 className="font-bold text-blue-800 text-lg mt-3">{match.team2.name}</h3>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-blue-600 font-semibold">{match.team2.captain}</span>
                      </div>
                    </div>
                  </div> */}

                  <div className="text-center">
                      <div className="flex justify-center mb-3">
                        <TeamLogo team={match.team2} size="w-24 h-24 md:w-24 md:h-24" />
                      </div>
                      <h3 className="font-bold text-blue-800 text-lg mb-2">{match.team2.name}</h3>
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-blue-600 font-semibold">{match.team2.captain}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div className="text-center mt-6">
                    <button
                      onClick={() => toggleMatchExpansion(match.id)}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                    >
                      <Users className="h-5 w-5 mr-2" />
                      {expandedMatch === match.id ? 'Hide' : 'View'} Team Details
                      <ChevronRight className={`h-5 w-5 ml-2 transition-transform duration-200 ${expandedMatch === match.id ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Team Details */}
                {expandedMatch === match.id && (
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-t border-blue-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Team 1 Players */}
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <TeamLogo team={match.team1} size="w-12 h-12" />
                          <div className="ml-3">
                            <h4 className="font-bold text-blue-800 text-lg">{match.team1.name}</h4>
                            <p className="text-blue-600">Captain: {match.team1.captain}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {match.team1.players.map((player, index) => (
                            <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg">
                              <User className="h-4 w-4 text-blue-600 mr-2" />
                              <span className={`text-sm ${player.includes('(C)') ? 'font-bold text-blue-800' : 'text-blue-700'}`}>
                                {player}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Team 2 Players */}
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <TeamLogo team={match.team2} size="w-12 h-12" />
                          <div className="ml-3">
                            <h4 className="font-bold text-blue-800 text-lg">{match.team2.name}</h4>
                            <p className="text-blue-600">Captain: {match.team2.captain}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {match.team2.players.map((player, index) => (
                            <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg">
                              <User className="h-4 w-4 text-blue-600 mr-2" />
                              <span className={`text-sm ${player.includes('(C)') ? 'font-bold text-blue-800' : 'text-blue-700'}`}>
                                {player}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredMatches.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">No matches found</h3>
              <p className="text-blue-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Matches;