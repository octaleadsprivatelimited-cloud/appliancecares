import { motion } from 'framer-motion';

const Testimonial = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 h-full"
    >
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-secondary fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6 italic text-lg">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg mr-4">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-800">
            {testimonial.author}
          </div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;

