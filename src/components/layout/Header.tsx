'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useBooking } from '@/components/booking/BookingProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-lg overflow-hidden">
              <img 
                src="/images/magicbraidslogo.png" 
                alt="Magic Braiding Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-rampart-one text-2xl md:text-3xl lg:text-4xl text-primary-600 -ml-4">
              Magic Braiding
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-medium transition-colors duration-200',
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
              onClick={() => openBookingModal()}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200 text-secondary-700 hover:bg-secondary-100"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full" onClick={() => openBookingModal()}>Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
