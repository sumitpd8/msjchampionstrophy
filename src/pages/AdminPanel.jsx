import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Users, 
  Trophy, 
  Edit3, 
  Save, 
  X, 
  Search,
  Filter,
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Target,
  Award,
  Star
} from 'lucide-react';

const AdminPanel = () => {
  const [token] = useState(localStorage.getItem('adminToken') || '');
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [compactView, setCompactView] = useState(false);
  const [activeTab, setActiveTab] = useState('registrations');
  
  // Live Points State
  const [livePoints, setLivePoints] = useState({
    tournamentPoints: [],
    bestBatsmen: [],
    bestBowlers: []
  });
  
  const navigate = useNavigate();

  const fetchRegs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setRegistrations(data);
        setFilteredRegistrations(data);
      } else {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load live points from localStorage
  const loadLivePoints = () => {
    const savedPoints = localStorage.getItem('livePoints');
    if (savedPoints) {
      setLivePoints(JSON.parse(savedPoints));
    } else {
      // Initialize with default data
      const defaultData = {
        tournamentPoints: [
          { 
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
            team: 'UP Challengers', 
            logo: '🔥', 
            color: 'from-green-600 to-green-800',
            matches: 4, 
            wins: 0, 
            losses: 4, 
            points: 0, 
            runRate: '-1.85' 
          },
        ],
        bestBatsmen: [
          { 
            id: 1,
            name: 'Rajesh Kumar', 
            team: 'Durjanpur Warriors', 
            logo: '🏏',
            color: 'from-blue-600 to-blue-800',
            runs: 245, 
            average: 61.25 
          },
          { 
            id: 2,
            name: 'Amit Singh', 
            team: 'Ballia Blazers', 
            logo: '⚡',
            color: 'from-yellow-500 to-orange-600',
            runs: 198, 
            average: 49.5 
          },
          { 
            id: 3,
            name: 'Suresh Yadav', 
            team: 'Nai Basti Knights', 
            logo: '⚔️',
            color: 'from-purple-600 to-purple-800',
            runs: 176, 
            average: 44.0 
          },
          { 
            id: 4,
            name: 'Vikash Gupta', 
            team: 'Bairia Bullets', 
            logo: '🎯',
            color: 'from-red-600 to-red-800',
            runs: 165, 
            average: 41.25 
          },
          { 
            id: 5,
            name: 'Ravi Sharma', 
            team: 'UP Challengers', 
            logo: '🔥',
            color: 'from-green-600 to-green-800',
            runs: 132, 
            average: 33.0 
          },
        ],
        bestBowlers: [
          { 
            id: 1,
            name: 'Mohan Prasad', 
            team: 'Ballia Blazers', 
            logo: '⚡',
            color: 'from-yellow-500 to-orange-600',
            wickets: 12, 
            average: 8.5 
          },
          { 
            id: 2,
            name: 'Deepak Verma', 
            team: 'Durjanpur Warriors', 
            logo: '🏏',
            color: 'from-blue-600 to-blue-800',
            wickets: 10, 
            average: 9.2 
          },
          { 
            id: 3,
            name: 'Santosh Kumar', 
            team: 'Nai Basti Knights', 
            logo: '⚔️',
            color: 'from-purple-600 to-purple-800',
            wickets: 9, 
            average: 10.8 
          },
          { 
            id: 4,
            name: 'Ajay Singh', 
            team: 'Bairia Bullets', 
            logo: '🎯',
            color: 'from-red-600 to-red-800',
            wickets: 8, 
            average: 12.0 
          },
          { 
            id: 5,
            name: 'Ramesh Yadav', 
            team: 'UP Challengers', 
            logo: '🔥',
            color: 'from-green-600 to-green-800',
            wickets: 6, 
            average: 15.3 
          },
        ]
      };
      setLivePoints(defaultData);
      localStorage.setItem('livePoints', JSON.stringify(defaultData));
    }
  };

  // Save live points to localStorage
  const saveLivePoints = (newPoints) => {
    setLivePoints(newPoints);
    localStorage.setItem('livePoints', JSON.stringify(newPoints));
  };

  useEffect(() => {
    if (token) {
      fetchRegs();
      loadLivePoints();
    } else {
      navigate('/admin/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    let filtered = registrations;
    
    if (searchTerm) {
      filtered = filtered.filter(reg => 
        (reg.teamName && reg.teamName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reg.captain && reg.captain.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reg.email && reg.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reg.phone && reg.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reg.viceCaptain && reg.viceCaptain.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reg.city && reg.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reg.state && reg.state.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(reg => reg.category === filterCategory);
    }
    
    setFilteredRegistrations(filtered);
    setCurrentPage(1);
  }, [searchTerm, filterCategory, registrations]);

  const saveChanges = async (id, updatedData) => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      });
      fetchRegs();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const exportData = () => {
    const headers = ['Team Name', 'Category', 'Ground', 'Founded', 'Captain', 'Phone', 'Email', 'Vice Captain', 'Address', 'City', 'State', 'Pincode', 'Players'];
    
    const csvData = [
      headers,
      ...filteredRegistrations.map(reg => [
        reg.teamName || '',
        reg.category || '',
        reg.ground || '',
        reg.founded || '',
        reg.captain || '',
        reg.phone || '',
        reg.email || '',
        reg.viceCaptain || '',
        reg.address || '',
        reg.city || '',
        reg.state || '',
        reg.pincode || '',
        reg.players ? reg.players.map(p => `${p.name} (${p.role})`).join('; ') : ''
      ])
    ];
    
    const csv = csvData.map(row => 
      row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cricket_registrations_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const categories = [...new Set(registrations.map(reg => reg.category).filter(Boolean))];
  const totalPages = Math.ceil(filteredRegistrations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRegistrations = filteredRegistrations.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="flex items-center gap-2">
                <Trophy className="w-8 h-8 text-green-600" />
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Cricket Admin</h1>
              </div>
              <div className="hidden sm:block text-sm text-gray-500">
                Tournament Management Dashboard
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{filteredRegistrations.length} Teams</span>
              </div>
              <button
                onClick={() => setCompactView(!compactView)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                title={compactView ? 'Expand View' : 'Compact View'}
              >
                {compactView ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-green-100 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('registrations')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'registrations'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Team Registrations
            </button>
            <button
              onClick={() => setActiveTab('livepoints')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'livepoints'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Trophy className="w-5 h-5 inline mr-2" />
              Live Points Management
            </button>
          </div>
        </div>

        {/* Team Registrations Tab */}
        {activeTab === 'registrations' && (
          <>
            {/* Controls */}
            <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 mb-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
                  {/* Search */}
                  <div className="relative flex-1 min-w-0">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search teams, captains, emails, phone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    >
                      <option value="all">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={fetchRegs}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                  >
                    <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                  <button
                    onClick={exportData}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center gap-2 text-gray-600">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Loading registrations...</span>
                  </div>
                </div>
              ) : filteredRegistrations.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No registrations found</h3>
                    <p className="text-gray-600">
                      {searchTerm || filterCategory !== 'all' 
                        ? 'Try adjusting your search or filter criteria.' 
                        : 'No team registrations available yet.'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-50 border-b border-green-100">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-700">Team</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Category</th>
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">Ground</th>}
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">Founded</th>}
                        <th className="text-left p-4 font-semibold text-gray-700">Captain</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Phone</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Email</th>
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">Vice Captain</th>}
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">Address</th>}
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">City</th>}
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">State</th>}
                        {!compactView && <th className="text-left p-4 font-semibold text-gray-700">Pincode</th>}
                        <th className="text-left p-4 font-semibold text-gray-700">Players</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRegistrations.map((reg) => (
                        <EditableRow 
                          key={reg._id} 
                          reg={reg} 
                          onSave={saveChanges}
                          compactView={compactView}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredRegistrations.length)} of {filteredRegistrations.length} teams
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <span className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Live Points Management Tab */}
        {activeTab === 'livepoints' && (
          <LivePointsManager 
            livePoints={livePoints} 
            saveLivePoints={saveLivePoints} 
          />
        )}
      </div>
    </div>
  );
};

// Live Points Manager Component
const LivePointsManager = ({ livePoints, saveLivePoints }) => {
  const [activeSection, setActiveSection] = useState('tournament');

  const addNewEntry = (section) => {
    const newEntry = {
      id: Date.now(),
      ...(section === 'tournament' ? {
        team: '',
        logo: '🏏',
        color: 'from-blue-600 to-blue-800',
        matches: 0,
        wins: 0,
        losses: 0,
        points: 0,
        runRate: '0.00'
      } : {
        name: '',
        team: '',
        logo: '🏏',
        color: 'from-blue-600 to-blue-800',
        ...(section === 'batsmen' ? { runs: 0, average: 0 } : { wickets: 0, average: 0 })
      })
    };

    const sectionKey = section === 'tournament' ? 'tournamentPoints' : 
                      section === 'batsmen' ? 'bestBatsmen' : 'bestBowlers';
    
    const updatedPoints = {
      ...livePoints,
      [sectionKey]: [...livePoints[sectionKey], newEntry]
    };
    
    saveLivePoints(updatedPoints);
  };

  const updateEntry = (section, id, field, value) => {
    const sectionKey = section === 'tournament' ? 'tournamentPoints' : 
                      section === 'batsmen' ? 'bestBatsmen' : 'bestBowlers';
    
    const updatedPoints = {
      ...livePoints,
      [sectionKey]: livePoints[sectionKey].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    };
    
    saveLivePoints(updatedPoints);
  };

  const deleteEntry = (section, id) => {
    const sectionKey = section === 'tournament' ? 'tournamentPoints' : 
                      section === 'batsmen' ? 'bestBatsmen' : 'bestBowlers';
    
    const updatedPoints = {
      ...livePoints,
      [sectionKey]: livePoints[sectionKey].filter(item => item.id !== id)
    };
    
    saveLivePoints(updatedPoints);
  };

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveSection('tournament')}
            className={`px-6 py-4 font-semibold transition-colors ${
              activeSection === 'tournament'
                ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Trophy className="w-5 h-5 inline mr-2" />
            Tournament Points
          </button>
          <button
            onClick={() => setActiveSection('batsmen')}
            className={`px-6 py-4 font-semibold transition-colors ${
              activeSection === 'batsmen'
                ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            Best Batsmen
          </button>
          <button
            onClick={() => setActiveSection('bowlers')}
            className={`px-6 py-4 font-semibold transition-colors ${
              activeSection === 'bowlers'
                ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Award className="w-5 h-5 inline mr-2" />
            Best Bowlers
          </button>
        </div>
      </div>

      {/* Tournament Points Section */}
      {activeSection === 'tournament' && (
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Tournament Points Table</h3>
            <button
              onClick={() => addNewEntry('tournament')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Team
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Team</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Logo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Color</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Matches</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Wins</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Losses</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Points</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Run Rate</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {livePoints.tournamentPoints.map((team) => (
                  <tr key={team.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <input
                        type="text"
                        value={team.team}
                        onChange={(e) => updateEntry('tournament', team.id, 'team', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={team.logo}
                        onChange={(e) => updateEntry('tournament', team.id, 'logo', e.target.value)}
                        className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={team.color}
                        onChange={(e) => updateEntry('tournament', team.id, 'color', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="from-blue-600 to-blue-800">Blue</option>
                        <option value="from-yellow-500 to-orange-600">Yellow</option>
                        <option value="from-purple-600 to-purple-800">Purple</option>
                        <option value="from-red-600 to-red-800">Red</option>
                        <option value="from-green-600 to-green-800">Green</option>
                        <option value="from-indigo-600 to-indigo-800">Indigo</option>
                        <option value="from-pink-600 to-pink-800">Pink</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={team.matches}
                        onChange={(e) => updateEntry('tournament', team.id, 'matches', parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={team.wins}
                        onChange={(e) => updateEntry('tournament', team.id, 'wins', parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={team.losses}
                        onChange={(e) => updateEntry('tournament', team.id, 'losses', parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={team.points}
                        onChange={(e) => updateEntry('tournament', team.id, 'points', parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={team.runRate}
                        onChange={(e) => updateEntry('tournament', team.id, 'runRate', e.target.value)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="+1.25"
                      />
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteEntry('tournament', team.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Best Batsmen Section */}
      {activeSection === 'batsmen' && (
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Best Batsmen</h3>
            <button
              onClick={() => addNewEntry('batsmen')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Batsman
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Name</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Team</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Logo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Color</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Runs</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Average</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {livePoints.bestBatsmen.map((player) => (
                  <tr key={player.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) => updateEntry('batsmen', player.id, 'name', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={player.team}
                        onChange={(e) => updateEntry('batsmen', player.id, 'team', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={player.logo}
                        onChange={(e) => updateEntry('batsmen', player.id, 'logo', e.target.value)}
                        className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={player.color}
                        onChange={(e) => updateEntry('batsmen', player.id, 'color', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="from-blue-600 to-blue-800">Blue</option>
                        <option value="from-yellow-500 to-orange-600">Yellow</option>
                        <option value="from-purple-600 to-purple-800">Purple</option>
                        <option value="from-red-600 to-red-800">Red</option>
                        <option value="from-green-600 to-green-800">Green</option>
                        <option value="from-indigo-600 to-indigo-800">Indigo</option>
                        <option value="from-pink-600 to-pink-800">Pink</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={player.runs}
                        onChange={(e) => updateEntry('batsmen', player.id, 'runs', parseInt(e.target.value) || 0)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        step="0.01"
                        value={player.average}
                        onChange={(e) => updateEntry('batsmen', player.id, 'average', parseFloat(e.target.value) || 0)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteEntry('batsmen', player.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Best Bowlers Section */}
      {activeSection === 'bowlers' && (
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Best Bowlers</h3>
            <button
              onClick={() => addNewEntry('bowlers')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Bowler
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Name</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Team</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Logo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Color</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Wickets</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Average</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {livePoints.bestBowlers.map((player) => (
                  <tr key={player.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) => updateEntry('bowlers', player.id, 'name', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={player.team}
                        onChange={(e) => updateEntry('bowlers', player.id, 'team', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={player.logo}
                        onChange={(e) => updateEntry('bowlers', player.id, 'logo', e.target.value)}
                        className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={player.color}
                        onChange={(e) => updateEntry('bowlers', player.id, 'color', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="from-blue-600 to-blue-800">Blue</option>
                        <option value="from-yellow-500 to-orange-600">Yellow</option>
                        <option value="from-purple-600 to-purple-800">Purple</option>
                        <option value="from-red-600 to-red-800">Red</option>
                        <option value="from-green-600 to-green-800">Green</option>
                        <option value="from-indigo-600 to-indigo-800">Indigo</option>
                        <option value="from-pink-600 to-pink-800">Pink</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={player.wickets}
                        onChange={(e) => updateEntry('bowlers', player.id, 'wickets', parseInt(e.target.value) || 0)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        step="0.01"
                        value={player.average}
                        onChange={(e) => updateEntry('bowlers', player.id, 'average', parseFloat(e.target.value) || 0)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteEntry('bowlers', player.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Live Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Live Preview (How it appears on Home Page)</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-4">This is how the data will appear on your home page:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Tournament Points Preview */}
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold mb-2 flex items-center">
                <Trophy className="w-4 h-4 mr-1" />
                Points Table
              </h4>
              {livePoints.tournamentPoints.slice(0, 3).map((team, index) => (
                <div key={team.id} className="flex justify-between items-center py-1">
                  <span className="flex items-center">
                    <span className="mr-1">{team.logo}</span>
                    <span className="truncate">{team.team}</span>
                  </span>
                  <span className="font-bold">{team.points}</span>
                </div>
              ))}
            </div>

            {/* Best Batsmen Preview */}
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold mb-2 flex items-center">
                <Target className="w-4 h-4 mr-1" />
                Top Batsmen
              </h4>
              {livePoints.bestBatsmen.slice(0, 3).map((player, index) => (
                <div key={player.id} className="flex justify-between items-center py-1">
                  <span className="flex items-center">
                    <span className="mr-1">{player.logo}</span>
                    <span className="truncate">{player.name}</span>
                  </span>
                  <span className="font-bold">{player.runs}</span>
                </div>
              ))}
            </div>

            {/* Best Bowlers Preview */}
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold mb-2 flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Top Bowlers
              </h4>
              {livePoints.bestBowlers.slice(0, 3).map((player, index) => (
                <div key={player.id} className="flex justify-between items-center py-1">
                  <span className="flex items-center">
                    <span className="mr-1">{player.logo}</span>
                    <span className="truncate">{player.name}</span>
                  </span>
                  <span className="font-bold">{player.wickets}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditableRow = ({ reg, onSave, compactView }) => {
  const [data, setData] = useState(reg);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const excludedKeys = ['_id', 'razorpay_payment_id', 'razorpay_order_id', 'razorpay_signature', 'amountPaid', 'createdAt', '__v'];
  const editableFields = Object.keys(data).filter(key => !excludedKeys.includes(key) && key !== 'players');

  const handleChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handlePlayerChange = (i, field, value) => {
    const updatedPlayers = [...(data.players || [])];
    if (updatedPlayers[i]) {
      updatedPlayers[i][field] = value;
      setData(prev => ({ ...prev, players: updatedPlayers }));
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await onSave(reg._id, data);
      setEditing(false);
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setData(reg);
  };

  const fieldsToShow = compactView 
    ? editableFields.filter(key => ['teamName', 'category', 'captain', 'phone', 'email'].includes(key))
    : editableFields;

  return (
    <tr className="border-b border-gray-100 hover:bg-green-50/50 transition-colors">
      {fieldsToShow.map((key) => (
        <td key={key} className="p-4 align-top">
          {editing ? (
            <input
              type="text"
              value={data[key] || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          ) : (
            <div className="text-sm text-gray-900 break-words">
              {data[key] || ''}
            </div>
          )}
        </td>
      ))}

      <td className="p-4 align-top">
        {editing ? (
          <div className="space-y-2">
            {(data.players || []).map((player, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-2">
                <input
                  value={player.name || ''}
                  onChange={(e) => handlePlayerChange(i, 'name', e.target.value)}
                  placeholder="Player Name"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <input
                  value={player.role || ''}
                  onChange={(e) => handlePlayerChange(i, 'role', e.target.value)}
                  placeholder="Role"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs space-y-1 max-w-xs">
            {(data.players || []).map((p, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-900">{p.name}</span>
                <span className="text-gray-500">({p.role})</span>
              </div>
            ))}
          </div>
        )}
      </td>

      <td className="p-4 align-top">
        {editing ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 transition-colors text-sm"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            <Edit3 className="w-4 h-4" />
            Edit
          </button>
        )}
      </td>
    </tr>
  );
};

export default AdminPanel;