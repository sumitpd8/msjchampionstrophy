import React, { useState } from 'react';
import { Users, Star, User, Search, Filter, Trophy, Phone, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Teams page component displaying all registered tournament teams
 * Features:
 * - Grid display of all registered teams with logos
 * - Team details including captain, players, and contact info
 * - Search functionality for teams and players
 * - Filter options for different categories
 * - Responsive design with Dream11-style blue theme
 * - Custom team logos support
 * - Expandable team cards showing full roster
 */
const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [expandedTeam, setExpandedTeam] = useState(null);

  // Sample teams data with custom logos and complete details
  // Replace these logo paths with your actual team logo files
  const teams = [
    {
      id: 1,
      name: 'Team 1',
      logo: '/images/teams/thunder-bolts.png', // Add your logo here
      fallbackLogo: '⚡',
      captain: 'Name',
      viceCaptain: 'Name',
      coach: '',
      manager: '',
      contactNumber: '+91-9876543210',
      homeGround: 'Address',
      foundedYear: '2024',
      // category: 'Local',
      players: [
        { name: 'Rajesh Kumar', role: 'Captain', position: 'All-rounder' },
        { name: 'Amit Singh', role: 'Vice Captain', position: 'Batsman' },
        { name: 'Pradeep Yadav', role: 'Player', position: 'Bowler' },
        { name: 'Suresh Gupta', role: 'Player', position: 'Wicket Keeper' },
        { name: 'Vikash Sharma', role: 'Player', position: 'Batsman' },
        { name: 'Deepak Kumar', role: 'Player', position: 'Bowler' },
        { name: 'Ravi Verma', role: 'Player', position: 'All-rounder' },
        { name: 'Santosh Singh', role: 'Player', position: 'Batsman' },
        { name: 'Manoj Yadav', role: 'Player', position: 'Bowler' },
        { name: 'Ashok Kumar', role: 'Player', position: 'Batsman' },
        { name: 'Dinesh Prasad', role: 'Player', position: 'All-rounder' },
        { name: 'Ramesh Singh', role: 'Player', position: 'Bowler' },
        { name: 'Mukesh Yadav', role: 'Player', position: 'Batsman' },
        { name: 'Sunil Kumar', role: 'Player', position: 'Wicket Keeper' },
        { name: 'Ajay Verma', role: 'Player', position: 'All-rounder' }
      ]
    },
    // {
    //   id: 2,
    //   name: 'Fire Eagles',
    //   logo: '/images/teams/fire-eagles.png', // Add your logo here
    //   fallbackLogo: '🔥',
    //   captain: 'Sanjay Yadav',
    //   viceCaptain: 'Vinod Kumar',
    //   coach: 'Anil Singh',
    //   manager: 'Rakesh Verma',
    //   contactNumber: '+91-9876543211',
    //   homeGround: 'Eagle Stadium, Ballia',
    //   foundedYear: '2023',
    //   category: 'Regional',
    //   players: [
    //     { name: 'Sanjay Yadav', role: 'Captain', position: 'Batsman' },
    //     { name: 'Vinod Kumar', role: 'Vice Captain', position: 'All-rounder' },
    //     { name: 'Anil Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Rakesh Verma', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Pankaj Yadav', role: 'Player', position: 'Batsman' },
    //     { name: 'Shyam Sundar', role: 'Player', position: 'Bowler' },
    //     { name: 'Gopal Singh', role: 'Player', position: 'All-rounder' },
    //     { name: 'Bharat Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Naresh Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Umesh Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Kamal Verma', role: 'Player', position: 'All-rounder' },
    //     { name: 'Jagdish Kumar', role: 'Player', position: 'Bowler' },
    //     { name: 'Brijesh Yadav', role: 'Player', position: 'Batsman' },
    //     { name: 'Satish Singh', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Mohan Kumar', role: 'Player', position: 'All-rounder' }
    //   ]
    // },
    // {
    //   id: 3,
    //   name: 'Storm Riders',
    //   logo: '/images/teams/storm-riders.png', // Add your logo here
    //   fallbackLogo: '🌪️',
    //   captain: 'Ankit Sharma',
    //   viceCaptain: 'Rohit Gupta',
    //   coach: 'Sachin Yadav',
    //   manager: 'Manish Kumar',
    //   contactNumber: '+91-9876543212',
    //   homeGround: 'Storm Arena, Ballia',
    //   foundedYear: '2024',
    //   category: 'Local',
    //   players: [
    //     { name: 'Ankit Sharma', role: 'Captain', position: 'All-rounder' },
    //     { name: 'Rohit Gupta', role: 'Vice Captain', position: 'Batsman' },
    //     { name: 'Sachin Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Manish Kumar', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Vivek Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Arjun Verma', role: 'Player', position: 'Bowler' },
    //     { name: 'Kiran Kumar', role: 'Player', position: 'All-rounder' },
    //     { name: 'Nitin Yadav', role: 'Player', position: 'Batsman' },
    //     { name: 'Rahul Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Gaurav Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Shivam Verma', role: 'Player', position: 'All-rounder' },
    //     { name: 'Aman Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Harsh Yadav', role: 'Player', position: 'Batsman' },
    //     { name: 'Yash Kumar', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Dev Singh', role: 'Player', position: 'All-rounder' }
    //   ]
    // },
    // {
    //   id: 4,
    //   name: 'Royal Kings',
    //   logo: '/images/teams/royal-kings.png', // Add your logo here
    //   fallbackLogo: '👑',
    //   captain: 'Abhishek Verma',
    //   viceCaptain: 'Shubham Singh',
    //   coach: 'Akash Yadav',
    //   manager: 'Vishal Kumar',
    //   contactNumber: '+91-9876543213',
    //   homeGround: 'Royal Ground, Ballia',
    //   foundedYear: '2023',
    //   category: 'Regional',
    //   players: [
    //     { name: 'Abhishek Verma', role: 'Captain', position: 'Batsman' },
    //     { name: 'Shubham Singh', role: 'Vice Captain', position: 'All-rounder' },
    //     { name: 'Akash Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Vishal Kumar', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Neeraj Gupta', role: 'Player', position: 'Batsman' },
    //     { name: 'Lokesh Verma', role: 'Player', position: 'Bowler' },
    //     { name: 'Praveen Singh', role: 'Player', position: 'All-rounder' },
    //     { name: 'Jitendra Yadav', role: 'Player', position: 'Batsman' },
    //     { name: 'Saurabh Kumar', role: 'Player', position: 'Bowler' },
    //     { name: 'Ranjan Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Deepak Verma', role: 'Player', position: 'All-rounder' },
    //     { name: 'Anuj Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Sumit Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Varun Singh', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Rishabh Verma', role: 'Player', position: 'All-rounder' }
    //   ]
    // },
    // {
    //   id: 5,
    //   name: 'Lightning Warriors',
    //   logo: '/images/teams/lightning-warriors.png', // Add your logo here
    //   fallbackLogo: '⚔️',
    //   captain: 'Dheeraj Singh',
    //   viceCaptain: 'Ajit Kumar',
    //   coach: 'Bhupendra Yadav',
    //   manager: 'Chandan Verma',
    //   contactNumber: '+91-9876543214',
    //   homeGround: 'Warrior Field, Ballia',
    //   foundedYear: '2024',
    //   category: 'Local',
    //   players: [
    //     { name: 'Dheeraj Singh', role: 'Captain', position: 'All-rounder' },
    //     { name: 'Ajit Kumar', role: 'Vice Captain', position: 'Batsman' },
    //     { name: 'Bhupendra Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Chandan Verma', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Dilip Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Eshwar Kumar', role: 'Player', position: 'Bowler' },
    //     { name: 'Firoz Yadav', role: 'Player', position: 'All-rounder' },
    //     { name: 'Ghanshyam Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Harish Verma', role: 'Player', position: 'Bowler' },
    //     { name: 'Indra Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Javed Yadav', role: 'Player', position: 'All-rounder' },
    //     { name: 'Kishore Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Lalit Verma', role: 'Player', position: 'Batsman' },
    //     { name: 'Mahesh Kumar', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Narayan Singh', role: 'Player', position: 'All-rounder' }
    //   ]
    // },
    // {
    //   id: 6,
    //   name: 'Golden Panthers',
    //   logo: '/images/teams/golden-panthers.png', // Add your logo here
    //   fallbackLogo: '🐆',
    //   captain: 'Ravi Shankar',
    //   viceCaptain: 'Omprakash Yadav',
    //   coach: 'Pappu Singh',
    //   manager: 'Qadir Verma',
    //   contactNumber: '+91-9876543215',
    //   homeGround: 'Panther Den, Ballia',
    //   foundedYear: '2023',
    //   category: 'Regional',
    //   players: [
    //     { name: 'Ravi Shankar', role: 'Captain', position: 'Batsman' },
    //     { name: 'Omprakash Yadav', role: 'Vice Captain', position: 'All-rounder' },
    //     { name: 'Pappu Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Qadir Verma', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Rambabu Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Shailendra Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Tribhuvan Yadav', role: 'Player', position: 'All-rounder' },
    //     { name: 'Upendra Verma', role: 'Player', position: 'Batsman' },
    //     { name: 'Vinay Kumar', role: 'Player', position: 'Bowler' },
    //     { name: 'Wasim Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Xylem Yadav', role: 'Player', position: 'All-rounder' },
    //     { name: 'Yogesh Verma', role: 'Player', position: 'Bowler' },
    //     { name: 'Zafar Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Bablu Singh', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Chunnu Yadav', role: 'Player', position: 'All-rounder' }
    //   ]
    // },
    // {
    //   id: 7,
    //   name: 'Blue Sharks',
    //   logo: '/images/teams/blue-sharks.png', // Add your logo here
    //   fallbackLogo: '🦈',
    //   captain: 'Santosh Kumar',
    //   viceCaptain: 'Babloo Singh',
    //   coach: 'Chotu Yadav',
    //   manager: 'Dharmendra Verma',
    //   contactNumber: '+91-9876543216',
    //   homeGround: 'Shark Tank, Ballia',
    //   foundedYear: '2024',
    //   category: 'Local',
    //   players: [
    //     { name: 'Santosh Kumar', role: 'Captain', position: 'All-rounder' },
    //     { name: 'Babloo Singh', role: 'Vice Captain', position: 'Batsman' },
    //     { name: 'Chotu Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Dharmendra Verma', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Eklavya Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Fateh Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Guddu Yadav', role: 'Player', position: 'All-rounder' },
    //     { name: 'Hemant Verma', role: 'Player', position: 'Batsman' },
    //     { name: 'Ishwar Kumar', role: 'Player', position: 'Bowler' },
    //     { name: 'Jitesh Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Kailash Yadav', role: 'Player', position: 'All-rounder' },
    //     { name: 'Lallan Verma', role: 'Player', position: 'Bowler' },
    //     { name: 'Munna Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Nanhe Singh', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Om Yadav', role: 'Player', position: 'All-rounder' }
    //   ]
    // },
    // {
    //   id: 8,
    //   name: 'Red Dragons',
    //   logo: '/images/teams/red-dragons.png', // Add your logo here
    //   fallbackLogo: '🐉',
    //   captain: 'Mukesh Singh',
    //   viceCaptain: 'Pappu Yadav',
    //   coach: 'Qasim Verma',
    //   manager: 'Raju Kumar',
    //   contactNumber: '+91-9876543217',
    //   homeGround: 'Dragon Lair, Ballia',
    //   foundedYear: '2023',
    //   category: 'Regional',
    //   players: [
    //     { name: 'Mukesh Singh', role: 'Captain', position: 'Batsman' },
    //     { name: 'Pappu Yadav', role: 'Vice Captain', position: 'All-rounder' },
    //     { name: 'Qasim Verma', role: 'Player', position: 'Bowler' },
    //     { name: 'Raju Kumar', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Sonu Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Tinku Yadav', role: 'Player', position: 'Bowler' },
    //     { name: 'Uday Verma', role: 'Player', position: 'All-rounder' },
    //     { name: 'Vinod Kumar', role: 'Player', position: 'Batsman' },
    //     { name: 'Waseem Singh', role: 'Player', position: 'Bowler' },
    //     { name: 'Xylo Yadav', role: 'Player', position: 'Batsman' },
    //     { name: 'Yogi Verma', role: 'Player', position: 'All-rounder' },
    //     { name: 'Zakir Kumar', role: 'Player', position: 'Bowler' },
    //     { name: 'Bunty Singh', role: 'Player', position: 'Batsman' },
    //     { name: 'Chintu Yadav', role: 'Player', position: 'Wicket Keeper' },
    //     { name: 'Dablu Verma', role: 'Player', position: 'All-rounder' }
    //   ]
    // }
  ];

  // Filter teams based on search term and filter type
  const filteredTeams = teams.filter(team => {
    const matchesSearch = 
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.captain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.players.some(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filterType === 'all' || team.category.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  // Team logo component with fallback
  const TeamLogo = ({ team, size = 'w-20 h-20' }) => {
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
          <span className="text-3xl">{team.fallbackLogo}</span>
        )}
      </div>
    );
  };

  const toggleTeamExpansion = (teamId) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  const getPositionColor = (position) => {
    switch (position.toLowerCase()) {
      case 'batsman':
        return 'bg-green-100 text-green-800';
      case 'bowler':
        return 'bg-red-100 text-red-800';
      case 'all-rounder':
        return 'bg-blue-100 text-blue-800';
      case 'wicket keeper':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(/images/Gallary/16.jpg)` }}>
          </div>
        {/* Cricket Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-blue-300 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Users className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tournament Teams</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Meet all the registered teams participating in MSJ Champions Trophy 2026
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
                placeholder="Search teams or players..."
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
                <option value="all">All Teams</option>
                <option value="local">Local Teams</option>
                <option value="regional">Regional Teams</option>
              </select>
            </div>

            {/* Stats */}
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">{filteredTeams.length}</div>
              <div className="text-sm text-blue-600">Teams Found</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeams.map((team) => (
              <div key={team.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 hover:scale-105">
                {/* Team Header
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white text-center">
                  <TeamLogo team={team} size="w-24 h-24" />
                  <h3 className="font-bold text-xl mt-4 mb-2">{team.name}</h3>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-block">
                    {team.category} Team
                  </div>
                </div> */}

              {/* Team Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white text-center">
                  <div className="flex justify-center mb-4">
                    <TeamLogo team={team} size="w-40 h-40" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{team.name}</h3>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-block">
                    {team.category} Team
                  </div>
                </div>
                
                {/* Team Info */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-3" />
                      <div>
                        <span className="text-sm text-blue-600">Captain:</span>
                        <span className="font-semibold text-blue-800 ml-2">{team.captain}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <span className="text-sm text-blue-600">Vice Captain:</span>
                        <span className="font-semibold text-blue-800 ml-2">{team.viceCaptain}</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-green-500 mr-3" />
                      <div>
                        <span className="text-sm text-blue-600">Contact:</span>
                        <a href={`tel:${team.contactNumber}`} className="font-semibold text-blue-800 ml-2 hover:text-blue-600">
                          {team.contactNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-500 mr-3" />
                      <div>
                        <span className="text-sm text-blue-600">Home Ground:</span>
                        <span className="font-semibold text-blue-800 ml-2">{team.homeGround}</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-purple-500 mr-3" />
                      <div>
                        <span className="text-sm text-blue-600">Founded:</span>
                        <span className="font-semibold text-blue-800 ml-2">{team.foundedYear}</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Stats */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-800">{team.players.length}</div>
                        <div className="text-xs text-blue-600">Players</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-800">
                          {team.players.filter(p => p.position === 'Batsman').length}
                        </div>
                        <div className="text-xs text-blue-600">Batsmen</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-800">
                          {team.players.filter(p => p.position === 'Bowler').length}
                        </div>
                        <div className="text-xs text-blue-600">Bowlers</div>
                      </div>
                    </div>
                  </div>

                  {/* View Team Button */}
                  <button
                    onClick={() => toggleTeamExpansion(team.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                  >
                    {expandedTeam === team.id ? 'Hide' : 'View'} Full Squad
                  </button>
                </div>

                {/* Expanded Team Details */}
                {expandedTeam === team.id && (
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-t border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-4 text-lg">Complete Squad</h4>
                    
                    {/* Management */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-blue-700 mb-3">Management</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="font-semibold text-blue-800">Coach</div>
                          <div className="text-blue-600">{team.coach}</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="font-semibold text-blue-800">Manager</div>
                          <div className="text-blue-600">{team.manager}</div>
                        </div>
                      </div>
                    </div>

                    {/* Players */}
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-3">Players</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {team.players.map((player, index) => (
                          <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                            <div className="flex items-center">
                              <User className="h-4 w-4 text-blue-600 mr-2" />
                              <div>
                                <span className={`font-semibold ${player.role === 'Captain' ? 'text-yellow-600' : player.role === 'Vice Captain' ? 'text-blue-800' : 'text-blue-700'}`}>
                                  {player.name}
                                </span>
                                {(player.role === 'Captain' || player.role === 'Vice Captain') && (
                                  <span className="text-xs text-blue-500 ml-2">({player.role})</span>
                                )}
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionColor(player.position)}`}>
                              {player.position}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">No teams found</h3>
              <p className="text-blue-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Trophy className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Join the Tournament?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Register your team for MSJ Champions Trophy 2026 and be part of this exciting cricket tournament
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Users className="h-6 w-6 mr-3" />
            Register Your Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Teams;