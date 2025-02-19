import React, { useState, useEffect } from 'react';
import { XCircle, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};

export function WhitelistModal({ isOpen, onClose }: WhitelistModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden relative"
              variants={modalVariants}
              style={{
                maxWidth: '460px',
                width: '100%',
                boxShadow: '0 0 50px rgba(59, 130, 246, 0.1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors transform hover:rotate-90 duration-200 z-10"
              >
                <XCircle className="w-5 h-5" />
              </button>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center border-b border-gray-200">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping" />
                    <Logo className="w-16 h-16 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Private Beta Access
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Currently in private beta testing phase
                  </p>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="flex items-start space-x-3 text-xs text-gray-600 bg-gray-50 rounded-lg p-3">
                    <ShieldCheck className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p>
                      Beta access is carefully managed to ensure optimal performance. We'll be gradually expanding access as we scale.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center text-gray-800 font-medium mb-4">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-lg mr-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Request Beta Access
                      </span>
                    </div>
                    <div className="grid gap-3">
                      <motion.a
                        href="#"
                        className="group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white hover:bg-gray-50 transition-all border border-gray-200 hover:border-blue-200">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800 mb-0.5">Telegram</div>
                            <div className="text-xs text-blue-600 font-medium">@Verbot_Whitelister</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-blue-600 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                        </div>
                      </motion.a>

                      <motion.a
                        href="#"
                        className="group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white hover:bg-gray-50 transition-all border border-gray-200 hover:border-purple-200">
                          <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800 mb-0.5">Discord</div>
                            <div className="text-xs text-purple-600 font-medium">@miguel.cabrita</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-purple-600 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  onClick={onClose}
                  className="w-full mt-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-800 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 border border-gray-200 hover:border-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}