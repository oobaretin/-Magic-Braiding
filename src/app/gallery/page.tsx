import { Metadata } from 'next';
import { Gallery } from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery - Magic Braiding | Professional Hair Braiding Photos in Richmond, Texas',
  description: 'View our gallery of beautiful hair braiding work at Magic Braiding. See examples of box braids, cornrows, goddess braids, and more professional styles in Richmond, Texas.',
  keywords: 'hair braiding gallery, braids photos, Magic Braiding portfolio, Richmond Texas hair salon, professional braiding styles',
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery />
    </div>
  );
}
