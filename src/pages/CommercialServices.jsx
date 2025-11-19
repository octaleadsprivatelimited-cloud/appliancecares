import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CommercialServices = () => {
  const services = [
    {
      title: 'Office Appliance Maintenance',
      description: 'Comprehensive maintenance for office appliances including water coolers, air conditioners, and kitchen equipment.',
      icon: '🏢',
      features: ['Regular maintenance schedules', 'Priority service', 'Dedicated account manager', 'Detailed service reports'],
    },
    {
      title: 'Restaurant & Hotel Services',
      description: 'Specialized services for commercial kitchens including refrigerators, dishwashers, and exhaust systems.',
      icon: '🍽️',
      features: ['24/7 emergency support', 'Commercial-grade equipment', 'Health & safety compliance', 'Fast response times'],
    },
    {
      title: 'Retail Store Solutions',
      description: 'Complete appliance solutions for retail stores including display units, cooling systems, and point-of-sale equipment.',
      icon: '🛍️',
      features: ['Minimal disruption service', 'After-hours availability', 'Bulk service discounts', 'Warranty coverage'],
    },
    {
      title: 'Industrial Equipment Service',
      description: 'Expert service for industrial appliances and heavy-duty equipment used in manufacturing and warehouses.',
      icon: '🏭',
      features: ['Specialized technicians', 'Industrial parts availability', 'Preventive maintenance', 'Downtime minimization'],
    },
    {
      title: 'Healthcare Facility Services',
      description: 'Reliable appliance services for hospitals, clinics, and healthcare facilities with strict compliance requirements.',
      icon: '🏥',
      features: ['Medical-grade standards', 'Infection control protocols', 'Certified technicians', 'Compliance documentation'],
    },
    {
      title: 'Educational Institution Services',
      description: 'Affordable appliance maintenance for schools, colleges, and educational facilities.',
      icon: '🎓',
      features: ['Budget-friendly plans', 'School holiday scheduling', 'Bulk service packages', 'Educational discounts'],
    },
  ];

  const benefits = [
    {
      title: 'Dedicated Support',
      description: 'Get a dedicated account manager for all your commercial service needs.',
      icon: '👤',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Schedule services during off-hours to minimize business disruption.',
      icon: '📅',
    },
    {
      title: 'Volume Discounts',
      description: 'Special pricing for multiple locations and bulk service requirements.',
      icon: '💰',
    },
    {
      title: 'Priority Response',
      description: 'Faster response times for commercial clients with priority service status.',
      icon: '⚡',
    },
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Commercial Services - Professional Appliance Solutions for Businesses"
        description="Comprehensive commercial appliance services for offices, restaurants, hotels, retail stores, and industrial facilities. Dedicated support and flexible scheduling."
        keywords="commercial appliance services, business appliance repair, office appliance maintenance, restaurant equipment service"
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 container-custom py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Commercial <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Professional appliance solutions tailored for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+919311587715"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300"
              >
                Call: +91-9311587715
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Commercial Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive appliance services designed for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 h-full flex flex-col">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-indigo-600 to-transparent rounded-full"></div>
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-indigo-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Commercial Benefits
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Advantages of choosing appliancecares for your commercial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-indigo-200 text-center h-full">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Contact us today to discuss your commercial appliance service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">Get Started</span>
              </Link>
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
                <span>Call: +91-9311587715</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommercialServices;

