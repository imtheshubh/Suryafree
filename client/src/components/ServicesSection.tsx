import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Droplets } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Solar Panel Installation',
      icon: Sun,
      description: 'High-efficiency solar panels designed to maximize energy production and reduce electricity bills. Our premium panels come with 25-year warranties.',
      features: ['25-year warranty', 'High efficiency rating', 'Professional installation', 'Monitoring system included']
    },
    {
      title: 'Solar Water Heaters',
      icon: Droplets,
      description: 'Eco-friendly solar water heating systems that provide hot water year-round while reducing your energy consumption and utility costs.',
      features: ['Year-round hot water', 'Energy efficient', 'Low maintenance', 'Durable construction']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Comprehensive solar solutions tailored to meet your energy needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-service-${index}`}>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                <service.icon className="w-24 h-24 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span data-testid={`text-service-feature-${index}-${featureIndex}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-4"
                  onClick={scrollToContact}
                  data-testid={`button-service-quote-${index}`}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}