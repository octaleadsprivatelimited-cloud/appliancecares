import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'We guarantee genuine parts and expert workmanship on every service call.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Response',
      description: 'Same-day service available. We understand your time is valuable.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden fees. Quality service at fair prices.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in appliance repair.',
    },
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to provide reliable appliance services' },
    { year: '2015', title: '1000+ Customers', description: 'Reached our first major milestone of satisfied customers' },
    { year: '2018', title: 'National Expansion', description: 'Expanded services across major cities in India' },
    { year: '2020', title: '1 Million Customers', description: 'Celebrated serving over 1 million happy customers' },
    { year: '2023', title: '8 Million+ Customers', description: 'Achieved 8 million customers with 20,000+ service centers' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: '20+ years of experience in appliance service industry',
      image: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      description: 'Expert in managing nationwide service operations',
      image: '👩‍💼',
    },
    {
      name: 'Amit Patel',
      role: 'Technical Head',
      description: 'Certified master technician with expertise in all appliances',
      image: '👨‍🔧',
    },
    {
      name: 'Sneha Reddy',
      role: 'Customer Success Manager',
      description: 'Dedicated to ensuring customer satisfaction',
      image: '👩‍💻',
    },
  ];

  return (
    <div className="pt-16">
      <SEO
        title="About Us - Your Trusted Appliance Service Partner"
        description="Learn about appliancecares - India's leading appliance repair and maintenance service provider. 8+ million satisfied customers, 20,000+ service centers."
        keywords="about us, appliance service company, appliance repair, home services, company history"
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 container-custom py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              About <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">appliancecares</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your trusted partner for all home appliance repair and maintenance needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-purple-600 to-transparent rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Trust, One Service at a Time
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 2010, <strong>appliancecares</strong> began with a simple mission: to provide reliable, affordable, and professional appliance repair services to households across India.
                </p>
                <p>
                  What started as a small local service has grown into one of India's most trusted appliance service providers, serving over <strong>8 million customers</strong> through our network of <strong>20,000+ service centers</strong> nationwide.
                </p>
                <p>
                  We understand that your appliances are essential to your daily life. That's why we've built a team of certified technicians, established partnerships with leading brands, and developed a service model that prioritizes your convenience and satisfaction.
                </p>
                <p>
                  Today, we repair and maintain over <strong>300+ brands</strong> of appliances, from water purifiers and washing machines to air conditioners and kitchen appliances. Our commitment to quality, transparency, and customer service remains unchanged.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      8M+
                    </div>
                    <div className="text-sm font-semibold text-gray-700">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      20K+
                    </div>
                    <div className="text-sm font-semibold text-gray-700">Service Centers</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      300+
                    </div>
                    <div className="text-sm font-semibold text-gray-700">Brands Covered</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      13+
                    </div>
                    <div className="text-sm font-semibold text-gray-700">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-purple-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide reliable, affordable, and professional appliance repair services that restore convenience to our customers' lives. We strive to be the most trusted name in appliance services by delivering exceptional quality, transparent pricing, and unmatched customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's leading appliance service provider, recognized for innovation, excellence, and customer-centricity. We envision a future where every household has access to professional, affordable appliance services, ensuring that technology enhances rather than disrupts daily life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-pink-500 via-purple-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-pink-500 via-purple-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              What We Stand For
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 h-full">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    index === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    index === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                    'bg-gradient-to-br from-emerald-500 to-emerald-600'
                  } text-white group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-orange-500 via-yellow-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Milestones & Achievements
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Key moments in our growth story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/3">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200 text-center">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                  </div>
                </div>
                <div className="md:w-2/3 flex items-center">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 via-purple-500 to-transparent rounded-full"></div>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-indigo-500 via-purple-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Meet Our Leadership
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-purple-600 mb-2">{member.role}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 via-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Experience Our Service?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Join millions of satisfied customers who trust us with their appliance needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Get Started</span>
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

export default About;

