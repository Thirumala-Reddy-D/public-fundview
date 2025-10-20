import { Card } from "@/components/ui/card";
import { Crown, UserCheck, Users2, HardHat, ArrowRight } from "lucide-react";

const FundFlow = () => {
  const roles = [
    {
      icon: Crown,
      title: "Authority",
      description: "Allocates project funds",
      color: "text-primary",
    },
    {
      icon: UserCheck,
      title: "Officer",
      description: "Approves and distributes",
      color: "text-secondary",
    },
    {
      icon: Users2,
      title: "Manager",
      description: "Manages and oversees",
      color: "text-accent-foreground",
    },
    {
      icon: HardHat,
      title: "Worker",
      description: "Receives and executes",
      color: "text-muted-foreground",
    },
  ];

  return (
    <section id="fund-flow" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Fund Flow Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track how funds move through the system with complete documentation at every checkpoint.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {roles.map((role, index) => (
            <div key={role.title} className="relative">
              <Card className="p-6 text-center h-full border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <role.icon className={`h-8 w-8 ${role.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{role.title}</h3>
                <p className="text-muted-foreground text-sm">{role.description}</p>
              </Card>
              {index < roles.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">How It Works</h3>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-primary">1.</span>
              <span>Authority allocates funds to specific projects and transfers to Officers</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">2.</span>
              <span>Officers verify allocation and distribute to Managers with receipt uploads</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">3.</span>
              <span>Managers oversee implementation and transfer to Workers with documentation</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">4.</span>
              <span>Workers receive funds and upload proof of work completion</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FundFlow;
