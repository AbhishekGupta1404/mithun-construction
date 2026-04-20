import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Factory, Route, Wrench, ClipboardList } from 'lucide-react';
import axios from 'axios';

const iconMap = {
  building: Building2,
  home: Home,
  factory: Factory,
  road: Route,
  tools: Wrench,
  clipboard: ClipboardList,
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices([
        {
          id: 1,
          title: 'Commercial Construction',
          description: 'Full-service commercial building construction from office complexes to retail centers.',
          icon: 'building',
          features: ['Design-Build Services', 'Project Management', 'Commercial Renovation', 'Tenant Improvements']
        },
        {
          id: 2,
          title: 'Residential Projects',
          description: 'Custom homes, multi-family housing, and residential developments built to perfection.',
          icon: 'home',
          features: ['Custom Home Building', 'Multi-Family Housing', 'Luxury Estates', 'Renovations']
        },
        {
          id: 3,
          title: 'Industrial Construction',
          description: 'Specialized industrial facilities including warehouses, factories, and distribution centers.',
          icon: 'factory',
          features: ['Warehouses', 'Manufacturing Plants', 'Distribution Centers', 'Cold Storage']
        },
        {
          id: 4,
          title: 'Infrastructure',
          description: 'Large-scale infrastructure projects including bridges, roads, and public works.',
          icon: 'road',
          features: ['Bridges & Highways', 'Public Works', 'Utilities', 'Transportation']
        },
        {
          id: 5,
          title: 'Renovation & Restoration',
          description: 'Transform existing structures with our expert renovation and restoration services.',
          icon: 'tools',
          features: ['Historic Restoration', 'Building Modernization', 'Structural Repairs', 'Interior Renovation']
        },
        {
          id: 6,
          title: 'Project Management',
          description: 'Expert project management ensuring on-time, on-budget delivery with quality results.',
          icon: 'clipboard',
          features: ['Planning & Scheduling', 'Cost Management', 'Quality Control', 'Safety Compliance']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From concept to completion, we offer comprehensive construction services 
            tailored to meet your unique needs and exceed your expectations.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Building2;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="glass-effect rounded-2xl p-6 hover-lift group"
                >
                  <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
