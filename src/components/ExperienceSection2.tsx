import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    role: "AI Software Engineer Intern",
    company: "Hausvac",
    duration: "July 2025 - Present",
    location: "Southampton, New York",
    highlights: [
      "Reduced invoice processing time from 14 days to 48 hours for 250+ monthly invoices measured by payment cycle analytics, by building automated job-to-invoice generation pipeline with Convex mutations handling $3.5M annual revenue",
      "Scaled React/TypeScript application to manage 500+ properties and 1,200+ customer contacts measured by database query performance (sub-100ms), by implementing real-time Convex backend with optimized indexing and 150+ modular components",
      "Improved field technician scheduling efficiency by 40% across 3,000+ annual service calls measured by job completion rates, by developing drag-and-drop calendar with Google Calendar integration and automated SMS/email reminders"
    ],
    technologies: ["React", "TypeScript", "Convex", "Google Calendar API", "SMS/Email APIs", "Real-time Backend"],
    gradient: "from-violet-600 to-indigo-500"
  },
  {
    role: "Data Engineering Intern",
    company: "Global Wheelhouse | Tech Lead",
    duration: "May 2025 – July 2025",
    location: "Remote",
    highlights: [
      "Led end-to-end architecture of containerized RESTful microservices using FastAPI and Uvicorn",
      "Orchestrated dynamic resume parsing with PyMuPDF, TF-IDF, and cosine similarity for semantic job matching",
      "Managed Git workflows and API testing using Postman, Swagger with Docker-based deployment pipelines"
    ],
    technologies: ["FastAPI", "Uvicorn", "PyMuPDF", "Docker", "Airflow", "TF-IDF", "Cosine Similarity"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    role: "Data Science Intern",
    company: "Prodigy Infotech",
    duration: "October 2023 – November 2023",
    location: "Remote",
    highlights: [
      "Built decision tree classifier using Python and scikit-learn on banking datasets with feature engineering and hyperparameter tuning, boosting cross-sell conversions and account revenue by 15%",
      "Developed logistic regression and random forest models using pandas and scikit-learn to predict customer purchase likelihood, leveraging cross-validation and ROC-AUC for model evaluation",
      "Engineered classification models using behavior and demographic features with preprocessing techniques like one-hot encoding and variance filtering, improving accuracy and targeted marketing strategies"
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Decision Trees", "Random Forest", "ROC-AUC", "Feature Engineering"],
    gradient: "from-purple-600 to-pink-500"
  },
  {
    role: "Data Analyst Intern",
    company: "Moneysoft Computers",
    duration: "June 2023 – August 2023",
    location: "Hybrid",
    highlights: [
      "Designed interactive Power BI dashboards reducing manual reporting time by 25% with advanced KPI tracking",
      "Queried relational databases using advanced SQL joins and aggregations, improving customer targeting strategies",
      "Assembled Python-based ETL pipelines standardizing data schema and saving ~15 hours/month in processing time"
    ],
    technologies: ["Power BI", "SQL", "Python", "ETL", "KPIs", "Database Design"],
    gradient: "from-emerald-600 to-teal-500"
  }
];

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building production-grade AI systems with measurable business impact
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-teal-500 to-purple-600 opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.role} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} shadow-lg`} />
                
                <Card className="ml-16 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-background/90 dark:bg-background/95 backdrop-blur-md border-border/60 dark:border-border/80 hover:border-primary/50 dark:hover:border-teal-400/60 shadow-lg shadow-primary/5 dark:shadow-teal-400/10 hover:shadow-primary/20 dark:hover:shadow-teal-400/25">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary dark:group-hover:text-teal-400 transition-all duration-300">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-2 flex-shrink-0`} />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-muted/50 hover:bg-muted transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}