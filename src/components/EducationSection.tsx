import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

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
    iconBg: "bg-red-100 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    degree: "Bachelor of Technology in Artificial Intelligence & Data Science",
    institution: "Thakur College of Engineering and Technology",
    universitySystem: "University of Mumbai",
    location: "Mumbai, India",
    duration: "December 2020 – June 2024",
    status: "Completed",
    coursework: ["Data Structures", "Database Management Systems", "Data Mining", "Machine Learning"],
    gradient: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 dark:from-muted/20 dark:via-background dark:to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(147,197,253,0.08),transparent_50%)] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Academic Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through rigorous academic training in data science and artificial intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card
              key={edu.institution}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-background/80 backdrop-blur-sm border-border hover:border-primary/30 dark:hover:border-teal-400/60 shadow-lg hover:shadow-primary/20 dark:hover:shadow-teal-400/25 animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${edu.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className={`h-6 w-6 ${edu.iconColor}`} />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className={`text-xl md:text-2xl transition-all duration-300 ${edu.hoverColor} mb-2`}>
                        {edu.degree}
                      </CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <BookOpen className="h-4 w-4 flex-shrink-0" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        {edu.universitySystem && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground ml-6">
                            <span>({edu.universitySystem})</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={edu.status === "In Progress" ? "default" : "secondary"}
                    className={`${edu.status === "In Progress" ? "bg-primary/20 text-primary border-primary/40 dark:bg-teal-400/20 dark:text-teal-400 dark:border-teal-400/40" : ""} whitespace-nowrap`}
                  >
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3 text-muted-foreground">Relevant Coursework</h4>
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