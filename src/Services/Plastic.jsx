import { useState } from 'react';
import "./PlasticManagement.css";
export default function PlasticWasteLanding() {
  const [activeTab, setActiveTab] = useState('zero-waste');

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
      <circle cx="10" cy="10" r="9" strokeWidth="2"/>
      <path d="M6 10l2.5 2.5L14 7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.3 4.1c-.5-.3-1.1.1-1.1.6v10.6c0 .5.6.9 1.1.6l8.4-5.3c.4-.3.4-.9 0-1.2L6.3 4.1z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Sustainable Solutions
          </span>
        </div>

        <h1 className="text-6xl font-bold mb-6">
          Plastic Waste<br/>
          <span className="text-green-600">Reimagined</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          Transforming plastic waste into valuable resources through innovative management and recycling solutions. Building a circular economy, one ton at a time.
        </p>

        <div className="flex gap-4 mb-16">
          {/* <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            Explore Services
            <span>→</span>
          </button> */}
         
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-gray-200">
          <div>
            <h3 className="text-5xl font-bold text-green-600 mb-2">500K+</h3>
            <p className="text-gray-600">Tons Recycled</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-600 mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-600 mb-2">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Facility Image Section */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop" 
            alt="Eco-friendly facility with solar panels" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg">Eco-Green</h4>
              <p className="text-sm text-gray-600">ISO 14001 Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <h2 className="text-5xl font-bold mb-4">
          Complete Plastic<br/>
          <span className="text-green-600">Management Solutions</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          From collection to processing, we provide end-to-end services designed for maximum efficiency and environmental impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Advanced Recycling</h3>
            <p className="text-gray-600">
              State-of-the-art processing technology for all plastic types with zero-waste approach.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Industrial Processing</h3>
            <p className="text-gray-600">
              Large-scale facilities handling high-volume plastic waste from various industries.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Logistics & Collection</h3>
            <p className="text-gray-600">
              Reliable pickup and transportation services with real-time tracking capabilities.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Data Analytics</h3>
            <p className="text-gray-600">
              Comprehensive reporting dashboard for sustainability tracking and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">2008</h3>
            <p className="text-gray-600">ISO 14001 Certified</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">25+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">500+</h3>
            <p className="text-gray-600">Team Members</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">24/7</h3>
            <p className="text-gray-600">Processing Speed</p>
          </div>
        </div>

        {/* Big Green Card */}
        <div className="bg-green-600 rounded-3xl p-12 text-white">
          <h3 className="text-6xl font-bold mb-4">99.2%</h3>
          <h4 className="text-2xl font-bold mb-3">Waste Diversion Rate</h4>
          <p className="text-green-100 text-lg">
            Industry-leading efficiency in keeping plastic waste out of landfills and oceans
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            About Us
          </span>
        </div>

        <h2 className="text-5xl font-bold mb-6">
          Pioneering the Future of<br/>
          <span className="text-green-600">Plastic Recycling</span>
        </h2>

        <p className="text-gray-600 text-lg mb-6 max-w-4xl">
          For over 15 years, we've been at the forefront of plastic waste management, developing innovative solutions that transform environmental challenges into sustainable opportunities.
        </p>

        <p className="text-gray-600 text-lg mb-12 max-w-4xl">
          Our mission is simple: create a world where plastic waste is viewed not as a problem, but as a valuable resource that powers a circular economy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12">
          <div className="flex items-center gap-3 text-gray-700">
            <CheckIcon />
            <span>Sustainability-first approach</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <CheckIcon />
            <span>Cutting-edge technology</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <CheckIcon />
            <span>Transparent operations</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <CheckIcon />
            <span>Customer partnership</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <CheckIcon />
            <span>Continuous innovation</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <CheckIcon />
            <span>Environmental stewardship</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('zero-waste')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'zero-waste' 
                ? 'bg-green-600 text-white' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            Zero Waste Goal
          </button>
          <button 
            onClick={() => setActiveTab('carbon-neutral')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'carbon-neutral' 
                ? 'bg-green-600 text-white' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            Carbon Neutral Operations
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 max-w-7xl mb-16">
        <div className="bg-green-600 rounded-3xl p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Join the Circular Economy Revolution
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-3xl mx-auto">
            Partner with us to transform your plastic waste management and contribute to a more sustainable future for our planet.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              ISO 14001 Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              24/7 Operations
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Zero Landfill Goal
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
