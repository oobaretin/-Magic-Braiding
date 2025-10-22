import { Service, Testimonial, GalleryImage, BusinessHours, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic African box braids with premium synthetic or human hair extensions. Perfect for protective styling and low maintenance.',
    price: 120,
    duration: '4-6 hours',
    category: 'braids',
    features: [
      'Premium hair extensions included',
      'Scalp protection treatment',
      'Styling tips included',
      '2-week follow-up consultation'
    ],
    popular: true,
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Trendy boho-style braids with loose, natural waves and effortless beauty for a free-spirited look.',
    price: 140,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Boho hair extensions included',
      'Custom wave pattern',
      'Natural styling techniques',
      'Maintenance guide included'
    ],
    popular: true,
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Traditional African cornrow braids in various patterns and designs for a timeless, cultural look.',
    price: 80,
    duration: '2-3 hours',
    category: 'braids',
    features: [
      'Custom pattern design',
      'Scalp massage included',
      'Protective styling tips',
      'Touch-up recommendations'
    ],
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Elegant goddess braids with added curls and waves for a stunning, versatile look.',
    price: 150,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Premium curly hair extensions',
      'Custom curl pattern',
      'Heat protection treatment',
      'Maintenance guide included'
    ],
  },
  {
    id: 'faux-locs',
    name: 'Faux Locs',
    description: 'Beautiful faux locs that mimic natural dreadlocks without the commitment.',
    price: 180,
    duration: '6-8 hours',
    category: 'braids',
    features: [
      'Premium loc hair included',
      'Custom length and thickness',
      'Installation care guide',
      '3-week follow-up included'
    ],
  },
  {
    id: 'braid-maintenance',
    name: 'Braid Maintenance',
    description: 'Professional maintenance service to keep your braids looking fresh and healthy.',
    price: 60,
    duration: '2-3 hours',
    category: 'maintenance',
    features: [
      'Scalp cleansing and conditioning',
      'Loose braid repair',
      'Edge touch-ups',
      'Styling refresh'
    ],
  },
  {
    id: 'consultation',
    name: 'Hair Consultation',
    description: 'Personalized consultation to determine the best braiding style for your hair type and lifestyle.',
    price: 25,
    duration: '30 minutes',
    category: 'consultation',
    features: [
      'Hair health assessment',
      'Style recommendations',
      'Maintenance planning',
      'Product recommendations'
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Janice Blount',
    service: 'Hair Braiding',
    rating: 5,
    comment: 'This is 50 minute drive for me and is 100% worth it. Do not hesitate. I was referred her by a coworker after I saw her hair I just had to know who did it and I am 100% satisfied. Very clean, polite, and swift. Not heavy handed at all.',
    date: '2024-06-15',
  },
  {
    id: '2',
    name: 'Larrina Rogers',
    service: 'Hair Braiding',
    rating: 5,
    comment: 'Mrs. Stella is hands down, one of the BEST! She took me as a last minute client and I am grateful for her! She\'s so nice, very professional and has a very neat/clean space! She has definitely gained me as a regular client!',
    date: '2024-03-15',
  },
  {
    id: '3',
    name: 'Angela Kulhanek',
    service: 'Children\'s Braids',
    rating: 5,
    comment: 'Stella put beautiful braids in my daughter\'s hair (she\'s 9–first time getting braids)!! The braids with the beads were so beautiful!! She was very happy! Stella was gentle AND very fast at braiding!! Stella was kind and professional!',
    date: '2023-01-15',
  },
  {
    id: '4',
    name: 'Lex Leak',
    service: 'Braids & Crochet',
    rating: 5,
    comment: 'Stella is amazing! I found her on Google and texted her. She responded quickly for my request for braiding my daughter\'s hair and crochet braids for me on a Saturday. She finished us both in 3 hours! Super professional and so fast!!',
    date: '2019-01-15',
  },
  {
    id: '5',
    name: 'Jahira Santana',
    service: 'Emergency Hair Service',
    rating: 5,
    comment: 'Stella was a life saver! So I had an appointment else where that backed out on me last minute. I reached out to various businesses they either refused to do it or never responded. So I called her Sunday and that same day she fit me in.',
    date: '2021-01-15',
  },
  {
    id: '6',
    name: 'Michelle Jennings',
    service: 'Box Braids',
    rating: 5,
    comment: 'I called Stella yesterday at 3, I was at her house at 4, back at my own house by 8:30. I got long, small box braids! That\'s what you call excellent customer service. She was very nice and hospitable. I would highly recommend Stella.',
    date: '2018-01-15',
  },
  {
    id: '7',
    name: 'Nell H',
    service: 'Hair Braiding',
    rating: 5,
    comment: 'Stella did a great job on my hair, turned out exactly how I wanted. She works fast and she was very professional and pleasant. She also has reasonable prices. I will be going back to her.',
    date: '2017-01-15',
  },
  {
    id: '8',
    name: 'Shon B',
    service: 'Children\'s Braids',
    rating: 5,
    comment: 'Stella is an angel! She took both of my girls last minute after our other braider ghosted us! I\'m glad she did so because we were blessed with a better person and experience! Stella wasn\'t heavy handed and her work is fast and neat!',
    date: '2021-01-15',
  },
  {
    id: '9',
    name: 'Kaeylor Joseph',
    service: 'Hair Braids',
    rating: 5,
    comment: 'I love my braids. Stella did a great job. First and foremost, she didn\'t have my edges tight and my braids lasted. Thanks so much. She is very, very fast and has my hair very neat. Thank you Stella. See you soon',
    date: '2020-01-15',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/box-braids-1.jpg',
    alt: 'Beautiful box braids styling',
    category: 'box-braids',
    featured: true,
  },
  {
    id: '2',
    src: '/images/gallery/goddess-braids-1.jpg',
    alt: 'Elegant goddess braids with curls',
    category: 'goddess-braids',
    featured: true,
  },
  {
    id: '3',
    src: '/images/gallery/cornrows-1.jpg',
    alt: 'Traditional cornrow patterns',
    category: 'cornrows',
  },
  {
    id: '4',
    src: '/images/gallery/faux-locs-1.jpg',
    alt: 'Stylish faux locs',
    category: 'faux-locs',
    featured: true,
  },
  {
    id: '5',
    src: '/images/gallery/box-braids-2.jpg',
    alt: 'Medium length box braids',
    category: 'box-braids',
  },
  {
    id: '6',
    src: '/images/gallery/goddess-braids-2.jpg',
    alt: 'Long goddess braids',
    category: 'goddess-braids',
  },
];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Tuesday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Sunday', open: 'Closed', close: 'Closed' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/magicbraiding',
    icon: 'instagram',
  },
  {
    platform: 'Google',
    url: 'https://maps.google.com/maps?cid=magicbraiding',
    icon: 'google',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/magicbraiding',
    icon: 'facebook',
  },
];

export const contactInfo = {
  phone: '(832) 526-7055',
  email: 'info@magicbraiding.com',
  address: '9711 Mason Rd, Richmond, TX 77407',
  location: 'Magic Braiding Salon',
  hours: businessHours,
};
