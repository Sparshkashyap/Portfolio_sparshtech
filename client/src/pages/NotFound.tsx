import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
// Replaced custom Button import with native elements to avoid missing module

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="font-display font-bold text-[150px] md:text-[200px] gradient-text leading-none">
              404
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg mb-8 max-w-md mx-auto"
          >
            Oops! The page you're looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-medium bg-primary text-white hover:opacity-90"
            >
              <Home size={18} className="mr-2" />
              Go Home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-medium border border-gray-200 hover:bg-gray-50"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
