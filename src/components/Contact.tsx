import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or concerns? Reach out to our transparency office.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center border-border bg-card">
            <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">fundflow@gov.in</p>
          </Card>

          <Card className="p-6 text-center border-border bg-card">
            <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">Phone</h3>
            <p className="text-sm text-muted-foreground">1800-XXX-XXXX</p>
          </Card>

          <Card className="p-6 text-center border-border bg-card">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">Address</h3>
            <p className="text-sm text-muted-foreground">Government Secretariat</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
