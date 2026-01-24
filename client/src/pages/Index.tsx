import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';
import TypeWriter from '../components/TypeWriter';
import { Button } from '../components/ui/button';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
  'Motivational Speaker'
];

const Index = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Layout backgroundIndex={0}>
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50 animate-pulse-glow" />
                
                {/* Profile Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  {/* Gradient Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary animate-gradient" />
                  
                  {/* Initials Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                   
  <div className="w-full h-full rounded-full overflow-hidden bg-background">
    <img
      src="/images/sp.jpg"
      alt="Sparsh Kashyap"
      className="w-full h-full object-cover object-center
                 transition-transform duration-500 ease-out
                 group-hover:scale-110"
      loading="lazy"
    />
  </div>

                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-8 -right-8 w-16 h-16 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-accent/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              {/* Greeting */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block text-primary font-medium mb-4"
              >
                Hello, I'm
              </motion.span>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
              >
                Sparsh
                <br />
                <span className="gradient-text">Kashyap</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <span className="text-xl md:text-2xl text-muted-foreground">
                  I am a{' '}
                </span>
                <TypeWriter 
                  texts={roles} 
                  className="text-xl md:text-2xl font-semibold"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Passionate about crafting elegant solutions to complex problems. 
                I build exceptional digital experiences that are fast, accessible, 
                and designed with best practices.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="rounded-xl text-base group">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl text-base group">
                  <Link to="/contact">
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </section>
    </Layout>
  );
};

export default Index;
