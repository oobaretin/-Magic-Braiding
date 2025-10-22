'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { formatPrice } from '@/lib/utils';

const bookingSchema = z.object({
  serviceId: z.string().min(1, 'Please select a service'),
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
  selectedService?: string;
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
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceId: selectedService || '',
    }
  });

  const selectedServiceId = watch('serviceId');

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Booking submitted:', data);
      
      // Reset form and close modal
      reset();
      setCurrentStep(1);
      onClose();
      
      // Show success message (you could use a toast notification here)
      alert('Appointment booked successfully! We will contact you to confirm.');
      
    } catch (error) {
      console.error('Booking error:', error);
      alert('There was an error booking your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    setCurrentStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
                    <p className="text-secondary-600 mt-1">
                      Step {currentStep} of 3
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200"
                  >
                    <XMarkIcon className="w-6 h-6 text-secondary-500" />
                  </button>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Step 1: Service Selection */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <h3 className="font-semibold text-lg text-secondary-900 mb-4">
                          Select a Service
                        </h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="serviceDescription" className="block text-sm font-medium text-secondary-700 mb-2">
                              Service Description
                            </label>
                            <textarea
                              id="serviceDescription"
                              {...register('serviceId')}
                              placeholder="Please describe the hair braiding service you're interested in (e.g., Box Braids, Goddess Braids, Cornrows, etc.)"
                              className="w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                              rows={3}
                            />
                          </div>
                        </div>
                        
                        {errors.serviceId && (
                          <p className="text-red-600 text-sm">{errors.serviceId.message}</p>
                        )}
                      </motion.div>
                    )}

                    {/* Step 2: Personal Information */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <h3 className="font-semibold text-lg text-secondary-900 mb-4">
                          Your Information
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              {...register('clientName')}
                              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="Your full name"
                            />
                            {errors.clientName && (
                              <p className="text-red-600 text-sm mt-1">{errors.clientName.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              {...register('clientEmail')}
                              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="your@email.com"
                            />
                            {errors.clientEmail && (
                              <p className="text-red-600 text-sm mt-1">{errors.clientEmail.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            {...register('clientPhone')}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="(281) 555-0123"
                          />
                          {errors.clientPhone && (
                            <p className="text-red-600 text-sm mt-1">{errors.clientPhone.message}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Date & Time */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <h3 className="font-semibold text-lg text-secondary-900 mb-4">
                          Select Date & Time
                        </h3>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            {...register('preferredDate')}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                          {errors.preferredDate && (
                            <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Preferred Time *
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <label
                                key={time}
                                className={`relative cursor-pointer rounded-lg border-2 p-3 text-center transition-all duration-200 ${
                                  watch('preferredTime') === time
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-secondary-200 hover:border-secondary-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  value={time}
                                  {...register('preferredTime')}
                                  className="sr-only"
                                />
                                {time}
                              </label>
                            ))}
                          </div>
                          {errors.preferredTime && (
                            <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Additional Notes (Optional)
                          </label>
                          <textarea
                            {...register('notes')}
                            rows={3}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                            placeholder="Any special requests or information we should know..."
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t border-secondary-200">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                      >
                        Previous
                      </Button>
                      
                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(currentStep + 1)}
                          disabled={!selectedServiceId}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          loading={isSubmitting}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Booking...' : 'Book Appointment'}
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
