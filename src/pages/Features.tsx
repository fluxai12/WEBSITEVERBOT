import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Network, Shield, Zap, BarChart2, Database, MessageCircle, Cpu, Lock, Code, Activity, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Features() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeArchSection, setActiveArchSection] = useState<number | null>(null);

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

  const architectureSections = [
    {
      title: "Natural Language Processing Pipeline",
      description: "Our advanced NLP pipeline processes trading commands with high accuracy and contextual understanding.",
      icon: <Code className="w-5 h-5" />,
      features: [
        "Transformer-based architecture",
        "Custom attention mechanisms",
        "Context-aware semantic analysis",
        "Multi-language support"
      ]
    },
    {
      title: "Machine Learning Core",
      description: "Sophisticated machine learning models power our predictive analytics and risk assessment systems.",
      icon: <Brain className="w-5 h-5" />,
      features: [
        "Deep neural networks",
        "Real-time market modeling",
        "Adaptive learning systems",
        "Backtesting framework"
      ]
    },
    {
      title: "High-Performance Infrastructure",
      description: "Precisely shaped infrastructure ensures reliable and rapid execution of trading operations.",
      icon: <Activity className="w-5 h-5" />,
      features: [
        "Global server distribution",
        "Load balancing",
        "Redundant systems",
        "24/7 monitoring"
      ]
    },
    {
      title: "Security Framework",
      description: "Multi-layered security system protecting user assets and trading operations.",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Agent signature to protect your funds",
        "Our Agent can only place trades",
        "Regular security audits",
        "Your private key stays safe"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-24 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="grid grid-cols-3 h-full items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Verbot Logo" 
                className="w-24 h-24 object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Social Links - Centered */}
            <div className="flex justify-center items-center space-x-8">
              <a 
                href="https://twitter.com/VerbotAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform">
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
            </div>

            {/* Empty div for grid balance */}
            <div></div>
          </div>
        </div>
      </div>

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
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className={`space-y-24 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center relative"
          >
            <h1 className="text-8xl font-bold mb-6 relative">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#3e7de7] to-[#3e7de7]/70 bg-clip-text text-transparent">VERBOT AI</span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Discover the power of AI-driven trading with our comprehensive feature set.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-6 mb-16">
              <Link 
                to="/terminal"
                className="group relative inline-flex items-center px-8 py-3 text-lg font-medium overflow-hidden"
              >
                <span className="absolute inset-0 border border-black/20 rounded-none group-hover:scale-105 transition-transform duration-500" />
                <span className="relative flex items-center text-black">
                  Launch Terminal
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link 
                to="/docs"
                className="group relative inline-flex items-center px-8 py-3 text-lg font-medium overflow-hidden"
              >
                <span className="absolute inset-0 border border-black/20 rounded-none group-hover:scale-105 transition-transform duration-500" />
                <span className="relative flex items-center text-black">
                  Documentation
                  <BookOpen className="ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Key Features
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "Natural Language Processing",
                  description: "Advanced language models trained for precise command interpretation."
                },
                {
                  icon: <Network className="w-6 h-6" />,
                  title: "Neural Network Architecture",
                  description: "Deep learning models for accurate insights and deep comprehension."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Risk Management",
                  description: "Intelligent position adjustment for optimal risk levels."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Low-Latency Execution",
                  description: "High-performance infrastructure for rapid trade execution."
                },
                {
                  icon: <BarChart2 className="w-6 h-6" />,
                  title: "Market Analysis",
                  description: "Real-time analysis of market conditions and trends."
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Performance Analytics",
                  description: "Detailed insights into trading performance metrics."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="relative border border-black/10 rounded-lg p-6 transition-all duration-500 hover:border-black/20 h-full">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        {React.cloneElement(feature.icon, { className: "text-black transition-transform duration-500 group-hover:scale-110" })}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Architecture Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Technical Architecture
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {architectureSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                  onMouseEnter={() => setActiveArchSection(index)}
                  onMouseLeave={() => setActiveArchSection(null)}
                >
                  <div className="relative border border-black/10 rounded-lg transition-all duration-500 hover:border-black/20 overflow-hidden h-full">
                    <div className="relative z-10 p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                          {React.cloneElement(section.icon, { 
                            className: "text-black transition-transform duration-500 group-hover:scale-110" 
                          })}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold mb-1 flex items-center truncate">
                            {section.title}
                            <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                          </h3>
                          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                            {section.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {section.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex}
                                className="flex items-center space-x-1.5 px-2 py-1 rounded transition-colors"
                              >
                                <div className="w-1 h-1 rounded-full bg-black/40 group-hover:bg-black/60 transition-colors flex-shrink-0" />
                                <span className="text-xs text-gray-600 truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}