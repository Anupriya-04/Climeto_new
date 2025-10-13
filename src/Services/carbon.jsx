import React from 'react';
import { TrendingUp, Zap, Target, Award, Calculator, Search, CreditCard, BarChart3, MapPin, ArrowRight } from 'lucide-react';

export default function Carbon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-600 text-sm mb-8">
            <span className="text-lg">❄️</span>
            <span className="font-medium">Climate Action Platform</span>
          </div>
         
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
              Carbon Neutral
            </span>
            <br />
            <span className="text-gray-900">Made Simple</span>
          </h1>
         
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Measure, reduce, and offset your carbon footprint with verified environmental projects. Join the movement towards a sustainable future.
          </p>
         
         
        </div>
       
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl font-bold text-cyan-600 mb-2">2.5M+</div>
            <div className="text-gray-600">
              CO<sub>2</sub> TONS OFFSET
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl font-bold text-purple-600 mb-2">120+</div>
            <div className="text-gray-600">GLOBAL PROJECTS</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">ACTIVE CONTRIBUTORS</div>
          </div>
        </div>
      </section>

      {/* Measurable Impact Section */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gray-900">Measurable </span>
              <span className="text-cyan-500">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              Transparent metrics and verified results you can trust
            </p>
          </div>
         
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-cyan-600" size={24} />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Project Success Rate
              </div>
              <div className="text-green-600">+12% this year</div>
            </div>
           
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-green-600" size={24} />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Real-Time Tracking
              </div>
              <div className="text-gray-600">Live monitoring</div>
            </div>
           
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-purple-600" size={24} />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Verified Projects
              </div>
              <div className="text-gray-600">Third-party audited</div>
            </div>
           
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-cyan-600" size={24} />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">Gold</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Climate Rating
              </div>
              <div className="text-gray-600">Industry certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gray-900">Simple </span>
              <span className="text-cyan-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four steps to climate action
            </p>
          </div>
         
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6">
                01
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Calculator className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Calculate</h3>
              <p className="text-gray-600">
                Measure your carbon footprint with our advanced calculator
              </p>
            </div>
           
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6">
                02
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Search className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Select</h3>
              <p className="text-gray-600">
                Browse verified environmental projects worldwide
              </p>
            </div>
           
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6">
                03
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Offset</h3>
              <p className="text-gray-600">
                Support projects that reduce global carbon emissions
              </p>
            </div>
           
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6">
                04
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Track</h3>
              <p className="text-gray-600">
                Monitor your impact with real-time analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Climate Solutions Section */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gray-900">Global </span>
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Climate Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Support verified projects making real environmental impact
            </p>
          </div>
         
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop"
                  alt="Amazon Rainforest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Reforestation
                </div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <span>✓</span> Verified
                </div>
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                  <MapPin size={20} />
                  <span className="font-semibold">Brazil</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Amazon Rainforest Conservation
                </h3>
                <p className="text-gray-600 mb-4">
                  Large-scale reforestation protecting biodiversity and absorbing millions of tons of CO<sub>2</sub> annually.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Project Progress</span>
                    <span className="text-cyan-600 font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-cyan-600">1,250</div>
                
                </div>
              </div>
            </div>
           
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=400&fit=crop"
                  alt="Wind Farm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  Renewable Energy
                </div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <span>✓</span> Verified
                </div>
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                  <MapPin size={20} />
                  <span className="font-semibold">North Sea</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Offshore Wind Farm
                </h3>
                <p className="text-gray-600 mb-4">
                  Clean wind energy infrastructure powering 500,000 homes with zero emissions.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Project Progress</span>
                    <span className="text-cyan-600 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-cyan-600">3,500</div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
}
