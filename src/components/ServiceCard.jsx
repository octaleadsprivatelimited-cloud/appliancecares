import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Modern Service Card */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group-hover:bg-gradient-to-br group-hover:from-purple-50/50 group-hover:to-white overflow-hidden h-full flex flex-col relative">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-bl-full"></div>
        
        {/* Icon Header Section */}
        <div className="relative h-40 md:h-48 bg-white overflow-hidden">
          {/* Image or Icon */}
          <div className="absolute inset-0 flex items-center justify-center p-2">
            {service.image ? (
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="text-4xl md:text-5xl">${service.icon || '📦'}</div>`;
                }}
              />
            ) : (
              <motion.div
                className="text-4xl md:text-5xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
            )}
          </div>
          
          {/* Animated overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-5 flex-grow flex flex-col">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mb-3 line-clamp-2 leading-relaxed flex-grow">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-1.5 mb-4">
            {service.features.slice(0, 4).map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.05 }}
                className="flex items-start text-xs md:text-sm text-gray-600"
              >
                <div className="flex-shrink-0 w-5 h-5 mr-2 mt-0.5 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <svg
                    className="w-3 h-3 text-purple-600"
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
                <span className="flex-grow">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="group/btn inline-flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base relative overflow-hidden mt-auto"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <span className="relative z-10">Contact Us</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300"
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
          
          {/* Hover underline */}
          <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Hover effect indicator */}
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

