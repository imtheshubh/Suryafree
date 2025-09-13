import { Separator } from '@/components/ui/separator';
import logoImage from '@assets/WhatsApp Image 2025-08-19 at 1.33.41 AM_1757765236064.jpeg';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logoImage} 
                alt="SuryaFree Logo" 
                className="h-8 w-auto"
                data-testid="img-footer-logo"
              />
              <h3 className="text-xl font-bold text-primary" data-testid="text-footer-logo">
                SuryaFree
              </h3>
            </div>
            <p className="text-muted-foreground" data-testid="text-footer-description">
              Leading provider of sustainable solar energy solutions for homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-links-title">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`#${item.toLowerCase().replace(' ', '').replace('aboutus', 'about')}`)}
                  className="text-muted-foreground hover:text-primary text-left transition-colors"
                  data-testid={`link-footer-${index}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-services-title">Services</h4>
            <nav className="flex flex-col space-y-2">
              {['Solar Panel Installation', 'Solar Water Heaters', 'Energy Consultation', 'Maintenance & Support'].map((service, index) => (
                <span
                  key={service}
                  className="text-muted-foreground"
                  data-testid={`text-footer-service-${index}`}
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-contact-title">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p data-testid="text-footer-phone">+1 (555) 123-4567</p>
              <p data-testid="text-footer-email">info@suryafree.com</p>
              <p data-testid="text-footer-address">123 Solar Street<br />Green City, GC 12345</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © 2024 SuryaFree. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-privacy">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-terms">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}