'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CalendarIcon, ClockIcon, UserIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const bookingSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Please enter a valid email address'),
  clientPhone: z.string().min(10, 'Please enter a valid phone number'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: {
    serviceName: string;
    variation: {
      name: string;
      duration: string;
      price: number;
    };
  };
}

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      preferredDate: '',
      preferredTime: '',
      notes: '',
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Booking submitted:', {
        ...data,
        service: selectedService?.serviceName,
        variation: selectedService?.variation.name,
        price: selectedService?.variation.price,
        duration: selectedService?.variation.duration
      });
      
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        reset();
        setIsSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Booking error:', error);
      alert('There was an error booking your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl"
          >
            <Card className="max-h-[90vh] overflow-y-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <h2 className="font-semibold text-2xl text-secondary-900">
                    Book Your Appointment
                  </h2>
                  {selectedService && (
                    <p className="text-secondary-600 mt-1">
                      {selectedService.serviceName} - {selectedService.variation.name}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6 text-secondary-500" />
                </button>
              </CardHeader>

              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      Appointment Booked Successfully!
                    </h3>
                    <p className="text-secondary-600">
                      We will contact you shortly to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Service Information */}
                    {selectedService && (
                      <div className="bg-primary-50 rounded-lg p-4">
                        <h3 className="font-semibold text-primary-900 mb-2">Selected Service</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-primary-700 font-medium">Service:</span>
                            <p className="text-primary-800">{selectedService.serviceName}</p>
                          </div>
                          <div>
                            <span className="text-primary-700 font-medium">Style:</span>
                            <p className="text-primary-800">{selectedService.variation.name}</p>
                          </div>
                          <div>
                            <span className="text-primary-700 font-medium">Duration:</span>
                            <p className="text-primary-800">{selectedService.variation.duration}</p>
                          </div>
                          <div>
                            <span className="text-primary-700 font-medium">Price:</span>
                            <p className="text-primary-800 font-bold">${selectedService.variation.price}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-secondary-900">Your Information</h3>
                      
                      <div>
                        <label htmlFor="clientName" className="block text-sm font-medium text-secondary-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="text"
                            id="clientName"
                            {...register('clientName')}
                            className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.clientName && (
                          <p className="text-red-600 text-sm mt-1">{errors.clientName.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="clientEmail" className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="email"
                            id="clientEmail"
                            {...register('clientEmail')}
                            className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter your email address"
                          />
                        </div>
                        {errors.clientEmail && (
                          <p className="text-red-600 text-sm mt-1">{errors.clientEmail.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="clientPhone" className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="tel"
                            id="clientPhone"
                            {...register('clientPhone')}
                            className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        {errors.clientPhone && (
                          <p className="text-red-600 text-sm mt-1">{errors.clientPhone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-secondary-900">Appointment Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-secondary-700 mb-2">
                            Preferred Date *
                          </label>
                          <div className="relative">
                            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                            <input
                              type="date"
                              id="preferredDate"
                              {...register('preferredDate')}
                              className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            />
                          </div>
                          {errors.preferredDate && (
                            <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-secondary-700 mb-2">
                            Preferred Time *
                          </label>
                          <div className="relative">
                            <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                            <select
                              id="preferredTime"
                              {...register('preferredTime')}
                              className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            >
                              <option value="">Select a time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                          {errors.preferredTime && (
                            <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-secondary-700 mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          id="notes"
                          {...register('notes')}
                          rows={3}
                          className="w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Any special requests or notes for your appointment..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        className="px-6 py-2"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2"
                      >
                        {isSubmitting ? 'Booking...' : 'Book Appointment'}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};