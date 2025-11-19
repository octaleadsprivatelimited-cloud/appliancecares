import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Commercial Services', path: '/commercial-services' },
    { label: 'Emergency Repairs', path: '/emergency-repairs' },
    { label: 'Maintenance Plans', path: '/maintenance-plans' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Support Center', path: '/support-center' },
  ];

  // Main navigation links for desktop header
  const mainNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-purple-100"
    >
      <nav className="container-custom py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo with Technician Illustration */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            {/* Technician Illustration */}
            <div className="relative hidden sm:block">
              <svg
                width="40"
                height="50"
                viewBox="0 0 60 70"
                className="flex-shrink-0"
              >
                {/* Head */}
                <circle cx="30" cy="18" r="8" fill="#FEF3C7" />
                {/* Yellow Hard Hat */}
                <ellipse cx="30" cy="15" rx="10" ry="5" fill="#FCD34D" />
                <rect x="25" y="10" width="10" height="3" fill="#F59E0B" />
                {/* Light Blue Shirt */}
                <rect x="23" y="26" width="14" height="20" rx="2" fill="#93C5FD" />
                {/* Arms Crossed */}
                <rect x="18" y="30" width="8" height="12" rx="4" fill="#93C5FD" />
                <rect x="34" y="30" width="8" height="12" rx="4" fill="#93C5FD" />
                {/* Dark Blue Overalls */}
                <rect x="22" y="40" width="16" height="28" rx="2" fill="#1E3A8A" />
                {/* Brown Tool Belt */}
                <rect x="20" y="45" width="20" height="4" fill="#92400E" />
                {/* Legs */}
                <rect x="24" y="62" width="6" height="8" fill="#1E3A8A" />
                <rect x="30" y="62" width="6" height="8" fill="#1E3A8A" />
              </svg>
            </div>

            {/* Logo Text */}
            <div className="flex items-baseline">
              <span className="text-xl md:text-2xl font-bold text-purple-900">
                appliancecares
              </span>
            </div>
          </Link>

          {/* Right Section - Utility Elements */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Phone Button */}
            <a
              href="tel:+919311587715"
              className="hidden md:flex items-center space-x-1.5 bg-purple-800 hover:bg-purple-900 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors duration-300 shadow-md text-xs md:text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91-9311587715</span>
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 text-gray-700 hover:text-purple-800 font-medium transition-colors duration-300 rounded-lg hover:bg-purple-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center relative bg-white rounded-lg border border-purple-300 shadow-sm px-2.5 py-1.5 min-w-[220px]">
              <svg
                className="w-4 h-4 text-purple-400 mr-1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-gray-600 placeholder-gray-400 text-xs"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-purple-800 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Reference Style */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-white z-[70] lg:hidden overflow-y-auto"
              >
                <div className="min-h-full flex flex-col">
                  {/* Header with Logo and Close Button */}
                  <div className="flex justify-between items-center px-6 pt-16 pb-6 border-b border-gray-100">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                      {/* Technician Illustration */}
                      <div className="relative">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 60 70"
                          className="flex-shrink-0"
                        >
                          {/* Head */}
                          <circle cx="30" cy="18" r="8" fill="#FEF3C7" />
                          {/* Yellow Hard Hat */}
                          <ellipse cx="30" cy="15" rx="10" ry="5" fill="#FCD34D" />
                          <rect x="25" y="10" width="10" height="3" fill="#F59E0B" />
                          {/* Light Blue Shirt */}
                          <rect x="23" y="26" width="14" height="20" rx="2" fill="#93C5FD" />
                          {/* Arms Crossed */}
                          <rect x="18" y="30" width="8" height="12" rx="4" fill="#93C5FD" />
                          <rect x="34" y="30" width="8" height="12" rx="4" fill="#93C5FD" />
                          {/* Dark Blue Overalls */}
                          <rect x="22" y="40" width="16" height="28" rx="2" fill="#1E3A8A" />
                          {/* Brown Tool Belt */}
                          <rect x="20" y="45" width="20" height="4" fill="#92400E" />
                          {/* Legs */}
                          <rect x="24" y="62" width="6" height="8" fill="#1E3A8A" />
                          <rect x="30" y="62" width="6" height="8" fill="#1E3A8A" />
                        </svg>
                      </div>

                      {/* Logo Text */}
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-purple-900 leading-tight">
                          appliancecares
                        </span>
                      </div>
                    </Link>

                    {/* Close Button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      onClick={closeMobileMenu}
                      className="w-8 h-8 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                      aria-label="Close menu"
                    >
                      <svg
                        className="w-6 h-6 text-gray-900"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Navigation Links - Same as Desktop */}
                  <nav className="flex-1 px-6 pt-6 pb-0">
                    {mainNavLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.15 + index * 0.03,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        <Link
                          to={link.path}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-gray-700 font-medium transition-colors duration-300 hover:text-purple-800"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Call Button - At Bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.15 + mainNavLinks.length * 0.03,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="px-6 pt-0 pb-12"
                  >
                    <a
                      href="tel:+919311587715"
                      onClick={closeMobileMenu}
                      className="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-200 shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call: +91-9311587715</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

