import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SupportCenter = () => {
  const supportOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+1 (555) 123-4567',
      hours: 'Mon-Sun: 8:00 AM - 10:00 PM',
      link: 'tel:+15551234567',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'support@mrserviceexpert.com',
      hours: '24/7 Email Support',
      link: 'mailto:support@mrserviceexpert.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      contact: 'Available on website',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      link: '/contact',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Knowledge Base',
      description: 'Browse our comprehensive help articles',
      contact: 'Self-service resources',
      hours: 'Available 24/7',
      link: '/blog',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const quickLinks = [
    { title: 'Track Your Service Request', icon: '📦', link: '/contact', description: 'Check the status of your service appointment' },
    { title: 'Schedule a Service', icon: '📅', link: '/contact', description: 'Book a new service appointment online' },
    { title: 'View Service History', icon: '📋', link: '/contact', description: 'Access your past service records' },
    { title: 'Download Invoices', icon: '🧾', link: '/contact', description: 'Get copies of your service invoices' },
    { title: 'Manage Maintenance Plans', icon: '🔧', link: '/maintenance-plans', description: 'View and manage your service plans' },
    { title: 'Report an Issue', icon: '⚠️', link: '/contact', description: 'Report a problem with your recent service' },
  ];

  const commonIssues = [
    {
      category: 'Service Booking',
      issues: [
        { question: 'How do I book a service appointment?', answer: 'You can book a service appointment through our website contact form, by calling our support number, or using our mobile app. We offer same-day service in most areas.' },
        { question: 'Can I reschedule my appointment?', answer: 'Yes, you can reschedule your appointment by calling our support team at least 24 hours before your scheduled time. We\'ll help you find the next available slot.' },
        { question: 'What information do I need to book a service?', answer: 'You\'ll need your contact details, appliance type and brand, description of the issue, and preferred date/time for service.' },
      ],
    },
    {
      category: 'Service & Repairs',
      issues: [
        { question: 'How much will the repair cost?', answer: 'Service charges vary based on the appliance type and issue. Our technician will provide a detailed quote before starting any work. Basic service charges start from ₹299.' },
        { question: 'Do you provide warranty on repairs?', answer: 'Yes, we provide comprehensive warranty on all repairs. The warranty period varies by service type and will be explained by our technician before completion.' },
        { question: 'What if my appliance can\'t be repaired?', answer: 'If repair isn\'t feasible or cost-effective, our technician will provide honest advice and may help you with replacement options, including discounts on new appliances.' },
      ],
    },
    {
      category: 'Billing & Payments',
      issues: [
        { question: 'What payment methods do you accept?', answer: 'We accept cash, credit/debit cards, UPI, net banking, and digital wallets. Payment is typically due upon service completion.' },
        { question: 'Can I get a receipt or invoice?', answer: 'Yes, we provide detailed invoices for all services via email or SMS. You can also request physical copies from our support team.' },
        { question: 'Are there any hidden charges?', answer: 'No, we maintain complete pricing transparency. All charges are discussed and approved before starting any work.' },
      ],
    },
  ];

  const resources = [
    {
      title: 'User Guides',
      description: 'Step-by-step guides for appliance maintenance',
      icon: '📖',
      link: '/blog',
    },
    {
      title: 'Video Tutorials',
      description: 'Watch helpful videos on appliance care',
      icon: '🎥',
      link: '/blog',
    },
    {
      title: 'Troubleshooting Tips',
      description: 'Common issues and quick fixes',
      icon: '💡',
      link: '/blog',
    },
    {
      title: 'Product Manuals',
      description: 'Download appliance user manuals',
      icon: '📄',
      link: '/blog',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Support Center - Customer Support & Help | appliancecares"
        description="Get help and support for all your appliance service needs. Contact our support team, access resources, and find solutions to common issues."
        keywords="support center, customer support, help center, technical support, service support"
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
              Support Center
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              We're here to help! Get the support you need for all your appliance service questions and issues.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expert Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Quick Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12 md:py-16">
        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How Can We Help You?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach our support team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-900 font-semibold text-sm">{option.contact}</p>
                  <p className="text-gray-500 text-xs">{option.hours}</p>
                </div>
                {option.link.startsWith('http') || option.link.startsWith('tel') || option.link.startsWith('mailto') ? (
                  <a
                    href={option.link}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm"
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={option.link}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm"
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Quick Links
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access common support features and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-purple-500 hover:shadow-md transition-all"
              >
                <Link to={link.link} className="block">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{link.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{link.title}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Common Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Common Issues & Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to frequently asked questions
            </p>
          </div>
          <div className="space-y-6">
            {commonIssues.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.issues.map((issue, issueIndex) => (
                    <div key={issueIndex} className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{issue.question}</h4>
                      <p className="text-gray-600 text-sm">{issue.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Helpful Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our knowledge base and learning resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Link to={resource.link} className="block">
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 md:p-10 text-center border border-purple-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Still Need Help?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is ready to assist you. Contact us through any of the channels above, or visit our FAQs page for more answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View FAQs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportCenter;

