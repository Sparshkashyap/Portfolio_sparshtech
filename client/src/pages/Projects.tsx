import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ProjectCard, { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    image: '/images/EC.jpg',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool with tone control, multi-language support, and SEO optimization.',
    image: '/images/AI.jpg',
    techStack: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management App',
    description:
      'A collaborative task manager with real-time updates and team workspaces.',
    image: '/images/task.jpeg',
    techStack: ['React', 'Firebase', 'Redux'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '4',
    title: 'Health & Fitness Tracker',
    description:
      'Health tracking app with workout plans and progress analytics.',
    image: '/images/health.webp',
    techStack: ['React Native', 'MongoDB', 'Chart.js'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '5',
    title: 'Blogiffy – Multi-User Blogging Platform',
    description:
      'Full-stack blogging app with authentication, authorization, likes, and comments.',
    image: '/images/blog.jpg',
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    liveUrl: 'https://sparshtech.me',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    description:
      'Property listing platform with AI-based recommendations.',
    image: '/images/Real.jpg',
    techStack: ['Vue', 'Django', 'PostgreSQL'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '7',
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media managers.',
    image: '/images/social.jpeg',
    techStack: ['React', 'GraphQL', 'D3.js'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5;

    const autoScroll = () => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    const pause = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };

    const resume = () => {
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      pause();
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

  // ARROW SCROLL
  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    scrollRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <Layout backgroundIndex={2}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            label="My Work"
            title="Featured Projects"
            description="Projects that show real skills, not tutorial noise"
          />
        </div>

        {/* AUTO SCROLL WITH ARROWS */}
        <div className="relative mt-16">
          <button
            onClick={() => scrollByAmount(-300)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scrollByAmount(300)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide py-4 px-16"
          >
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ALL PROJECTS GRID */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            All Projects
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <h4 className="text-xl font-bold mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
