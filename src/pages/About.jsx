import React from 'react';
import { Trophy, Heart, Target, Users } from 'lucide-react';

const About = () => {
  const organizers = [
    { name: 'Yogendra Prasad Verma',  img: '/images/MainOrganizers/YogendraPrasadVerma.jpg' },
    { name: 'Jaishankar Prasad Bhagat Ji',  img: '/images/MainOrganizers/JaishankarPrasadBhagatJi.jpg' },
    { name: 'Rakesh Gond',  img: '/images/MainOrganizers/RakeshGond.jpg'  },
    { name: 'Vivek Yadav',  img: '/images//MainOrganizers/VivekYadav.jpg'  },
    { name: 'Mandhata Ojha',  img: '/images/MainOrganizers/MandhataOjha.jpg'  },
    { name: 'Ritesh Yadav',  img: '/images/MainOrganizers/RiteshYadav.jpg'  },
    { name: 'Sumit Verma',  img: '/images/MainOrganizers/SumitVerma.jpg'  },
    { name: 'Vindhyachal Gupta',  img: '/images/MainOrganizers/VindhyachalGupta.jpg'  },
    { name: 'Laxman Sharma Ji',  img: '/images/MainOrganizers/LaxmanSharmaJi.jpg'  }
  ];

  const committeeMembers = [
    { name: 'Sudhir Gond', role: 'President', photo: '/images/OrganizingCommitteeMembers/sudhirgond.jpg' },
    { name: 'Arun Yadav', role: 'Vice President', photo: '/images/OrganizingCommitteeMembers/ArunYadav.jpg' },
    { name: 'Appu Yadav', role: 'Vice President', photo: '/images/OrganizingCommitteeMembers/AppuYadav.jpg' },
    { name: 'Shakti Singh Yadav', role: 'Treasurer', photo: '/images/OrganizingCommitteeMembers/ShaktiSinghYadav.jpg'},
    { name: 'Ranjan Verma', role: 'Treasurer', photo: '/images/OrganizingCommitteeMembers/RanjanVerma.jpg' },
    { name: 'Yashvendra Pratap Singh', role: 'Secretary', photo: '/images/OrganizingCommitteeMembers/YashvendraPratapSingh.jpg' },
    { name: 'Golu Gond (Bagha)', role: 'General Secretary', photo: '/images/OrganizingCommitteeMembers/GoluGond.jpg' },
    
  ];

   const technicalSupport = [
    { name: 'Sumit Prasad', role: 'Developer', photo: '/images/technicalSupport/SumitPrasad.jpg' },
    { name: 'Akash Kumar Sinha',  role: 'Developer',photo: '/images/technicalSupport/AkashKumarSinha.jpg' },
    { name: 'Sohom Roy', role: 'Developer', photo: '/images/technicalSupport/SohomRoy.jpg' },
  ];

  const objectives = [
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Promote Rural Talents',
      description: 'To bring forth hidden talents from rural areas and provide them with a platform to showcase their skills.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Develop Leadership',
      description: 'To develop leadership, discipline, and self-confidence among young players through sports.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Social Harmony',
      description: 'To spread social harmony and positive energy through sports and community engagement.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-yellow-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Maa Shayar Jagdamba Champions Trophy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A prestigious cricket tournament dedicated to promoting rural sports talents and community values
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The "Maa Shayar Jagdamba Champions Trophy" is a prestigious cricket tournament organized with the 
              objective of providing a strong platform to rural sports talents. This tournament is being conducted 
              by the Maa Shayar Jagdamba Seva Sansthan (Service Organization).
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This tournament is dedicated to the sacred memory of Mukhdev Bhagat Ji, whose lifelong dedication 
              to social service, cultural values, and selfless devotion has always been a source of inspiration. 
              His life stands as an ideal for the younger generation, and this tournament aims to carry forward that spirit.
            </p>
          </div>
        </div>

        {/* In Sacred Memory Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">In Sacred Memory</h2>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-300 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/MukhdevBhagatJi.png"
                  alt="Mukhdev Bhagat Ji"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mukhdev Bhagat Ji</h3>
              <p className="text-lg text-gray-700 max-w-2xl text-center">
                Dedicated to his sacred memory, whose lifelong dedication to social service, cultural values, 
                and selfless devotion has always been a source of inspiration for the younger generation.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Organizers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Main Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                    {/* changes */}
                  <img src={organizer.img} alt={organizer.name} className="w-full h-full object-cover" />                
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{organizer.name}</h3>
                    <p className="text-sm text-gray-600">{organizer.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
    Organizing Committee Members
  </h2>
  <div className="flex flex-wrap justify-center gap-4">
    {committeeMembers.map((member, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 lg:w-1/5"
      >
        <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    ))}
  </div>
</div>


        {/* Technical Support */}
        <div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Support</h2>
  <div className="flex flex-wrap justify-center gap-4">
    {technicalSupport.map((member, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 lg:w-1/5"
      >
        <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    ))}
  </div>
</div>

        {/* Venue Information */}
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Tournament Venue</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Koyla Veer Baba Stadium</h3>
              <p className="text-lg mb-4">Durjanpur (Nai Basti), Ballia (Uttar Pradesh)</p>
              <p className="text-lg">
                This venue is not only a hub for local sports enthusiasts but also symbolizes 
                a confluence of sports, culture, and traditional values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;