import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, User, ChevronLeft, XCircle, ShieldCheck, MessageCircle, Activity, Globe, Cpu, Database, WalletIcon, Clock, AlertTriangle, Bell, Palette, BookOpen, Home, ChevronDown, Settings, Shield, Zap, DollarSign, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../components/Logo';
import { WhitelistModal } from '../components/WhitelistModal';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface Theme {
  name: string;
  botBg: string;
  botText: string;
  userBg: string;
  userText: string;
  chatBg: string;
}

interface TradingSettings {
  quickMode: boolean;
  antiMEV: boolean;
  quickBuyAmount: string;
  maxFeeGwei: number;
}

const themes: Theme[] = [
  {
    name: 'Light',
    botBg: 'bg-gray-50',
    botText: 'text-gray-800',
    userBg: 'bg-blue-50',
    userText: 'text-gray-800',
    chatBg: 'bg-white'
  },
  {
    name: 'Dark',
    botBg: 'bg-gray-800',
    botText: 'text-gray-100',
    userBg: 'bg-blue-900',
    userText: 'text-gray-100',
    chatBg: 'bg-gray-900'
  },
  {
    name: 'Soft Blue',
    botBg: 'bg-blue-50',
    botText: 'text-gray-800',
    userBg: 'bg-indigo-50',
    userText: 'text-gray-800',
    chatBg: 'bg-white'
  }
];

