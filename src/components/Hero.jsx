import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Black Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs - reduced opacity */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-18 animate-blob animation-delay-1000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container-custom pt-16 pb-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge/Label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-full mb-6 shadow-lg border border-white/30"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></span>
                <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                  Trusted Service Provider
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold text-white mb-4 lg:mb-6 leading-tight"
              >
                Fast, Trusted{' '}
                <span className="text-white">
                  Home Appliance
                </span>{' '}
                Service
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-white mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Ensuring your family's comfort and convenience with expert installation and repair services.
              </motion.p>

              {/* Feature List */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-3 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  'Advanced RO system maintenance',
                  'Same-day emergency repairs',
                  'Professional technicians at your doorstep',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-base md:text-lg text-white"
                  >
                    <div className="flex-shrink-0 w-6 h-6 mr-3 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
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
                  Call Now
                </Link>
                <a
                  href="tel:+919311587715"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>+91-9311587715</span>
                </a>
              </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

