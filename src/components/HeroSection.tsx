import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";

const roles = ["MS Data Science @ Stony Brook", "Data Scientist", "Machine Learning Engineer", "AI Engineer", "Software Developer"];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/30">


      {/* Consistent subtle background */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-teal-500/5 to-transparent rounded-full blur-3xl" />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05),transparent_40%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.05),transparent_40%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_40%)]" />
      </div>

      {/* Subtle floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 dark:bg-teal-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-6xl mx-auto space-y-2 md:space-y-12 animate-fade-in">
          {/* Header Section */}
          <div className="space-y-1 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-primary to-teal-600 dark:from-white dark:via-teal-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-sm animate-gradient-shift leading-[1.1] tracking-tight">
              Parth Chavan
            </h1>
            
            <div className="h-8 md:h-24 flex items-center justify-center">
              <p className="text-sm sm:text-base md:text-4xl lg:text-5xl">
                <span className="text-gray-800 dark:text-gray-100 font-bold bg-gradient-to-r from-primary to-teal-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {isTyping ? roles[currentRole] : ""}
                </span>
                <span className="animate-pulse text-primary dark:text-teal-400 text-lg sm:text-xl md:text-5xl ml-1">|</span>
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="max-w-5xl mx-auto space-y-1 md:space-y-4">
            <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 leading-tight md:leading-relaxed font-light">
              Transforming Data into <span className="text-primary dark:text-teal-400 font-bold bg-primary/20 dark:bg-teal-400/30 px-2 py-1 md:px-3 md:py-2 rounded-xl shadow-lg">Intelligent Solutions</span> Through Advanced Analytics.
            </p>
            <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-tight md:leading-relaxed">
              Data Scientist & ML Engineer specializing in <span className="text-primary dark:text-teal-400 font-bold">predictive modeling</span> and <span className="text-primary dark:text-teal-400 font-bold">real-time analytics</span> for data-driven insights.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center pt-2 md:pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-blue-600 to-teal-500 hover:from-primary/90 hover:via-blue-700 hover:to-teal-600 dark:from-teal-500 dark:via-cyan-500 dark:to-purple-500 dark:hover:from-teal-400 dark:hover:via-cyan-400 dark:hover:to-purple-400 text-white px-4 sm:px-10 py-2 sm:py-4 text-sm sm:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://drive.google.com/file/d/1TY1P2KRq9bAKLD9-B520JdQWVqBxDkj5/view?usp=drive_link', '_blank')}
            >
              <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-6 sm:w-6" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToProjects}
              className="border-2 border-primary dark:border-teal-400 text-primary dark:text-teal-400 hover:bg-primary/20 dark:hover:bg-teal-400/30 px-4 sm:px-10 py-2 sm:py-4 text-sm sm:text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-900/20"
            >
              See Projects
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              onClick={scrollToContact}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 px-4 sm:px-10 py-2 sm:py-4 text-sm sm:text-xl font-bold hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 pt-2 md:pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => window.open('https://github.com/Parthchavann', '_blank')}
              className="hover:text-primary dark:hover:text-teal-400 text-gray-600 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-teal-400/30 w-10 h-10 sm:w-16 sm:h-16 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-900/20"
            >
              <Github className="h-5 w-5 sm:h-8 sm:w-8" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => window.open('mailto:parthchavann05@gmail.com', '_blank')}
              className="hover:text-primary dark:hover:text-teal-400 text-gray-600 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-teal-400/30 w-10 h-10 sm:w-16 sm:h-16 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-900/20"
            >
              <Mail className="h-5 w-5 sm:h-8 sm:w-8" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}