function NetworkStatus() {
  const [blockHeight, setBlockHeight] = useState(31842967);
  const [tps, setTps] = useState(4298);
  const [health, setHealth] = useState(98.9);

  useEffect(() => {
    const updateMetrics = () => {
      setBlockHeight(prev => prev + Math.floor(Math.random() * 10) + 5);
      setTps(Math.floor(Math.random() * 700) + 3800);
      setHealth(97.5 + Math.random() * 2.4);
    };

    const interval = setInterval(updateMetrics, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-800 flex items-center">
          <Globe className="w-4 h-4 mr-2 text-blue-600" />
          Network Status
        </h3>
        <span className="text-blue-600 text-xs font-medium px-2 py-1 bg-blue-50 rounded-full">
          Mainnet
        </span>
      </div>
      <div className="grid gap-3">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Block Height</span>
            <motion.span 
              key={blockHeight}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-600 text-sm font-medium"
            >
              {blockHeight.toLocaleString()}
            </motion.span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">TPS</span>
            <motion.div 
              key={tps}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-green-600 text-sm font-medium mr-1">{tps.toLocaleString()}</span>
              <span className="text-green-600 text-xs">↑</span>
            </motion.div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Network Health</span>
            <motion.span 
              key={health}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-600 text-sm font-medium"
            >
              {health.toFixed(1)}%
            </motion.span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              animate={{ width: `${health}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function NodeStatus() {
  const [responseTime, setResponseTime] = useState(32);
  const [networkLoad, setNetworkLoad] = useState(47);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateMetrics = () => {
      setResponseTime(Math.floor(Math.random() * 35) + 25);
      setNetworkLoad(Math.floor(Math.random() * 40) + 30);
      
      if (Math.random() > 0.999) {
        setIsOnline(false);
        setTimeout(() => setIsOnline(true), 5000);
      }
    };

    const interval = setInterval(updateMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-800 flex items-center">
          <Activity className="w-4 h-4 mr-2 text-blue-600" />
          System Status
        </h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full transition-colors ${
          isOnline ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        }`}>
          {isOnline ? 'Operational' : 'Degraded'}
        </span>
      </div>
      <div className="grid gap-3">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm flex items-center">
              <Cpu className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
              Node Status
            </span>
            <span className={`text-sm font-medium flex items-center transition-colors ${
              isOnline ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-2 ${
                isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`} />
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-purple-600" />
              Response Time
            </span>
            <motion.span 
              key={responseTime}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-600 text-sm font-medium"
            >
              {responseTime}ms
            </motion.span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm flex items-center">
              <Database className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
              Network Load
            </span>
            <motion.span 
              key={networkLoad}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-600 text-sm font-medium"
            >
              {networkLoad}%
            </motion.span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ width: `${networkLoad}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletStatus() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-800 flex items-center">
          <WalletIcon className="w-4 h-4 mr-2 text-blue-600" />
          Wallet Status
        </h3>
        <span className="text-red-600 text-xs font-medium px-2 py-1 bg-red-50 rounded-full flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5" />
          Disconnected
        </span>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-center h-20">
          <div className="text-center">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Connect wallet to start trading</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-800 flex items-center">
          <Bell className="w-4 h-4 mr-2 text-blue-600" />
          Recent Activity
        </h3>
        <span className="text-gray-600 text-xs">Last 24h</span>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-center h-24">
          <div className="text-center">
            <Activity className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClockDisplay() {
  const [time, setTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="text-gray-600 text-sm font-medium">{time}</span>;
}

export function Terminal() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '0',
    type: 'bot',
    content: "Welcome to Verbot Terminal. I'm your AI trading assistant. How can I help you today?",
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [tradingSettings, setTradingSettings] = useState<TradingSettings>({
    quickMode: false,
    antiMEV: true,
    quickBuyAmount: '0.1',
    maxFeeGwei: 30
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const walletDropdownRef = useRef<HTMLDivElement>(null);
  const settingsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setShowThemeDropdown(false);
      }
      if (walletDropdownRef.current && !walletDropdownRef.current.contains(event.target as Node)) {
        setShowWalletDropdown(false);
      }
      if (settingsDropdownRef.current && !settingsDropdownRef.current.contains(event.target as Node)) {
        setShowSettingsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, but you need to connect your wallet first to use the terminal.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleConnectWallet = () => {
    setShowWhitelistModal(true);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            opacity: 0.5
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05), transparent 70%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.05), transparent 70%)
            `
          }}
        />
      </div>

      <div className={`absolute top-8 left-8 right-8 flex justify-between items-center z-10 transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Home</span>
          </Link>
          <Link 
            to="/docs" 
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <BookOpen className="w-5 h-5" />
            <span>Documentation</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative" ref={settingsDropdownRef}>
            <button
              onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-gray-400 cursor-not-allowed"
              disabled={true}
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm">Trading Settings</span>
            </button>
          </div>

          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className={`bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl border border-gray-200 hover:border-blue-200 px-8 py-3 text-gray-800 font-medium transform hover:scale-[1.02] ${
              isConnecting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto pt-24 px-8 relative">
        <div className="grid grid-cols-12 gap-8 h-[calc(100vh-8rem)]">
          <div className="col-span-3 space-y-6 h-full overflow-y-auto pr-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <NodeStatus />
              <NetworkStatus />
              <WalletStatus />
              <RecentActivity />
            </div>
          </div>

          <div className="col-span-9 h-full flex flex-col">
            <div className={`${currentTheme.chatBg} border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full flex flex-col transition-colors duration-200`}>
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Logo className="w-8 h-8" />
                  </div>
                  <h2 className="text-gray-800 font-medium">Verbot Terminal</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative" ref={themeDropdownRef}>
                    <button
                      onClick={() => setShowThemeDropdown(!showThemeDropdown)}
                      className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Palette className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">Theme</span>
                    </button>
                    
                    {showThemeDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                        {themes.map((theme) => (
                          <button
                            key={theme.name}
                            onClick={() => {
                              setCurrentTheme(theme);
                              setShowThemeDropdown(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                              currentTheme.name === theme.name ? 'text-blue-600' : 'text-gray-700'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full ${theme.userBg}`} />
                            <span>{theme.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>



                  <ClockDisplay />
                </div>
              </div>
              
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-6 space-y-6"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' ? (
                      <>
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Logo className="w-11 h-11" />
                        </div>
                        <div className={`${currentTheme.botBg} rounded-lg p-4 max-w-[80%] transition-colors duration-200`}>
                          <p className={`${currentTheme.botText}`}>{message.content}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`${currentTheme.userBg} rounded-lg p-4 max-w-[80%] transition-colors duration-200`}>
                          <p className={`${currentTheme.userText}`}>{message.content}</p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
                
                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse delay-75" />
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse delay-150" />
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    disabled
                    placeholder="Connect your wallet to start trading"
                    className="w-full bg-gray-50 text-gray-800 placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-not-allowed"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <WhitelistModal 
        isOpen={showWhitelistModal} 
        onClose={() => setShowWhitelistModal(false)} 
      />
    </div>
  );
}
