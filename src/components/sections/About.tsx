'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  UserGroupIcon, 
  SparklesIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: HeartIcon,
    title: 'Passion for Beauty',
    description: 'We believe every client deserves to feel beautiful and confident in their own skin.'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Team',
    description: 'Our skilled professionals have years of experience in hair braiding and styling.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Quality',
    description: 'We use only the highest quality hair extensions and professional-grade products.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safe & Clean',
    description: 'Our salon maintains the highest standards of cleanliness and safety protocols.'
  }
];

export const About: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-6">
              About Magic Braiding
            </h2>
            
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              At Magic Braiding, we believe in the transformative power of beautiful hair. Our skilled 
              professionals are dedicated to creating stunning braids that enhance your natural beauty 
              and boost your confidence. We use only the highest quality hair extensions and professional-grade products.
            </p>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Led by Stella, our experienced braiding specialist with years of expertise, we are committed 
              to providing exceptional service in a clean, professional environment. Every appointment is 
              an opportunity to create something magical that reflects your unique style and personality.
            </p>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-stella.png" 
                alt="Magic Braiding - About Us" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-primary-600 mb-1">20+</div>
              <div className="text-secondary-600 text-sm">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-accent-600 mb-1">1000+</div>
              <div className="text-secondary-600 text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-display font-semibold text-3xl text-secondary-900 mb-4">
              Why Choose Us
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional service and results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-lg text-secondary-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
