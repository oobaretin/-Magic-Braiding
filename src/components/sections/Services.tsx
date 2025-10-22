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
  bookingUrl: "tel:+18325267055",
  website: "https://magicbraiding.com",
  instagram: "@magicbraiding",
  description: "Professional hair braiding services in Richmond, Texas"
};

// Complete service data with subcategories and pricing
const SALON_DATA = {
  "Braids": {
    "Box Braids": {
      starting: 120,
      description: "Classic African box braids with premium synthetic or human hair extensions",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 120 },
        { name: "Shoulder Length Medium", duration: "4-5 hours", price: 150 },
        { name: "Shoulder Length Small", duration: "5-6 hours", price: 180 },
        { name: "Mid Back Length Large", duration: "4-5 hours", price: 150 },
        { name: "Mid Back Length Medium", duration: "5-6 hours", price: 180 },
        { name: "Mid Back Length Small", duration: "6-7 hours", price: 220 },
        { name: "Waist Length Large", duration: "5-6 hours", price: 180 },
        { name: "Waist Length Medium", duration: "6-7 hours", price: 220 },
        { name: "Waist Length Small", duration: "7-8 hours", price: 260 }
      ]
    },
    "Goddess Braids": {
      starting: 150,
      description: "Elegant goddess braids with added curls and waves",
      variations: [
        { name: "Shoulder Length", duration: "4-5 hours", price: 150 },
        { name: "Mid Back Length", duration: "5-6 hours", price: 180 },
        { name: "Waist Length", duration: "6-7 hours", price: 220 }
      ]
    },
    "Knotless Braids": {
      starting: 160,
      description: "Modern knotless braiding technique for comfort",
      variations: [
        { name: "Shoulder Length", duration: "5-6 hours", price: 160 },
        { name: "Mid Back Length", duration: "6-7 hours", price: 200 },
        { name: "Waist Length", duration: "7-8 hours", price: 240 }
      ]
    },
    "Boho Braids": {
      starting: 140,
      description: "Trendy boho-style braids with loose, natural waves",
      variations: [
        { name: "Shoulder Length", duration: "4-5 hours", price: 140 },
        { name: "Mid Back Length", duration: "5-6 hours", price: 170 },
        { name: "Waist Length", duration: "6-7 hours", price: 200 }
      ]
    },
    "Fulani Braids": {
      starting: 125,
      description: "Traditional Fulani braids with decorative elements",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 125 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 150 },
        { name: "Waist Length", duration: "5-6 hours", price: 180 }
      ]
    },
    "Lemonade Braids": {
      starting: 100,
      description: "Side-swept braids inspired by Beyoncé's lemonade look",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 100 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 120 },
        { name: "Waist Length", duration: "5-6 hours", price: 150 }
      ]
    },
    "Micro Braids": {
      starting: 300,
      description: "Very small, detailed braids for long-lasting style",
      variations: [
        { name: "Shoulder Length", duration: "6-8 hours", price: 300 },
        { name: "Mid Back Length", duration: "7-9 hours", price: 350 },
        { name: "Waist Length", duration: "8-10 hours", price: 400 }
      ]
    },
    "Jumbo Box Braids": {
      starting: 100,
      description: "Large, chunky box braids for quick installation",
      variations: [
        { name: "Shoulder Length", duration: "2-3 hours", price: 100 },
        { name: "Mid Back Length", duration: "3-4 hours", price: 120 },
        { name: "Waist Length", duration: "4-5 hours", price: 150 }
      ]
    },
    "Feed-in Braids": {
      starting: 50,
      description: "Seamless feed-in braids for natural look",
      variations: [
        { name: "2 Braids", duration: "1-2 hours", price: 50 },
        { name: "4 Braids", duration: "2-3 hours", price: 80 },
        { name: "6 Braids", duration: "3-4 hours", price: 120 },
        { name: "8 Braids", duration: "4-5 hours", price: 150 }
      ]
    }
  },
  "Twists": {
    "Havana Twists": {
      starting: 200,
      description: "Thick, chunky twists with a natural look",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 240 },
        { name: "Waist Length", duration: "5-6 hours", price: 280 }
      ]
    },
    "Senegalese Twists": {
      starting: 300,
      description: "Thin, sleek twists for elegant styling",
      variations: [
        { name: "Shoulder Length", duration: "4-5 hours", price: 300 },
        { name: "Mid Back Length", duration: "5-6 hours", price: 350 },
        { name: "Waist Length", duration: "6-7 hours", price: 400 }
      ]
    },
    "Passion Twists": {
      starting: 175,
      description: "Soft, curly twists with natural texture",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 175 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 220 },
        { name: "Waist Length", duration: "5-6 hours", price: 260 }
      ]
    },
    "Marley Twists": {
      starting: 200,
      description: "Thick twists with curly texture",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 240 },
        { name: "Waist Length", duration: "5-6 hours", price: 280 }
      ]
    },
    "Kinky Twists": {
      starting: 200,
      description: "Twists with kinky, curly texture",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 240 },
        { name: "Waist Length", duration: "5-6 hours", price: 280 }
      ]
    },
    "Nubian Twists": {
      starting: 225,
      description: "Medium-sized twists with natural texture",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 225 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 270 },
        { name: "Waist Length", duration: "5-6 hours", price: 315 }
      ]
    },
    "Two Strand Twists": {
      starting: 100,
      description: "Simple two-strand twists",
      variations: [
        { name: "Shoulder Length", duration: "2-3 hours", price: 100 },
        { name: "Mid Back Length", duration: "3-4 hours", price: 120 },
        { name: "Waist Length", duration: "4-5 hours", price: 150 }
      ]
    },
    "Comb Twists": {
      starting: 75,
      description: "Quick and easy comb twists",
      variations: [
        { name: "Standard", duration: "2-3 hours", price: 75 }
      ]
    }
  },
  "Faux Locs": {
    "Goddess Locs": {
      starting: 200,
      description: "Elegant faux locs with curly ends",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 240 },
        { name: "Waist Length", duration: "5-6 hours", price: 280 }
      ]
    },
    "Butterfly Locs": {
      starting: 200,
      description: "Distressed faux locs with wavy texture",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 240 },
        { name: "Waist Length", duration: "5-6 hours", price: 280 }
      ]
    },
    "Bohemian Locs": {
      starting: 225,
      description: "Natural-looking faux locs with varied texture",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 225 },
        { name: "Mid Back Length", duration: "4-5 hours", price: 270 },
        { name: "Waist Length", duration: "5-6 hours", price: 315 }
      ]
    }
  },
  "Crotchets": {
    "Crochet Box Braids": {
      starting: 100,
      description: "Quick crochet installation of box braids",
      variations: [
        { name: "Small Box Braids", duration: "2-3 hours", price: 100 },
        { name: "Medium Box Braids", duration: "3-4 hours", price: 130 },
        { name: "Large Box Braids", duration: "2.5-3.5 hours", price: 120 }
      ]
    },
    "Crochet Twists": {
      starting: 120,
      description: "Crochet installation of various twist styles",
      variations: [
        { name: "Havana Twists", duration: "3-4 hours", price: 120 },
        { name: "Senegalese Twists", duration: "3.5-4.5 hours", price: 140 },
        { name: "Passion Twists", duration: "3.5-4.5 hours", price: 150 }
      ]
    },
    "Crochet Faux Locs": {
      starting: 140,
      description: "Crochet installation of faux locs",
      variations: [
        { name: "Soft Locs", duration: "3-4 hours", price: 140 },
        { name: "Goddess Locs", duration: "4-5 hours", price: 170 },
        { name: "Butterfly Locs", duration: "4-5 hours", price: 180 }
      ]
    },
    "Crochet Curls": {
      starting: 110,
      description: "Crochet installation of curly styles",
      variations: [
        { name: "Water Waves", duration: "2.5-3.5 hours", price: 110 },
        { name: "Deep Curls", duration: "3-4 hours", price: 130 },
        { name: "Beachy Waves", duration: "2.5-3.5 hours", price: 120 }
      ]
    },
    "Crochet Bobs": {
      starting: 90,
      description: "Crochet installation of bob styles",
      variations: [
        { name: "Crochet Bob", duration: "2-3 hours", price: 90 },
        { name: "Curly Pixie", duration: "2.5-3.5 hours", price: 100 },
        { name: "Textured Bob", duration: "2-3 hours", price: 95 }
      ]
    },
    "Crochet Updos": {
      starting: 130,
      description: "Crochet installation of updo styles",
      variations: [
        { name: "High Ponytail", duration: "2.5-3.5 hours", price: 130 },
        { name: "Crochet Bun", duration: "2-3 hours", price: 120 },
        { name: "Half-Up Half-Down", duration: "3-4 hours", price: 150 }
      ]
    },
    "Crochet Straight": {
      starting: 100,
      description: "Crochet installation of straight styles",
      variations: [
        { name: "Straight Crochet", duration: "2-3 hours", price: 100 },
        { name: "Silky Straight", duration: "2.5-3.5 hours", price: 120 },
        { name: "Blunt Cut Straight", duration: "2-3 hours", price: 110 }
      ]
    },
    "Specialty Crochet": {
      starting: 150,
      description: "Special crochet styles with highlights",
      variations: [
        { name: "Knotless Crochet", duration: "4-5 hours", price: 150 },
        { name: "Crochet with Highlights", duration: "4-6 hours", price: 200 },
        { name: "Ombre Crochet", duration: "4-6 hours", price: 220 }
      ]
    },
    "Pre-Looped Crochet": {
      starting: 160,
      description: "Crochet with pre-looped hair for faster installation",
      variations: [
        { name: "Any Length Large", duration: "3-4 hours", price: 160 },
        { name: "Any Length Medium/Small", duration: "3-4 hours", price: 185 }
      ]
    }
  },
  "Dreads": {
    "Starter Locs": {
      starting: 90,
      description: "Beginning stages of dreadlock formation",
      variations: [
        { name: "Standard", duration: "3-4 hours", price: 90 }
      ]
    },
    "Loc Takedown": {
      starting: 65,
      description: "Professional removal of existing locs",
      variations: [
        { name: "Standard", duration: "3-4 hours", price: 65 }
      ]
    }
  },
  "Kid Styles": {
    "Kid's Box Braids": {
      starting: 60,
      description: "Box braids designed for children",
      variations: [
        { name: "Small Box Braids", duration: "2-3 hours", price: 60 },
        { name: "Medium Box Braids", duration: "2.5-3.5 hours", price: 80 },
        { name: "Large Box Braids", duration: "3-4 hours", price: 100 }
      ]
    },
    "Kid's Cornrows": {
      starting: 40,
      description: "Cornrows designed for children",
      variations: [
        { name: "Simple Straight Back", duration: "1-2 hours", price: 40 },
        { name: "Double Cornrows", duration: "1.5-2.5 hours", price: 60 },
        { name: "Creative Patterns", duration: "2-3 hours", price: 80 }
      ]
    },
    "Kid's French Braids": {
      starting: 35,
      description: "French braids for children",
      variations: [
        { name: "Single French Braid", duration: "30-45 min", price: 35 },
        { name: "Double French Braids", duration: "45-60 min", price: 50 }
      ]
    },
    "Kid's Ponytails": {
      starting: 30,
      description: "Ponytail styles for children",
      variations: [
        { name: "High Ponytail", duration: "30 min", price: 30 },
        { name: "Space Buns", duration: "45 min", price: 45 },
        { name: "Braided Bun", duration: "1 hour", price: 60 }
      ]
    },
    "Kid's Bantu Knots": {
      starting: 50,
      description: "Bantu knots for children",
      variations: [
        { name: "Small Knots", duration: "1.5-2 hours", price: 50 },
        { name: "Medium Knots", duration: "2-2.5 hours", price: 70 },
        { name: "Large Knots", duration: "2.5-3 hours", price: 90 }
      ]
    },
    "Kid's Twists": {
      starting: 45,
      description: "Twist styles for children",
      variations: [
        { name: "Simple Twists", duration: "1-1.5 hours", price: 45 },
        { name: "Two-Strand Twists", duration: "1.5-2 hours", price: 65 },
        { name: "Flat Twists", duration: "2-2.5 hours", price: 80 }
      ]
    },
    "Kid's Natural Styles": {
      starting: 25,
      description: "Natural hair styles for children",
      variations: [
        { name: "Wash & Go", duration: "30-45 min", price: 25 },
        { name: "Puff Styles", duration: "30-45 min", price: 35 },
        { name: "Afro Styling", duration: "45-60 min", price: 45 }
      ]
    },
    "Kid's Special Occasion": {
      starting: 80,
      description: "Special occasion styles for children",
      variations: [
        { name: "Formal Updo", duration: "1.5-2 hours", price: 80 },
        { name: "Braided Crown", duration: "2-2.5 hours", price: 100 },
        { name: "Accessorized Style", duration: "1-1.5 hours", price: 70 }
      ]
    }
  },
  "Cornrows": {
    "Straight Back Cornrows": {
      starting: 50,
      description: "Traditional straight back cornrows",
      variations: [
        { name: "Basic (6-8 braids)", duration: "1-2 hours", price: 50 },
        { name: "Medium (10-12 braids)", duration: "2-3 hours", price: 75 },
        { name: "Detailed (14-16 braids)", duration: "3-4 hours", price: 100 }
      ]
    },
    "Ghana Braids": {
      starting: 80,
      description: "Traditional Ghana braids with patterns",
      variations: [
        { name: "Short Length", duration: "2-3 hours", price: 80 },
        { name: "Medium Length", duration: "3-4 hours", price: 100 },
        { name: "Long Length", duration: "4-5 hours", price: 120 }
      ]
    },
    "Stitch Braids": {
      starting: 90,
      description: "Precision stitch braids",
      variations: [
        { name: "Basic Stitch", duration: "2-3 hours", price: 90 },
        { name: "Medium Stitch", duration: "3-4 hours", price: 110 },
        { name: "Detailed Stitch", duration: "4-5 hours", price: 130 }
      ]
    },
    "Tribal Cornrows": {
      starting: 120,
      description: "Complex tribal cornrow patterns",
      variations: [
        { name: "Simple Tribal", duration: "3-4 hours", price: 120 },
        { name: "Medium Tribal", duration: "4-5 hours", price: 150 },
        { name: "Complex Tribal", duration: "5-6 hours", price: 180 }
      ]
    },
    "Freestyle Cornrows": {
      starting: 100,
      description: "Creative freestyle cornrow designs",
      variations: [
        { name: "Basic Freestyle", duration: "2-3 hours", price: 100 },
        { name: "Creative Zigzag", duration: "3-4 hours", price: 125 },
        { name: "Complex Freestyle", duration: "4-5 hours", price: 150 }
      ]
    },
    "Curved Cornrows": {
      starting: 110,
      description: "Curved and circular cornrow patterns",
      variations: [
        { name: "Simple Curved", duration: "3-4 hours", price: 110 },
        { name: "Circular Swirl", duration: "4-5 hours", price: 140 },
        { name: "Complex Curved", duration: "5-6 hours", price: 170 }
      ]
    },
    "Side-Swept Cornrows": {
      starting: 85,
      description: "Side-swept cornrow styles",
      variations: [
        { name: "Basic Side-Swept", duration: "2-3 hours", price: 85 },
        { name: "Medium Side-Swept", duration: "3-4 hours", price: 110 },
        { name: "Lemonade Style", duration: "5-6 hours", price: 160 }
      ]
    },
    "Criss-Cross Cornrows": {
      starting: 95,
      description: "Criss-cross cornrow patterns",
      variations: [
        { name: "Simple Criss-Cross", duration: "3-4 hours", price: 95 },
        { name: "Medium Criss-Cross", duration: "4-5 hours", price: 120 },
        { name: "Complex Criss-Cross", duration: "5-6 hours", price: 145 }
      ]
    },
    "French Braids": {
      starting: 40,
      description: "Traditional French braids",
      variations: [
        { name: "Single French Braid", duration: "1-1.5 hours", price: 40 },
        { name: "Double French Braids", duration: "1.5-2 hours", price: 60 },
        { name: "French Braid with Extensions", duration: "2-2.5 hours", price: 80 }
      ]
    },
    "Dutch Braids": {
      starting: 45,
      description: "Traditional Dutch braids",
      variations: [
        { name: "Single Dutch Braid", duration: "1-1.5 hours", price: 45 },
        { name: "Double Dutch Braids", duration: "1.5-2 hours", price: 65 },
        { name: "Dutch Braid with Extensions", duration: "2-2.5 hours", price: 85 }
      ]
    },
    "French/Dutch Combinations": {
      starting: 70,
      description: "Combination French and Dutch braids",
      variations: [
        { name: "French + Dutch Combo", duration: "2-2.5 hours", price: 70 },
        { name: "Multiple French Braids", duration: "2-3 hours", price: 90 },
        { name: "Multiple Dutch Braids", duration: "2-3 hours", price: 95 }
      ]
    },
    "Cornrow Updo": {
      starting: 80,
      description: "Cornrow updo styles",
      variations: [
        { name: "Shoulder Length", duration: "3-4 hours", price: 80 },
        { name: "Mid Back Length", duration: "3-4 hours", price: 100 },
        { name: "Waist Length", duration: "3-4 hours", price: 130 }
      ]
    }
  },
  "Bantu Knots": {
    "Classic Bantu Knots": {
      starting: 60,
      description: "Traditional Bantu knots",
      variations: [
        { name: "Small Knots (8-10)", duration: "2-3 hours", price: 60 },
        { name: "Medium Knots (12-15)", duration: "3-4 hours", price: 80 },
        { name: "Large Knots (6-8)", duration: "2.5-3.5 hours", price: 70 }
      ]
    },
    "Bantu Knots with Extensions": {
      starting: 90,
      description: "Bantu knots with added hair",
      variations: [
        { name: "Small Knots with Weave", duration: "3-4 hours", price: 90 },
        { name: "Medium Knots with Weave", duration: "4-5 hours", price: 110 },
        { name: "Large Knots with Weave", duration: "3.5-4.5 hours", price: 100 }
      ]
    },
    "Creative Bantu Knots": {
      starting: 85,
      description: "Creative Bantu knot designs",
      variations: [
        { name: "Irregular Parting", duration: "3-4 hours", price: 85 },
        { name: "Heart-Shaped Parting", duration: "3.5-4.5 hours", price: 95 },
        { name: "Zig-Zag Parting", duration: "4-5 hours", price: 105 }
      ]
    },
    "Bantu Knots with Braids": {
      starting: 100,
      description: "Bantu knots combined with braids",
      variations: [
        { name: "Knots with Side Braids", duration: "3-4 hours", price: 100 },
        { name: "Knots with Cornrows", duration: "4-5 hours", price: 120 },
        { name: "Knots with Flat Twists", duration: "3.5-4.5 hours", price: 110 }
      ]
    },
    "Bantu Knots with Beads": {
      starting: 95,
      description: "Bantu knots with decorative beads",
      variations: [
        { name: "Knots with Beads", duration: "3-4 hours", price: 95 },
        { name: "Knots with Golden Details", duration: "3.5-4.5 hours", price: 110 },
        { name: "Knots with Neon Accents", duration: "4-5 hours", price: 120 }
      ]
    },
    "Specialty Bantu Knots": {
      starting: 80,
      description: "Special Bantu knot styles",
      variations: [
        { name: "Twist Out Knots", duration: "3-4 hours", price: 80 },
        { name: "Dreadlock Knots", duration: "4-5 hours", price: 100 },
        { name: "Chunky Knot Locs", duration: "3.5-4.5 hours", price: 90 }
      ]
    },
    "Bantu Knots for Short Hair": {
      starting: 55,
      description: "Bantu knots designed for short hair",
      variations: [
        { name: "Micro Knots", duration: "2-3 hours", price: 55 },
        { name: "Tapered Knots", duration: "2.5-3.5 hours", price: 65 },
        { name: "Side Knots", duration: "2-3 hours", price: 60 }
      ]
    }
  },
  "Weaves/Extensions": {
    "Sew-In Weaves": {
      starting: 150,
      description: "Traditional sew-in weave installation",
      variations: [
        { name: "Seamless Sew-In", duration: "2-3.5 hours", price: 150 },
        { name: "Closure Sew-In (4x4)", duration: "2.5-4 hours", price: 165 },
        { name: "Frontal Sew-In (13x4)", duration: "3-4.5 hours", price: 200 }
      ]
    },
    "Quick Weaves": {
      starting: 130,
      description: "Quick weave installation",
      variations: [
        { name: "Traditional Quick Weave", duration: "1.5-3 hours", price: 130 },
        { name: "Quick Weave + Braids", duration: "2-3.5 hours", price: 145 },
        { name: "Natural Luxury Quick Weave", duration: "2-3.5 hours", price: 165 }
      ]
    },
    "Ponytails": {
      starting: 75,
      description: "Ponytail installations",
      variations: [
        { name: "Braid Pony", duration: "1-2.5 hours", price: 75 },
        { name: "Middle Part Ponytail", duration: "1-2.5 hours", price: 80 },
        { name: "Sleek Pony", duration: "1.5-3 hours", price: 90 }
      ]
    }
  },
  "Hair Maintenance & Consultation": {
    "Hair Maintenance": {
      starting: 25,
      description: "Professional hair maintenance services",
      variations: [
        { name: "Edge Touch-ups", duration: "30 min", price: 25 },
        { name: "Scalp Treatment", duration: "45 min", price: 40 },
        { name: "Style Refresh", duration: "1 hour", price: 60 },
        { name: "Full Maintenance", duration: "1.5-2 hours", price: 80 }
      ]
    },
    "Hair Consultation": {
      starting: 15,
      description: "Professional hair consultation services",
      variations: [
        { name: "Basic Consultation", duration: "15 min", price: 15 },
        { name: "Detailed Consultation", duration: "30 min", price: 25 }
      ]
    }
  }
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [expandedVariations, setExpandedVariations] = useState<{[key: string]: boolean}>({});
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory(null);
    }
  };

  const toggleSubcategory = (subcategory: string) => {
    if (selectedSubcategory === subcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcategory);
    }
  };

  const toggleVariations = (key: string) => {
    setExpandedVariations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleBookingClick = (serviceName: string, variation: any) => {
    setSelectedService({ serviceName, variation });
    setShowBookingModal(true);
  };

  const handleBookingSuccess = (bookingData: any) => {
    setShowBookingModal(false);
    console.log('Booking successful:', bookingData);
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
          {Object.entries(SALON_DATA).map(([category, subcategories]) => (
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
                {Object.keys(subcategories).length} styles
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

            <div className="space-y-4">
              {Object.entries(SALON_DATA[selectedCategory as keyof typeof SALON_DATA]).map(([subcategory, data]) => {
                const isExpanded = selectedSubcategory === subcategory;
                const variationKey = `${selectedCategory}-${subcategory}`;
                const showVariations = expandedVariations[variationKey];

                return (
                  <div key={subcategory} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSubcategory(subcategory)}
                      className={`w-full p-5 flex items-center justify-between transition-colors ${
                        isExpanded ? 'bg-primary-100' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-secondary-900">{subcategory}</h3>
                          <p className="text-sm text-secondary-600">
                            {data.variations.length} option{data.variations.length > 1 ? 's' : ''} • Starting at ${data.starting}
                          </p>
                          <p className="text-sm text-secondary-500 mt-1">{data.description}</p>
                        </div>
                      </div>
                      <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold">
                        From ${data.starting}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="bg-white p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {data.variations.map((variation, idx) => (
                            <div
                              key={idx}
                              onClick={() => handleBookingClick(subcategory, variation)}
                              className="border-2 border-primary-200 rounded-lg p-4 hover:bg-primary-50 hover:border-primary-400 cursor-pointer transition-all duration-200 hover:shadow-md"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-secondary-900 flex-1">
                                  {variation.name}
                                </h4>
                                <span className="text-primary-600 font-bold text-lg ml-2">
                                  ${variation.price}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-secondary-600 mb-3">
                                <Clock size={14} className="mr-1" />
                                {variation.duration}
                              </div>
                              <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold">
                                <Calendar size={16} />
                                <span>Click to Book</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
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