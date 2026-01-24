import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Sparshkashyap', color: 'hover:text-foreground' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/skcoder', color: 'hover:text-[#0A66C2]' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/sparshtech655', color: 'hover:text-foreground' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/sparshtech655', color: 'hover:text-[#E4405F]' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
                SK
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                Sparsh Kashyap
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Software Engineer passionate about building exceptional digital experiences and solving complex problems.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:sparsh@example.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">sparshkashyap655@gmail.com</span>
              </a>
              <a 
                href="tel:+91 6397426613" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 6397426613</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span className="text-sm">Mathura Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-xl bg-muted/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:bg-muted`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sparsh Kashyap. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-primary">♥</span> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
