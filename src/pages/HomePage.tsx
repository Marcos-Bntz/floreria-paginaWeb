import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Categories } from '../components/home/Categories';
import { Testimonials } from '../components/home/Testimonials';
import { CTA } from '../components/home/CTA';
import { products } from '../data/products';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts products={products} />
      <Categories />
      <Testimonials />
      <CTA />
    </div>
  );
};