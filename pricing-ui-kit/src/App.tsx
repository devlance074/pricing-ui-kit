import React, { useState } from 'react';
import { Sun, Moon, Palette, ChevronDown } from 'lucide-react';
import ClassicCards from './components/ClassicCards';
import GlassmorphismStyle from './components/GlassmorphismStyle';
import CenteredColumn from './components/CenteredColumn';
import SplitLayout from './components/SplitLayout';
import DarkTechStyle from './components/DarkTechStyle';

const pricingPages = [
  { id: 'classic', name: 'Classic', component: ClassicCards, color: 'indigo' },
  { id: 'glass', name: 'Glass', component: GlassmorphismStyle, color: 'purple' },
  { id: 'centered', name: 'Minimal', component: CenteredColumn, color: 'emerald' },
  { id: 'split', name: 'Split', component: SplitLayout, color: 'rose' },
  { id: 'dark', name: 'Tech', component: DarkTechStyle, color: 'cyan' },
];

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500',
    hover: 'hover:bg-indigo-600',
    text: 'text-indigo-600',
    lightBg: 'bg-indigo-50',
    ring: 'ring-indigo-500',
    shadow: 'shadow-indigo-500/25'
  },
  purple: {
    bg: 'bg-purple-500',
    hover: 'hover:bg-purple-600',
    text: 'text-purple-600',
    lightBg: 'bg-purple-50',
    ring: 'ring-purple-500',
    shadow: 'shadow-purple-500/25'
  },
  emerald: {
    bg: 'bg-emerald-500',
    hover: 'hover:bg-emerald-600',
    text: 'text-emerald-600',
    lightBg: 'bg-emerald-50',
    ring: 'ring-emerald-500',
    shadow: 'shadow-emerald-500/25'
  },
  rose: {
    bg: 'bg-rose-500',
    hover: 'hover:bg-rose-600',
    text: 'text-rose-600',
    lightBg: 'bg-rose-50',
    ring: 'ring-rose-500',
    shadow: 'shadow-rose-500/25'
  },
  cyan: {
    bg: 'bg-cyan-500',
    hover: 'hover:bg-cyan-600',
    text: 'text-cyan-600',
    lightBg: 'bg-cyan-50',
    ring: 'ring-cyan-500',
    shadow: 'shadow-cyan-500/25'
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('classic');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ActiveComponent = pricingPages.find(page => page.id === activeTab)?.component || ClassicCards;
  const activePageData = pricingPages.find(page => page.id === activeTab);
  const activeColors = colorMap[activePageData?.color || 'indigo'];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Streamlined Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/95 border-gray-800' 
          : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Section */}
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg ${activeColors.bg} flex items-center justify-center transition-all duration-300 shadow-lg ${activeColors.shadow}`}>
                <Palette className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-lg font-bold transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Pricing Kit
                </h1>
                <p className={`text-xs transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  5 Modern Designs
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {pricingPages.map((page) => {
                const colors = colorMap[page.color];
                const isActive = activeTab === page.id;
                
                return (
                  <button
                    key={page.id}
                    onClick={() => setActiveTab(page.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? `${colors.bg} text-white shadow-lg ${colors.shadow} transform scale-105`
                        : `${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                    }`}
                  >
                    <span className="relative z-10">{page.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-64 opacity-100 pb-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="grid grid-cols-2 gap-2 pt-4">
              {pricingPages.map((page) => {
                const colors = colorMap[page.color];
                const isActive = activeTab === page.id;
                
                return (
                  <button
                    key={page.id}
                    onClick={() => {
                      setActiveTab(page.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? `${colors.bg} text-white shadow-lg ${colors.shadow}`
                        : `${darkMode ? 'text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100'}`
                    }`}
                  >
                    {page.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Page Indicator */}
        <div 
          className={`h-0.5 ${activeColors.bg} transition-all duration-300`}
          style={{ 
            width: '100%',
            background: `linear-gradient(90deg, transparent 0%, ${activeColors.bg.replace('bg-', '')} 50%, transparent 100%)`
          }}
        ></div>
      </nav>

      {/* Content */}
      <main className="flex-1">
        <ActiveComponent darkMode={darkMode} />
      </main>

      {/* Floating Status Indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className={`${
          darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
        } backdrop-blur-sm rounded-2xl shadow-lg border p-4 transition-all duration-300`}>
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${activeColors.bg} animate-pulse`}></div>
            <div>
              <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {activePageData?.name} Style
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;