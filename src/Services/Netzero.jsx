import React from 'react';
import { TrendingDown, Leaf, Zap, Droplet, ArrowRight, Download, CheckCircle } from 'lucide-react';
import "./Netzero.css";
export default function Netzero() {
  const impactData = [
    { icon: TrendingDown, value: '75%', label: 'Carbon Emissions Reduced', color: 'text-teal-500' },
    { icon: Leaf, value: '1.2M', label: 'Trees Planted Equivalent', color: 'text-green-600' },
    { icon: Zap, value: '100%', label: 'Renewable Energy Usage', color: 'text-cyan-500' },
    { icon: Droplet, value: '40%', label: 'Water Consumption Reduced', color: 'text-teal-700' }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Carbon Neutral Operations',
      description: 'Achieved 100% carbon neutrality across all operational facilities worldwide.'
    },
    {
      year: '2023',
      title: 'Renewable Energy Transition',
      description: 'Transitioned to 100% renewable energy sources for all data centers and offices.'
    },
    {
      year: '2022',
      title: 'Zero Waste Initiative',
      description: 'Implemented comprehensive recycling program achieving 95% waste diversion rate.'
    },
    {
      year: '2021',
      title: 'Sustainable Supply Chain',
      description: 'Partnered with verified sustainable suppliers reducing scope 3 emissions by 60%.'
    }
  ];

  const chartData = [
    { year: 2019, value: 100 },
    { year: 2020, value: 80 },
    { year: 2021, value: 65 },
    { year: 2022, value: 48 },
    { year: 2023, value: 28 },
    { year: 2024, value: 18 },
    { year: 2025, value: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=900&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-teal-800/80 to-emerald-700/70"></div>
        </div>
       
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Our Journey to Net Zero
          </h1>
          <p className="text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
            Leading the way in sustainable innovation with measurable environmental impact
          </p>
         
        </div>
      </section>

      {/* Impact By The Numbers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Impact By The Numbers
          </h2>
         
          <div className="grid md:grid-cols-4 gap-6">
            {impactData.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <item.icon className={`${item.color} mb-4`} size={40} strokeWidth={2} />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emissions Reduction Progress */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Emissions Reduction Progress
          </h2>
         
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="relative h-96">
              <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="100" x2="800" y2="100" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="200" x2="800" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="300" x2="800" y2="300" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
               
                {/* Y-axis labels */}
                <text x="10" y="30" fill="#6b7280" fontSize="14">100</text>
                <text x="10" y="155" fill="#6b7280" fontSize="14">75</text>
                <text x="10" y="230" fill="#6b7280" fontSize="14">50</text>
                <text x="10" y="305" fill="#6b7280" fontSize="14">25</text>
                <text x="10" y="395" fill="#6b7280" fontSize="14">0</text>
               
                {/* Area under curve */}
                <path
                  d="M 50 20 L 150 100 L 250 160 L 350 220 L 450 290 L 550 340 L 750 390 L 750 400 L 50 400 Z"
                  fill="url(#gradient)"
                  opacity="0.3"
                />
               
                {/* Line */}
                <path
                  d="M 50 20 L 150 100 L 250 160 L 350 220 L 450 290 L 550 340 L 750 390"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
               
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
               
                {/* X-axis labels */}
                <text x="50" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2019</text>
                <text x="150" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2020</text>
                <text x="250" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2021</text>
                <text x="350" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2022</text>
                <text x="450" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2023</text>
                <text x="550" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2024</text>
                <text x="750" y="395" fill="#6b7280" fontSize="14" textAnchor="middle">2025</text>
              </svg>
             
              {/* Y-axis label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                <span className="text-sm text-gray-600 whitespace-nowrap">Relative Emissions (%)</span>
              </div>
            </div>
           
            <p className="text-center text-gray-600 mt-8 text-lg">
              Tracking our journey from baseline to net zero emissions by 2025
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Achievements */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Milestone Achievements
          </h2>
         
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-500"></div>
           
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center border-4 border-gray-50">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                 
                  <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                    <div className="text-teal-500 font-semibold text-lg mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 to-emerald-600/90"></div>
        </div>
       
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Sustainability Mission
          </h2>
        
          <div className="flex flex-wrap justify-center gap-4">
           
           
          </div>
        </div>
      </section>
    </div>
  );
}