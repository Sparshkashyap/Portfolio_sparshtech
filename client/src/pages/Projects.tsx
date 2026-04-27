import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

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
    title: 'AlgoForge – Competitive Coding Platform',
    description:
      'A full-stack LeetCode-style SaaS platform with 22+ REST API modules — problems, contests, leaderboard, and AI-powered features. Built with async code execution via BullMQ + Redis, multi-provider auth (JWT + OAuth), Razorpay billing, and Google Gemini AI integration.',
    image: '/images/algoforge.jpg',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'Gemini AI', 'Razorpay'],
    liveUrl: 'https://algo-forge-phi.vercel.app/',
    githubUrl: 'https://github.com/Sparshkashyap/AlgoForge',
    featured: true,
  },
  {
    id: '3',
    title: 'Coursify – AI Powered LMS SaaS Platform',
    description:
      'Coursify is a full-stack AI-powered learning management SaaS platform where students can enroll in courses, instructors can create and sell courses, and admins manage the platform, payments, refunds, wallets, and analytics.',
    image: '/images/co.jpg',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Brevo',
      'Cloudinary',
      'AI Integration',
    ],
    liveUrl: 'https://coursify-new.vercel.app/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media managers.',
    image: '/images/social.jpeg',
    techStack: ['React', 'GraphQL', 'D3.js'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
  {
    id: '9',
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool with tone control, multi-language support, and SEO optimization.',
    image: '/images/AI.jpg',
    techStack: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://github.com/Sparshkashyap/',
    githubUrl: 'https://github.com/Sparshkashyap/',
    featured: true,
  },
];

// Badge color map for tech tags
const tagColors: Record<string, string> = {
  'React': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  'Node.js': 'bg-green-500/15 text-green-400 border-green-500/30',
  'PostgreSQL': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Redis': 'bg-red-500/15 text-red-400 border-red-500/30',
  'BullMQ': 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  'Socket.IO': 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  'Gemini AI': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'Razorpay': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
  'MongoDB': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'TypeScript': 'bg-blue-600/15 text-blue-300 border-blue-600/30',
  'default': 'bg-white/10 text-white/70 border-white/20',
};

const getTagColor = (tag: string) => tagColors[tag] ?? tagColors['default'];

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

  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
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

        {/* ── CAROUSEL ── */}
        <div className="relative mt-16">
          <button
            onClick={() => scrollByAmount(-300)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-200 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollByAmount(300)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-200 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
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

        {/* ── ALL PROJECTS GRID ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2 block">
              All Work
            </span>
            <h3 className="text-3xl font-bold">Every Project</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top accent line — glows on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h4>
                    <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                          title="Live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getTagColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full border bg-white/10 text-white/50 border-white/20">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
