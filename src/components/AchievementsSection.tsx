
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap, Award, Brain, BarChart } from "lucide-react";

const achievements = [
  {
    icon: Target,
    metric: "89%",
    title: "Career Prediction Model Accuracy",
    description: "Random Forest & Gradient Boosting with GridSearchCV on 500+ profiles using 25+ engineered features",
    tech: ["Random Forest", "XGBoost", "GridSearchCV", "TF-IDF", "PCA"],
    gradient: "from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-300",
    hoverColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400"
  },
  {
    icon: Brain,
    metric: "85%",
    title: "Job-Career Alignment Boost",
    description: "Full-stack career assessment platform with 8 personality archetypes and intelligent matching",
    tech: ["PyMuPDF", "OpenAI GPT", "Supabase", "Piloteer API"],
    gradient: "from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-300",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400"
  },
  {
    icon: TrendingUp,
    metric: "70%",
    title: "Manual Quoting Time Reduction",
    description: "LLM-driven FSM automation with Claude Opus & OpenAI o3 for real-time scheduling and CRM",
    tech: ["React", "Next.js", "Convex", "TypeScript", "Claude API"],
    gradient: "from-blue-500 to-cyan-600 dark:from-blue-400 dark:to-cyan-300",
    hoverColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
  },
  {
    icon: BarChart,
    metric: "20%",
    title: "F1 Lap Time Prediction Improvement",
    description: "XGBoost pipeline with K-Means clustering for driver performance analysis across 70+ F1 drivers",
    tech: ["R", "XGBoost", "K-Means", "ggplot2", "tidyverse"],
    gradient: "from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-300",
    hoverColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400"
  },
  {
    icon: Zap,
    metric: "15%",
    title: "Cross-Sell Revenue Increase",
    description: "Feature engineering & hyperparameter tuning with decision trees on banking datasets",
    tech: ["Python", "scikit-learn", "Feature Engineering", "ROC-AUC"],
    gradient: "from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-300",
    hoverColor: "group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
  },
  {
    icon: Award,
    metric: "12%",
    title: "Retention Targeting Improvement",
    description: "Predictive modeling with Sweetviz EDA and synthetic data generation using Python's Faker",
    tech: ["Sweetviz", "Pandas", "Faker", "RMSE", "Model Validation"],
    gradient: "from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-300",
    hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-300"
  }
];

export function AchievementsSection() {
  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-primary via-teal-500 to-purple-600 bg-clip-text text-transparent">
            Quantified ML Impact
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-validated AI systems with measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title}
              className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-3 md:p-8 text-center relative z-10">
                <div className={`inline-flex p-3 md:p-4 rounded-full bg-gradient-to-br ${achievement.gradient} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                
                <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors ${achievement.hoverColor.replace('group-hover:', '')}`}>
                  {achievement.metric}
                </div>
                
                <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 transition-colors ${achievement.hoverColor} leading-tight`}>
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                  {achievement.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-muted/50 px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                  {achievement.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-muted/50 px-2 py-1">
                      +{achievement.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
