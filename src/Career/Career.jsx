import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Award, Coffee, Music, Gamepad2, BookOpen, Target } from 'lucide-react';

const JobCard = ({ title, location, type, department, description, requirements }) => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  return (
    <div className="group bg-white rounded-2xl p-6 border-2 border-green-100 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-200 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              {department}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              {type}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-green-600 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{type}</span>
            </div>
          </div>
        </div>
        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Briefcase className="w-7 h-7 text-white" />
        </div>
      </div>
     
      <p className="text-green-700 mb-4 leading-relaxed">{description}</p>
     
      {isExpanded && (
        <div className="mb-4 p-4 bg-green-50 rounded-xl border border-green-200 animate-fadeIn">
          <h4 className="font-semibold text-green-800 mb-2">Requirements:</h4>
          <ul className="space-y-1 text-green-700 text-sm">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
     
      <div className="flex gap-3">
        <button
          onClick={() => window.open('https://forms.gle/climeto-apply', '_blank')}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-green-300 hover:shadow-xl hover:shadow-green-400"
        >
          Apply Now
        </button>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3 bg-green-100 text-green-700 rounded-full font-semibold hover:bg-green-200 transition-all duration-300"
        >
          {isExpanded ? 'Less' : 'More'}
        </button>
      </div>
    </div>
  );
};

const InternshipCard = ({ title, duration, stipend, spots, skills }) => (
  <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-200 hover:scale-[1.02] group">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Target className="w-6 h-6 text-white" />
      </div>
      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
        {spots} spots
      </span>
    </div>
   
    <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors">
      {title}
    </h3>
   
    <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2 text-green-600 text-sm">
        <Clock className="w-4 h-4" />
        <span>{duration}</span>
      </div>
      <div className="flex items-center gap-2 text-green-600 text-sm">
        <Award className="w-4 h-4" />
        <span>{stipend}</span>
      </div>
    </div>
   
    <div className="mb-4">
      <p className="text-xs font-semibold text-green-700 mb-2">Skills needed:</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-2 py-1 bg-white text-green-600 rounded-lg text-xs border border-green-200">
            {skill}
          </span>
        ))}
      </div>
    </div>
   
    <button
      onClick={() => window.open('https://forms.gle/climeto-intern-apply', '_blank')}
      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-300"
    >
      Apply for Internship
    </button>
  </div>
);

const TestimonialCard = ({ name, role, image, quote }) => (
  <div className="bg-white rounded-2xl p-6 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-green-800">{name}</h4>
        <p className="text-green-600 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-green-700 italic leading-relaxed">"{quote}"</p>
  </div>
);

const PerkCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105">
    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-green-800 mb-1">{title}</h4>
      <p className="text-green-600 text-sm">{description}</p>
    </div>
  </div>
);

