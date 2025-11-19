import React, { useState } from 'react';
import { Recycle, TrendingUp, Waves, Package, Trash2, Globe, Award, Shield, BarChart3, Check, AlertCircle, BookOpen, Target, Lightbulb, ArrowRight, ChevronDown, Factory, Users, Heart, DollarSign, Leaf, Ship, Building2, Fish, MapPin, Droplets, Wind, Zap } from 'lucide-react';

export default function PlasticCreditsGuide() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);

  const projectImages = {
    0: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=400&fit=crop',
    1: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=400&fit=crop',
    2: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop',
    3: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&h=400&fit=crop',
  };

  const projects = [
    {
      id: 0,
      name: 'Ocean Plastic Recovery Initiative',
      type: 'Ocean Cleanup',
      location: 'Indonesia',
      credits: 850000,
      price: 12.50,
      description: 'This groundbreaking project deploys advanced cleanup technology to remove plastic waste from ocean waters and coastal areas across Indonesia. Working with local fishing communities, the initiative intercepts plastic before it reaches the open ocean. The collected plastic is sorted, processed, and converted into new products or safely disposed of. The project covers 500 kilometers of coastline and operates 24/7 with a fleet of specialized vessels.',
      impact: 'Removes 850 tons of ocean plastic annually',
      verification: 'Verra Plastic Waste Reduction Standard, Ocean Conservancy Certified',
      timeline: 'Project Duration: 10 years (2022-2032)',
      icon: Waves,
      color: 'blue',
      additionalInfo: {
        collected: '850 tons/year',
        coastline: '500 km covered',
        vessels: '12 cleanup boats',
        workers: '450 local jobs'
      }
    },
    {
      id: 1,
      name: 'Community Recycling Network',
      type: 'Collection & Recycling',
      location: 'Philippines',
      credits: 1200000,
      price: 8.75,
      description: 'A comprehensive waste management system that establishes collection points, sorting facilities, and recycling infrastructure across 200 communities. The project provides waste management training, employment opportunities, and ensures proper recycling of collected plastic. Advanced sorting technology separates different plastic types for maximum recycling efficiency. The initiative includes educational programs reaching 500,000 people annually.',
      impact: 'Processes 1,200 tons of plastic waste monthly',
      verification: 'Social Carbon Standard, Plastic Bank Verified',
      timeline: 'Operational since 2020, expanding through 2030',
      icon: Recycle,
      color: 'green',
      additionalInfo: {
        communities: '200 served',
        facilities: '45 collection centers',
        recycled: '14,400 tons/year',
        educated: '500K people/year'
      }
    },
    {
      id: 2,
      name: 'Industrial Waste Prevention',
      type: 'Source Reduction',
      location: 'Thailand',
      credits: 2100000,
      price: 15.20,
      description: 'Working directly with manufacturing facilities to reduce plastic waste at the source. The project implements circular economy principles, helping companies redesign packaging, optimize material use, and develop take-back programs. Advanced technology tracks plastic through supply chains, ensuring transparency and accountability. Over 150 factories have participated, collectively reducing plastic waste by 2,100 tons annually while maintaining productivity.',
      impact: 'Prevents 2,100 tons of plastic waste generation',
      verification: 'Zero Waste International Alliance, ISO 14001 Certified',
      timeline: '5-year project (2021-2026)',
      icon: Factory,
      color: 'orange',
      additionalInfo: {
        factories: '150 participating',
        reduction: '2,100 tons/year',
        savings: '$8.5M annually',
        innovations: '45 new designs'
      }
    },
    {
      id: 3,
      name: 'Coastal Community Protection',
      type: 'Beach & River Cleanup',
      location: 'Vietnam',
      credits: 650000,
      price: 10.90,
      description: 'A multi-faceted approach combining beach cleanups, river barrier systems, and community engagement to prevent plastic from entering marine ecosystems. The project employs 300 local residents for daily cleanup operations and maintains 50 river barriers that capture floating waste. Collected plastic is either recycled or used in waste-to-energy facilities. Educational programs teach 200 schools about plastic pollution and sustainable practices.',
      impact: 'Intercepts 650 tons before ocean entry',
      verification: 'Alliance to End Plastic Waste, UN Environment Endorsed',
      timeline: '15-year initiative (2023-2038)',
      icon: Ship,
      color: 'cyan',
      additionalInfo: {
        barriers: '50 river systems',
        beaches: '120 km protected',
        schools: '200 programs',
        employees: '300 workers'
      }
    }
  ];

  const educationalSections = [
    {
      title: 'Understanding Plastic Credits',
      icon: BookOpen,
      content: [
        {
          heading: 'What Are Plastic Credits?',
          text: 'Plastic credits represent a standardized unit measuring the collection, recycling, or proper disposal of plastic waste that would otherwise pollute the environment. One plastic credit typically equals one metric ton (1,000 kilograms) of plastic waste that has been recovered, recycled, or prevented from entering ecosystems. Similar to carbon credits, plastic credits create a market-based mechanism to address plastic pollution. Companies and individuals purchase these credits to offset their plastic footprint, funding projects that remove existing plastic waste or prevent new plastic pollution. Each credit is tracked, verified, and retired to ensure no double-counting occurs.'
        },
        {
          heading: 'The Global Plastic Crisis',
          text: 'The world produces over 400 million tons of plastic annually, with this number projected to triple by 2060 if current trends continue. An estimated 8-12 million tons enter our oceans each year, creating garbage patches, harming marine life, and breaking down into microplastics that enter the food chain. Only 9% of all plastic ever produced has been recycled, with 12% incinerated and 79% accumulating in landfills or the environment. By 2050, there could be more plastic than fish in the ocean by weight. This crisis affects every ecosystem on Earth, from the deepest ocean trenches to the highest mountains, where microplastics have been found in snow samples.'
        },
        {
          heading: 'How Plastic Credits Work',
          text: 'Plastic credit systems operate through a verification process that ensures environmental integrity. Project developers collect plastic waste from vulnerable environments like coastlines, rivers, or communities lacking waste infrastructure. This collected plastic is weighed, documented, and processed through certified facilities. Independent third-party auditors verify the collection, ensuring the plastic would have otherwise entered ecosystems and wasn\'t diverted from existing recycling streams. Credits are issued based on verified collection amounts and registered in transparent databases. Companies purchase these credits to neutralize their plastic footprint, with funds supporting cleanup operations, infrastructure development, and community programs. Unlike plastic taxes or bans, credits provide flexible, market-driven solutions while generating measurable environmental outcomes.'
        }
      ]
    },
    {
      title: 'Types of Plastic Recovery Projects',
      icon: Target,
      content: [
        {
          heading: 'Ocean and Coastal Cleanup',
          text: 'Ocean cleanup projects target plastic pollution in marine environments before it causes irreversible damage. These initiatives deploy specialized vessels, nets, and collection systems to remove floating plastic debris from ocean surfaces and coastal waters. Advanced projects use artificial intelligence and satellite imagery to identify plastic accumulation zones, optimizing cleanup efficiency. Some employ ocean-friendly materials that allow fish to escape while capturing plastic. Coastal cleanup focuses on beaches and shorelines where plastic accumulates due to tides and currents. These projects often partner with fishing communities, providing alternative income during off-seasons. Collected ocean plastic faces unique challenges - salt degradation, biological contamination, and mixed material types - requiring specialized processing facilities. Despite these challenges, ocean cleanup projects have removed millions of tons of plastic, protecting marine ecosystems and preventing microplastic formation.'
        },
        {
          heading: 'Community Collection Networks',
          text: 'Community-based collection projects establish waste management infrastructure in regions lacking formal systems, particularly in developing countries where 90% of ocean plastic originates. These projects create collection points where residents exchange plastic waste for cash, goods, or services, providing economic incentives for participation. Mobile collection units travel to remote areas inaccessible to traditional waste management. Sorting facilities employ local workers to separate plastic by type - PET, HDPE, PVC, LDPE, PP, and PS - enabling proper recycling. Educational programs teach waste segregation at source, dramatically improving recycling efficiency. Many projects integrate social enterprises, processing collected plastic into valuable products like building materials, furniture, or textiles. The dual benefit - environmental cleanup and economic development - makes community collection projects particularly impactful. Success stories include the Plastic Bank model, which has collected over 45 million kilograms while lifting thousands from poverty.'
        },
        {
          heading: 'Industrial Source Reduction',
          text: 'Source reduction projects prevent plastic waste generation by working with manufacturers to redesign products, packaging, and processes. These initiatives implement circular economy principles, where materials continuously cycle through use and reuse rather than becoming waste. Companies reduce plastic use through lightweighting (using less material per product), material substitution (replacing plastic with sustainable alternatives), or design innovation (creating reusable or easily recyclable products). Some projects develop take-back programs where manufacturers reclaim products at end-of-life for recycling or refurbishment. Advanced tracking systems use blockchain technology to monitor material flows, ensuring transparency and preventing greenwashing. Industrial projects often achieve the highest plastic reduction per dollar invested since preventing waste is more efficient than cleanup. However, they require technical expertise, capital investment, and long-term commitment. Successful industrial partnerships have reduced plastic waste by millions of tons while improving operational efficiency and brand reputation.'
        }
      ]
    },
    {
      title: 'Plastic Credit Market Dynamics',
      icon: TrendingUp,
      content: [
        {
          heading: 'Market Structure and Growth',
          text: 'The plastic credit market emerged around 2018 and has experienced rapid growth, expanding from virtually nothing to an estimated $50 million market by 2023. Unlike the mature carbon credit market, plastic credits remain in early development, with evolving standards, varying methodologies, and fragmented infrastructure. Multiple competing platforms and standards currently operate, including Verra\'s Plastic Waste Reduction Standard, Social Plastic by Plastic Bank, and rePurpose Global\'s verification system. Market participants include project developers operating cleanup initiatives, brokers connecting buyers and sellers, verification bodies ensuring credit quality, and corporate buyers seeking to offset plastic footprints. Prices vary widely - from $2 per ton for bulk industrial plastic to $600+ per ton for ocean plastic credits - reflecting collection difficulty, processing costs, and environmental urgency. The market is projected to reach $1-2 billion by 2030 as corporate commitments increase and standardization improves.'
        },
        {
          heading: 'Verification Standards and Quality',
          text: 'Credible verification separates legitimate plastic credits from greenwashing. Leading standards require rigorous documentation of collection, processing, and environmental benefit. The Verra Plastic Waste Reduction Standard, launched in 2021, provides comprehensive guidelines for project development, monitoring, and verification. It requires proof that collected plastic would have otherwise leaked into nature, wasn\'t diverted from existing recycling streams, and was properly processed. Social Plastic certification adds social impact requirements, ensuring projects benefit low-income communities. Ocean Plastic certification commands premium prices due to higher collection costs and environmental urgency. Quality indicators include third-party verification, transparent registries, geographic traceability, and co-benefit documentation. Lower quality credits may lack verification, come from industrial waste streams that would be recycled anyway, or involve minimal environmental benefit. As the market matures, quality differentiation will intensify, with premium credits offering verified ocean plastic removal, significant co-benefits, and transparent traceability.'
        },
        {
          heading: 'Corporate Adoption and Drivers',
          text: 'Corporate demand for plastic credits is accelerating as businesses face mounting pressure from consumers, investors, and regulators to address plastic pollution. Major brands like Unilever, Procter & Gamble, and Nestlé have committed to plastic neutrality, purchasing credits to offset their packaging footprint. The consumer goods sector, responsible for significant plastic use, leads adoption, followed by retail, fashion, and technology industries. Key drivers include regulatory pressure - over 60 countries have implemented single-use plastic bans - reputational risk from environmental advocacy groups, and investor expectations around ESG performance. Unlike carbon, where emissions can be reduced through technology transitions, many businesses cannot immediately eliminate plastic use due to food safety, product protection, and cost considerations. Plastic credits provide an interim solution, allowing companies to take responsibility for their plastic footprint while working toward long-term reduction goals. Some experts warn against over-reliance on credits instead of genuine reduction, emphasizing credits should complement, not replace, efforts to minimize plastic use.'
        }
      ]
    }
  ];

  const globalImpactStats = [
    {
      category: 'Environmental Impact',
      stats: [
        { label: 'Plastic Removed', value: '45M kg', icon: Trash2, color: 'blue' },
        { label: 'Ocean Plastic', value: '8.5M kg', icon: Waves, color: 'cyan' },
        { label: 'Projects Active', value: '850+', icon: Target, color: 'green' },
        { label: 'Countries', value: '65+', icon: Globe, color: 'purple' }
      ]
    },
    {
      category: 'Ecosystem Protection',
      stats: [
        { label: 'Marine Life Saved', value: '2M+ animals', icon: Fish, color: 'blue' },
        { label: 'Coastline Protected', value: '15K km', icon: MapPin, color: 'green' },
        { label: 'Rivers Cleaned', value: '450+', icon: Droplets, color: 'cyan' },
        { label: 'Habitats Restored', value: '3,200', icon: Leaf, color: 'emerald' }
      ]
    },
    {
      category: 'Social Impact',
      stats: [
        { label: 'Jobs Created', value: '185K+', icon: Users, color: 'orange' },
        { label: 'Communities Served', value: '8,500+', icon: Heart, color: 'red' },
        { label: 'Income Generated', value: '$580M', icon: DollarSign, color: 'green' },
        { label: 'People Educated', value: '12M+', icon: BookOpen, color: 'indigo' }
      ]
    }
  ];

  const plasticTypes = [
    {
      name: 'PET (Polyethylene Terephthalate)',
      code: '#1',
      uses: 'Water bottles, food containers, clothing fibers',
      recyclability: 'Highly recyclable',
      facts: 'Most commonly recycled plastic, can be turned into fleece, carpets, and new bottles',
      percentage: '12%',
      color: 'blue'
    },
    {
      name: 'HDPE (High-Density Polyethylene)',
      code: '#2',
      uses: 'Milk jugs, detergent bottles, pipes, toys',
      recyclability: 'Highly recyclable',
      facts: 'Strong and resistant to impact, often recycled into plastic lumber and drainage pipes',
      percentage: '18%',
      color: 'green'
    },
    {
      name: 'PVC (Polyvinyl Chloride)',
      code: '#3',
      uses: 'Pipes, window frames, medical devices',
      recyclability: 'Difficult to recycle',
      facts: 'Contains chlorine and additives, recycling produces toxic emissions',
      percentage: '8%',
      color: 'red'
    },
    {
      name: 'LDPE (Low-Density Polyethylene)',
      code: '#4',
      uses: 'Plastic bags, squeeze bottles, wrapping films',
      recyclability: 'Sometimes recycled',
      facts: 'Flexible and tough, recyclable but often not accepted in curbside programs',
      percentage: '15%',
      color: 'yellow'
    },
    {
      name: 'PP (Polypropylene)',
      code: '#5',
      uses: 'Yogurt containers, bottle caps, straws',
      recyclability: 'Sometimes recycled',
      facts: 'Heat resistant, increasingly recyclable as infrastructure improves',
      percentage: '25%',
      color: 'purple'
    },
    {
      name: 'PS (Polystyrene)',
      code: '#6',
      uses: 'Styrofoam cups, takeout containers, packing materials',
      recyclability: 'Rarely recycled',
      facts: 'Lightweight but bulky, breaks into microplastics easily, banned in many cities',
      percentage: '8%',
      color: 'orange'
    },
    {
      name: 'Other Plastics',
      code: '#7',
      uses: 'CDs, baby bottles, mixed materials',
      recyclability: 'Generally not recycled',
      facts: 'Catch-all category including polycarbonate and bioplastics, complex to process',
      percentage: '14%',
      color: 'gray'
    }
  ];

  const marketInsights = [
    {
      title: 'Plastic Neutrality Momentum',
      description: 'Over 2,000 companies have committed to plastic neutrality, pledging to remove as much plastic from the environment as they introduce through their products. This movement mirrors carbon neutrality commitments but focuses specifically on plastic pollution. Leading consumer brands are purchasing millions of plastic credits annually, with the market expected to exceed $1 billion by 2030. However, critics emphasize that neutrality should not replace reduction efforts, and companies must prioritize minimizing plastic use alongside credit purchases.',
      icon: Building2,
      stats: ['2,000+ committed', '$1B by 2030', '45M kg removed']
    },
    {
      title: 'Ocean Plastic Premium',
      description: 'Ocean plastic credits command prices 5-10 times higher than land-based plastic credits, reflecting the extreme difficulty and cost of marine collection. Specialized vessels, harsh conditions, salt contamination, and remote locations make ocean cleanup significantly more expensive. Despite higher costs, demand for ocean credits is strong due to the urgency of marine plastic pollution and its devastating impact on marine ecosystems. Some companies specifically seek ocean plastic credits for marketing purposes, valuing the compelling narrative and visual impact.',
      icon: Waves,
      stats: ['$50-600/ton', '8.5M kg removed', '10x price premium']
    },
    {
      title: 'Technology Innovation',
      description: 'Emerging technologies are revolutionizing plastic recovery and recycling. AI-powered sorting systems identify and separate plastic types with 99% accuracy, dramatically improving recycling efficiency. Chemical recycling breaks plastic down to molecular components, enabling infinite recycling without quality degradation. Blockchain platforms track plastic credits from collection to retirement with complete transparency. Satellite imaging and drone technology map plastic accumulation, optimizing cleanup operations. These innovations are reducing costs, increasing effectiveness, and attracting investment into the plastic credit sector.',
      icon: Zap,
      stats: ['99% AI accuracy', 'Chemical recycling', 'Blockchain tracking']
    },
    {
      title: 'Regulatory Landscape',
      description: 'Governments worldwide are implementing regulations addressing plastic pollution, creating tailwinds for plastic credit adoption. The European Union\'s Plastic Packaging Tax, effective 2021, charges €0.80 per kilogram of non-recycled plastic packaging. Over 60 countries have banned single-use plastics. Extended Producer Responsibility (EPR) laws make manufacturers financially responsible for product end-of-life management. The UN is negotiating a global plastic treaty, potentially creating mandatory reduction targets. These regulations are driving corporate interest in plastic credits as a compliance and risk management tool.',
      icon: Shield,
      stats: ['60+ bans', 'EU plastic tax', 'UN treaty pending']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1600&h=900&fit=crop" 
            alt="Ocean plastic pollution" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-cyan-900/95 to-teal-900/95"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Recycle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">Plastic Credits</h1>
              <p className="text-xl text-cyan-200 mt-2">Fighting Ocean Pollution Through Market Solutions</p>
            </div>
          </div>
          
          <p className="text-2xl leading-relaxed max-w-4xl mb-8 text-cyan-100">
            Explore comprehensive solutions to the plastic crisis through verified recovery projects, market-based incentives, and community-driven initiatives. Learn how plastic credits are creating a circular economy while protecting marine ecosystems and coastal communities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">45M kg</div>
              <div className="text-sm text-cyan-200">Plastic Removed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">850+</div>
              <div className="text-sm text-cyan-200">Active Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">185K+</div>
              <div className="text-sm text-cyan-200">Jobs Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-1">65+</div>
              <div className="text-sm text-cyan-200">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section with Image */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Plastic Crisis Demands Action
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every minute, the equivalent of one garbage truck of plastic enters our oceans. By 2050, there could be more plastic than fish in the sea by weight. This environmental catastrophe affects every corner of our planet, from the deepest ocean trenches to remote Arctic ice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Plastic credits provide a market-based solution to this crisis. By creating economic value for plastic waste recovery, they incentivize cleanup efforts while funding the infrastructure needed to prevent future pollution. Every credit purchased supports projects that remove plastic from vulnerable ecosystems and build sustainable waste management systems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">400M</div>
                <div className="text-sm text-blue-700">Tons Produced Yearly</div>
              </div>
              <div className="bg-cyan-100 px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-cyan-600">9%</div>
                <div className="text-sm text-cyan-700">Ever Recycled</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&h=800&fit=crop" 
              alt="Ocean plastic pollution" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <Waves className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">12M</div>
                  <div className="text-sm text-gray-600">Tons in Oceans/Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-blue-900 font-semibold">Comprehensive Education</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Understanding Plastic Credits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into how plastic credits work, project types, and market dynamics
          </p>
        </div>

        {educationalSections.map((section, idx) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === idx;
          
          return (
            <div key={idx} className="mb-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setExpandedSection(isExpanded ? null : idx)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-left">{section.title}</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {isExpanded && (
                <div className="px-8 pb-8">
                  <div className="pl-20 pr-4 space-y-8">
                    {section.content.map((item, cidx) => (
                      <div key={cidx} className="bg-white rounded-xl p-8 shadow-md">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">{item.heading}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Plastic Types Guide */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-6 shadow-md">
              <Package className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold">Plastic Types Guide</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Understanding Different Plastics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the seven main types of plastic, their uses, and recyclability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {plasticTypes.map((plastic, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-lg bg-${plastic.color}-100 text-${plastic.color}-700 font-bold text-2xl mb-2`}>
                      {plastic.code}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{plastic.name}</h3>
                  </div>
                  <div className={`text-4xl font-bold text-${plastic.color}-600`}>
                    {plastic.percentage}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Common Uses:</div>
                    <div className="text-gray-700">{plastic.uses}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Recyclability:</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      plastic.recyclability === 'Highly recyclable' ? 'bg-green-100 text-green-700' :
                      plastic.recyclability === 'Sometimes recycled' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {plastic.recyclability}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Did You Know:</div>
                    <div className="text-gray-700 text-sm italic">{plastic.facts}</div>
                  </div>RetryClaude does not have the ability to run the code it generates yet.AContinuejsx                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects with Images */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-6 shadow-md">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold">Featured Projects</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Real-World Plastic Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore verified projects removing plastic waste and protecting ecosystems worldwide
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
                      ? 'bg-blue-600 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-900 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <Icon className={`w-10 h-10 mb-4 ${selectedProject === project.id ? 'text-white' : 'text-blue-600'}`} />
                  <h3 className="font-bold text-lg mb-2">{project.type}</h3>
                  <p className={`text-sm ${selectedProject === project.id ? 'text-blue-100' : 'text-gray-600'}`}>
                    {project.location}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Project Details with Image */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-96">
              <img 
                src={projectImages[selectedProject]} 
                alt={projects[selectedProject].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-white font-semibold text-sm">✓ Verified Project</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {projects[selectedProject].name}
                </h3>
                <div className="flex items-center gap-4 text-white">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {projects[selectedProject].location}
                  </span>
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    {projects[selectedProject].credits.toLocaleString()} credits
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Price per credit</div>
                      <div className="text-4xl font-bold text-blue-600">
                        ${projects[selectedProject].price}
                      </div>
                    </div>
                    <div className="bg-green-100 px-4 py-2 rounded-lg">
                      <div className="text-sm text-green-700">Active Project</div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {projects[selectedProject].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(projects[selectedProject].additionalInfo).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-gray-900">Impact</h4>
                  </div>
                  <p className="text-gray-700">{projects[selectedProject].impact}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
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

      {/* Global Impact Statistics */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Global Impact Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data showing the real-world effects of plastic credit projects worldwide
          </p>
        </div>

        {globalImpactStats.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{category.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.stats.map((stat, sidx) => {
                const Icon = stat.icon;
                return (
                  <div key={sidx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                    <Icon className={`w-12 h-12 text-${stat.color}-600 mb-4`} />
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Market Insights */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Market Intelligence</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Plastic Credit Market Insights
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Understanding market trends, pricing dynamics, and future opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketInsights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-4 rounded-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{insight.title}</h3>
                  </div>
                  
                  <p className="text-blue-100 leading-relaxed mb-6">
                    {insight.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {insight.stats.map((stat, sidx) => (
                      <div key={sidx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="font-semibold text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* The Problem Section with Visuals */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            The Scale of the Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the magnitude of global plastic pollution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
            <div className="text-6xl font-bold text-red-600 mb-4">8M</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Tons Per Year</h3>
            <p className="text-gray-700 leading-relaxed">
              Approximately 8 million metric tons of plastic enter the ocean annually - equivalent to dumping one garbage truck of plastic into the ocean every minute.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200">
            <div className="text-6xl font-bold text-orange-600 mb-4">5.25T</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pieces Floating</h3>
            <p className="text-gray-700 leading-relaxed">
              An estimated 5.25 trillion pieces of plastic debris are currently in the ocean, with 269,000 tons floating on the surface alone.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 border border-yellow-200">
            <div className="text-6xl font-bold text-yellow-600 mb-4">2050</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Critical Deadline</h3>
            <p className="text-gray-700 leading-relaxed">
              By 2050, there will be more plastic than fish in the ocean by weight if current pollution trends continue unchecked.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Plastic Pollution Hotspots</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&h=400&fit=crop" 
                alt="Ocean garbage patch" 
                className="rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Great Pacific Garbage Patch</h4>
              <p className="text-gray-700">
                The largest accumulation zone spans 1.6 million square kilometers - twice the size of Texas. It contains an estimated 1.8 trillion pieces of plastic weighing 80,000 metric tons.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop" 
                alt="Beach plastic pollution" 
                className="rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Southeast Asian Rivers</h4>
              <p className="text-gray-700">
                Ten rivers, eight in Asia, account for 90% of plastic entering the ocean. The Yangtze River alone contributes 1.5 million tons annually, highlighting the need for targeted intervention.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 border border-blue-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Impact on Marine Life</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">700+</div>
              <div className="text-gray-700 font-semibold">Species Affected</div>
              <p className="text-sm text-gray-600 mt-2">Marine animals harmed by plastic pollution</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">100K</div>
              <div className="text-gray-700 font-semibold">Marine Deaths</div>
              <p className="text-sm text-gray-600 mt-2">Annually from plastic ingestion</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-600 mb-2">90%</div>
              <div className="text-gray-700 font-semibold">Seabirds</div>
              <p className="text-sm text-gray-600 mt-2">Have plastic in their stomachs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">52%</div>
              <div className="text-gray-700 font-semibold">Sea Turtles</div>
              <p className="text-sm text-gray-600 mt-2">Have ingested plastic debris</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              The Solution: Plastic Credits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How plastic credits create economic incentives to solve the plastic crisis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-100 p-4 rounded-xl w-fit mb-6">
                <Recycle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Economic Value</h3>
              <p className="text-gray-700 leading-relaxed">
                Plastic credits assign monetary value to waste plastic, making collection and recycling financially viable. Communities earn income by collecting plastic, creating sustainable livelihoods while cleaning the environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Verified Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Independent verification ensures every credit represents real plastic removed from nature. Transparent tracking prevents fraud and double-counting, maintaining market integrity and environmental credibility.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 p-4 rounded-xl w-fit mb-6">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Scalable Action</h3>
              <p className="text-gray-700 leading-relaxed">
                Market mechanisms scale faster than regulations alone. Companies worldwide can instantly fund cleanup projects, creating immediate impact while building long-term waste management infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Plastic Recovery Movement
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Every plastic credit purchased removes waste from our oceans and communities while supporting sustainable livelihoods and circular economy infrastructure
          </p>
          <div className="flex justify-center">
            {/* <button className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all">
              Download Complete Guide
            </button> */}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-1">45M kg</div>
              <div className="text-sm text-blue-100">Plastic Removed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">185K+</div>
              <div className="text-sm text-blue-100">Jobs Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">8,500+</div>
              <div className="text-sm text-blue-100">Communities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}