import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      link: 'tel:+15551234567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@mrserviceexpert.com', 'support@mrserviceexpert.com'],
      link: 'mailto:info@mrserviceexpert.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      details: ['123 Service Street', 'City, State 12345'],
      link: '#',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM', 'Sun: Emergency Only'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us"
        description="Get in touch with us today. We're here to help with all your service needs. 24/7 emergency service available."
        keywords="contact, get quote, free estimate, emergency service, service request"
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              We're here to help! Get in touch with us and let's discuss how we can assist with your service needs.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Reach out to us through any of these channels. We're always ready to assist you.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <a
                        key={idx}
                        href={info.link}
                        className="block text-gray-600 hover:text-purple-600 transition-colors text-sm mb-1"
                      >
                        {detail}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Serving Locations Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Service Coverage</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Cities We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional appliance repair services across major cities in India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Mumbai', state: 'Maharashtra', icon: '🌊' },
              { name: 'Delhi', state: 'Delhi NCR', icon: '🏛️' },
              { name: 'Bangalore', state: 'Karnataka', icon: '🌴' },
              { name: 'Hyderabad', state: 'Telangana', icon: '💎' },
              { name: 'Chennai', state: 'Tamil Nadu', icon: '🏛️' },
              { name: 'Kolkata', state: 'West Bengal', icon: '🎭' },
              { name: 'Pune', state: 'Maharashtra', icon: '🌊' },
              { name: 'Ahmedabad', state: 'Gujarat', icon: '🏭' },
              { name: 'Jaipur', state: 'Rajasthan', icon: '🏰' },
              { name: 'Lucknow', state: 'Uttar Pradesh', icon: '🕌' },
              { name: 'Gurgaon', state: 'Delhi NCR', icon: '🏛️' },
              { name: 'Noida', state: 'Delhi NCR', icon: '🏛️' },
            ].map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{city.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-gray-500">{city.state}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
            >
              View All Service Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-lg overflow-hidden border border-gray-200 shadow-lg"
        >
          <div className="relative w-full h-[300px] md:h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1234567890123!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-white p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Our Location</p>
                <p className="text-gray-600 text-xs">123 Service Street, City, State 12345</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Service+Street+City+State+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 bg-purple-600 text-white text-xs font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
