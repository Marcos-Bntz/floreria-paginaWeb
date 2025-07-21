import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Hook para hacer scroll al top en cada navegación
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};