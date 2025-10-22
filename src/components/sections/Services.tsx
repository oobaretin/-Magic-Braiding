'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Magic Braiding Salon Information
const SALON_INFO = {
  name: "Magic Braiding",
  phone: "(832) 526-7055",
  email: "info@magicbraiding.com",
  address: "9711 Mason Rd, Richmond, TX 77407",
  hours: "Mon-Sat: 8AM-6PM, Sun: Closed",
  bookingUrl: "tel:+18325267055", // Direct phone call
  website: "https://magicbraiding.com",
  instagram: "@magicbraiding",
  description: "Professional hair braiding services in Richmond, Texas"
};

// Service categories with style counts (matching the screenshot)
const SERVICE_CATEGORIES = {
  "Braids": 9,
  "Twists": 8,
  "Faux Locs": 3,
  "Crotchets": 9,
  "Dreads": 2,
  "Kid Styles": 8,
  "Cornrows": 12,
  "Bantu Knots": 7,
  "Weaves/Extensions": 3,
  "Hair Maintenance & Consultation": 2
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

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

        {/* Service Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(SERVICE_CATEGORIES).map(([category, count]) => (
            <motion.button
              key={category}
              onClick={() => toggleCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white'
                  : 'bg-white text-secondary-800 hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl font-bold">{category}</h3>
              <p className="text-sm mt-1 opacity-80">
                {count} styles
              </p>
            </motion.button>
          ))}
        </div>

        {/* Selected Category Details */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg mr-3">
                {selectedCategory}
              </span>
            </h2>

            <div className="text-center py-8">
              <p className="text-lg text-secondary-600 mb-6">
                We offer professional {selectedCategory.toLowerCase()} services with expert craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={SALON_INFO.bookingUrl} 
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (832) 526-7055</span>
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Look?</h3>
            <p className="text-lg mb-6">
              Book your appointment today and experience professional hair care at its finest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SALON_INFO.bookingUrl}
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Salon Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-600" />
              <div>
                <p className="font-semibold text-secondary-900">Phone</p>
                <p className="text-secondary-600">{SALON_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-600" />
              <div>
                <p className="font-semibold text-secondary-900">Email</p>
                <p className="text-secondary-600">{SALON_INFO.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-600" />
              <div>
                <p className="font-semibold text-secondary-900">Address</p>
                <p className="text-secondary-600">{SALON_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary-600" />
              <div>
                <p className="font-semibold text-secondary-900">Hours</p>
                <p className="text-secondary-600">{SALON_INFO.hours}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};