import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: 'General Questions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      faqs: [
        {
          question: 'What services does appliancecares provide?',
          answer: 'We provide comprehensive appliance repair and maintenance services for all major home appliances including RO water purifiers, washing machines, refrigerators, air conditioners, geysers, microwaves, and more. We also offer commercial services, emergency repairs, and maintenance plans.',
        },
        {
          question: 'Are your technicians certified and experienced?',
          answer: 'Yes, all our technicians are certified, trained, and have extensive experience in repairing various appliance brands. They undergo regular training to stay updated with the latest technology and repair techniques.',
        },
        {
          question: 'Do you provide service warranty?',
          answer: 'Yes, we provide a comprehensive service warranty on all repairs. The warranty period varies depending on the type of service and parts replaced. Our technicians will explain the warranty details before completing the service.',
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve customers across major cities in India. Our service network includes over 20,000 service centers nationwide, ensuring we can reach you wherever you are. Please contact us to confirm service availability in your area.',
        },
        {
          question: 'How can I book a service appointment?',
          answer: 'You can book a service appointment through our website by filling out the contact form, calling our customer service number, or using our mobile app. We offer same-day service in most areas.',
        },
      ],
    },
    {
      title: 'Service & Repair',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      faqs: [
        {
          question: 'How much does a service call cost?',
          answer: 'Our service call charges vary based on the type of appliance and location. We provide transparent pricing with no hidden costs. You\'ll receive a detailed quote before we begin any repair work. Basic service charges start from ₹299, and we offer free estimates for major repairs.',
        },
        {
          question: 'Do you use genuine spare parts?',
          answer: 'Yes, we use only genuine and high-quality spare parts from authorized dealers. We maintain a comprehensive inventory of parts for all major appliance brands to ensure quick repairs and optimal performance.',
        },
        {
          question: 'How long does a typical repair take?',
          answer: 'Most repairs are completed on the same day. Simple repairs like filter replacement or basic maintenance can take 30-60 minutes, while complex repairs may require 2-4 hours. If parts need to be ordered, we\'ll schedule a follow-up visit.',
        },
        {
          question: 'What if my appliance can\'t be repaired?',
          answer: 'If your appliance cannot be repaired or the repair cost exceeds 50% of the appliance\'s value, our technician will provide honest advice. We can help you with appliance replacement options and may offer discounts on new purchases.',
        },
        {
          question: 'Do you repair all brands of appliances?',
          answer: 'Yes, we repair all major brands including LG, Samsung, Whirlpool, Godrej, Voltas, Daikin, Hitachi, and many more. Our technicians are trained to work with various brands and models.',
        },
      ],
    },
    {
      title: 'Emergency Services',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      faqs: [
        {
          question: 'Do you offer 24/7 emergency repair services?',
          answer: 'Yes, we offer 24/7 emergency repair services for urgent situations like water leakage, gas leaks, electrical issues, or complete appliance breakdowns. Our emergency service team is available round the clock to assist you.',
        },
        {
          question: 'What qualifies as an emergency repair?',
          answer: 'Emergency repairs include situations that pose immediate safety risks or cause significant inconvenience, such as water leakage from appliances, gas leaks, electrical sparks, complete AC breakdown during extreme weather, or refrigerator failure causing food spoilage.',
        },
        {
          question: 'How quickly can you respond to emergency calls?',
          answer: 'We aim to respond to emergency calls within 2-4 hours in most urban areas. Response time may vary based on location and current service load. Our priority is to address safety-related emergencies first.',
        },
        {
          question: 'Is there an additional charge for emergency services?',
          answer: 'Yes, emergency services may have additional charges due to the priority scheduling and after-hours service. However, we maintain transparent pricing and will inform you of all charges before dispatching a technician.',
        },
      ],
    },
    {
      title: 'Maintenance Plans',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      faqs: [
        {
          question: 'What are maintenance plans and why do I need one?',
          answer: 'Maintenance plans are annual service contracts that provide regular preventive maintenance for your appliances. They help extend appliance lifespan, improve efficiency, prevent costly breakdowns, and ensure optimal performance throughout the year.',
        },
        {
          question: 'What is included in a maintenance plan?',
          answer: 'Our maintenance plans typically include scheduled preventive maintenance visits, priority service, discounts on repairs and parts, free annual service, extended warranty options, and 24/7 customer support. Specific inclusions vary by plan type.',
        },
        {
          question: 'How much do maintenance plans cost?',
          answer: 'Maintenance plan costs vary based on the number of appliances, plan type (basic, premium, or comprehensive), and coverage duration. Plans start from ₹2,999 per year for a single appliance. Contact us for a customized quote based on your needs.',
        },
        {
          question: 'Can I cancel my maintenance plan?',
          answer: 'Yes, you can cancel your maintenance plan at any time. Refunds are provided on a prorated basis for the unused portion of the plan. Please contact our customer service team to process the cancellation.',
        },
      ],
    },
    {
      title: 'Payment & Billing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major payment methods including cash, credit/debit cards, UPI, net banking, and digital wallets. Payment can be made at the time of service completion or through our online portal.',
        },
        {
          question: 'When do I need to pay for the service?',
          answer: 'Payment is typically due upon completion of the service. For major repairs requiring parts, we may request a partial advance payment. All payments are processed securely, and you\'ll receive a detailed invoice.',
        },
        {
          question: 'Do you provide invoices and receipts?',
          answer: 'Yes, we provide detailed invoices and receipts for all services. These include service charges, parts costs, warranty information, and payment confirmation. Digital invoices are sent via email or SMS.',
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No, we maintain complete transparency in our pricing. All charges are discussed and approved before starting any work. You\'ll receive a detailed quote upfront, and we won\'t proceed without your consent.',
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const index = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="FAQs - Frequently Asked Questions | appliancecares"
        description="Find answers to common questions about our appliance repair services, maintenance plans, emergency services, and more. Get all your questions answered."
        keywords="FAQs, frequently asked questions, appliance repair questions, service queries, maintenance plans"
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Find answers to common questions about our services, repairs, and maintenance plans.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const index = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Still Have Questions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 md:p-10 text-center border border-purple-100"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our customer support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

