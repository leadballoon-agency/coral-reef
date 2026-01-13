/**
 * EmbeddableAgent - Floating AI chat widget for Property Thailand affiliates
 *
 * This component adds a floating chat bubble to your site that connects
 * users to the Property Thailand AI sales/investment agents.
 *
 * Usage:
 *   <EmbeddableAgent
 *     developmentSlug="copacabana-jomtien"
 *     agentType="sales"
 *   />
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Loader2,
  User,
  X,
  Building,
  MessageCircle
} from 'lucide-react';
import { callPlatformChat, getAffiliateCode } from '../lib/platformApi';

// Supported languages
const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'th', flag: '🇹🇭', name: 'ไทย' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
];

// Placeholder text per language
const PLACEHOLDER_MESSAGES = {
  en: "Ask about properties, pricing, investment...",
  th: "ถามเกี่ยวกับอสังหา ราคา การลงทุน...",
  de: "Fragen Sie nach Immobilien, Preisen, Investitionen...",
  fr: "Posez vos questions sur les propriétés, prix, investissements...",
  es: "Pregunte sobre propiedades, precios, inversiones...",
};

// Welcome messages per language
const WELCOME_MESSAGES = {
  en: "Hi! I'm your Property Thailand agent. I can help you explore Copacabana Coral Reef Jomtien - a stunning 55-storey beachfront development. What would you like to know?",
  th: "สวัสดีครับ/ค่ะ! ผม/ดิฉันเป็นตัวแทนของ Property Thailand ยินดีช่วยให้ข้อมูลเกี่ยวกับ Copacabana Coral Reef Jomtien มีอะไรให้ช่วยครับ/คะ?",
  de: "Hallo! Ich bin Ihr Property Thailand Agent. Ich kann Ihnen Copacabana Coral Reef Jomtien vorstellen - ein beeindruckendes 55-stöckiges Strandprojekt. Was möchten Sie wissen?",
  fr: "Bonjour! Je suis votre agent Property Thailand. Je peux vous présenter Copacabana Coral Reef Jomtien - un impressionnant développement de 55 étages en bord de mer. Que souhaitez-vous savoir?",
  es: "¡Hola! Soy su agente de Property Thailand. Puedo ayudarle a explorar Copacabana Coral Reef Jomtien - un impresionante desarrollo de 55 pisos frente al mar. ¿Qué le gustaría saber?"
};

export function EmbeddableAgent({
  developmentSlug = 'copacabana-jomtien',
  agentType = 'sales',
  accentColor = '#14b8a6',
  buttonLabel = 'Chat with us'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [affiliateCode] = useState(() => getAffiliateCode());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Log affiliate code on mount (for debugging)
  useEffect(() => {
    if (affiliateCode) {
      console.log('🔗 Affiliate code detected:', affiliateCode);
    }
  }, [affiliateCode]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !showLanguageSelect && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, showLanguageSelect]);

  // Handle language selection
  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    setShowLanguageSelect(false);

    // Add welcome message
    setMessages([{
      id: `welcome-${Date.now()}`,
      role: 'assistant',
      content: WELCOME_MESSAGES[langCode] || WELCOME_MESSAGES.en,
      timestamp: new Date()
    }]);
  };

  // Handle sending a message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await callPlatformChat(
        userMessage.content,
        developmentSlug,
        messages.map(msg => ({ role: msg.role, content: msg.content })),
        {
          agentType,
          affiliateCode
        }
      );

      setMessages(prev => [...prev, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "I'm having trouble connecting. Please try again or contact us on WhatsApp: +44 7775 978555",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Quick action buttons
  const quickActions = agentType === 'investment'
    ? ["ROI calculation", "Payment plans", "Foreign ownership"]
    : ["Show units", "Prices", "Book viewing"];

  // Gradient style for accent color
  const gradientStyle = {
    background: `linear-gradient(135deg, ${accentColor}, ${adjustColor(accentColor, -20)})`
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl text-white font-medium"
            style={gradientStyle}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">{buttonLabel}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[550px] max-h-[calc(100vh-100px)] bg-slate-900 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-white/10"
              style={gradientStyle}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    {agentType === 'investment' ? 'Investment Agent' : 'Sales Agent'}
                  </h3>
                  <p className="text-white/80 text-xs">Property Thailand</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {showLanguageSelect ? (
                /* Language Selection */
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={gradientStyle}
                  >
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Welcome!
                  </h3>
                  <p className="text-white/60 text-sm mb-6 max-w-[280px]">
                    I can help you explore Copacabana Coral Reef Jomtien. Choose your language to get started.
                  </p>

                  {affiliateCode && (
                    <p className="text-xs text-teal-400 mb-4">
                      Referred by: {affiliateCode}
                    </p>
                  )}

                  <div className="grid grid-cols-1 gap-2 w-full max-w-[280px]">
                    {LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all bg-white/10 text-white hover:bg-white/20"
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chat Interface */
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map(message => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === 'user' ? 'bg-blue-500' : ''
                          }`}
                          style={message.role === 'assistant' ? gradientStyle : {}}
                        >
                          {message.role === 'user'
                            ? <User className="w-4 h-4 text-white" />
                            : <Building className="w-4 h-4 text-white" />
                          }
                        </div>
                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-blue-500 text-white rounded-br-md'
                            : 'bg-white/10 text-white rounded-bl-md'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={gradientStyle}
                        >
                          <Building className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
                          <Loader2 className="w-5 h-5 text-white/60 animate-spin" />
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                    <div className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={PLACEHOLDER_MESSAGES[selectedLanguage] || PLACEHOLDER_MESSAGES.en}
                        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-teal-500 text-sm"
                        disabled={isLoading}
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-colors disabled:opacity-50"
                        style={gradientStyle}
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                      {quickActions.map((action, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setInputValue(action)}
                          className="flex-shrink-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs hover:bg-white/10 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper: Adjust color brightness
function adjustColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default EmbeddableAgent;
