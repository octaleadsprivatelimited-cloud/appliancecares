import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';

const Services = () => {
  const allServices = [
    {
      id: 'ro-service',
      icon: '💧',
      image: '/images/services/ro-service.webp',
      title: 'RO Service',
      description: 'Expert RO water purifier installation, repair, and maintenance services. Ensure clean and safe drinking water for your family.',
      features: ['RO System Installation', 'Filter Replacement', 'UV Lamp Replacement', 'Membrane Cleaning', 'Regular Maintenance', 'Water Quality Testing'],
    },
    {
      id: 'washing-machine',
      icon: '🌀',
      image: '/images/services/washing-machine.jpeg',
      title: 'Washing Machine',
      description: 'Professional washing machine repair and maintenance services for all brands. Keep your laundry routine running smoothly.',
      features: ['Drum Repair', 'Motor Repair', 'Drain Pump Replacement', 'Timer Repair', 'Door Lock Repair', 'Full Service & Maintenance'],
    },
    {
      id: 'refrigerator',
      icon: '❄️',
      image: '/images/services/refrigerator.webp',
      title: 'Refrigerator',
      description: 'Complete refrigerator repair services for single door, double door, and side-by-side models. Expert technicians at your service.',
      features: ['Compressor Repair', 'Gas Refilling', 'Thermostat Replacement', 'Door Seal Replacement', 'Ice Maker Repair', 'Annual Maintenance'],
    },
    {
      id: 'air-conditioners',
      icon: '❄️',
      image: '/images/services/air-conditioners.png',
      title: 'Air Conditioners',
      description: 'AC installation, repair, and maintenance services. Beat the heat with our professional cooling solutions.',
      features: ['AC Installation', 'Gas Refilling', 'Coil Cleaning', 'Compressor Repair', 'Remote Repair', 'Annual Maintenance'],
    },
    {
      id: 'geyser',
      icon: '🔥',
      image: '/images/services/geyser.jpg',
      title: 'Geyser',
      description: 'Water heater installation, repair, and maintenance services. Get hot water when you need it.',
      features: ['Geyser Installation', 'Heating Element Replacement', 'Thermostat Repair', 'Tank Leakage Repair', 'Anode Rod Replacement', 'Annual Maintenance'],
    },
    {
      id: 'microwave',
      icon: '📡',
      image: '/images/services/microwave.jpg',
      title: 'Microwave',
      description: 'Microwave oven repair services for all makes and models. Quick and reliable solutions for your kitchen.',
      features: ['Magnetron Replacement', 'Turntable Motor Repair', 'Door Switch Replacement', 'Control Panel Repair', 'Fuse Replacement', 'Full Service'],
    },
    {
      id: 'led',
      icon: '📺',
      image: '/images/services/led.jpg',
      title: 'LED',
      description: 'LED TV installation, wall mounting, and repair services. Enhance your entertainment experience.',
      features: ['TV Installation', 'Wall Mounting', 'Panel Repair', 'Power Supply Repair', 'Remote Repair', 'Software Updates'],
    },
    {
      id: 'kitchen-chimney',
      icon: '💨',
      image: '/images/services/kitchen-chimney.avif',
      title: 'Kitchen Chimney',
      description: 'Kitchen chimney installation, cleaning, and repair services. Keep your kitchen smoke-free and fresh.',
      features: ['Chimney Installation', 'Deep Cleaning', 'Motor Repair', 'Blower Repair', 'Filter Replacement', 'Maintenance Service'],
    },
    {
      id: 'air-purifier',
      icon: '🌬️',
      image: '/images/services/air-purifier.jpeg',
      title: 'Air Purifier',
      description: 'Air purifier installation, filter replacement, and repair services. Breathe cleaner air in your home.',
      features: ['Installation Service', 'Filter Replacement', 'UV Lamp Replacement', 'Motor Repair', 'Sensor Repair', 'Regular Maintenance'],
    },
    {
      id: 'vacuum-cleaner',
      icon: '🧹',
      image: '/images/services/vacuum-cleaner.jpg',
      title: 'Vacuum Cleaner',
      description: 'Vacuum cleaner repair and maintenance services for all types. Keep your cleaning equipment in top condition.',
      features: ['Motor Repair', 'Belt Replacement', 'Bag Replacement', 'Brush Roll Repair', 'Cord Repair', 'Full Service'],
    },
    {
      id: 'kitchen-cleaning',
      icon: '🧽',
      image: '/images/services/kitchen-cleaning.jpeg',
      title: 'Kitchen Cleaning',
      description: 'Professional kitchen deep cleaning services to keep your cooking space spotless and hygienic.',
      features: ['Countertop Cleaning', 'Appliance Cleaning', 'Cabinet Cleaning', 'Sink Sanitization', 'Grease Removal', 'Deep Sanitization'],
    },
    {
      id: 'deep-cleaning',
      icon: '🏠',
      image: '/images/services/home-deep-cleaning.jpeg',
      title: 'Home Deep Cleaning',
      description: 'Comprehensive deep cleaning services for your entire home. We make your space shine like new.',
      features: ['Complete House Cleaning', 'Floor Scrubbing', 'Window Cleaning', 'Dust Removal', 'Sanitization', 'Post-Renovation Cleaning'],
    },
    {
      id: 'house-painting',
      icon: '🎨',
      image: '/images/services/house-painting.jpeg',
      title: 'House Painting',
      description: 'Interior and exterior house painting services to transform your living space with fresh colors.',
      features: ['Interior Painting', 'Exterior Painting', 'Color Consultation', 'Wall Preparation', 'Primer Application', 'Finish Coats'],
    },
    {
      id: 'bathroom-cleaning',
      icon: '🚿',
      image: '/images/services/bathroom-cleaning.jpeg',
      title: 'Bathroom Cleaning',
      description: 'Professional bathroom cleaning and sanitization services for a fresh and hygienic space.',
      features: ['Tile Cleaning', 'Grout Cleaning', 'Fixture Polishing', 'Mold Removal', 'Deep Sanitization', 'Shower Cleaning'],
    },
    {
      id: 'sofa-cleaning',
      icon: '🛋️',
      image: '/images/services/sofa-cleaning.jpeg',
      title: 'Sofa Cleaning',
      description: 'Upholstery and sofa deep cleaning services to restore your furniture to its original beauty.',
      features: ['Steam Cleaning', 'Stain Removal', 'Odor Treatment', 'Fabric Protection', 'Drying Service', 'Maintenance Tips'],
    },
    {
      id: 'tank-cleaning',
      icon: '💧',
      image: '/images/services/tank-cleaning.jpeg',
      title: 'Tank Cleaning',
      description: 'Water tank cleaning and sanitization services to ensure clean and safe water supply.',
      features: ['Water Tank Cleaning', 'Sediment Removal', 'Sanitization', 'Inspection Service', 'Maintenance', 'Water Testing'],
    },
    {
      id: 'mason-service',
      icon: '👷',
      image: '/images/services/mason-service.webp',
      title: 'Mason Service',
      description: 'Professional masonry and construction services for all your building and repair needs.',
      features: ['Brick Work', 'Concrete Work', 'Wall Construction', 'Repair Services', 'Tiling', 'Stone Work'],
    },
    {
      id: 'pest-control',
      icon: '🐛',
      image: '/images/services/pest-control.jpeg',
      title: 'Pest Control',
      description: 'Professional pest control services to eliminate unwanted pests and keep your home pest-free.',
      features: ['Rodent Control', 'Insect Treatment', 'Termite Control', 'Regular Inspections', 'Preventive Treatment', 'Follow-up Service'],
    },
  ];

  const serviceAreas = [
    'Residential Services',
    'Commercial Services',
    'Emergency Repairs',
    'Preventive Maintenance',
    'New Construction',
    'Remodeling Projects',
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Our Services"
        description="Comprehensive, professional services for all your home and commercial needs. Quality workmanship you can trust."
        keywords="plumbing services, electrical services, HVAC services, painting services, carpentry services, home maintenance, commercial services"
      />
      {/* Header */}
      <section 
        className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
              <span className="text-white font-semibold text-sm uppercase tracking-wider">All Services</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-white/50 to-transparent rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Our Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive, professional services for all your home and commercial needs.
              Quality workmanship you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container-custom mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {allServices.map((service, index) => (
              <div key={service.id || index} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Service Areas
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional services across multiple categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => {
              // Define icons for each service area
              const areaIcons = [
                <svg key="residential" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>,
                <svg key="commercial" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>,
                <svg key="emergency" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>,
                <svg key="preventive" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>,
                <svg key="construction" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>,
                <svg key="remodeling" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>,
              ];

              // Define gradient colors for each card
              const gradientColors = [
                'from-blue-100 to-blue-200',
                'from-purple-100 to-purple-200',
                'from-red-100 to-red-200',
                'from-green-100 to-green-200',
                'from-orange-100 to-orange-200',
                'from-indigo-100 to-indigo-200',
              ];

              const textColors = [
                'text-blue-600',
                'text-purple-600',
                'text-red-600',
                'text-green-600',
                'text-orange-600',
                'text-indigo-600',
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Modern Service Area Card */}
                  <div className={`bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden h-full ${
                    index === 0 ? 'group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-blue-200' :
                    index === 1 ? 'group-hover:bg-gradient-to-br group-hover:from-purple-100 group-hover:to-purple-200' :
                    index === 2 ? 'group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200' :
                    index === 3 ? 'group-hover:bg-gradient-to-br group-hover:from-green-100 group-hover:to-green-200' :
                    index === 4 ? 'group-hover:bg-gradient-to-br group-hover:from-orange-100 group-hover:to-orange-200' :
                    'group-hover:bg-gradient-to-br group-hover:from-indigo-100 group-hover:to-indigo-200'
                  }`}>
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${gradientColors[index]} mb-4 group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg`}>
                        <div className={textColors[index]}>
                          {areaIcons[index] || areaIcons[0]}
                        </div>
                      </div>

                      {/* Service Area Name */}
                      <h3 className={`font-bold text-gray-900 transition-colors duration-300 text-base md:text-lg leading-tight ${
                        index === 0 ? 'group-hover:text-blue-600' :
                        index === 1 ? 'group-hover:text-purple-600' :
                        index === 2 ? 'group-hover:text-red-600' :
                        index === 3 ? 'group-hover:text-green-600' :
                        index === 4 ? 'group-hover:text-orange-600' :
                        'group-hover:text-indigo-600'
                      }`}>
                        {area}
                      </h3>
                      
                      {/* Hover underline */}
                      <div className={`mt-3 h-0.5 w-0 group-hover:w-12 transition-all duration-300 ${
                        index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-600' :
                        index === 1 ? 'bg-gradient-to-r from-purple-600 to-purple-600' :
                        index === 2 ? 'bg-gradient-to-r from-red-600 to-red-600' :
                        index === 3 ? 'bg-gradient-to-r from-green-600 to-green-600' :
                        index === 4 ? 'bg-gradient-to-r from-orange-600 to-orange-600' :
                        'bg-gradient-to-r from-indigo-600 to-indigo-600'
                      }`}></div>
                    </div>

                    {/* Hover effect indicator */}
                    <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${textColors[index]}`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - How We Work */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/20 to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              How We Work
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process designed to give you peace of mind
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                {
                  step: '01',
                  title: 'Contact Us',
                  description: 'Reach out via phone, email, or our contact form to discuss your needs',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  stepBg: 'bg-purple-100',
                  stepText: 'text-purple-600',
                  iconColor: 'text-purple-600',
                  hoverBg: 'from-purple-50 to-purple-100/50',
                },
                {
                  step: '02',
                  title: 'Free Estimate',
                  description: 'We provide a detailed, transparent, free quote for your project',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  stepBg: 'bg-blue-100',
                  stepText: 'text-blue-600',
                  iconColor: 'text-blue-600',
                  hoverBg: 'from-blue-50 to-blue-100/50',
                },
                {
                  step: '03',
                  title: 'Schedule Service',
                  description: 'Choose a convenient time slot that works perfectly for you',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  stepBg: 'bg-green-100',
                  stepText: 'text-green-600',
                  iconColor: 'text-green-600',
                  hoverBg: 'from-green-50 to-green-100/50',
                },
                {
                  step: '04',
                  title: 'Quality Service',
                  description: 'Our expert team completes the job to perfection with quality guarantee',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  stepBg: 'bg-orange-100',
                  stepText: 'text-orange-600',
                  iconColor: 'text-orange-600',
                  hoverBg: 'from-orange-50 to-orange-100/50',
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden h-full ${
                    index === 0 ? 'group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-purple-100/50' :
                    index === 1 ? 'group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-blue-100/50' :
                    index === 2 ? 'group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-green-100/50' :
                    'group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-orange-100/50'
                  }`}>
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 ${process.stepBg.replace('100', '200')} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`}></div>
                    
                    {/* Step number and Icon */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${process.stepBg} ${process.stepText} font-bold text-base shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        {process.step}
                      </div>
                      {/* Icon Container */}
                      <div className={`w-10 h-10 rounded-xl ${process.stepBg} flex items-center justify-center ${process.iconColor} group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg`}>
                        {process.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`text-base md:text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 ${
                        index === 0 ? 'group-hover:text-purple-700' :
                        index === 1 ? 'group-hover:text-blue-700' :
                        index === 2 ? 'group-hover:text-green-700' :
                        'group-hover:text-orange-700'
                      }`}>
                        {process.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                      
                      {/* Hover underline */}
                      <div className={`mt-3 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full ${
                        index === 0 ? 'bg-gradient-to-r from-purple-600 to-purple-600' :
                        index === 1 ? 'bg-gradient-to-r from-blue-600 to-blue-600' :
                        index === 2 ? 'bg-gradient-to-r from-green-600 to-green-600' :
                        'bg-gradient-to-r from-orange-600 to-orange-600'
                      }`}></div>
                    </div>

                    {/* Hover effect indicator */}
                    <div className={`absolute bottom-3 right-3 w-2 h-2 ${process.iconColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Arrow connector for mobile/tablet */}
                  {index < 3 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight"
            >
              Need Service Today?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed"
            >
              Contact us now for fast, reliable service. We're here to help!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6"
            >
              {/* Primary CTA Button */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden text-sm md:text-base"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300"
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
                <span className="relative z-10">Get Free Quote</span>
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
                { icon: '✓', text: 'Fast Response' },
                { icon: '✓', text: '24/7 Support' },
                { icon: '✓', text: 'Free Quote' },
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

export default Services;

