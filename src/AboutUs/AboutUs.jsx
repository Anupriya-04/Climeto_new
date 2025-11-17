import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Target, Eye, Heart, Users, Award, TrendingUp, Shield, BookOpen, Zap, Linkedin, ArrowDown, Sparkles, Globe, CircleDot } from 'lucide-react';
import Climetobanner1 from "../assets/images/Climetobanner1.jpg";
import a2 from "../assets/images/a2.jpg";
import a3 from "../assets/images/a3.jpg";
import a4 from "../assets/images/a4.jpeg";
import a5 from "../assets/images/a5.jpg";
import a6 from "../assets/images/a6.jpg";
import a7 from "../assets/images/a7.jpg";
import a8 from "../assets/images/a8.jpeg";
export default function ClimetoAboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeYear, setActiveYear] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      Object.keys(sectionRefs.current).forEach(key => {
        const element = sectionRefs.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [key]: isInView }));
        }
      });
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { icon: Heart, title: "Integrity in Impact", desc: "Creating environmental change that's real, measurable, and honest.", color: "from-green-400 to-emerald-500" },
    { icon: Zap, title: "Innovation with Intention", desc: "Finding smarter, scalable sustainability solutions.", color: "from-blue-400 to-sky-500" },
    { icon: Users, title: "Collaboration for Change", desc: "Collective effort drives greater environmental transformation.", color: "from-teal-400 to-cyan-500" },
    { icon: Shield, title: "Accountability Always", desc: "Taking responsibility for our actions, outcomes, and planet.", color: "from-lime-400 to-green-500" }
  ];

  const principles = [
    { icon: Eye, title: "Transparency in Process", desc: "Openness in communication, reporting, and relationships.", gradient: "from-sky-500 to-blue-600" },
    { icon: TrendingUp, title: "Data-Driven Sustainability", desc: "Solutions based on facts, analysis, and measurable impact.", gradient: "from-green-500 to-emerald-600" },
    { icon: BookOpen, title: "Continuous Learning", desc: "Adapting to new policies, science, and technologies.", gradient: "from-teal-500 to-cyan-600" },
    { icon: Award, title: "Empowerment Through Knowledge", desc: "Enabling better environmental choices through awareness.", gradient: "from-lime-500 to-green-600" },
    { icon: Leaf, title: "Resilience and Adaptability", desc: "Finding opportunity in every environmental challenge.", gradient: "from-emerald-500 to-teal-600" }
  ];

  const timeline = [
    { year: "2022", title: "The Beginning", desc: "Climeto was born with a mission to make sustainability measurable — not as a buzzword, but as a business metric.", icon: Sparkles },
    { year: "2023", title: "Rapid Growth", desc: "Our EPR expertise grew rapidly, expanding into Carbon and Plastic Credit Solutions.", icon: TrendingUp },
    { year: "2024", title: "Comprehensive Partner", desc: "Introduced advanced services in Carbon Footprinting, GHG Accounting, and CBAM Readiness.", icon: Globe },
    { year: "2025", title: "Milestone Achievement", desc: "100+ clients, 1 million+ credits transacted, growing presence across India and beyond.", icon: Award }
  ];

  const leaders = [
    { name: "Leadership Team", role: "Directors", linkedin: "#" },
    { name: "Leadership Team", role: "Directors", linkedin: "#" },
    { name: "Leadership Team", role: "Directors", linkedin: "#" }
  ];

  const partners = ["CPCB", "CII", "ISO", "Partner 1", "Partner 2", "Partner 3"];

  // Gallery images - Update these paths to match your image folder structure
  const galleryImages = [
    { src: Climetobanner1, alt: "Team Workshop", size: "tall" },
    { src: a2, alt: "Recycling Plant Visit", size: "normal" },
    { src: a3, alt: "Sustainability Seminar", size: "normal" },
    { src: a4, alt: "Community Engagement", size: "tall" },
    { src: a5, alt: "Green Initiative Launch", size: "normal" },
    { src: a6, alt: "Conference Participation", size: "tall" },
    { src: a7, alt: "Team Building Event", size: "tall" },
    { src: a8, alt: "Award Ceremony", size: "normal" }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-green-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl">
          <div className="mb-8 inline-block">
            <Leaf className="w-24 h-24 drop-shadow-2xl animate-bounce-slow" />
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 drop-shadow-lg animate-fade-in-up">
            About Climeto
          </h1>
          <p className="text-3xl md:text-4xl font-light mb-8 animate-fade-in-up-delay">
            Turning Data Into Impact
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up-delay-2 flex-wrap">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              100+ Clients
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              1M+ Credits
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              3+ Years
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </div>

      {/* Who We Are */}
      <section ref={el => sectionRefs.current['who'] = el} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible['who'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative group h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 opacity-80"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl h-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Leaf className="w-48 h-48 text-green-600 opacity-20" />
                  </div>
                </div>
                <Globe className="absolute top-20 right-20 w-12 h-12 text-teal-500 opacity-40 animate-float" />
                <Target className="absolute bottom-20 left-20 w-12 h-12 text-blue-500 opacity-40 animate-float" style={{animationDelay: '1s'}} />
                <Sparkles className="absolute top-1/2 left-20 w-10 h-10 text-green-400 opacity-30 animate-float" style={{animationDelay: '2s'}} />
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold inline-block">
                WHO WE ARE
              </span>
              <h2 className="text-6xl font-bold text-gray-900">
                Leading the Way in Sustainability
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Climeto is a leading sustainability consulting company dedicated to helping organizations take measurable climate action. We simplify the path to sustainability by turning data into impact.
                </p>
                <p>
                  Our expertise spans across <span className="text-green-600 font-semibold">carbon credits, plastic credits, EPR compliance, and footprinting services</span> — offering end-to-end sustainability solutions that drive real change.
                </p>
                <p>
                  We combine technology, compliance expertise, and on-ground partnerships to make sustainability achievable for every business.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-5 rounded-2xl shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-5 rounded-2xl shadow-md">
                  <div className="text-3xl font-bold text-teal-600 mb-1">1M+</div>
                  <div className="text-sm text-gray-600">Credits Traded</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 p-5 rounded-2xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3+</div>
                  <div className="text-sm text-gray-600">Years Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={el => sectionRefs.current['mvv'] = el} className="py-24 px-6 bg-gradient-to-b from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible['mvv'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {[
              { icon: Target, title: "Our Mission", desc: "To drive measurable, accountable sustainability by helping businesses integrate environmental responsibility into their core strategy through data, transparency, and technology.", color: "green" },
              { icon: Eye, title: "Our Vision", desc: "A future where every decision reflects climate responsibility and sustainability becomes a natural part of how businesses operate — turning accountability into culture and impact into legacy.", color: "teal" },
              { icon: Heart, title: "Our Values", desc: "The moral compass guiding every decision — integrity, innovation, collaboration, and accountability always.", color: "blue" }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2 border-t-4 ${item.color === 'green' ? 'border-green-500' : item.color === 'teal' ? 'border-teal-500' : 'border-blue-500'}`}>
                  <div className={`w-16 h-16 ${item.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' : item.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${isVisible['mvv'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {values.map((value, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={el => sectionRefs.current['timeline'] = el} className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold inline-block mb-6">
              OUR JOURNEY
            </span>
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Our Journey Towards Change
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Every change begins with a simple question — "What if sustainability could be measured, managed, and made achievable for every business?"
            </p>
          </div>
          
          <div className="relative">
            {timeline.map((item, idx) => (
              <div 
                key={idx}
                className={`mb-16 last:mb-0 transition-all duration-1000 ${isVisible['timeline'] ? 'opacity-100 translate-x-0' : `opacity-0 ${idx % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`}`}
                style={{transitionDelay: `${idx * 0.2}s`}}
                onMouseEnter={() => setActiveYear(item.year)}
                onMouseLeave={() => setActiveYear(null)}
              >
                <div className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl ${activeYear === item.year ? 'ring-4 ring-green-500 shadow-green-200' : ''} transition-all duration-500 group`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-5xl font-bold text-green-600 mb-2">
                            {item.year}
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex-shrink-0">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-4 border-white shadow-lg transition-all duration-300 ${activeYear === item.year ? 'scale-150' : ''}`}></div>
                    {idx < timeline.length - 1 && (
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-green-400 to-teal-400"></div>
                    )}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Directors */}
      <section ref={el => sectionRefs.current['message'] = el} className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['message'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group">
            <div className="relative bg-white p-12 md:p-16 rounded-3xl shadow-2xl border-l-8 border-amber-400">
              <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100">
                  <text x="10" y="80" fontSize="120" fill="rgb(251, 191, 36)" fontFamily="serif">"</text>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
                <svg viewBox="0 0 100 100">
                  <text x="10" y="80" fontSize="120" fill="rgb(251, 191, 36)" fontFamily="serif">"</text>
                </svg>
              </div>
              
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">Message from the Directors</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-serif">
                  <p className="text-amber-600 text-xl font-semibold">Dear Partners, Clients, and Changemakers,</p>
                  <p>
                    Climeto began with a simple purpose — to make sustainability measurable and meaningful. From our early work in plastic credits and EPR systems to advancing data-driven climate solutions, our journey has always been guided by one belief: real change begins with responsibility.
                  </p>
                  <p>
                    Over the years, we've helped organizations recover and recycle thousands of tonnes of plastic waste, supported worker livelihoods, and contributed to shaping sustainability practices at local and national levels.
                  </p>
                  <p>
                    Today, through our work in carbon credit trading, sustainability solutions, and global climate markets, we continue to empower businesses to turn environmental responsibility into measurable, lasting impact.
                  </p>
                  <p className="text-xl font-semibold text-gray-900">Together, we move toward a circular and climate-resilient future.</p>
                  <p className="mt-8 italic text-amber-700 text-xl">— The Directors, Climeto Sustainability Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section ref={el => sectionRefs.current['principles'] = el} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-4 py-2 bg-teal-100 border border-teal-300 rounded-full text-teal-700 text-sm font-semibold inline-block mb-6">
              HOW WE OPERATE
            </span>
            <h2 className="text-6xl font-bold text-gray-900">
              Our Principles
            </h2>
          </div>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible['principles'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {principles.map((principle, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-4 border-t-4 border-teal-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section ref={el => sectionRefs.current['leadership'] = el} className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold inline-block mb-6">
              MEET THE TEAM
            </span>
            <h2 className="text-6xl font-bold text-gray-900">
              Leadership Team
            </h2>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible['leadership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {leaders.map((leader, idx) => (
              <div key={idx} className="group relative">
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="bg-gradient-to-br from-green-100 to-teal-100 h-96 flex items-center justify-center">
                    <Users className="w-32 h-32 text-green-600 opacity-30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="text-white w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-green-300 mb-4 text-lg">{leader.role}</p>
                      <a href={leader.linkedin} className="inline-flex items-center gap-2 text-sm hover:text-green-300 transition-colors group/link">
                        <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section ref={el => sectionRefs.current['partners'] = el} className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-4 py-2 bg-cyan-100 border border-cyan-300 rounded-full text-cyan-700 text-sm font-semibold inline-block mb-6">
              TRUSTED BY THE BEST
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-gray-600 text-lg">Certified under recognized sustainability frameworks</p>
          </div>
          
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-1000 ${isVisible['partners'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {partners.map((partner, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col items-center justify-center border border-gray-100">
                  <Award className="w-12 h-12 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-gray-700 text-center">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Creative Carousel Style */}
      <section ref={el => sectionRefs.current['gallery'] = el} className="py-24 px-6 bg-gradient-to-b from-green-50 to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold inline-block mb-6">
              OUR STORY IN PICTURES
            </span>
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              Our Journey in Photos
            </h2>
            <p className="text-gray-600 text-lg">Moments that define our commitment to sustainability</p>
          </div>
          
          {/* Featured Large Image */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 items-center justify-center">
                <Leaf className="w-32 h-32 text-white opacity-30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-2xl">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full mb-4 inline-block">
                      FEATURED
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{galleryImages[0].alt}</h3>
                    <p className="text-white/90 text-lg">A milestone moment in our sustainability journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Cards Layout */}
          <div className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-200 ${isVisible['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {galleryImages.slice(1, 3).map((image, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-80"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-green-300 via-teal-300 to-blue-300 items-center justify-center">
                  <Leaf className="w-24 h-24 text-white opacity-30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{image.alt}</h4>
                    <div className="w-12 h-1 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid with Stagger Effect */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-400 ${isVisible['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {galleryImages.slice(3, 7).map((image, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-64"
                style={{
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 items-center justify-center">
                  <Leaf className="w-16 h-16 text-green-600 opacity-30" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Sparkles className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Wide Image */}
          {galleryImages[7] && (
            <div className={`mt-12 transition-all duration-1000 delay-600 ${isVisible['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-96">
                <img 
                  src={galleryImages[7].src} 
                  alt={galleryImages[7].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 items-center justify-center">
                  <Leaf className="w-32 h-32 text-white opacity-30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent">
                  <div className="h-full flex items-center p-8 md:p-12">
                    <div className="max-w-xl">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{galleryImages[7].alt}</h3>
                      <p className="text-white/90 text-lg">Building partnerships for a sustainable tomorrow</p>
                      {/* <button className="mt-6 px-6 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
                        View All Photos
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <Sparkles className="w-20 h-20 text-white drop-shadow-2xl animate-bounce-slow" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Make an Impact?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join us in building a sustainable future where responsibility is measurable, and change is inevitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-10 py-5 bg-white rounded-full font-bold text-xl text-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Get Started</span>
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white rounded-full font-bold text-xl text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
          
          <div className="flex gap-8 justify-center mt-16 text-white flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-90">Credits Transacted</div>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up-delay-2 {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up-delay 1s ease-out 0.3s backwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up-delay-2 1s ease-out 0.6s backwards;
        }
        
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}