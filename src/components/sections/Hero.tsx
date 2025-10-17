'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/booking/BookingProvider';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const heroImages = [
  '/images/braid-1.png',
  '/images/braid-2.png',
  '/images/braid-3.png',
  '/images/braid-4.png',
  '/images/braid-5.png',
];

export const Hero: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax transforms - very gentle, subtle movement
  const y1 = useTransform(scrollY, [0, 1000], [0, -30]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -20]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 12000); // Much longer to let each image be fully appreciated

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-primary-700/10 z-10" />
        
        {/* Parallax layer 1 - Main image */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 w-full h-full"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: y3 }}
        className="relative z-20 container-custom text-center"
      >
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
      </motion.div>

      {/* Slideshow Indicators with Parallax */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator with Parallax */}
      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
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
