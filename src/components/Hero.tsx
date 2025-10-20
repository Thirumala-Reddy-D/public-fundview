import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Transparent Government Fund Monitoring
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Track every rupee from authority to worker. Complete transparency in public fund allocation and usage with verified receipts and real-time monitoring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button size="lg" className="gap-2">
              <Eye className="h-5 w-5" />
              View Public Dashboard
            </Button>
          </Link>
          <a href="#about">
            <Button size="lg" variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
