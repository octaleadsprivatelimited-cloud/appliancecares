import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const EmergencyRepairs = () => {
  const emergencyServices = [
    {
      title: '24/7 Emergency Response',
      description: 'Round-the-clock emergency repair services for urgent appliance breakdowns.',
      icon: '🚨',
      responseTime: 'Within 2 hours',
    },
    {
      title: 'Water Leakage Emergency',
      description: 'Immediate response for water purifier, washing machine, or geyser leaks.',
      icon: '💧',
      responseTime: 'Within 1 hour',
    },
    {
      title: 'AC Breakdown',
      description: 'Fast repair service for air conditioner failures during extreme weather.',
      icon: '❄️',
      responseTime: 'Within 2 hours',
    },
    {
      title: 'Refrigerator Failure',
      description: 'Urgent repair to prevent food spoilage and restore cooling.',
      icon: '🧊',
      responseTime: 'Within 2 hours',
    },
    {
      title: 'Electrical Issues',
      description: 'Immediate attention for electrical problems in appliances.',
      icon: '⚡',
      responseTime: 'Within 1 hour',
    },
    {
      title: 'Gas Leak Detection',
      description: 'Emergency service for gas-related appliance issues.',
      icon: '🔥',
      responseTime: 'Within 30 minutes',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Call Us',
      description: 'Contact our 24/7 emergency hotline',
      icon: '📞',
    },
    {
      step: '02',
      title: 'Quick Assessment',
      description: 'We assess the issue over the phone',
      icon: '🔍',
    },
    {
      step: '03',
      title: 'Dispatch Technician',
      description: 'Nearest technician dispatched immediately',
      icon: '🚗',
    },
    {
      step: '04',
      title: 'Fast Repair',
      description: 'Expert repair on-site to restore functionality',
      icon: '🔧',
    },
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Emergency Repairs - 24/7 Urgent Appliance Service"
        description="24/7 emergency appliance repair services. Fast response times for urgent breakdowns. Available round the clock for your peace of mind."
        keywords="emergency appliance repair, 24/7 repair service, urgent appliance service, emergency AC repair"
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[250px] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 container-custom py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full mb-6 border border-red-400/30">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white uppercase tracking-wide">24/7 Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Emergency <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Repairs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Fast, reliable emergency appliance repair services available round the clock
            </p>
            <a
              href="tel:+919311587715"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Emergency: +91-9311587715
            </a>
          </motion.div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Emergency Services</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-red-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              When You Need Us Most
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Fast response times for urgent appliance emergencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200 h-full">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-lg">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-red-700">{service.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-red-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-orange-600 to-transparent rounded-full"></div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-orange-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Quick Response Process
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get emergency service fast
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-3xl font-extrabold text-orange-100 mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-transparent">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Need Emergency Service Right Now?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Call our 24/7 emergency hotline for immediate assistance
            </p>
            <a
              href="tel:+919311587715"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Emergency: +91-9311587715
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyRepairs;

