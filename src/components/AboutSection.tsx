
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(147,197,253,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting intelligent solutions at the intersection of AI and scalable engineering
          </p>
        </div>

        <div className="space-y-8">
          {/* Top row with image and Core Expertise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image - Left */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                {/* Animated gradient ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-teal-500 to-purple-500 dark:from-teal-400 dark:via-cyan-400 dark:to-purple-400 rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-1000 animate-spin-slow"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-teal-500/30 dark:from-teal-400/30 dark:to-purple-400/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up"></div>
                  <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-down"></div>
                </div>
                
                {/* Profile Image Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[23rem] lg:h-[23rem] rounded-full overflow-hidden border-4 border-white/90 dark:border-gray-800/90 shadow-2xl transform transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] group-hover:border-white dark:group-hover:border-gray-700">
                  <img 
                    src="/Profile.jpg" 
                    alt="Parth Chavan" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Core Expertise - Right */}
            <div className="flex flex-col justify-start">
              <div className="bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    "AI/ML System Development",
                    "Data Engineering & ETL Pipelines",
                    "Full-Stack Product Engineering",
                    "LLM Integration & Retrieval-Augmented Generation (RAG)",
                    "Semantic Search & Vector Databases (FAISS, Qdrant, Pinecone)",
                    "Cloud-Native Architecture (AWS, GCP, Supabase)",
                    "API & Microservices Development",
                    "Scalable System & Backend Design",
                    "CI/CD & DevOps Pipelines",
                    "LangChain, AutoGen, or Agentic Workflows"
                  ].map((skill, index) => (
                    <div 
                      key={skill} 
                      className="flex items-center space-x-2 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What Drives Me Card - Full width rectangular below */}
          <Card className="bg-background/50 backdrop-blur-sm border-teal-500/20">
            <CardContent className="px-6 py-6 sm:px-8 sm:py-7">
              <h3 className="text-2xl font-semibold mb-4 text-teal-500 text-center">What Drives Me</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Every line of code is an opportunity to solve real problems. Whether it's optimizing 
                  data pipelines, fine-tuning LLMs, or building intuitive user experiences, I focus on 
                  creating solutions that matter to people and businesses.
                </p>
                <blockquote className="text-xl italic text-center text-muted-foreground pt-2">
                  "Data-driven dreams, engineered with empathy."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
