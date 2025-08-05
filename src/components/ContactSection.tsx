import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_dkmc9o8";
const EMAILJS_TEMPLATE_ID = "template_isw6cxs";
const EMAILJS_PUBLIC_KEY = "QD1-YBf1t6-Iy0w3G";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add custom CSS for autofill styling
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px hsl(var(--input)) inset !important;
        -webkit-text-fill-color: hsl(var(--foreground)) !important;
        background-color: hsl(var(--input)) !important;
        transition: background-color 5000s ease-in-out 0s;
        color: hsl(var(--foreground)) !important;
      }
      
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      textarea:-webkit-autofill:active {
        -webkit-box-shadow: none !important;
        background-color: hsl(var(--background)) !important;
        color: hsl(var(--foreground)) !important;
        -webkit-text-fill-color: hsl(var(--foreground)) !important;
      }
      
      input:-moz-autofill {
        background-color: hsl(var(--input)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      textarea:-moz-autofill {
        background-color: hsl(var(--background)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      input:-webkit-autofill::first-line {
        color: hsl(var(--foreground)) !important;
        font-family: inherit !important;
      }
      
      textarea {
        background-color: hsl(var(--background)) !important;
        color: hsl(var(--foreground)) !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (EMAILJS_SERVICE_ID.includes("YOUR_ID")) {
        // Fallback to mailto if EmailJS is not configured
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:parth.chavan@stonybrook.edu?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_self');
        
        toast({
          title: "Email client opened! 📧",
          description: "Your default email app should open with the message ready to send.",
        });
      } else {
        // Send email using EmailJS
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: "parth.chavan@stonybrook.edu",
          },
          EMAILJS_PUBLIC_KEY
        );

        if (result.status === 200) {
          toast({
            title: "Message sent successfully! 🚀",
            description: "Thanks for reaching out! I'll get back to you soon.",
          });
          
          // Reset form
          setFormData({ name: "", email: "", message: "" });
          if (formRef.current) {
            formRef.current.reset();
          }
        }
      }
    } catch (error) {
      console.error("Email error:", error);
      
      // Fallback to mailto on error
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:parth.chavan@stonybrook.edu?subject=${subject}&body=${body}`;
      
      window.open(mailtoLink, '_self');
      
      toast({
        title: "Using email client as fallback",
        description: "There was an issue with the form. Your email client will open instead.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss AI projects, data challenges, or just chat about tech? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background/90 dark:bg-background/95 backdrop-blur-md border-border/60 dark:border-border/80 shadow-lg shadow-primary/5 dark:shadow-teal-400/10">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                I'd love to hear about your project or answer any questions you have.
              </p>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full resize-none"
                    placeholder="Tell me about your project or ask any questions..."
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-600 text-white" 
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-teal-500/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Whether you're looking for a technical co-founder, need help with AI implementation, 
                    or want to discuss the future of data engineering, I'm always excited to connect 
                    with fellow builders and innovators.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      onClick={() => window.open('mailto:parth.chavan@stonybrook.edu', '_blank')}
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      onClick={() => window.open('https://github.com/Parthchavann', '_blank')}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      onClick={() => window.open('https://www.linkedin.com/in/parthchavann/', '_blank')}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/90 dark:bg-background/95 backdrop-blur-md border-border/60 dark:border-border/80 shadow-lg shadow-primary/5 dark:shadow-teal-400/10">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-lg">Open to Opportunities</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Full-time roles in Data Science, ML Engineering, or AI/LLM R&D</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span>Internship & contract work in Data Platforms, Analytics, and Generative AI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span>Collaborations on AI-powered product development or applied ML research</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <span>High-impact technical roles in early-stage AI startups or FAANG-scale teams</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}