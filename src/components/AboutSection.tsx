
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-500 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started as a curious data enthusiast passionate about solving real-world problems, 
                  evolved into a data-driven AI product builder. I strive to create intelligent systems that 
                  empower career growth, enhance decision-making, and make technology more human. My mission is to build 
                  scalable impactful tools at the intersection of AI, analytics, and purpose-driven design.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-teal-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-500">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every line of code is an opportunity to solve real problems. Whether it's optimizing 
                  data pipelines, fine-tuning LLMs, or building intuitive user experiences, I focus on 
                  creating solutions that matter to people and businesses.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
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
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-lg italic text-muted-foreground">
                "Data-driven dreams, engineered with empathy."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
