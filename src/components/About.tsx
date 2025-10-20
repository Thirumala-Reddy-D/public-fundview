import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Every transaction is logged and verified with receipt documentation",
    },
    {
      icon: FileCheck,
      title: "Receipt Verification",
      description: "All fund transfers require receipt uploads for complete accountability",
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Authority, Officer, Manager, and Worker roles with specific permissions",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Citizens can monitor project progress and fund flow in real-time",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About FundFlow Monitor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A government initiative to ensure complete transparency and accountability in public fund management across all project levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow border-border bg-card"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
