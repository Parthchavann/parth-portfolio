
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Uberflow Analytics - Predictive Traffic Management Platform",
    description: "Advanced predictive traffic management platform reducing traffic prediction error by 40% (4.8→2.9 mph MAE) achieving 91.5% accuracy through dual LSTM-GNN architecture with 24-hour sequences and production ML pipeline.",
    tags: ["React TypeScript", "Apache Spark", "FastAPI", "LSTM-GNN", "Airflow", "Leaflet", "KeplerGL", "Uber Movement Data"],
    category: "AI/ML",
    hoverColor: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    challenges: "Reduced traffic prediction error by 40% (4.8→2.9 mph MAE) achieving 91.5% accuracy by implementing dual LSTM-GNN architecture with 24-hour sequences and 3-layer attention networks trained on multi-city Uber Movement data",
    learnings: "Built production ML pipeline with 89% R² score and 4-worker API deployment using Apache Spark (4GB memory), FastAPI service, and Airflow DAGs with 6-hour automated retraining cycles. Delivered full-stack traffic platform with React TypeScript dashboard featuring real-time Leaflet/KeplerGL visualizations, batch prediction endpoints, and dynamic model switching between LSTM/GNN architectures",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 2,
    title: "NEXUS: Real-Time Multimodal Disaster Intelligence System",
    description: "Enterprise-grade disaster intelligence platform with real-time 4-stream Kafka architecture and multimodal ML pipeline featuring 768-dim DistilBERT and 2048-dim ResNet-50 processing with sub-second inference and geospatial search capabilities.",
    tags: ["Kafka Streams", "Spark Streaming", "Kubernetes", "DistilBERT", "ResNet-50", "FastAPI", "Qdrant", "Redis", "WebSockets"],
    category: "AI/ML",
    hoverColor: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    challenges: "Designed real-time disaster response architecture with 4 multimodal Kafka streams and event-driven processing by implementing Spark Streaming, Kubernetes deployment, and 7-category classification system. Built multimodal ML pipeline with 768-dim DistilBERT and 2048-dim ResNet-50 processing 15+ engineered features via 4-modal attention fusion",
    learnings: "Trained 3 models on 7,000 samples with sub-second inference achieving multimodal fusion of text, image, and sensor data. Developed production-ready API with geospatial search featuring 8 REST endpoints, WebSocket alerts, and 50km radius vector similarity by integrating FastAPI, Redis caching, and Qdrant vector database",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 3,
    title: "AI-Native Field Service Management Platform",
    description: "Full-stack FSM platform with AI-powered automation, real-time quoting, smart scheduling, and CRM integration for service businesses.",
    tags: ["React", "Next.js", "Convex", "TypeScript", "Claude Opus", "OpenAI o3", "CRM"],
    category: "Full-Stack",
    hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-teal-400",
    challenges: "Architected modular components enabling real-time quoting, smart scheduling, and automated invoicing with 70% reduction in manual quoting time",
    learnings: "Advanced LLM integration patterns, agentic automation workflows, and human-in-the-loop quality control systems",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 4,
    title: "Passion to Paychecks: AI Career Matching Engine",
    description: "Full-stack career assessment platform aligning user passions with job opportunities using personality archetypes and intelligent matching.",
    tags: ["Python", "PyMuPDF", "OpenAI GPT", "Supabase", "Airtable", "Docker", "Airflow"],
    category: "Full-Stack",
    hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-teal-400",
    challenges: "Built intelligent resume parsing and job matching with 85% engagement boost using TF-IDF and cosine similarity algorithms",
    learnings: "Document processing pipelines, real-time salary insights integration, and scalable backend orchestration",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 5,
    title: "Formula 1 Race Analytics Engine",
    description: "Predictive analytics pipeline forecasting F1 lap times using advanced ML models and driver performance clustering.",
    tags: ["R", "XGBoost", "tidyverse", "ggplot2", "K-Means", "caret", "factoextra"],
    category: "Data Science",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-cyan-400",
    challenges: "Developed predictive models achieving 20% RMSE improvement over baseline, enabling strategic race simulations and pit stop optimizations",
    learnings: "Time series forecasting, clustering algorithms for driver profiling, and statistical hypothesis testing for racing strategies",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 6,
    title: "AI-Driven Enrollment Forecasting System",
    description: "Machine learning system for academic enrollment prediction using ensemble methods and synthetic data generation.",
    tags: ["Python", "scikit-learn", "XGBoost", "Sweetviz", "Faker", "RMSE", "Pandas"],
    category: "Data Science",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-cyan-400",
    challenges: "Improved enrollment forecasting accuracy by 15% using Random Forest & XGBoost with data-driven planning for 50+ academic courses",
    learnings: "Ensemble modeling techniques, synthetic data generation strategies, and automated EDA for feature discovery",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 7,
    title: "COVID-19 Workforce Analytics Platform",
    description: "Geospatial and temporal analysis of COVID-19's impact on labor markets using advanced visualization and statistical modeling.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Geospatial Analysis"],
    category: "Data Science",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-cyan-400",
    challenges: "Analyzed 768K unemployment records across 28 Indian states, identifying 5% participation drop and regional resilience patterns",
    learnings: "Large-scale data processing, geospatial analysis techniques, and temporal pattern recognition for policy insights",
    github: "https://github.com/Parthchavann",
    demo: "#"
  },
  {
    id: 8,
    title: "Banking ML Pipeline for Cross-Sell Optimization",
    description: "End-to-end machine learning pipeline for predicting customer purchase likelihood and optimizing cross-sell strategies.",
    tags: ["Python", "scikit-learn", "Decision Trees", "Random Forest", "ROC-AUC", "Feature Engineering"],
    category: "Data Science",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-cyan-400",
    challenges: "Engineered classification models with behavior and demographic features, boosting cross-sell conversions by 15%",
    learnings: "Advanced feature engineering, model evaluation metrics, and production ML pipeline deployment",
    github: "https://github.com/Parthchavann",
    demo: "#"
  }
];

