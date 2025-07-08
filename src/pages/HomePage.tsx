import React from 'react';
import { Hero } from '../components/home/Hero';
import { FloreriaCarousel } from '../components/home/FloreriaCarousel';
import { Categories } from '../components/home/Categories';
import { Testimonials } from '../components/home/Testimonials';
import { CTA } from '../components/home/CTA';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FloreriaCarousel />
      <Categories />
      <Testimonials />
      <CTA />
    </div>
  );
};