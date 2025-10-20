import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg">FundFlow Monitor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="default">Official Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              to="/#about"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/#projects"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/dashboard"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/#contact"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full">Official Login</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
