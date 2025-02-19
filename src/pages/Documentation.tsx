import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Documentation() {
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
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-24 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Verbot Logo" 
                className="w-24 h-24 object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Back to Home */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
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

      <div className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className={`space-y-12 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Documentation
                </h1>
                <div className="bg-white/50 border border-gray-200 rounded-lg p-8 space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
                  <p className="text-gray-600">
                    Welcome to Verbot, your AI-driven trading companion on BNB Chain (BSC). Designed for seamless interaction, Verbot leverages cutting-edge natural language understanding to help you manage trades, receive personalized advice, and execute orders securely. By combining advanced AI technology with robust security protocols, Verbot offers a streamlined and safe trading experience. Currently, Verbot is in closed Beta, providing limited access while we refine and improve its features.
                  </p>

                  <h2 className="text-2xl font-semibold text-gray-800 mt-12">Getting Started</h2>
                  <ol className="list-decimal list-inside space-y-4 text-gray-600">
                    <li><strong>Navigate to the Agent:</strong> Begin by clicking on "Launch App" from the Verbot dashboard.</li>
                    <li><strong>Connect Your Wallet:</strong> Link your preferred wallet, such as MetaMask, Trust Wallet, or other compatible options on BNB Chain (BSC).</li>
                    <li><strong>Authenticate Your Session:</strong> Sign a secure message using your wallet to confirm your identity.</li>
                    <li><strong>Sign Your BNB Agent:</strong> Approve the BNB Chain Agent for integration with the BNB Chain API.</li>
                    <li><strong>Start Trading:</strong> Chat with Verbot to execute trades, analyze markets, and manage your portfolio.</li>
                  </ol>

                  <h2 className="text-2xl font-semibold text-gray-800 mt-12">Key Features</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mt-8">Portfolio Management</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>View Current Positions: Check your open positions across spot and perpetual markets</li>
                    <li>View Open Orders (Limit): See all limit orders you have placed</li>
                    <li>Cancel Orders (Limit): Effortlessly cancel any open limit orders</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8">Order Execution</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Spot Trading</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Market Buy/Sell Orders: Execute instant trades at current market price</li>
                        <li>Limit Buy/Sell Orders: Set specific price levels for trades</li>
                        <li>Market Close Positions: Quickly close open positions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Perpetual Trading</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Market Long/Short Orders: Open leveraged positions at market price</li>
                        <li>Limit Long/Short Orders: Set specific price levels for leveraged positions</li>
                        <li>Take Profit/Stop Loss (TP/SL): Set conditions for risk management</li>
                        <li>Market Close Positions: Instantly close perpetual positions</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8">Market Analysis</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Chart Display: View multi-token charts for market trends</li>
                    <li>Chart Analysis: Get key levels analysis from our agent</li>
                    <li>Token Prices: Instant access to current market prices</li>
                    <li>Portfolio Analysis: Detailed performance breakdowns</li>
                    <li>Market Data: Access to comprehensive market metrics</li>
                  </ul>

                  <h2 className="text-2xl font-semibold text-gray-800 mt-12">Security</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Agent Signing:</strong> BNB Chain Agents cannot withdraw funds</li>
                    <li><strong>Wallet Signature:</strong> Secure session authentication</li>
                    <li><strong>Limited Access:</strong> Agent can only place/cancel orders</li>
                    <li><strong>Private Keys:</strong> Your keys remain secure and uncompromised</li>
                  </ul>

                  <h2 className="text-2xl font-semibold text-gray-800 mt-12">Example Usage</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Simple Commands</h3>
                      <div className="space-y-2 mt-4">
                        <code className="block bg-gray-50 p-3 rounded-lg text-blue-600">"Buy X USDC of BNB"</code>
                        <code className="block bg-gray-50 p-3 rounded-lg text-blue-600">"Long BNB x3 with 30 USDC"</code>
                        <code className="block bg-gray-50 p-3 rounded-lg text-blue-600">"What's current X price?"</code>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Complex Commands</h3>
                      <div className="space-y-2 mt-4">
                        <code className="block bg-gray-50 p-3 rounded-lg text-purple-600">"Buy X USDC of BNB then set a sell limit order for all my BNB at +50% current price"</code>
                        <code className="block bg-gray-50 p-3 rounded-lg text-purple-600">"Long BTC x2 with all my USDC then set a TP at +30% and SL at -20%"</code>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-lg text-gray-600">
                      Verbot is redefining trading with AI-driven solutions, robust security, and unparalleled simplicity. Together, let's create a new standard for seamless and intelligent trading. 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}