const categories = [
  { name: "All", color: "bg-gradient-to-r from-slate-600 to-gray-600 dark:from-slate-400 dark:to-gray-400" },
  { name: "AI/ML", color: "bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400" },
  { name: "Data Science", color: "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400" },
  { name: "Full-Stack", color: "bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" }
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_40%_70%,rgba(147,197,253,0.08),transparent_50%)] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_90%_30%,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade AI systems combining innovation with measurable business impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer border-2 ${
                selectedCategory === category.name
                  ? `${category.color} text-white border-transparent shadow-lg shadow-primary/25 hover:shadow-primary/35`
                  : "bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground border-border hover:border-primary/50 hover:shadow-md hover:bg-background"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 focus:scale-[1.02] focus:shadow-2xl focus:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-teal-400/50 bg-background/90 dark:bg-background/95 backdrop-blur-md border-border/60 dark:border-border/80 hover:border-primary/50 dark:hover:border-teal-400/60 focus:border-primary/50 dark:focus:border-teal-400/60 shadow-lg shadow-primary/5 dark:shadow-teal-400/10 hover:shadow-primary/30 dark:hover:shadow-teal-400/35 focus:shadow-primary/30 dark:focus:shadow-teal-400/35 animate-fade-in opacity-0"
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className={`transition-colors text-lg ${project.hoverColor}`}>
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs whitespace-nowrap">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 px-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.github !== "#") window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <Card 
              className="max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl">{selectedProject.title}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </Button>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {selectedProject.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technical Challenges & Solutions</h4>
                  <p className="text-muted-foreground text-sm">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Technical Learnings</h4>
                  <p className="text-muted-foreground text-sm">
                    {selectedProject.learnings}
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex items-center space-x-2"
                    onClick={() => {
                      if (selectedProject.github !== "#") window.open(selectedProject.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2"
                    onClick={() => {
                      if (selectedProject.demo !== "#") window.open(selectedProject.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
