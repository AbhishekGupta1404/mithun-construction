import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import axios from 'axios';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      // Static data for Vercel deployment
      const response = { data: [
        {
          id: 1,
          name: 'Michael Thompson',
          role: 'CEO, Thompson Enterprises',
          content: 'Mithun Construction delivered our office complex ahead of schedule and under budget. Their attention to detail and commitment to quality is unmatched.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
        },
        {
          id: 2,
          name: 'Sarah Chen',
          role: 'Property Developer',
          content: 'Working with this team was an absolute pleasure. They handled our residential development with professionalism and expertise that exceeded our expectations.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1494790108757-0a1dd7228f2d?w=200'
        },
        {
          id: 3,
          name: 'Robert Williams',
          role: 'Director, Metro Infrastructure',
          content: 'The bridge project was complex, but they navigated every challenge with innovative solutions. A truly reliable partner for large-scale infrastructure.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1472099645785-5a1dd7228f2d?w=200'
        },
        {
          id: 4,
          name: 'Amanda Foster',
          role: 'Hospital Administrator',
          content: 'They completed our medical center renovation with minimal disruption to our operations. The quality of work is exceptional and staff loves the new facilities.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1438761681033-6a1dd7228f2d?w=200'
        }
      ]}
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials([
        {
          id: 1,
          name: 'Michael Thompson',
          role: 'CEO, Thompson Enterprises',
          content: 'Mithun Construction delivered our office complex ahead of schedule and under budget. Their attention to detail and commitment to quality is unmatched.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
        },
        {
          id: 2,
          name: 'Sarah Chen',
          role: 'Property Developer',
          content: 'Working with this team was an absolute pleasure. They handled our residential development with professionalism and expertise that exceeded our expectations.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
        },
        {
          id: 3,
          name: 'Robert Williams',
          role: 'Director, Metro Infrastructure',
          content: 'The bridge project was complex, but they navigated every challenge with innovative solutions. A truly reliable partner for large-scale infrastructure.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
        },
        {
          id: 4,
          name: 'Amanda Foster',
          role: 'Hospital Administrator',
          content: 'They completed our medical center renovation with minimal disruption to our operations. The quality of work is exceptional and the staff loves the new facilities.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="section-padding bg-gradient-dark">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500" />
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-[#0f172a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
            about working with Mithun Construction.
          </p>
        </motion.div>

        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center z-10">
            <Quote className="w-8 h-8 text-white" />
          </div>

          {/* Testimonial Card */}
          <div className="glass-effect rounded-3xl p-8 sm:p-12 pt-16 mt-8">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{testimonials[currentIndex]?.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex]?.image}
                    alt={testimonials[currentIndex]?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-500 mb-4"
                  />
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex]?.name}
                  </h4>
                  <p className="text-primary-400 text-sm">
                    {testimonials[currentIndex]?.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-primary-500 hover:bg-primary-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary-500'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-primary-500 hover:bg-primary-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
