
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, BarChart3, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    gradient: "from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    skills: [
      { name: "C++", level: 85, desc: "System Programming, Algorithm Implementation, Performance Optimization" },
      { name: "Python", level: 95, desc: "ML/AI, FastAPI, Pandas, NumPy, Scikit-learn" },
      { name: "R", level: 90, desc: "Statistical Analysis, XGBoost, Tidyverse, ggplot2" },
      { name: "Java", level: 80, desc: "Enterprise Applications, Spring Framework" },
      { name: "SQL", level: 92, desc: "Complex Queries, Joins, Window Functions" },
      { name: "Bash", level: 70, desc: "Shell Scripting, Automation" },
      { name: "Scala", level: 65, desc: "Big Data Processing, Spark" },
      { name: "JavaScript/TypeScript", level: 88, desc: "React, Node.js, Full-Stack Development" }
    ]
  },
  {
    title: "DS & ML",
    icon: Brain,
    gradient: "from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300",
    hoverColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    skills: [
      { name: "TensorFlow", level: 85, desc: "Deep Learning, Neural Networks, Keras" },
      { name: "Keras", level: 88, desc: "High-level Neural Networks, Model Building" },
      { name: "PySpark", level: 80, desc: "Big Data Processing, Distributed Computing" },
      { name: "Hugging Face", level: 85, desc: "Transformers, Pre-trained Models, NLP" },
      { name: "FastAPI", level: 88, desc: "High-performance APIs, Async Programming" },
      { name: "Flask", level: 80, desc: "REST APIs, Web Applications" },
      { name: "Streamlit", level: 85, desc: "ML Apps, Data Visualization" },
      { name: "LangChain", level: 90, desc: "LLM Applications, RAG, Agents" },
      { name: "LLMs", level: 88, desc: "Large Language Models, Fine-tuning" },
      { name: "REST APIs", level: 90, desc: "API Design, Integration, Documentation" },
      { name: "NLP", level: 85, desc: "Natural Language Processing, Text Analysis" },
      { name: "Pandas", level: 92, desc: "Data Manipulation, Analysis, DataFrames" },
      { name: "NumPy", level: 90, desc: "Numerical Computing, Array Operations" },
      { name: "Scikit-learn", level: 88, desc: "Machine Learning, Model Training, Evaluation" }
    ]
  },
  {
    title: "Data Engineering & Analytics",
    icon: Database,
    gradient: "from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300",
    hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    skills: [
      { name: "MySQL", level: 85, desc: "Relational Database Design, Optimization" },
      { name: "PostgreSQL", level: 90, desc: "Advanced Queries, Indexing, Performance Tuning" },
      { name: "Google BigQuery", level: 72, desc: "Analytics, Data Warehouse" },
      { name: "Snowflake", level: 70, desc: "Cloud Data Platform, Analytics" },
      { name: "AWS Redshift", level: 78, desc: "Data Warehousing, Analytics" },
      { name: "Azure Data Lake", level: 75, desc: "Data Warehousing, ETL Pipelines" },
      { name: "Apache Hadoop", level: 68, desc: "Distributed Storage, MapReduce" },
      { name: "Apache Spark", level: 75, desc: "Big Data Processing, Analytics" },
      { name: "Databricks", level: 70, desc: "Collaborative Analytics, Spark" },
      { name: "Airflow", level: 85, desc: "Workflow Orchestration, ETL Automation" },
      { name: "Looker", level: 70, desc: "Business Intelligence, LookML" },
      { name: "Docker", level: 90, desc: "Containerization, Multi-stage Builds" },
      { name: "Git", level: 95, desc: "Version Control, Branching, Collaboration" },
      { name: "Kubernetes", level: 72, desc: "Container Orchestration, Scaling" },
      { name: "CI/CD", level: 80, desc: "Continuous Integration, Deployment Pipelines" },
      { name: "Jira", level: 75, desc: "Project Management, Issue Tracking" },
      { name: "dbt", level: 78, desc: "Data Transformation, Analytics Engineering" },
      { name: "n8n", level: 70, desc: "Workflow Automation, Integration" }
    ]
  },
  {
    title: "LLM/GenAI",
    icon: Cloud,
    gradient: "from-orange-600 to-red-500 dark:from-orange-400 dark:to-red-300",
    hoverColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    skills: [
      { name: "OpenAI API", level: 88, desc: "GPT Integration, Model Fine-tuning" },
      { name: "Claude API", level: 85, desc: "Anthropic Models, Conversational AI" },
      { name: "Mistral", level: 75, desc: "Open Source LLMs, Model Deployment" },
      { name: "Cohere", level: 70, desc: "Language Models, Text Generation" },
      { name: "FAISS", level: 80, desc: "Vector Search, Similarity Matching" },
      { name: "Qdrant", level: 75, desc: "Vector Database, Embeddings" },
      { name: "Pinecone", level: 78, desc: "Vector Database, Real-time Search" },
      { name: "BERT", level: 82, desc: "Transformer Models, Text Understanding" },
      { name: "Instructor-XL", level: 70, desc: "Structured Output, Data Extraction" },
      { name: "SentenceTransformers", level: 85, desc: "Semantic Embeddings, Text Similarity" },
      { name: "RAG Pipelines", level: 88, desc: "Retrieval Augmented Generation" },
      { name: "Prompt Engineering", level: 90, desc: "LLM Optimization, Response Quality" }
    ]
  },
  {
    title: "Frontend & Web Development",
    icon: Code,
    gradient: "from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-300",
    hoverColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    skills: [
      { name: "React", level: 90, desc: "Component Architecture, Hooks, State Management" },
      { name: "TypeScript", level: 88, desc: "Type Safety, Interface Design, Advanced Types" },
      { name: "Next.js", level: 85, desc: "SSR, SSG, Full-Stack React Applications" },
      { name: "Tailwind CSS", level: 92, desc: "Utility-First CSS, Responsive Design" },
      { name: "Node.js", level: 85, desc: "Backend Development, API Creation" },
      { name: "Vite", level: 80, desc: "Build Tool, Development Server" },
      { name: "shadcn/ui", level: 88, desc: "Component Library, Design Systems" },
      { name: "Convex", level: 82, desc: "Real-time Backend, Database Management" }
    ]
  },
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    gradient: "from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-300",
    hoverColor: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    skills: [
      { name: "Power BI", level: 90, desc: "Interactive Dashboards, DAX, KPI Tracking" },
      { name: "Tableau", level: 85, desc: "Advanced Visualizations, Story Telling" },
      { name: "ggplot2", level: 88, desc: "Statistical Graphics, R Visualization" },
      { name: "Matplotlib/Seaborn", level: 85, desc: "Python Plotting, Statistical Viz" },
      { name: "Plotly", level: 80, desc: "Interactive Charts, Dash Applications" },
      { name: "Excel", level: 92, desc: "Advanced Analytics, Pivot Tables, VBA" },
      { name: "Sweetviz", level: 75, desc: "Automated EDA, Data Profiling" },
      { name: "SHAP", level: 70, desc: "Model Explainability, Feature Attribution" },
      { name: "Recharts", level: 82, desc: "React Charts, Data Visualization, Interactive Graphs" }
    ]
  }
];

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 dark:from-muted/20 dark:via-background dark:to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(147,197,253,0.08),transparent_50%)] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-tested technologies powering enterprise-scale AI solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                activeCategory === index
                  ? `bg-gradient-to-r ${skillCategories[index].gradient} text-white shadow-lg scale-105`
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-background/90 dark:bg-background/95 backdrop-blur-md border-border/60 dark:border-border/80 hover:border-primary/50 dark:hover:border-teal-400/60 shadow-lg shadow-primary/5 dark:shadow-teal-400/10 hover:shadow-primary/20 dark:hover:shadow-teal-400/25"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-semibold text-lg transition-colors ${skillCategories[activeCategory].hoverColor}`}>
                    {skill.name}
                  </h3>
                  <Badge variant="secondary" className="bg-muted/50">
                    {skill.level}%
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].gradient} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {skill.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
