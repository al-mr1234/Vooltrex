import React, { useState } from 'react';
import Logo from '../../img/VooltrexBlanco.png';
import { FiSearch, FiSettings } from 'react-icons/fi';

export default function Sec1() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-black w-full shadow-sm">
      <div className="flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 h-16 lg:h-20 overflow-hidden">
          <img
            src={Logo}
            className="h-28 object-contain"
            alt="Vooltrex Logo"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex ml-auto mr-4 space-x-8 font-medium items-center">
          {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 dark:text-white relative hover:text-yellow-500 dark:hover:text-yellow-400 transition"
            >
              <span className="hover:border-b-2 border-yellow-400 pb-1 transition duration-300">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search field */}
          <div className={`relative transition-all duration-300 overflow-hidden ${showSearch ? 'w-36 sm:w-48 ml-2' : 'w-0'} ${showSearch || isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <FiSearch size={20} className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-2 py-2 border-b border-transparent focus:border-yellow-500 text-sm text-gray-700 bg-transparent focus:outline-none dark:text-white dark:border-gray-600"
            />
          </div>

          {/* Toggle search */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiSearch size={24} />
          </button>

          {/* Settings */}
          <div className="relative">
            <button
              onClick={() => setShowSettings((prev) => !prev)}
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiSettings size={24} />
            </button>

            {showSettings && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition">
                    Idioma
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition">
                    Oscuro/claro
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition border-t border-gray-200 dark:border-gray-600">
                    Nose
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-yellow-500 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-3 mt-4">
            {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 dark:text-white relative hover:text-yellow-500 dark:hover:text-yellow-400 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <span className="hover:border-b-2 border-yellow-400 pb-1 transition duration-300">
                  {item}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile search visible in menu */}
          {!showSearch && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-2 py-2 border-b border-gray-300 focus:border-yellow-500 text-sm text-gray-700 bg-transparent focus:outline-none dark:text-white dark:border-gray-600"
              />
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
