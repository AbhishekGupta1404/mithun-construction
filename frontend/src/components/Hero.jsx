import { motion } from 'framer-motion';
import { ArrowRight, Play, Phone } from 'lucide-react';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                Building Tomorrow&apos;s World Today
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 xs:mb-6"
            >
              Constructing{' '}
              <span className="text-gradient">Excellence</span>
              <br />
              Building{' '}
              <span className="text-gradient">Dreams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm xs:text-base md:text-lg mb-6 xs:mb-8 max-w-lg mx-auto lg:mx-0 lg:max-w-xl"
            >
              With over 25 years of experience, we deliver world-class construction 
              solutions that transform visions into reality. From commercial skyscrapers 
              to residential masterpieces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/30 cursor-pointer text-sm xs:text-base"
              >
                View Our Projects
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-primary-500 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold transition-all hover:bg-primary-500/10 cursor-pointer text-sm xs:text-base"
              >
                <Phone className="w-4 h-4 xs:w-5 xs:h-5" />
                Contact Us
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 xs:gap-6 mt-8 xs:mt-12 pt-6 xs:pt-8 border-t border-gray-800"
            >
              <div className="text-center xs:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gradient">500+</div>
                <div className="text-gray-400 text-xs xs:text-sm mt-1">Projects Completed</div>
              </div>
              <div className="text-center xs:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gradient">25+</div>
                <div className="text-gray-400 text-xs xs:text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center xs:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gradient">100%</div>
                <div className="text-gray-400 text-xs xs:text-sm mt-1">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 hidden lg:block"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
