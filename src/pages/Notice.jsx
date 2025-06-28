import React from 'react';
import { Download, FileText, Calendar, Medal, Bell, ExternalLink, Star, Trophy, Clock, MapPin, Users } from 'lucide-react';

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: 'Tournament Rules and Regulations 2026',
      date: '2024-01-15',
      description: 'Complete set of rules and regulations for the MSJ Champions Trophy 2026.',
      downloadUrl: 'https://drive.google.com/file/d/1QgaJgiJoC1Y_98BAmlcnspnLEYSIXi5P/view?usp=sharing',
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'Player Registration Guidelines',
      date: '2024-01-10',
      description: 'Detailed guidelines for player registration, eligibility criteria, and required documents.',
      downloadUrl: 'https://drive.google.com/file/d/1QgaJgiJoC1Y_98BAmlcnspnLEYSIXi5P/view?usp=sharing',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Tournament Schedule 2026',
      date: '2024-01-05',
      description: 'Complete tournament schedule with match timings, venues, and team fixtures.',
      downloadUrl: 'https://drive.google.com/file/d/1QgaJgiJoC1Y_98BAmlcnspnLEYSIXi5P/view?usp=sharing',
      size: '1.2 MB'
    },
    // {
    //   id: 4,
    //   title: 'Code of Conduct',
    //   date: '2024-01-01',
    //   description: 'Code of conduct for players, team officials, and spectators during the tournament.',
    //   downloadUrl: 'https://drive.google.com/drive/folders/your-folder-id-here',
    //   size: '900 KB'
    // }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Registration Extended',
      date: '2024-01-20',
      message: 'Team registration deadline has been extended to January 30, 2026.',
      type: 'important'
    },
    {
      id: 2,
      title: 'Venue Inspection',
      date: '2024-01-18',
      message: 'Ground inspection scheduled for January 25, 2026. All team captains invited.',
      type: 'info'
    },
    {
      id: 3,
      title: 'Prize Distribution',
      date: '2024-01-16',
      message: 'Prize money details and distribution ceremony information updated for 2026 tournament.',
      type: 'success'
    }
  ];

  // Upcoming tournament data - 2026 only
  const upcomingTournament = {
    id: 1,
    title: 'MSJ Champions Trophy 2026',
    date: '2026-02-15',
    endDate: '2026-02-28',
    status: 'upcoming',
    description: 'The biggest cricket tournament of the year is coming back with more excitement and bigger prizes! This is your chance to be part of cricket history.',
    features: ['Increased Prize Money', '32 Teams Participation',  'Professional Commentary', 'Digital Scoreboard', 'Player Statistics'],
    registrationDeadline: '2026-01-15',
    venue: 'Koyla Veer Baba Cricket Ground, Ballia',
    prizePool: '₹51,000',
    registrationFee: '₹5100 per team',
    maxTeams: 10,
    runnerUpTeam: '₹21,000',
    categories: ['Open Category', 'No minimum and maximum age required'],
    eligibility: [
      'Team must have minimum 11 players and maximum 15 players',
      'Team name and captain details',
      'A valid ID proof (Like Aadhar card, Pan Card etc.)',
      'Contact Information(Like Email, Mobie no. etc.)',
      'Registration Fee Payment & Confirmation(Mandatory)',
    ]
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getAnnouncementColor = (type) => {
    switch (type) {
      case 'important':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Bell className="h-16 w-16 mx-auto mb-6 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notice Board
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tournament notifications, rules, and important documents
          </p>
        </div>

        {/* MSJ Champions Trophy 2026 Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Star className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MSJ Champions Trophy 2026
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most prestigious cricket tournament is back! Don't miss your chance to register
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{upcomingTournament.title}</h3>
                  <span className="px-4 py-2 rounded-full text-sm font-medium border bg-green-100 text-green-800 border-green-200">
                    Upcoming
                  </span>
                </div>
                <p className="text-blue-100 mb-6 text-lg">{upcomingTournament.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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

                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl">Categories</h4>
                    <ul className="space-y-3">
                      {upcomingTournament.categories.map((category, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-600">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>{category}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Tournament Features</h5>
                      <ul className="space-y-2">
                        {upcomingTournament.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl">Eligibility Criteria</h4>
                    <ul className="space-y-3">
                      {upcomingTournament.eligibility.map((criteria, index) => (
                        <li key={index} className="flex items-start space-x-3 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span>{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="h-6 w-6 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800 text-lg">Important Deadline</h4>
                  </div>
                  <p className="text-yellow-800">
                    <strong>Registration Deadline: {formatDate(upcomingTournament.registrationDeadline)}</strong>
                  </p>
                  <p className="text-yellow-700 text-sm mt-2">
                    Don't wait! Limited spots available. Register your team now to secure your place in the championship.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                  >
                    Register Your Team Now
                  </a>
                  <button
                    onClick={() => handleDownload('https://drive.google.com/file/d/1QgaJgiJoC1Y_98BAmlcnspnLEYSIXi5P/view?usp=sharing')}
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center text-lg flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Forms
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Drive Access Section */}
        {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Documents Repository</h2>
            <p className="text-gray-700 mb-6">
              Access all official tournament documents, forms, and notices from our Google Drive folder
            </p>
            <a
              href="https://drive.google.com/drive/folders/your-main-folder-id-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Access Google Drive Folder
            </a>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Announcements</h2>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`p-4 rounded-lg border ${getAnnouncementColor(announcement.type)} shadow-lg`}
                >
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{announcement.title}</h3>
                      <p className="text-sm mb-2">{announcement.message}</p>
                      <div className="flex items-center space-x-2 text-xs">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(announcement.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Documents */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Official Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{notice.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{notice.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(notice.date)}</span>
                          </div>
                          <span>{notice.size}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload(notice.downloadUrl)}
                        className="mt-4 inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 w-full justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Bell className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700 leading-relaxed">
                All team captains are requested to download and read the tournament rules and regulations 
                carefully. Any queries regarding the MSJ Champions Trophy 2026 should be directed to the organizing committee 
                through the contact information provided in the contact page. All documents are also available 
                in our Google Drive folder for easy access.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Queries */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions About MSJ Champions Trophy 2026?</h2>
            <p className="text-lg mb-6">
              For any queries regarding the tournament notices or documents, please contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Sudhir Gond:</span>
                <a href="tel:9120186401" className="hover:underline">9120186401</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Shakti Singh Yadav:</span>
                <a href="tel:6307326892" className="hover:underline">6307326892</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;