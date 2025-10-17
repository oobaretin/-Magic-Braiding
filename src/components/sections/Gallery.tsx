'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const galleryImages = [
  {
    id: '1',
    src: '/images/gallery/box-braids-1.jpg',
    alt: 'Beautiful box braids styling',
    category: 'Box Braids',
    description: 'Classic box braids with premium hair extensions'
  },
  {
    id: '2',
    src: '/images/gallery/goddess-braids-1.jpg',
    alt: 'Elegant goddess braids with curls',
    category: 'Goddess Braids',
    description: 'Stunning goddess braids with added curls and waves'
  },
  {
    id: '3',
    src: '/images/gallery/cornrows-1.jpg',
    alt: 'Traditional cornrow patterns',
    category: 'Cornrows',
    description: 'Traditional African cornrow braids in various patterns'
  },
  {
    id: '4',
    src: '/images/gallery/faux-locs-1.jpg',
    alt: 'Stylish faux locs',
    category: 'Faux Locs',
    description: 'Beautiful faux locs that mimic natural dreadlocks'
  },
  {
    id: '5',
    src: '/images/gallery/box-braids-2.jpg',
    alt: 'Medium length box braids',
    category: 'Box Braids',
    description: 'Medium length box braids with natural styling'
  },
  {
    id: '6',
    src: '/images/gallery/goddess-braids-2.jpg',
    alt: 'Long goddess braids',
    category: 'Goddess Braids',
    description: 'Long goddess braids with elegant curls'
  },
  {
    id: '7',
    src: '/images/gallery/boho-braids-1.jpg',
    alt: 'Boho style braids',
    category: 'Boho Braids',
    description: 'Trendy boho-style braids with loose waves'
  },
  {
    id: '8',
    src: '/images/gallery/children-braids-1.jpg',
    alt: 'Children braids styling',
    category: 'Children Braids',
    description: 'Gentle braiding for children with beautiful results'
  },
  {
    id: '9',
    src: '/images/gallery/maintenance-1.jpg',
    alt: 'Braid maintenance service',
    category: 'Maintenance',
    description: 'Professional braid maintenance and touch-ups'
  }
];

const categories = ['All', 'Box Braids', 'Goddess Braids', 'Cornrows', 'Faux Locs', 'Boho Braids', 'Children Braids', 'Maintenance'];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-rampart-one text-4xl md:text-5xl lg:text-6xl text-secondary-900 mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Explore our portfolio of beautiful hair braiding work. Each style is crafted with precision and care to enhance your natural beauty.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.category}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                  <h3 className="text-white font-semibold text-xl mb-2">{selectedImage.category}</h3>
                  <p className="text-white/90">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
