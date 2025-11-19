import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      state: 'Delhi NCR',
      cities: ['New Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad'],
      icon: '🏛️',
    },
    {
      state: 'Maharashtra',
      cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
      icon: '🌊',
    },
    {
      state: 'Karnataka',
      cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
      icon: '🌴',
    },
    {
      state: 'Tamil Nadu',
      cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
      icon: '🏛️',
    },
    {
      state: 'Gujarat',
      cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
      icon: '🏭',
    },
    {
      state: 'West Bengal',
      cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'],
      icon: '🎭',
    },
    {
      state: 'Rajasthan',
      cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
      icon: '🏰',
    },
    {
      state: 'Uttar Pradesh',
      cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Allahabad'],
      icon: '🕌',
    },
    {
      state: 'Telangana',
      cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam'],
      icon: '💎',
    },
    {
      state: 'Andhra Pradesh',
      cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati'],
      icon: '🌅',
    },
    {
      state: 'Kerala',
      cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam'],
      icon: '🌴',
    },
    {
      state: 'Punjab',
      cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
      icon: '🌾',
    },
  ];

  const popularCities = [
    { name: 'Mumbai', state: 'Maharashtra', icon: '🌊' },
    { name: 'Delhi', state: 'Delhi NCR', icon: '🏛️' },
    { name: 'Bangalore', state: 'Karnataka', icon: '🌴' },
    { name: 'Hyderabad', state: 'Telangana', icon: '💎' },
    { name: 'Chennai', state: 'Tamil Nadu', icon: '🏛️' },
    { name: 'Kolkata', state: 'West Bengal', icon: '🎭' },
    { name: 'Pune', state: 'Maharashtra', icon: '🌊' },
    { name: 'Ahmedabad', state: 'Gujarat', icon: '🏭' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Service Areas - Cities We Serve | appliancecares"
        description="Find out if we provide appliance repair services in your city. We serve major cities across India with 20,000+ service centers nationwide."
        keywords="service areas, cities we serve, appliance repair locations, service coverage, service cities"
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
              Service Areas
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              We provide comprehensive appliance repair services across major cities in India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>20,000+ Service Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>100+ Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Same-Day Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12 md:py-16">
        {/* Popular Cities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Popular Cities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick access to our most requested service locations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {city.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.state}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Service Areas by State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              All Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete list of service locations organized by state
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{area.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{area.state}</h3>
                </div>
                <ul className="space-y-2">
                  {area.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 md:p-10 text-center border border-purple-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Don't See Your City?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly expanding our service network. Contact us to check if we can serve your area or to request service in a new location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceAreas;

