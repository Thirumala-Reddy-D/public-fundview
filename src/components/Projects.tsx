import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Construction, Droplet, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Building2,
      name: "Community Center Construction",
      budget: "₹50,00,000",
      status: "In Progress",
      progress: 65,
      variant: "default" as const,
    },
    {
      icon: Construction,
      name: "Highway Expansion Project",
      budget: "₹2,50,00,000",
      status: "In Progress",
      progress: 40,
      variant: "default" as const,
    },
    {
      icon: Droplet,
      name: "Water Supply Infrastructure",
      budget: "₹1,20,00,000",
      status: "Completed",
      progress: 100,
      variant: "secondary" as const,
    },
    {
      icon: Zap,
      name: "Rural Electrification",
      budget: "₹80,00,000",
      status: "Planning",
      progress: 10,
      variant: "outline" as const,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Active Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor ongoing government projects and their fund utilization in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-card-foreground">{project.name}</h3>
                    <Badge variant={project.variant}>{project.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Budget: {project.budget}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-card-foreground">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
