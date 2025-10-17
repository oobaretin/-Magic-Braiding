'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/booking/BookingProvider';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-700 z-10" />
        <div className="w-full h-full bg-[url('/images/hero-braids.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-rampart-one text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Magic Braiding
            <span className="block text-primary-200 font-sans font-bold">Professional Hair Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional hair braiding services in Richmond, Texas. 
            Beautiful, long-lasting braids and protective styles that enhance your natural beauty.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-primary-50"
              onClick={() => openBookingModal()}
            >
              Book Your Appointment
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
