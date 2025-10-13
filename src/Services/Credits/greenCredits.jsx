import React from 'react';
import { Leaf, TrendingUp, Wind, Zap, Droplets, Trees, Waves, Factory, Users, Rocket } from 'lucide-react';

export default function CarbonTradingPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute top-20 right-20 opacity-10">
          <Leaf className="w-64 h-64 text-green-500" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Leaf className="w-48 h-48 text-green-500 transform rotate-45" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-green-100">
            <Leaf className="w-4 h-4 text-green-500" />
            <span className="text-green-600 font-medium text-sm">Sustainable Carbon Trading</span>
          </div>
          
          <h1 className="text-7xl font-bold mb-4">
            Trade Carbon<br />
            <span className="text-green-500">Credits Naturally</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A platform for buying, selling, and tracking verified green credits.<br />
            Join the <span className="text-green-600 font-semibold">sustainable finance movement</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-green-500 mb-2">2.4M</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Credits Traded</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-green-500 mb-2">156K</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Active Users</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-green-500 mb-2">$45M</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Trading Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-green-100">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-600 font-medium text-sm">Live Market</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-4">
              Green Credit <span className="text-green-500">Marketplace</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trade verified carbon credits from renewable energy and<br />
              conservation projects worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Forest Carbon */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <Leaf className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-xs font-medium">Verified</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Forest Carbon</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">$24.50</span>
                <span className="text-green-600 font-medium">+12.5%</span>
              </div>
              
              <p className="text-gray-600 mb-6">Vol: <span className="font-semibold">45.2K</span> credits</p>
              
             
            </div>

            {/* Wind Energy */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <Wind className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-xs font-medium">Verified</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Wind Energy</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">$18.30</span>
                <span className="text-green-600 font-medium">+8.2%</span>
              </div>
              
              <p className="text-gray-600 mb-6">Vol: <span className="font-semibold">32.1K</span> credits</p>
              
            
            </div>

            {/* Solar Power */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <Zap className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-xs font-medium">Verified</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Solar Power</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">$21.75</span>
                <span className="text-green-600 font-medium">+15.7%</span>
              </div>
              
              <p className="text-gray-600 mb-6">Vol: <span className="font-semibold">58.9K</span> credits</p>
              
              
            </div>

            {/* Ocean Blue */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <Droplets className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-xs font-medium">Verified</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Ocean Blue</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">$16.90</span>
                <span className="text-green-600 font-medium">+6.3%</span>
              </div>
              
              <p className="text-gray-600 mb-6">Vol: <span className="font-semibold">28.4K</span> credits</p>
              
             
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl font-bold mb-6">
              Real<br />
              Impact,<br />
              <span className="text-green-500">Real Time</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Every credit traded on our platform contributes to verified environmental projects. Track the <span className="text-green-600 font-semibold">global impact</span> of sustainable finance in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-100 rounded-xl p-4 w-fit mb-6">
                <Trees className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-5xl font-bold mb-2">1.2M</div>
              <div className="text-xl font-semibold mb-2">Trees Planted</div>
              <div className="text-gray-500">Carbon offset projects</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-100 rounded-xl p-4 w-fit mb-6">
                <Waves className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-5xl font-bold mb-2">850K</div>
              <div className="text-xl font-semibold mb-2">Ocean Credits</div>
              <div className="text-gray-500">Marine conservation</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-100 rounded-xl p-4 w-fit mb-6">
                <Factory className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-5xl font-bold mb-2">2.5M</div>
              <div className="text-xl font-semibold mb-2">Tons CO₂ Offset</div>
              <div className="text-gray-500">Total carbon reduction</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-100 rounded-xl p-4 w-fit mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-5xl font-bold mb-2">156K</div>
              <div className="text-xl font-semibold mb-2">Global Traders</div>
              <div className="text-gray-500">Active community</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center border border-green-100">
            <div className="bg-green-500 rounded-full p-6 w-fit mx-auto mb-8">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-5xl font-bold mb-4">
              Ready to Make an<br />
              <span className="text-green-500">Environmental Impact?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of traders and organizations making a difference. Start trading verified green credits today and contribute to a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
             
             
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div>
                <div className="font-semibold mb-1 text-gray-400 uppercase text-xs">Certified By</div>
                <div className="font-bold text-gray-800">Climate Trust</div>
              </div>
              <div>
                <div className="font-semibold mb-1 text-gray-400 uppercase text-xs">Verified By</div>
                <div className="font-bold text-gray-800">Carbon Standards</div>
              </div>
              <div>
                <div className="font-semibold mb-1 text-gray-400 uppercase text-xs">Powered By</div>
                <div className="font-bold text-gray-800">Blockchain</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}