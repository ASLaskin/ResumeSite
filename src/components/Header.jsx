import React from 'react';
import { Home, User, Briefcase, Sun, Moon } from 'lucide-react';

const Header = ({ isDark, toggleTheme, currentTime }) => {
    return (
      <header className="relative z-20 px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="animate-fadeInLeft">
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              AL
            </h2>
          </div>
          
          <div className="flex items-center gap-6 animate-fadeInRight">
            <div className={`text-sm font-mono ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {currentTime.toLocaleTimeString()}
            </div>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50' 
                  : 'bg-white/50 text-gray-700 hover:bg-white/80'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>
    );
};

export default Header