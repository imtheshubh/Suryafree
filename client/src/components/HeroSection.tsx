import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Modern_home_with_solar_panels_eece5ef6.png';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern home with solar panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
          Go Solar with SuryaFree
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Transform your home with clean, renewable energy. Join thousands of satisfied customers who've made the switch to solar power.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            onClick={scrollToContact}
            data-testid="button-hero-get-quote"
          >
            Get a Free Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg"
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            data-testid="button-hero-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}