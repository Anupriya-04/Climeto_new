import React, { useState, useEffect } from "react";

const TestCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
      title: "Renewable Energy Solutions",
      description: "Leading the way in sustainable wind power generation",
      overlay: "from-blue-900/70 to-indigo-900/50"
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
      title: "Solar Energy Innovation",
      description: "Harnessing the power of the sun for a cleaner future",
      overlay: "from-orange-900/70 to-yellow-900/50"
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80",
      title: "Forest Conservation",
      description: "Protecting our planet's lungs for future generations",
      overlay: "from-green-900/70 to-emerald-900/50"
    },
    {
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80",
      title: "Waste Management",
      description: "Innovative solutions for a circular economy",
      overlay: "from-slate-900/70 to-gray-900/50"
    },
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80",
      title: "Global Sustainability",
      description: "Working together for a sustainable planet",
      overlay: "from-blue-900/70 to-purple-900/50"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-screen max-h-[800px] min-h-[400px] bg-gray-900 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
              i === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-lg px-4">
                {slide.description}
              </p>
             
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on small screens */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center text-white transition-all z-10 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 lg:w-7 lg:h-7 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center text-white transition-all z-10 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 lg:w-7 lg:h-7 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-10 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? "bg-white w-8 sm:w-10 h-2.5 sm:h-3"
                : "bg-white/50 hover:bg-white/75 w-2.5 sm:w-3 h-2.5 sm:h-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div 
          className={`h-full bg-white transition-all ${isAutoPlaying ? 'duration-[5000ms]' : 'duration-0'}`}
          style={{ 
            width: isAutoPlaying ? '100%' : '0%',
            transition: isAutoPlaying ? 'width 5000ms linear' : 'none'
          }}
          key={currentSlide}
        ></div>
      </div>
    </section>
  );
};

export default TestCarousel;