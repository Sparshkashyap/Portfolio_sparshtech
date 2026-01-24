import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Send, Loader2, CheckCircle, MessageSquare, Clock, Zap } from 'lucide-react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const queryTypes = [
  { id: 'collaboration', label: 'Collaboration', icon: MessageSquare },
  { id: 'freelance', label: 'Freelance Work', icon: Zap },
  { id: 'general', label: 'General Inquiry', icon: HelpCircle },
  { id: 'urgent', label: 'Urgent', icon: Clock },
];

interface FormData {
  name: string;
  email: string;
  queryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  queryType?: string;
  message?: string;
}

const Query = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    queryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.queryType) {
      newErrors.queryType = 'Please select a query type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleQueryTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, queryType: type }));
    if (errors.queryType) {
      setErrors((prev) => ({ ...prev, queryType: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

    console.log("Submitted Form Data:", formData);

  setIsSubmitting(true);



  try {
    const response = await fetch("https://portfolio-sparshtech-3.onrender.com/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // { name, email, queryType, message }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    setIsSubmitted(true);
    toast({
      title: 'Query submitted!',
      description: 'Thank you for your inquiry. I\'ll respond within 24 hours.',
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', queryType: '', message: '' });
      setIsSubmitted(false);
    }, 3000);

  } catch (error: any) {
    console.error("Error submitting query:", error);
    toast({
      title: 'Error',
      description: error.message || 'Failed to submit query.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <Layout backgroundIndex={4}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <SectionHeader
          label="Inquiry"
          title="Have a Question?"
          description="Send me a quick query and I'll get back to you as soon as possible"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-8">
            {/* Query Type Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                What's your inquiry about?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {queryTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleQueryTypeSelect(type.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                      formData.queryType === type.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-muted/30 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                    }`}
                  >
                    <type.icon size={24} />
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
              {errors.queryType && (
                <p className="text-destructive text-xs">{errors.queryType}</p>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`bg-muted/50 border-border focus:border-primary ${
                    errors.name ? 'border-destructive' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-xs">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`bg-muted/50 border-border focus:border-primary ${
                    errors.email ? 'border-destructive' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-destructive text-xs">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Your Query
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your question or inquiry in detail..."
                rows={6}
                className={`bg-muted/50 border-border focus:border-primary resize-none ${
                  errors.message ? 'border-destructive' : ''
                }`}
              />
              {errors.message && (
                <p className="text-destructive text-xs">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle size={18} className="mr-2" />
                  Query Submitted!
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Submit Query
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            For general inquiries, you can also reach me at{' '}
            <a href="mailto:sparsh@example.com" className="text-primary hover:underline">
              sparshkashyap655@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Query;
