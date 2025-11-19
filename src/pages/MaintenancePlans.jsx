import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const MaintenancePlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹999',
      period: '/month',
      description: 'Essential maintenance for single appliance',
      icon: '⭐',
      features: [
        'Quarterly service visits',
        'Basic cleaning & inspection',
        'Priority phone support',
        '10% discount on repairs',
        'Annual filter replacement',
      ],
      popular: false,
      color: 'blue',
    },
    {
      name: 'Premium Plan',
      price: '₹1,999',
      period: '/month',
      description: 'Comprehensive care for multiple appliances',
      icon: '✨',
      features: [
        'Monthly service visits',
        'Deep cleaning & maintenance',
        'Priority service scheduling',
        '20% discount on repairs',
        'Free filter replacements',
        'Annual health checkup',
        'Dedicated technician',
      ],
      popular: true,
      color: 'purple',
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for businesses',
      icon: '🏢',
      features: [
        'Unlimited service visits',
        '24/7 priority support',
        'Dedicated account manager',
        '30% discount on repairs',
        'All parts & filters included',
        'Preventive maintenance',
        'Customized schedule',
        'Service reports & analytics',
      ],
      popular: false,
      color: 'indigo',
    },
  ];

  const benefits = [
    {
      title: 'Prevent Breakdowns',
      description: 'Regular maintenance prevents costly emergency repairs',
      icon: '🛡️',
    },
    {
      title: 'Extend Lifespan',
      description: 'Keep your appliances running longer with proper care',
      icon: '⏰',
    },
    {
      title: 'Save Money',
      description: 'Discounts on repairs and avoid expensive replacements',
      icon: '💰',
    },
    {
      title: 'Peace of Mind',
      description: 'Know your appliances are always in good hands',
      icon: '😌',
    },
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Maintenance Plans - Regular Appliance Care & Service Plans"
        description="Choose from our maintenance plans to keep your appliances running smoothly. Regular service, discounts, and peace of mind with our comprehensive plans."
        keywords="appliance maintenance plans, service plans, preventive maintenance, appliance care plans"
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 container-custom py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Maintenance <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Plans</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Keep your appliances running smoothly with our comprehensive maintenance plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Choose a Plan
              </Link>
              <a
                href="tel:+919311587715"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300"
              >
                Call: +91-9311587715
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
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
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full"></div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Plans</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-green-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Choose Your Plan
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible maintenance plans to suit your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 h-full ${
                  plan.popular 
                    ? 'border-purple-300 hover:border-purple-400' 
                    : 'border-gray-100 hover:border-green-200'
                }`}>
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-extrabold ${
                      plan.color === 'blue' ? 'text-blue-600' :
                      plan.color === 'purple' ? 'text-purple-600' :
                      'text-indigo-600'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                          plan.color === 'blue' ? 'text-blue-600' :
                          plan.color === 'purple' ? 'text-purple-600' :
                          'text-indigo-600'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                        : plan.color === 'blue'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-green-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent rounded-full"></div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-emerald-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Why Choose Maintenance Plans?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Advantages of regular appliance maintenance
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
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 text-center h-full">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Protect Your Appliances?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Choose a maintenance plan today and enjoy peace of mind
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">Get Started</span>
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

export default MaintenancePlans;

