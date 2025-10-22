'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional hair braiding services tailored to your unique style and needs. 
            Each service includes premium materials and expert craftsmanship.
          </p>
        </motion.div>

        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Contact Us for Services
            </h3>
            <p className="text-lg text-secondary-600 mb-8">
              For information about our hair braiding services, please contact us directly. 
              We&apos;ll be happy to discuss your needs and provide details about our offerings.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-600 mb-8">
            Ready to book your appointment? Contact us to schedule your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18325267055" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Call (832) 526-7055
            </a>
            <a 
              href="/contact" 
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
