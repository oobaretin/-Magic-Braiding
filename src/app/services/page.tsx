import { Metadata } from 'next';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Services - Magic Braiding | Professional Hair Braiding in Richmond, Texas',
  description: 'Explore our professional hair braiding services including box braids, goddess braids, cornrows, and faux locs. Expert styling in Richmond, Texas.',
  keywords: 'hair braiding services, box braids, goddess braids, cornrows, faux locs, Richmond Texas, Magic Braiding',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <Testimonials />
    </div>
  );
}
