import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { Categories } from '../components/home/Categories';
import { CTA } from '../components/home/CTA';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <CTA />
    </Layout>
  );
};