import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, CheckCircle2, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring lasting results.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of 200+ skilled professionals brings decades of combined experience.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on completing projects on schedule without compromising quality.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols ensure the wellbeing of everyone on our sites.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Building Excellence for <span className="text-gradient">25+ Years</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Mithun Construction has been at the forefront of the construction industry, 
              delivering innovative solutions and exceptional results. Our commitment to excellence 
              has made us a trusted partner for projects ranging from residential developments 
              to large-scale infrastructure.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We combine cutting-edge technology with time-tested craftsmanship to create 
              structures that stand the test of time. Our client-centric approach ensures 
              that every project reflects your vision while meeting the highest industry standards.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {['Licensed & Insured', 'Eco-Friendly Practices', '24/7 Support', 'Competitive Pricing'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Target className="w-5 h-5" />
                Start Your Project
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-gray-800"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white mb-2">Trusted Certifications</h3>
            <p className="text-gray-400">Recognized by leading industry bodies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['ISO 9001', 'OSHA Certified', 'LEED Accredited', 'AIA Member', 'ABC Member'].map((cert) => (
              <div key={cert} className="text-gray-500 font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity cursor-default">
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
