import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import { Button } from '../components/ui/button';

const experience = [
  {
  title: 'Full Stack Developer (Project-Based)',
  company: 'Personal & Academic Projects',
  period: '2024 - Present',
  description: 'Built complete web applications from scratch, handling frontend, backend, and database. Implemented authentication, role-based access, CRUD features, and REST APIs. Worked on real use cases like a blogging platform and a food ordering system.',
  highlights: ['Node.js', 'Express.js', 'MongoDB', 'React', 'JWT', 'EJS'],
},
{
  title: 'Web Developer',
  company: 'College & Practice Projects',
  period: '2023 - 2025',
  description: 'Focused on frontend development and basic backend integration. Built responsive interfaces, handled forms and client-side logic, and consumed APIs for dynamic data rendering.',
  highlights: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
},
{
  title: 'Programming & DSA Learner',
  company: 'Self-Learning',
  period: '2023 - 2025',
  description: 'Strengthened programming fundamentals and problem-solving skills through consistent practice. Learned core data structures, algorithms, and JavaScript basics.',
  highlights: ['JavaScript', 'DSA', 'Logic Building', 'Problem Solving'],
},

];

const education = [
  {
  degree: 'Bachelor of Technology (BTech) in Computer Science and Engineering',
  institution: 'GLA University, Mathura',
  period: '2022 - Present',
  description: 'Currently pursuing BTech with a focus on full-stack web development, data structures, and practical project-based learning. Built multiple real-world web applications alongside academics.',
},
{
  degree: 'Senior Secondary (Class XII)',
  institution: 'State Board / CBSE',
  period: '2020 - 2022',
  description: 'Completed higher secondary education with a focus on science and mathematics, building a foundation for computer science and programming.',
},
];

const certifications = [
  {
  name: 'Deep Learning & Machine Learning (Foundational)',
  issuer: 'DeepLearning.AI – Coursera',
  year: '2024',
},
{
  name: 'Full Stack Web Development',
  issuer: 'Self-Learning & Project-Based Practice',
  year: '2024',
},
{
  name: 'JavaScript & React Development',
  issuer: 'Online Courses + Hands-on Projects',
  year: '2023',
},
{
  name: 'Data Structures and Algorithms',
  issuer: 'Self Practice (LeetCode & Coursework)',
  year: '2023',
},
{
  name: 'Version Control with Git & GitHub',
  issuer: 'Self Practice',
  year: '2023',
},
];

const Resume = () => {
  return (
    <Layout backgroundIndex={3}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <SectionHeader
            label="Resume"
            title="My Journey"
            align="left"
          />


          
  <Button
  asChild
  size="lg"
  className="rounded-xl group"
>
 <a
      href="/resume/Sparsh_Kashyap_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="Sparsh_Kashyap_Resume.pdf"
  >
  <Download size={18} className="mr-2 group-hover:animate-bounce" />
    Download Resume
  </a>
</Button>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground">Work Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                  
                  <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="font-display font-bold text-xl text-foreground">{exp.title}</h4>
                      <span className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-lg bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-accent/20">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  {edu.period}
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">{edu.degree}</h4>
                <p className="text-accent font-medium mb-3">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-colors duration-300"
              >
                <Award className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                <p className="text-primary text-xs mt-2">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Resume;
