import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Science",
    institution: "Stony Brook University",
    location: "Stony Brook, New York",
    duration: "August 2024 – August 2026",
    status: "In Progress",
    coursework: ["Data Structures", "Database Management Systems", "Data Mining", "Machine Learning"],
    gradient: "from-red-600 to-gray-600 dark:from-red-400 dark:to-gray-400",
    hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-400",
    logoSrc: "/SBU.jpg",
    logoAlt: "Stony Brook University Logo"
  },
  {
    degree: "Bachelor of Technology in Artificial Intelligence & Data Science",
    institution: "Thakur College of Engineering and Technology",
    location: "Mumbai, India",
    duration: "December 2020 – June 2024",
    status: "Completed",
    coursework: ["Data Structures", "Database Management Systems", "Data Mining", "Machine Learning"],
    gradient: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    logoSrc: "/tcet.webp",
    logoAlt: "TCET Logo"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30 dark:bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements - matching other sections */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(147,197,253,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Academic Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through rigorous academic training in data science and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={edu.institution}
              className="group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 bg-background/90 dark:bg-background/95 backdrop-blur-md border-border/60 dark:border-border/80 hover:border-primary/50 dark:hover:border-teal-400/60 shadow-lg shadow-primary/5 dark:shadow-teal-400/10 hover:shadow-primary/30 dark:hover:shadow-teal-400/35 animate-fade-in opacity-0"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-background border border-border rounded-lg p-2 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <img 
                      src={edu.logoSrc}
                      alt={edu.logoAlt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <Badge 
                    variant={edu.status === "In Progress" ? "default" : "secondary"}
                    className={`${edu.status === "In Progress" ? "bg-primary/20 text-primary border-primary/40 dark:bg-teal-400/20 dark:text-teal-400 dark:border-teal-400/40" : ""} ml-auto`}
                  >
                    {edu.status}
                  </Badge>
                </div>
                
                <CardTitle className={`text-xl font-bold transition-colors ${edu.hoverColor} mb-2`}>
                  {edu.degree}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium text-sm">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}