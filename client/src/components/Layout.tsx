import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
  backgroundIndex?: number;
}

const Layout = ({ children, backgroundIndex = 0 }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground colorIndex={backgroundIndex} />
      <Navbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
