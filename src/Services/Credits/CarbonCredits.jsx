import React, { useState } from 'react';
import { Leaf, TrendingUp, Wind, Zap, Droplets, Trees, Waves, Factory, Users, Globe, Award, Shield, BarChart3, Check, AlertCircle, BookOpen, FileText, Target, Lightbulb, ArrowRight, ChevronDown, Play } from 'lucide-react';

export default function CarbonCreditsGuide() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      name: 'Amazon Rainforest Conservation',
      type: 'Forest Carbon',
      location: 'Brazil',
      credits: 2500000,
      price: 28.50,
      description: 'This large-scale project protects 500,000 hectares of pristine Amazon rainforest from deforestation. Working directly with indigenous communities, the project ensures long-term forest preservation while providing sustainable livelihoods. The area is home to thousands of species, including endangered jaguars and harpy eagles.',
      impact: 'Prevents 2.5 million tons of CO₂ emissions annually',
      verification: 'Verified Carbon Standard (VCS), Climate, Community & Biodiversity Standards (CCBS)',
      timeline: 'Project Duration: 30 years (2020-2050)',
      icon: Trees,
      color: 'emerald'
    },
    {
      id: 1,
      name: 'North Sea Wind Farm',
      type: 'Wind Energy',
      location: 'United Kingdom',
      credits: 1800000,
      price: 22.75,
      description: 'One of the largest offshore wind farms in Europe, featuring 180 turbines generating clean electricity for over 800,000 homes. The project displaces fossil fuel-based power generation and contributes significantly to the UK\'s renewable energy goals. Advanced turbine technology ensures maximum efficiency even in challenging weather conditions.',
      impact: 'Generates 3,200 GWh of clean energy per year',
      verification: 'Gold Standard, International REC Standard',
      timeline: 'Operational since 2019, 25-year lifespan',
      icon: Wind,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Sahara Solar Initiative',
      type: 'Solar Power',
      location: 'Morocco',
      credits: 3200000,
      price: 24.20,
      description: 'A groundbreaking concentrated solar power (CSP) plant in the Sahara Desert, utilizing mirror technology to generate electricity even after sunset. This mega-project spans 3,000 hectares and represents a major leap in renewable energy infrastructure for North Africa. The facility includes molten salt storage, allowing 24/7 clean energy production.',
      impact: 'Powers 1.3 million homes with zero emissions',
      verification: 'Clean Development Mechanism (CDM), Gold Standard',
      timeline: 'Phase 1 completed 2021, expanding until 2028',
      icon: Zap,
      color: 'amber'
    },
    {
      id: 3,
      name: 'Great Barrier Reef Protection',
      type: 'Ocean Blue',
      location: 'Australia',
      credits: 950000,
      price: 32.90,
      description: 'An innovative marine conservation project focused on coral reef restoration and protection. Using advanced coral farming techniques and water quality management, this initiative works to reverse decades of reef degradation. The project employs marine biologists and local communities to monitor and maintain reef health.',
      impact: 'Restored 450 hectares of coral reef, protecting marine biodiversity',
      verification: 'Plan Vivo, Marine Stewardship Council',
      timeline: '15-year project (2021-2036)',
      icon: Waves,
      color: 'cyan'
    }
  ];

  const educationalContent = [
    {
      title: 'What Are Carbon Credits?',
      content: 'A carbon credit represents one metric ton of carbon dioxide (CO₂) or equivalent greenhouse gases that have been prevented from entering the atmosphere or removed from it. These credits are generated through various environmental projects like renewable energy installations, reforestation programs, or methane capture facilities. Each credit is carefully measured, verified, and certified by internationally recognized standards organizations. Companies and individuals purchase these credits to offset their carbon footprint, creating a market-based mechanism to incentivize emission reductions. The carbon credit system allows businesses that struggle to reduce emissions immediately to compensate by funding projects that reduce emissions elsewhere, creating a net positive environmental impact.',
      icon: BookOpen
    },
    {
      title: 'How Carbon Trading Works',
      content: 'Carbon trading operates through two primary markets: compliance markets and voluntary markets. Compliance markets are created by mandatory national, regional, or international carbon reduction regulations. Governments set emission caps, and companies must hold enough credits to cover their emissions or face penalties. The voluntary market allows companies and individuals to purchase credits proactively to meet sustainability goals or corporate responsibility commitments. Trading happens through exchanges or direct bilateral agreements. Prices fluctuate based on supply, demand, and regulatory changes. Advanced blockchain technology is increasingly used to ensure transparency, prevent double-counting, and track credit ownership throughout the transaction lifecycle. Market participants include project developers, brokers, exchanges, and end buyers.',
      icon: TrendingUp
    },
    {
      title: 'Types of Carbon Credit Projects',
      content: 'Carbon credit projects fall into several categories, each with unique characteristics and impact. Renewable Energy projects replace fossil fuel power generation with solar, wind, hydro, or geothermal energy. These projects not only reduce emissions but also contribute to energy security and economic development. Forestry and Land Use projects include reforestation, avoided deforestation, and improved forest management, which sequester CO₂ while protecting biodiversity. Industrial Efficiency projects reduce emissions through technological improvements in manufacturing, cement production, or chemical processing. Methane Capture projects collect and utilize methane from landfills, agriculture, or coal mines, preventing a potent greenhouse gas from reaching the atmosphere. Each project type undergoes rigorous validation and verification by accredited third parties.',
      icon: Target
    },
    {
      title: 'Verification and Standards',
      content: 'Carbon credit verification ensures projects deliver real, measurable, and permanent emission reductions. Multiple international standards organizations provide frameworks for this verification. The Verified Carbon Standard (VCS) is the world\'s most widely used greenhouse gas crediting program. The Gold Standard focuses on projects that demonstrate sustainable development benefits beyond carbon reduction. The Climate, Community & Biodiversity Standards (CCBS) certify projects that deliver net positive impacts on climate, communities, and biodiversity. The verification process involves baseline establishment, monitoring plans, third-party auditing, and ongoing reporting. Projects must demonstrate additionality (emissions reductions wouldn\'t have occurred without the project), permanence (reductions are long-lasting), and accurate quantification. This rigorous process ensures credit quality and market integrity.',
      icon: Shield
    },
    {
      title: 'Environmental Impact and Benefits',
      content: 'Carbon credit projects create far-reaching positive impacts beyond emission reductions. Renewable energy projects provide clean electricity to communities that previously relied on fossil fuels, improving air quality and public health. Forestry projects protect endangered species habitats, preserve ecosystem services like water filtration and soil conservation, and support indigenous communities. Many projects create local employment opportunities in regions that need economic development. Marine conservation projects restore ocean ecosystems that serve as critical carbon sinks while supporting fishing communities. The cumulative effect of thousands of verified carbon credit projects worldwide contributes significantly to global climate goals. Since 2005, the voluntary carbon market has funded projects that prevented or removed over 1 billion tons of CO₂ equivalent from the atmosphere, while simultaneously delivering sustainable development benefits to millions of people.',
      icon: Globe
    },
    {
      title: 'The Future of Carbon Markets',
      content: 'Carbon markets are evolving rapidly with technological innovation and increased regulatory momentum. Blockchain and distributed ledger technology promise greater transparency, reduced transaction costs, and prevention of double-counting. Artificial intelligence and satellite monitoring enable more accurate measurement of carbon sequestration in forestry projects. The growing corporate commitment to net-zero emissions is driving unprecedented demand for high-quality carbon credits. The voluntary carbon market is projected to grow from $1 billion in 2021 to over $50 billion by 2030. New project types are emerging, including direct air capture, ocean alkalinization, and enhanced weathering. International cooperation through frameworks like Article 6 of the Paris Agreement will create more integrated global markets. As climate urgency increases, carbon credits will play an increasingly central role in global decarbonization strategies, channeling billions of dollars toward projects that protect nature and accelerate the transition to a sustainable economy.',
      icon: Lightbulb
    }
  ];

  const marketData = [
    { year: '2018', volume: '$300M', credits: '98M', growth: '+15%' },
    { year: '2019', volume: '$320M', credits: '104M', growth: '+8%' },
    { year: '2020', volume: '$275M', credits: '95M', growth: '-13%' },
    { year: '2021', volume: '$1B', credits: '340M', growth: '+264%' },
    { year: '2022', volume: '$2B', credits: '510M', growth: '+100%' },
    { year: '2023', volume: '$1.9B', credits: '580M', growth: '+14%' },
  ];

  const certifications = [
    { name: 'Verified Carbon Standard', abbr: 'VCS', projects: '1,800+', credits: '1B+' },
    { name: 'Gold Standard', abbr: 'GS', projects: '1,500+', credits: '160M+' },
    { name: 'Climate Action Reserve', abbr: 'CAR', projects: '800+', credits: '200M+' },
    { name: 'American Carbon Registry', abbr: 'ACR', projects: '400+', credits: '450M+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">Carbon Credits</h1>
              <p className="text-xl text-blue-200 mt-2">Complete Guide & Trading Platform</p>
            </div>
          </div>
          
          <p className="text-2xl leading-relaxed max-w-4xl mb-8 text-blue-100">
            Understanding carbon credits is essential for anyone interested in climate action and sustainable business practices. This comprehensive guide covers everything from basic concepts to advanced trading strategies, helping you make informed decisions about carbon offsetting and environmental impact.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">$2.1B</div>
              <div className="text-sm text-blue-200">Market Size 2023</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">580M</div>
              <div className="text-sm text-blue-200">Credits Issued</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">4,500+</div>
              <div className="text-sm text-blue-200">Active Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">150+</div>
              <div className="text-sm text-blue-200">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-900 font-semibold">Educational Resources</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Understanding Carbon Credits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the world of carbon markets with our comprehensive educational content
          </p>
        </div>

        <div className="space-y-6">
          {educationalContent.map((section, idx) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === idx;
            
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : idx)}
                  className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-xl">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 text-left">{section.title}</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                {isExpanded && (
                  <div className="px-8 pb-8 pt-4">
                    <div className="pl-20 pr-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-6 shadow-md">
              <Globe className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-900 font-semibold">Featured Projects</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Real-World Carbon Credit Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore verified projects making a tangible difference in the fight against climate change
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`p-6 rounded-xl text-left transition-all ${
                    selectedProject === project.id
                      ? 'bg-indigo-600 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-900 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <Icon className={`w-10 h-10 mb-4 ${selectedProject === project.id ? 'text-white' : 'text-indigo-600'}`} />
                  <h3 className="font-bold text-lg mb-2">{project.type}</h3>
                  <p className={`text-sm ${selectedProject === project.id ? 'text-indigo-100' : 'text-gray-600'}`}>
                    {project.location}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Project Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                {React.createElement(projects[selectedProject].icon, { className: "w-24 h-24 text-white opacity-20" })}
              </div>
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm">Verified Project</span>
              </div>
            </div>
            
            <div className="p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {projects[selectedProject].name}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {projects[selectedProject].location}
                    </span>
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {projects[selectedProject].credits.toLocaleString()} credits
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-indigo-600 mb-1">
                    ${projects[selectedProject].price}
                  </div>
                  <div className="text-sm text-gray-500">per credit</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {projects[selectedProject].description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-gray-900">Impact</h4>
                  </div>
                  <p className="text-gray-700">{projects[selectedProject].impact}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Verification</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{projects[selectedProject].verification}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-gray-900">Timeline</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{projects[selectedProject].timeline}</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Market Statistics */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-6 py-3 rounded-full mb-6">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-900 font-semibold">Market Analysis</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Voluntary Carbon Market Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The voluntary carbon market has experienced exponential growth, driven by corporate net-zero commitments and increased climate awareness
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-700 font-bold">Year</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-bold">Market Volume</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-bold">Credits Traded</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-bold">Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((data, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-indigo-600">{data.year}</td>
                    <td className="py-4 px-6 text-gray-900 font-semibold">{data.volume}</td>
                    <td className="py-4 px-6 text-gray-700">{data.credits}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        data.growth.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {data.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Market Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 rounded-lg p-3 h-fit">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Rapid Expansion</h4>
                <p className="text-gray-700">The market grew from $300M in 2018 to nearly $2B in 2022, reflecting increased corporate climate commitments and regulatory pressure.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-purple-600 rounded-lg p-3 h-fit">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Growing Participation</h4>
                <p className="text-gray-700">Over 5,000 companies now purchase voluntary carbon credits, with technology and financial services leading adoption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Standards */}
      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Certification Standards</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Trusted Verification Bodies
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              These internationally recognized organizations ensure carbon credit quality and credibility through rigorous verification processes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">{cert.abbr}</div>
                  <h3 className="text-lg font-bold mb-4">{cert.name}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Projects:</span>
                    <span className="font-bold">{cert.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Credits Issued:</span>
                    <span className="font-bold">{cert.credits}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20">
            <h3 className="text-3xl font-bold mb-6">Why Certification Matters</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <h4 className="text-xl font-bold">Quality Assurance</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Certified projects undergo independent third-party audits to verify emission reductions are real, measurable, and permanent.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <h4 className="text-xl font-bold">Market Confidence</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Certification provides buyers with confidence that their investment delivers genuine environmental benefits and meets international standards.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <h4 className="text-xl font-bold">Transparency</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Public registries track all credits from issuance to retirement, preventing double-counting and ensuring accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of organizations using carbon credits to achieve their climate goals and contribute to a sustainable future
          </p>
          <div className="flex justify-center">
          
          </div>
        </div>
      </div>
    </div>
  );
}