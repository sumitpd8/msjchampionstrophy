import React, { useState } from 'react';
import { X, Image  } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      url: '/images/Gallary/01.jpg',
      thumbnail: '/images/Gallary/01.jpg',
      title: 'Tournament Opening Ceremony',
      category: 'ceremony'
    },
    {
      id: 2,
      type: 'image',
      url: '/images/Gallary/03.jpg',
      thumbnail: '/images/Gallary/03.jpg',
      title: 'Cricket Ground View',
      category: 'venue'
    },
    // {
    //   id: 3,
    //   type: 'video',
    //   url: 'https://player.vimeo.com/video/123456791',
    //   thumbnail: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   title: 'Match Highlights - Final',
    //   category: 'match'
    // },
    {
      id: 4,
      type: 'image',
      url: '/images/Gallary/06.jpg',
      thumbnail: '/images/Gallary/06.jpg',
      title: 'Prize',
      category: 'Player'
    },
    {
      id: 5,
      type: 'image',
      url:  '/images/Gallary/ChiefGuest.jpg',
      thumbnail:  '/images/Gallary/ChiefGuest.jpg',
      title: 'Chief Guests Arrival',
      category: 'ceremony'
    },
    // {
    //   id: 6,
    //   type: 'video',
    //   url: 'https://player.vimeo.com/video/123456790',
    //   thumbnail: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   title: 'Tournament Promo Video',
    //   category: 'promotional'
    // },
    {
      id: 7,
      type: 'image',
      url: '/images/Gallary/08.jpg',
      thumbnail: '/images/Gallary/08.jpg',
      // title: '',
      // category: ''
    },
    {
      id: 8,
      type: 'image',
      url:  '/images/Gallary/VictoryCelebration.jpg',
      thumbnail:  '/images/Gallary/VictoryCelebration.jpg',
      title: 'Victory Celebration',
      category: 'ceremony'
    },
    // {
    //   id: 9,
    //   type: 'video',
    //   url: 'https://player.vimeo.com/video/123456791',
    //   thumbnail: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   title: 'Behind the Scenes',
    //   category: 'behind-scenes'
    // },
    {
      id: 10,
      type: 'image',
      url: '/images/Gallary/09.jpg',
      thumbnail: '/images/Gallary/09.jpg',
      title: 'Player Action Shot',
      category: 'match'
    },
    {
      id: 11,
      type: 'image',
      url: '/images/Gallary/11.jpg',
      thumbnail: '/images/Gallary/11.jpg',
      // title: 'Crowd Cheering',
      // category: 'crowd'
    },
    {
      id: 12,
      type: 'image',
      url: '/images/Gallary/12.jpg',
      thumbnail: '/images/Gallary/12.jpg',
      // title: 'Award Ceremony',
      // category: 'ceremony'
    }
  ];

  const tabs = [
    { id: 'all', name: 'All Media', count: mediaItems.length },
    { id: 'image', name: 'Photos', count: mediaItems.filter(item => item.type === 'image').length },
    // { id: 'video', name: 'Videos', count: mediaItems.filter(item => item.type === 'video').length }
  ];

  const filteredMedia = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeTab);

  const openMedia = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tournament Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the excitement and moments from the Maa Shayar Jagdamba Champions Trophy
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              } shadow-md`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => openMedia(media)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  {media.type === 'video' ? (
                    <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : (
                    <Image className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  {media.type === 'video' ? (
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      <Video className="h-3 w-3 inline mr-1" />
                      Video
                    </div>
                  ) : (
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      <Image className="h-3 w-3 inline mr-1" />
                      Photo
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {media.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeMedia}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>
              
              {selectedMedia.type === 'video' ? (
                <div className="bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={selectedMedia.url}
                    className="w-full h-64 sm:h-96 lg:h-[500px]"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={selectedMedia.title}
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
              
              <div className="text-white text-center mt-4">
                <h3 className="text-lg font-semibold">{selectedMedia.title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Share Your Photos?</h2>
          <p className="text-lg mb-6">
            If you have photos or videos from the tournament, we'd love to feature them in our gallery!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;