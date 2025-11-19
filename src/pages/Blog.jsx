import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  const blogPosts = [
    {
      id: 'led-tv-maintenance-tips-crystal-clear-display',
      title: 'Top 7 LED TV Maintenance Tips for Crystal Clear Display',
      excerpt: 'Master professional cleaning techniques, optimize ventilation, and fine-tune picture settings to extend your TV\'s lifespan while maintaining vibrant picture quality for years to come.',
      image: '/images/blog/led-tv-maintenance.webp',
      category: 'LED TV',
      date: 'October 2, 2025',
      readTime: '6 min read',
      author: 'Expert Technician',
      views: '2.3k views',
      tag: 'Maintenance',
    },
    {
      id: 'common-washing-machine-problems-diy-solutions',
      title: 'Common Washing Machine Problems & Safe DIY Solutions',
      excerpt: 'Identify and safely troubleshoot strange noises, water drainage issues, spinning problems, and door lock malfunctions before they become expensive repairs.',
      image: '/images/blog/washing-machine-problems.webp',
      category: 'Washing Machine',
      date: 'September 28, 2025',
      readTime: '8 min read',
      author: 'Expert Technician',
      views: '4.1k views',
      tag: 'Troubleshooting',
    },
    {
      id: 'extend-refrigerator-lifespan-cut-energy-bills',
      title: 'How to Extend Your Refrigerator\'s Lifespan & Cut Energy Bills by 30%',
      excerpt: 'Discover optimal temperature settings, proper coil cleaning schedules, and smart organization techniques that can dramatically reduce your electricity costs.',
      image: '/images/blog/refrigerator-lifespan.webp',
      category: 'Refrigerator',
      date: 'September 20, 2025',
      readTime: '7 min read',
      author: 'Expert Technician',
      views: '3.7k views',
      tag: 'Energy Saving',
    },
    {
      id: 'microwave-not-heating-quick-fixes-safety-tips',
      title: 'Microwave Not Heating? 5 Quick Fixes & When to Call Experts',
      excerpt: 'Run essential safety checks for power settings, child lock, and door alignment before identifying serious issues like magnetron or capacitor problems.',
      image: '/images/blog/microwave-not-heating.webp',
      category: 'Microwave',
      date: 'September 12, 2025',
      readTime: '5 min read',
      author: 'Expert Technician',
      views: '2.9k views',
      tag: 'Troubleshooting',
    },
  ];

  const categories = ['All', 'Maintenance', 'Troubleshooting', 'Energy Saving'];

  return (
    <div className="pt-16">
      <SEO
        title="Blog - Appliance Care Tips & Maintenance Guides"
        description="Expert tips, maintenance guides, and troubleshooting advice for all your home appliances. Learn how to keep your appliances running efficiently."
        keywords="appliance maintenance, home appliance tips, appliance repair guide, appliance care"
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[200px] overflow-hidden"
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
        
        <div className="relative z-10 container-custom py-10 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our <span className="bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Expert tips, guides, and insights for maintaining your home appliances
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-purple-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">All Articles</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Latest Posts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 overflow-hidden h-full flex flex-col">
                    <div className="h-40 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                          e.target.parentElement.innerHTML = '<span class="text-6xl">📺</span>';
                        }}
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          {post.tag || post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        {post.views && (
                          <span className="text-xs text-gray-500">• {post.views}</span>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-xs font-medium text-gray-600">{post.author}</span>
                        </div>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
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
              Need Professional Help?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Our expert technicians are ready to assist you with all your appliance needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Book Service</span>
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

export default Blog;

