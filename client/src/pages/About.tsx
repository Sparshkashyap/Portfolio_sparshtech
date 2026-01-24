import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users, Coffee, Globe } from 'lucide-react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
];

const stats = [
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Coffee, value: '3+', label: 'Years Experience' },
  { icon: Users, value: '20+', label: 'Happy Clients' },
  { icon: Globe, value: '10+', label: 'Countries Served' },
];

const About = () => {
  return (
    <Layout backgroundIndex={1}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <SectionHeader
          label="About Me"
          title="Know Who I Am"
          description="A passionate developer dedicated to creating impactful digital solutions"
        />

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 glass rounded-3xl -rotate-3" />
              
              {/* Content Card */}
              <div className="relative h-full glass rounded-3xl p-8 flex flex-col justify-center items-center">
                
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-6 group">
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


                <h3 className="font-display font-bold text-2xl text-foreground mb-2">Sparsh Kashyap</h3>
                <p className="text-primary font-medium mb-4">Software Engineer</p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-foreground">3+</p>
                    <p className="text-muted-foreground text-sm">Years Exp.</p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-foreground">50+</p>
                    <p className="text-muted-foreground text-sm">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-3xl text-foreground">
              Crafting Digital Excellence
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Engineer based in San Francisco, with a deep passion for 
                creating elegant, efficient, and user-centered digital experiences. With 
                over 3 years of experience in the tech industry, I've had the privilege 
                of working with startups and established companies alike.
              </p>
              <p>
                My journey in software development started with a curiosity about how 
                things work on the web. That curiosity has evolved into a career where 
                I get to solve complex problems and build products that make a real 
                difference in people's lives.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers. 
                I believe in continuous learning and staying at the forefront of 
                technological innovation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-colors duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-display font-bold text-3xl text-foreground mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl text-foreground text-center mb-10"
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
