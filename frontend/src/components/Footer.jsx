import { motion } from 'framer-motion';
import { HardHat, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Commercial Construction', href: '#services' },
      { name: 'Residential Projects', href: '#services' },
      { name: 'Industrial Facilities', href: '#services' },
      { name: 'Infrastructure', href: '#services' },
      { name: 'Renovations', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'FAQ', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <HardHat className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">
                Mithun <span className="text-primary-500">Construction</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building excellence since 1999. We transform visions into reality with 
              innovative construction solutions and unwavering commitment to quality.
            </p>
            <div className="space-y-3">
              <a href="tel:+917973725837" className="flex items-center gap-3 text-gray-400 hover:text-primary-500 transition-colors">
                <Phone className="w-4 h-4 text-primary-500" />
                +91 7973725837
              </a>
              <a href="mailto:mithungpk@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-500 transition-colors">
                <Mail className="w-4 h-4 text-primary-500" />
                mithungpk@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-primary-500" />
                123 Construction Ave, Building City
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Mithun Construction. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
