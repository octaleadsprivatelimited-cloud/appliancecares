import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Testimonial from '../components/Testimonial';

const Home = () => {
  const services = [
    { 
      title: 'RO Service', 
      url: '/services#ro-service',
      image: '/images/services/ro-service.webp',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* RO System - White and blue countertop water purifier */}
          <rect x="25" y="35" width="50" height="45" fill="#FFFFFF" rx="3" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="30" y="40" width="40" height="35" fill="#F3F4F6" rx="2"/>
          {/* Blue parts */}
          <rect x="32" y="42" width="12" height="15" fill="#3B82F6" rx="1"/>
          <rect x="48" y="42" width="12" height="15" fill="#60A5FA" rx="1"/>
          <rect x="32" y="60" width="28" height="8" fill="#2563EB" rx="1"/>
          {/* Faucet */}
          <rect x="45" y="25" width="10" height="12" fill="#9CA3AF" rx="1"/>
          <rect x="48" y="22" width="4" height="4" fill="#6B7280" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Washing Machine', 
      url: '/services#washing-machine',
      image: '/images/services/washing-machine.jpeg',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* White front-loading washing machine */}
          <rect x="20" y="25" width="60" height="55" fill="#FFFFFF" rx="3" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="25" y="30" width="50" height="45" fill="#F9FAFB" rx="2"/>
          {/* Circular door */}
          <circle cx="50" cy="52" r="18" fill="#1F2937" stroke="#111827" strokeWidth="2"/>
          <circle cx="50" cy="52" r="15" fill="#111827"/>
          {/* Control panel */}
          <rect x="30" y="38" width="40" height="6" fill="#9CA3AB" rx="1"/>
          {/* Handles */}
          <rect x="70" y="42" width="4" height="20" fill="#9CA3AB" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Refrigerator', 
      url: '/services#refrigerator',
      image: '/images/services/refrigerator.webp',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* Silver two-door refrigerator */}
          <rect x="25" y="15" width="50" height="70" fill="#D1D5DB" rx="3" stroke="#9CA3AF" strokeWidth="2"/>
          <rect x="28" y="18" width="44" height="64" fill="#E5E7EB" rx="2"/>
          {/* Left door */}
          <rect x="28" y="18" width="21" height="64" fill="#F3F4F6" rx="2"/>
          {/* Right door */}
          <rect x="51" y="18" width="21" height="64" fill="#F3F4F6" rx="2"/>
          {/* Divider line */}
          <line x1="50" y1="18" x2="50" y2="82" stroke="#9CA3AF" strokeWidth="2"/>
          {/* Door handles */}
          <rect x="30" y="48" width="3" height="12" fill="#6B7280" rx="1"/>
          <rect x="67" y="48" width="3" height="12" fill="#6B7280" rx="1"/>
          {/* Freezer section indicator */}
          <rect x="32" y="22" width="15" height="4" fill="#9CA3AB" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Air Conditioners', 
      url: '/services#air-conditioners',
      image: '/images/services/air-conditioners.png',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* White indoor unit of split AC */}
          <rect x="20" y="35" width="60" height="30" fill="#FFFFFF" rx="3" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="25" y="40" width="50" height="20" fill="#F9FAFB" rx="2"/>
          {/* Vents */}
          <rect x="30" y="45" width="40" height="2" fill="#D1D5DB" rx="1"/>
          <rect x="30" y="50" width="40" height="2" fill="#D1D5DB" rx="1"/>
          <rect x="30" y="55" width="40" height="2" fill="#D1D5DB" rx="1"/>
          {/* Control panel */}
          <rect x="70" y="38" width="8" height="14" fill="#9CA3AB" rx="1"/>
          {/* Mounting bracket */}
          <rect x="22" y="32" width="56" height="4" fill="#9CA3AF" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Geyser', 
      url: '/services#geyser',
      image: '/images/services/geyser.jpg',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* White cylindrical water heater */}
          <rect x="35" y="25" width="30" height="55" fill="#FFFFFF" rx="2" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="37" y="27" width="26" height="51" fill="#F9FAFB" rx="1"/>
          {/* Top section */}
          <rect x="35" y="25" width="30" height="8" fill="#F3F4F6" rx="2"/>
          {/* Control panel */}
          <rect x="42" y="28" width="16" height="4" fill="#9CA3AB" rx="1"/>
          {/* Temperature indicator */}
          <circle cx="50" cy="50" r="8" fill="#EF4444" opacity="0.3"/>
          <circle cx="50" cy="50" r="5" fill="#DC2626"/>
          {/* Bottom section */}
          <rect x="38" y="68" width="24" height="4" fill="#D1D5DB" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Microwave', 
      url: '/services#microwave',
      image: '/images/services/microwave.jpg',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* Silver microwave oven */}
          <rect x="20" y="30" width="60" height="45" fill="#D1D5DB" rx="3" stroke="#9CA3AF" strokeWidth="2"/>
          <rect x="23" y="33" width="54" height="39" fill="#E5E7EB" rx="2"/>
          {/* Dark glass door */}
          <rect x="28" y="38" width="44" height="29" fill="#1F2937" rx="2"/>
          <rect x="30" y="40" width="40" height="25" fill="#111827"/>
          {/* Control panel */}
          <rect x="25" y="36" width="50" height="4" fill="#6B7280" rx="1"/>
          {/* Door handle */}
          <rect x="68" y="48" width="4" height="15" fill="#9CA3AB" rx="1"/>
          {/* Bottom base */}
          <rect x="22" y="72" width="56" height="3" fill="#9CA3AF" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'LED', 
      url: '/services#led',
      image: '/images/services/led.jpg',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* Black flat-screen TV */}
          <rect x="25" y="25" width="50" height="35" fill="#111827" rx="2" stroke="#000000" strokeWidth="2"/>
          <rect x="27" y="27" width="46" height="31" fill="#1F2937" rx="1"/>
          {/* Screen */}
          <rect x="30" y="30" width="40" height="25" fill="#000000" rx="1"/>
          {/* Screen reflection */}
          <rect x="32" y="32" width="36" height="21" fill="#374151" opacity="0.3" rx="1"/>
          {/* Stand */}
          <rect x="45" y="60" width="10" height="8" fill="#111827" rx="1"/>
          <rect x="40" y="68" width="20" height="3" fill="#1F2937" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Kitchen Chimney', 
      url: '/services#kitchen-chimney',
      image: '/images/services/kitchen-chimney.avif',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* Silver kitchen chimney/range hood */}
          <path d="M20 30 L50 15 L80 30 L80 60 L20 60 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="2"/>
          <path d="M25 32 L50 18 L75 32 L75 58 L25 58 Z" fill="#E5E7EB"/>
          {/* Vents */}
          <rect x="30" y="38" width="40" height="3" fill="#9CA3AB" rx="1"/>
          <rect x="30" y="45" width="40" height="3" fill="#9CA3AB" rx="1"/>
          <rect x="30" y="52" width="40" height="3" fill="#9CA3AB" rx="1"/>
          {/* Control panel */}
          <rect x="35" y="34" width="30" height="4" fill="#6B7280" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Air Purifier', 
      url: '/services#air-purifier',
      image: '/images/services/air-purifier.jpeg',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* White tower-style air purifier */}
          <rect x="40" y="20" width="20" height="60" fill="#FFFFFF" rx="3" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="42" y="22" width="16" height="56" fill="#F9FAFB" rx="2"/>
          {/* Top section */}
          <rect x="40" y="20" width="20" height="10" fill="#F3F4F6" rx="3"/>
          {/* Vents */}
          <circle cx="50" cy="35" r="4" fill="#D1D5DB"/>
          <circle cx="50" cy="50" r="4" fill="#D1D5DB"/>
          <circle cx="50" cy="65" r="4" fill="#D1D5DB"/>
          {/* Control panel */}
          <rect x="44" y="70" width="12" height="8" fill="#9CA3AB" rx="1"/>
        </svg>
      )
    },
    { 
      title: 'Vacuum Cleaner', 
      url: '/services#vacuum-cleaner',
      image: '/images/services/vacuum-cleaner.jpg',
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
          {/* Orange and black canister vacuum */}
          {/* Main canister body - black */}
          <ellipse cx="50" cy="50" rx="20" ry="25" fill="#111827"/>
          <ellipse cx="50" cy="50" rx="18" ry="23" fill="#1F2937"/>
          {/* Top handle - orange */}
          <rect x="45" y="25" width="10" height="8" fill="#FB923C" rx="2"/>
          {/* Orange accent band */}
          <ellipse cx="50" cy="45" rx="15" ry="3" fill="#FB923C"/>
          {/* Bottom wheels */}
          <circle cx="40" cy="68" r="4" fill="#374151"/>
          <circle cx="60" cy="68" r="4" fill="#374151"/>
          {/* Hose connection */}
          <rect x="65" y="48" width="8" height="4" fill="#6B7280" rx="1"/>
          {/* Power cord */}
          <path d="M45 75 L35 85" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
  ];

  return (
    <div className="pt-0 md:pt-16">
      <SEO
        title="Expert Services You Can Trust"
        description="Professional, reliable, and affordable solutions for all your home and commercial service needs. Quality workmanship guaranteed."
        keywords="home services, commercial services, plumbing, electrical, HVAC, painting, carpentry, maintenance, expert services"
      />
      <Hero />

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-pink-50 via-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-pink-500 via-purple-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-pink-500 via-purple-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Explore Our Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive appliance repair and maintenance services for your home
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={service.url}
                  className="flex flex-col items-center cursor-pointer"
                >
                  {/* Card Container */}
                  <div className={`w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${
                    index % 5 === 0 ? 'border-pink-200 hover:border-pink-400 group-hover:bg-gradient-to-br group-hover:from-pink-50 group-hover:to-white' :
                    index % 5 === 1 ? 'border-purple-200 hover:border-purple-400 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white' :
                    index % 5 === 2 ? 'border-blue-200 hover:border-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white' :
                    index % 5 === 3 ? 'border-cyan-200 hover:border-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-white' :
                    'border-orange-200 hover:border-orange-400 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-white'
                  }`}>
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110 mx-auto border-2 border-gray-100 overflow-hidden">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-3 md:p-4">
                            <div className="w-full h-full flex items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-300">
                              {service.icon}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Hover effect dot */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        index % 5 === 0 ? 'bg-pink-600' :
                        index % 5 === 1 ? 'bg-purple-600' :
                        index % 5 === 2 ? 'bg-blue-600' :
                        index % 5 === 3 ? 'bg-cyan-600' :
                        'bg-orange-600'
                      }`}></div>
                    </div>
                    
                    {/* Service Name */}
                    <h3 className={`text-sm md:text-base font-bold text-gray-900 text-center transition-colors duration-300 leading-tight ${
                      index % 5 === 0 ? 'group-hover:text-pink-700' :
                      index % 5 === 1 ? 'group-hover:text-purple-700' :
                      index % 5 === 2 ? 'group-hover:text-blue-700' :
                      index % 5 === 3 ? 'group-hover:text-cyan-700' :
                      'group-hover:text-orange-700'
                    }`}>
                      {service.title}
                    </h3>
                    
                    {/* Hover underline */}
                    <div className={`mt-2 h-0.5 w-0 group-hover:w-full transition-all duration-300 mx-auto ${
                      index % 5 === 0 ? 'bg-gradient-to-r from-pink-600 to-pink-400' :
                      index % 5 === 1 ? 'bg-gradient-to-r from-purple-600 to-purple-400' :
                      index % 5 === 2 ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
                      index % 5 === 3 ? 'bg-gradient-to-r from-cyan-600 to-cyan-400' :
                      'bg-gradient-to-r from-orange-600 to-orange-400'
                    }`}></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-purple-50 text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>View All Services</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Home Care Services Section */}
      <section className="section-padding bg-gradient-to-b from-emerald-50 via-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 via-teal-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Home Care</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-emerald-500 via-teal-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Home Care Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Professional cleaning and maintenance services to keep your home spotless
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: 'Kitchen Cleaning', 
                url: '/services#kitchen-cleaning',
                image: '/images/services/kitchen-cleaning.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Black four-burner gas stove with gold accents */}
                    <rect x="18" y="52" width="64" height="32" fill="#111827" rx="3" stroke="#FCD34D" strokeWidth="2"/>
                    {/* Burners with gold centers */}
                    <circle cx="28" cy="62" r="6" fill="#111827" stroke="#FCD34D" strokeWidth="1.5"/>
                    <circle cx="28" cy="62" r="3" fill="#FCD34D"/>
                    <circle cx="43" cy="62" r="6" fill="#111827" stroke="#FCD34D" strokeWidth="1.5"/>
                    <circle cx="43" cy="62" r="3" fill="#FCD34D"/>
                    <circle cx="57" cy="62" r="6" fill="#111827" stroke="#FCD34D" strokeWidth="1.5"/>
                    <circle cx="57" cy="62" r="3" fill="#FCD34D"/>
                    <circle cx="72" cy="62" r="6" fill="#111827" stroke="#FCD34D" strokeWidth="1.5"/>
                    <circle cx="72" cy="62" r="3" fill="#FCD34D"/>
                    {/* Yellow cleaning gloves */}
                    <rect x="56" y="28" width="11" height="16" fill="#FCD34D" rx="2"/>
                    <rect x="69" y="30" width="11" height="16" fill="#FCD34D" rx="2"/>
                    {/* Blue spray bottle */}
                    <rect x="68" y="18" width="7" height="11" fill="#3B82F6" rx="1"/>
                    <rect x="69.5" y="14" width="4" height="5" fill="#1E40AF"/>
                    {/* Small white sponge */}
                    <rect x="58" y="20" width="6" height="5" fill="#FFFFFF" rx="1" stroke="#E5E7EB" strokeWidth="0.5"/>
                  </svg>
                )
              },
              { 
                title: 'Home Deep Cleaning', 
                url: '/services#deep-cleaning',
                image: '/images/services/home-deep-cleaning.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Tall silver-handled mop with yellow flat head */}
                    <rect x="42" y="20" width="5" height="45" fill="#D1D5DB" rx="2.5"/>
                    <rect x="24" y="28" width="38" height="9" fill="#FCD34D" rx="4"/>
                    {/* Blue spray bottle */}
                    <rect x="56" y="43" width="9" height="14" fill="#3B82F6" rx="2"/>
                    <rect x="58" y="38" width="5" height="6" fill="#1E40AF"/>
                    {/* Orange spray bottle */}
                    <rect x="71" y="46" width="9" height="14" fill="#FB923C" rx="2"/>
                    <rect x="73" y="41" width="5" height="6" fill="#C2410C"/>
                    {/* Pile of yellow cleaning cloths */}
                    <rect x="29" y="58" width="14" height="11" fill="#FCD34D" rx="2"/>
                    <rect x="31" y="60" width="12" height="9" fill="#FDE047" rx="1" opacity="0.8"/>
                  </svg>
                )
              },
              { 
                title: 'House Painting', 
                url: '/services#house-painting',
                image: '/images/services/house-painting.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Paint streak on background */}
                    <rect x="30" y="55" width="25" height="20" fill="#93C5FD" opacity="0.6" rx="2"/>
                    {/* Hand wearing light blue glove */}
                    <ellipse cx="48" cy="65" rx="11" ry="14" fill="#93C5FD"/>
                    <rect x="44" y="52" width="9" height="18" fill="#93C5FD" rx="4"/>
                    {/* Paint roller with light blue paint */}
                    <rect x="35" y="38" width="28" height="11" fill="#60A5FA" rx="5"/>
                    <circle cx="49" cy="43" r="7" fill="#3B82F6"/>
                    <rect x="32" y="40" width="38" height="7" fill="#60A5FA" rx="3"/>
                  </svg>
                )
              },
              { 
                title: 'Bathroom Cleaning', 
                url: '/services#bathroom-cleaning',
                image: '/images/services/bathroom-cleaning.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* White freestanding bathtub */}
                    <path d="M22 58 Q22 48 27 43 L73 43 Q78 48 78 58 L78 78 L22 78 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
                    <rect x="27" y="46" width="46" height="26" fill="#F9FAFB" rx="2"/>
                    {/* Silver faucet */}
                    <rect x="47" y="33" width="6" height="13" fill="#9CA3AF" rx="1"/>
                    <rect x="45" y="36" width="10" height="5" fill="#D1D5DB" rx="1"/>
                    {/* Blue flat mop to the right */}
                    <rect x="62" y="53" width="7" height="22" fill="#3B82F6" rx="3"/>
                    <rect x="63" y="54" width="5" height="8" fill="#60A5FA" rx="2"/>
                  </svg>
                )
              },
              { 
                title: 'Sofa Cleaning', 
                url: '/services#sofa-cleaning',
                image: '/images/services/sofa-cleaning.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Light beige upholstered armchair */}
                    <path d="M24 68 Q24 48 29 43 L71 43 Q76 48 76 68 L76 83 L24 83 Z" fill="#FEF3C7" stroke="#D1D5DB" strokeWidth="1.5"/>
                    <rect x="29" y="46" width="42" height="32" fill="#FDE68A" rx="2"/>
                    {/* Folded blue and orange towels on seat */}
                    <rect x="34" y="50" width="14" height="11" fill="#3B82F6" rx="2"/>
                    <rect x="36" y="52" width="12" height="9" fill="#60A5FA" rx="1"/>
                    <rect x="50" y="52" width="13" height="11" fill="#FB923C" rx="2"/>
                    <rect x="52" y="54" width="11" height="9" fill="#F97316" rx="1"/>
                    {/* Yellow spray bottle to the right */}
                    <rect x="66" y="48" width="7" height="11" fill="#FCD34D" rx="1"/>
                    <rect x="67.5" y="44" width="4" height="5" fill="#F59E0B"/>
                  </svg>
                )
              },
              { 
                title: 'Tank Cleaning', 
                url: '/services#tank-cleaning',
                image: '/images/services/tank-cleaning.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Silver conical-roofed storage tank */}
                    {/* Wireframe base - cylindrical */}
                    <rect x="35" y="47" width="30" height="33" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" rx="2"/>
                    {/* Wireframe details */}
                    <line x1="40" y1="47" x2="40" y2="80" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <line x1="50" y1="47" x2="50" y2="80" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <line x1="60" y1="47" x2="60" y2="80" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <ellipse cx="50" cy="47" rx="15" ry="2" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1"/>
                    <ellipse cx="50" cy="63" rx="15" ry="2" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1"/>
                    <ellipse cx="50" cy="80" rx="15" ry="2" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1"/>
                    {/* Silver conical top */}
                    <path d="M35 47 L50 22 L65 47 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1.5"/>
                    {/* Tank rim */}
                    <rect x="33" y="45" width="34" height="4" fill="#9CA3AF" rx="2"/>
                  </svg>
                )
              },
              { 
                title: 'Mason Service', 
                url: '/services#mason-service',
                image: '/images/services/mason-service.webp',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Person head */}
                    <circle cx="50" cy="24" r="7" fill="#FEF3C7"/>
                    {/* Yellow hard hat */}
                    <ellipse cx="50" cy="21" rx="9" ry="4.5" fill="#FCD34D"/>
                    <rect x="46" y="16" width="8" height="2.5" fill="#F59E0B"/>
                    {/* Orange safety vest over blue long-sleeved shirt */}
                    <rect x="43" y="32" width="14" height="18" fill="#FB923C"/>
                    <rect x="45" y="34" width="10" height="16" fill="#3B82F6"/>
                    {/* Arms with sleeves */}
                    <rect x="38" y="36" width="7" height="14" fill="#3B82F6" rx="3"/>
                    <rect x="55" y="36" width="7" height="14" fill="#3B82F6" rx="3"/>
                    {/* Brown pants */}
                    <rect x="44" y="50" width="12" height="20" fill="#78350F" rx="2"/>
                    {/* Red brick wall */}
                    <rect x="18" y="54" width="52" height="32" fill="#DC2626" rx="1"/>
                    {/* Brick lines */}
                    <line x1="34" y1="54" x2="34" y2="86" stroke="#991B1B" strokeWidth="1"/>
                    <line x1="50" y1="54" x2="50" y2="86" stroke="#991B1B" strokeWidth="1"/>
                    <line x1="18" y1="70" x2="70" y2="70" stroke="#991B1B" strokeWidth="1"/>
                    {/* Trowel in hand */}
                    <rect x="56" y="38" width="7" height="2" fill="#6B7280" rx="1"/>
                    <rect x="60" y="37" width="3" height="4" fill="#4B5563" rx="0.5"/>
                  </svg>
                )
              },
              { 
                title: 'Pest Control', 
                url: '/services#pest-control',
                image: '/images/services/pest-control.jpeg',
                icon: (
                  <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
                    {/* Person in full white hazmat suit */}
                    {/* Head with hood */}
                    <circle cx="50" cy="24" r="7" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1"/>
                    {/* Hood */}
                    <path d="M43 24 Q43 18 46 16 Q50 14 54 16 Q57 18 57 24 Q57 28 50 30 Q43 28 43 24 Z" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1"/>
                    {/* Face mask/goggles */}
                    <ellipse cx="50" cy="27" rx="6" ry="4" fill="#1F2937"/>
                    <circle cx="47" cy="26" r="1.5" fill="#60A5FA"/>
                    <circle cx="53" cy="26" r="1.5" fill="#60A5FA"/>
                    {/* Full protective suit */}
                    <rect x="41" y="31" width="18" height="38" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" rx="2"/>
                    {/* Arms */}
                    <rect x="36" y="37" width="7" height="23" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" rx="3"/>
                    <rect x="57" y="37" width="7" height="23" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" rx="3"/>
                    {/* Gloves */}
                    <rect x="34" y="58" width="9" height="8" fill="#3B82F6" rx="4"/>
                    <rect x="57" y="58" width="9" height="8" fill="#3B82F6" rx="4"/>
                    {/* Blue and yellow sprayer tank with hose */}
                    <rect x="59" y="40" width="7" height="13" fill="#3B82F6" rx="1.5"/>
                    <rect x="60" y="41" width="5" height="6" fill="#FCD34D" rx="1"/>
                    <path d="M66 47 L74 40" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="74" cy="40" r="2" fill="#3B82F6"/>
                  </svg>
                )
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={service.url}
                  className="flex flex-col items-center cursor-pointer"
                >
                  {/* Card Container */}
                  <div className={`w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${
                    index % 5 === 0 ? 'border-emerald-200 hover:border-emerald-400 group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-white' :
                    index % 5 === 1 ? 'border-teal-200 hover:border-teal-400 group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:to-white' :
                    index % 5 === 2 ? 'border-cyan-200 hover:border-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-white' :
                    index % 5 === 3 ? 'border-blue-200 hover:border-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white' :
                    'border-indigo-200 hover:border-indigo-400 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-white'
                  }`}>
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110 mx-auto border-2 border-gray-100 overflow-hidden">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-3 md:p-4">
                            <div className="w-full h-full flex items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-300">
                              {service.icon}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Hover effect dot */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        index % 5 === 0 ? 'bg-emerald-600' :
                        index % 5 === 1 ? 'bg-teal-600' :
                        index % 5 === 2 ? 'bg-cyan-600' :
                        index % 5 === 3 ? 'bg-blue-600' :
                        'bg-indigo-600'
                      }`}></div>
                    </div>
                    
                    {/* Service Name */}
                    <h3 className={`text-sm md:text-base font-bold text-gray-900 text-center transition-colors duration-300 leading-tight ${
                      index % 5 === 0 ? 'group-hover:text-emerald-700' :
                      index % 5 === 1 ? 'group-hover:text-teal-700' :
                      index % 5 === 2 ? 'group-hover:text-cyan-700' :
                      index % 5 === 3 ? 'group-hover:text-blue-700' :
                      'group-hover:text-indigo-700'
                    }`}>
                      {service.title}
                    </h3>
                    
                    {/* Hover underline */}
                    <div className={`mt-2 h-0.5 w-0 group-hover:w-full transition-all duration-300 mx-auto ${
                      index % 5 === 0 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
                      index % 5 === 1 ? 'bg-gradient-to-r from-teal-600 to-teal-400' :
                      index % 5 === 2 ? 'bg-gradient-to-r from-cyan-600 to-cyan-400' :
                      index % 5 === 3 ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
                      'bg-gradient-to-r from-indigo-600 to-indigo-400'
                    }`}></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>View All Services</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Top Brands We Repair Section */}
      <section className="section-padding bg-gradient-to-b from-violet-50 via-fuchsia-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-violet-500 via-fuchsia-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Trusted Brands</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-violet-500 via-fuchsia-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Top Brands We Repair
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              No matter where you bought it, we can fix it. We repair most major brands, makes, and models.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: 'KENT', url: '/services#kent' },
              { name: 'Unilever Pureit', url: '/services#pureit' },
              { name: 'AQUA SMART RO', url: '/services#aqua-smart' },
              { name: 'Livpure', url: '/services#livpure' },
              { name: 'BLUE STAR', url: '/services#blue-star' },
              { name: 'nasaka', url: '/services#nasaka' },
              { name: 'TATA Swach', url: '/services#tata-swach' },
              { name: 'NEXUS SERIES', url: '/services#nexus-series' },
              { name: 'Mi', url: '/services#mi' },
              { name: 'R.K. Aquafresh', url: '/services#rk-aquafresh' },
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={brand.url}
                  className="block cursor-pointer"
                >
                  {/* Modern Brand Card */}
                  <div className="w-full aspect-square bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
                    
                    {/* Brand Logo Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                      {/* Icon/Logo Container */}
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110">
                        <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                          {brand.name.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                      
                      {/* Brand Name */}
                      <div className="text-center">
                        <h3 className="text-xs md:text-sm font-bold text-gray-700 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                          {brand.name}
                        </h3>
                      </div>
                      
                      {/* Hover underline */}
                      <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-12 transition-all duration-300"></div>
                    </div>
                    
                    {/* Hover effect indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-purple-200 shadow-sm">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-gray-700">
                Trusted by 300+ Brands
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-amber-50 via-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-500 via-orange-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-amber-500 via-orange-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Why Choose appliancecares Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with trusted service and nationwide coverage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '20,000+',
                title: 'Retail Stores',
                subtitle: 'Trusted Nationwide',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                gradient: 'from-amber-500 to-orange-600',
                bgGradient: 'from-amber-50 to-orange-100/50',
              },
              {
                number: '300+',
                title: 'Brands Covered',
                subtitle: 'Comprehensive Service',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                gradient: 'from-red-500 to-pink-600',
                bgGradient: 'from-red-50 to-pink-100/50',
              },
              {
                number: '8 Million+',
                title: 'Happy Customers',
                subtitle: 'Your Satisfaction, Our Priority',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                ),
                gradient: 'from-emerald-500 to-teal-600',
                bgGradient: 'from-emerald-50 to-teal-100/50',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Stat Card */}
                <div className={`bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent relative overflow-hidden h-full ${
                  index === 0 ? 'group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-purple-100/50' :
                  index === 1 ? 'group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-blue-100/50' :
                  'group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-green-100/50'
                }`}>
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-bl-full`}></div>
                  
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgGradient} mb-4 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110 ${
                    index === 0 ? 'group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-purple-600' :
                    index === 1 ? 'group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600' :
                    'group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-green-600'
                  }`}>
                    <div className={`w-5 h-5 ${
                      index === 0 ? 'text-purple-600' :
                      index === 1 ? 'text-blue-600' :
                      'text-green-600'
                    } group-hover:text-white transition-colors duration-300 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <div className={`text-3xl md:text-4xl lg:text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {stat.subtitle}
                  </p>

                  {/* Hover underline */}
                  <div className={`mt-3 h-0.5 w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-300 rounded-full`}></div>

                  {/* Hover effect indicator */}
                  <div className={`absolute bottom-3 right-3 w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: '✓', text: 'Verified Technicians' },
              { icon: '✓', text: 'Genuine Parts' },
              { icon: '✓', text: 'Service Guarantee' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-green-600 font-bold">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-b from-orange-50 via-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-orange-500 via-yellow-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-orange-500 via-yellow-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your appliances fixed quickly and efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Book Service',
                description: 'Call us or book online. Tell us about your appliance issue.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Schedule Visit',
                description: 'Choose a convenient time slot. Our expert will arrive on time.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Expert Diagnosis',
                description: 'Our technician will diagnose the issue and provide a transparent quote.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Get It Fixed',
                description: 'We fix it on the spot with genuine parts and service guarantee.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 h-full relative overflow-hidden ${
                  index === 0 ? 'border-orange-200 hover:border-orange-400' :
                  index === 1 ? 'border-yellow-200 hover:border-yellow-400' :
                  index === 2 ? 'border-pink-200 hover:border-pink-400' :
                  'border-purple-200 hover:border-purple-400'
                }`}>
                  {/* Step Number */}
                  <div className={`absolute top-4 right-4 text-6xl font-extrabold transition-colors duration-300 ${
                    index === 0 ? 'text-orange-100 group-hover:text-orange-200' :
                    index === 1 ? 'text-yellow-100 group-hover:text-yellow-200' :
                    index === 2 ? 'text-pink-100 group-hover:text-pink-200' :
                    'text-purple-100 group-hover:text-purple-200'
                  }`}>
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      index === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      index === 1 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                      index === 2 ? 'bg-gradient-to-br from-pink-500 to-pink-600' :
                      'bg-gradient-to-br from-purple-500 to-purple-600'
                    }`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                      index === 0 ? 'group-hover:text-orange-700' :
                      index === 1 ? 'group-hover:text-yellow-700' :
                      index === 2 ? 'group-hover:text-pink-700' :
                      'group-hover:text-purple-700'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Connecting Line (not for last item) */}
                  {index < 3 && (
                    <div className={`hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 z-0 ${
                      index === 0 ? 'bg-gradient-to-r from-orange-300 to-transparent' :
                      index === 1 ? 'bg-gradient-to-r from-yellow-300 to-transparent' :
                      'bg-gradient-to-r from-pink-300 to-transparent'
                    }`}>
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-orange-500' :
                        index === 1 ? 'bg-yellow-500' :
                        'bg-pink-500'
                      }`}></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-indigo-50 via-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 via-purple-500 via-pink-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-indigo-500 via-purple-500 via-pink-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Excellent service! The technician was professional, arrived on time, and fixed my AC quickly. Highly recommended!",
                author: "Rajesh Kumar",
                role: "Homeowner, Delhi",
              },
              {
                quote: "Best RO service in town. They cleaned and serviced my water purifier thoroughly. The water quality has improved significantly.",
                author: "Priya Sharma",
                role: "Customer, Mumbai",
              },
              {
                quote: "Quick response and excellent workmanship. My washing machine is working like new again. Great value for money!",
                author: "Amit Patel",
                role: "Customer, Bangalore",
              },
            ].map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-3 border border-white/20"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-white uppercase tracking-wide">
                Get Started Today
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2 leading-tight"
            >
              Ready to Get Started?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base lg:text-lg mb-5 max-w-2xl mx-auto text-white/90 leading-relaxed"
            >
              Contact us today for a free quote and experience the difference of
              professional service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5"
            >
              {/* Primary CTA Button */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden text-sm md:text-base border-2 border-white/30 hover:border-white/50"
              >
                {/* Gradient background for text */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"></div>
                
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="relative z-10 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Get Your Free Quote</span>
              </Link>

              {/* Secondary CTA Button */}
              <a
                href="tel:+919311587715"
                className="group inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-white/20 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Now: +91-9311587715</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-5"
            >
              {[
                { icon: '✓', text: 'Free Quote' },
                { icon: '✓', text: '24/7 Support' },
                { icon: '✓', text: 'Fast Response' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <span className="text-white font-bold text-sm">{item.icon}</span>
                  <span className="text-xs font-semibold text-white/90">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

