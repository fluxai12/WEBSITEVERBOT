import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Logo in top left corner */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-6 z-50"
      >
        <img 
          src="/images/logo.png" 
          alt="Verbot Logo" 
          className="w-24 h-24 object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Enhanced Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `
              perspective(1000px)
              rotateX(${mousePosition.y * 2}deg)
              rotateY(${mousePosition.x * 2}deg)
              translateZ(0)
              scale(1.1)
            `,
            transformOrigin: 'center center',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Secondary Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '160px 160px',
            transform: `
              perspective(1000px)
              rotateX(${mousePosition.y * 3}deg)
              rotateY(${mousePosition.x * 3}deg)
              translateZ(0)
              scale(1.2)
            `,
            transformOrigin: 'center center',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Grid Highlight */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%,
              rgba(0, 0, 0, 0.03) 0%,
              transparent 60%
            )`,
            transition: 'all 0.5s ease-out'
          }}
        />

        {/* Animated Grid Lines */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
          }}
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute w-full h-[2px] bg-black/[0.03]"
              style={{
                top: `${(index + 1) * 20}%`,
                animation: `moveGrid ${10 + index * 2}s linear infinite`,
                transform: `translateX(${mousePosition.x * (20 + index * 5)}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-center relative z-10 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl font-bold mb-6 relative"
          >
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#3e7de7] to-[#3e7de7]/70 bg-clip-text text-transparent">VERBOT AI</span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Execute complex BNB trades with simple commands. Powered by AI for lightning-fast, efficient crypto trading.
          </motion.p>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                to="/features"
                className="group relative inline-flex items-center px-12 py-4 text-lg font-medium overflow-hidden"
              >
                <span className="absolute inset-0 border border-black/20 rounded-none group-hover:scale-105 transition-transform duration-500" />
                <span className="relative flex items-center text-black">
                  Explore Verbot
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center space-x-6"
            >
              <a 
                href="https://twitter.com/VerbotAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <div className="p-2 rounded-none group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">VerbotAi</span>
              </a>
              <a 
                href="https://t.me/verbotai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Telegram</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}