const CulturePhoto = ({ imageUrl, caption }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700">
        <img
          src={imageUrl}
          alt={caption}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex items-end transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-white font-semibold p-4">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default function ClimetoCareers() {
  const jobs = [
    {
      title: "Sustainability Project Manager",
      location: "Indore, India / Remote",
      type: "Full-time",
      department: "Operations",
      description: "Lead climate action projects from ideation to execution. Coordinate with NGOs, corporate partners, and communities.",
      requirements: [
        "3+ years in project management or sustainability",
        "Strong communication and leadership skills",
        "Experience with environmental initiatives",
        "Passion for climate action"
      ]
    },
    {
      title: "Content Creator & Social Media Manager",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      description: "Create engaging climate content across Instagram, YouTube, and LinkedIn. Drive community engagement and brand awareness.",
      requirements: [
        "2+ years in content creation or social media",
        "Strong video editing and graphic design skills",
        "Understanding of sustainability topics",
        "Creative storytelling ability"
      ]
    },
    {
      title: "Environmental Research Analyst",
      location: "Indore, India",
      type: "Full-time",
      department: "Research",
      description: "Conduct climate research, analyze environmental data, and produce reports to inform our initiatives and strategies.",
      requirements: [
        "Degree in Environmental Science or related field",
        "Strong analytical and research skills",
        "Experience with data analysis tools",
        "Excellent written communication"
      ]
    },
    {
      title: "Community Engagement Coordinator",
      location: "Indore, India",
      type: "Full-time",
      department: "Community",
      description: "Build relationships with local communities, organize workshops, and drive grassroots climate action initiatives.",
      requirements: [
        "Experience in community organizing",
        "Strong interpersonal skills",
        "Passion for environmental education",
        "Local language proficiency"
      ]
    }
  ];

  const internships = [
    {
      title: "Social Media Intern",
      duration: "3-6 months",
      stipend: "₹5,000-10,000/month",
      spots: "3",
      skills: ["Content Creation", "Canva", "Instagram", "Copywriting"]
    },
    {
      title: "Research Intern",
      duration: "3-6 months",
      stipend: "₹8,000-12,000/month",
      spots: "2",
      skills: ["Research", "Data Analysis", "Excel", "Writing"]
    },
    {
      title: "Graphic Design Intern",
      duration: "3-6 months",
      stipend: "₹6,000-10,000/month",
      spots: "2",
      skills: ["Illustrator", "Photoshop", "Design", "Creativity"]
    },
    {
      title: "Video Editing Intern",
      duration: "3-6 months",
      stipend: "₹7,000-12,000/month",
      spots: "2",
      skills: ["Premiere Pro", "After Effects", "Editing", "Storytelling"]
    },
    {
      title: "Campus Ambassador",
      duration: "6-12 months",
      stipend: "Performance-based",
      spots: "10",
      skills: ["Leadership", "Communication", "Marketing", "Networking"]
    },
    {
      title: "Content Writing Intern",
      duration: "3-6 months",
      stipend: "₹5,000-8,000/month",
      spots: "3",
      skills: ["Writing", "SEO", "Research", "Creativity"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Project Manager",
      quote: "Working at Climeto isn't just a job—it's a purpose. Every day I know I'm contributing to real climate action."
    },
    {
      name: "Rahul Verma",
      role: "Content Creator",
      quote: "The creative freedom here is incredible. We're encouraged to experiment and push boundaries in climate storytelling."
    },
    {
      name: "Ananya Patel",
      role: "Research Analyst",
      quote: "The team's passion is contagious. We're not just colleagues; we're a community working towards a common mission."
    }
  ];

  const culturePhotos = [
    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      caption: "Team brainstorming sessions"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
      caption: "Workshops and learning"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600",
      caption: "Field visits and projects"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
      caption: "Team celebrations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
       
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
       
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
       
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
       
        <div className="w-full px-4 md:px-8 lg:px-12 mx-auto relative z-10">
          <div className="text-center mb-8 opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                🌱 Join Our Mission
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Career in <span className="text-green-200">Climeto</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Join a mission-driven team shaping a sustainable future.
            </p>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              We're always looking for passionate individuals ready to make an impact.
            </p>
          </div>
         
          <div className="flex justify-center gap-6 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80 text-sm">Team Members</div>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Open Positions</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Jobs and Internships */}
          <div className="lg:col-span-2 space-y-16">
            {/* Jobs Section */}
            <div className="opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-green-800">Open Positions</h2>
                  <p className="text-green-600">Full-time opportunities to grow with us</p>
                </div>
              </div>
             
              <div className="space-y-6">
                {jobs.map((job, idx) => (
                  <JobCard key={idx} {...job} />
                ))}
              </div>
            </div>

            {/* Internships Section */}
            <div className="opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-green-800">Internships</h2>
                  <p className="text-green-600">Kickstart your sustainability career</p>
                </div>
              </div>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internships.map((internship, idx) => (
                  <InternshipCard key={idx} {...internship} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Life at Climeto */}
          <div className="lg:col-span-1 space-y-8 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1s forwards' }}>
            <div className="sticky top-8">
              {/* Life at Climeto Header */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 mb-8 text-white shadow-xl">
                <Heart className="w-12 h-12 mb-4 animate-float" />
                <h2 className="text-3xl font-bold mb-2">Life at Climeto</h2>
                <p className="text-white/90">Where passion meets purpose, and work feels like a mission.</p>
              </div>

              {/* Perks */}
              <div className="bg-white rounded-3xl p-8 border-2 border-green-200 mb-8 shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Why Join Us?</h3>
                <div className="space-y-4">
                  <PerkCard
                    icon={Zap}
                    title="Flexible Work"
                    description="Remote options & flexible hours"
                  />
                  <PerkCard
                    icon={BookOpen}
                    title="Learning Budget"
                    description="Courses, conferences & workshops"
                  />
                  <PerkCard
                    icon={Coffee}
                    title="Team Activities"
                    description="Regular team outings & events"
                  />
                  <PerkCard
                    icon={Users}
                    title="Collaborative"
                    description="Work with passionate changemakers"
                  />
                </div>
              </div>

              {/* Culture Photos */}
              <div className="bg-white rounded-3xl p-8 border-2 border-green-200 mb-8 shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Our Culture</h3>
                <div className="grid grid-cols-2 gap-4">
                  {culturePhotos.map((photo, idx) => (
                    <CulturePhoto key={idx} {...photo} />
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-800 mb-4">What Our Team Says</h3>
                {testimonials.map((testimonial, idx) => (
                  <TestimonialCard key={idx} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1.2s forwards' }}>
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-12 shadow-2xl">
            <Users className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for climate action. Send us your resume and let's talk!
            </p>
            <button
              onClick={() => window.open('mailto:careers@climeto.com', '_blank')}
              className="px-8 py-4 bg-white text-green-700 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Send Us Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}