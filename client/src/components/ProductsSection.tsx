import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Battery, Zap, Sun, Square } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: 'Solar Panels',
      icon: Sun,
      description: 'High-efficiency monocrystalline and polycrystalline solar panels with superior performance and long-lasting durability.',
      features: ['400W - 550W capacity', 'Monocrystalline technology', '25-year warranty', 'Weather resistant'],
      badge: 'Best Seller'
    },
    {
      title: 'Solar Inverters',
      icon: Zap,
      description: 'Advanced grid-tie and hybrid inverters that convert DC power to AC with maximum efficiency and smart monitoring.',
      features: ['String & micro inverters', '95%+ efficiency', 'Smart monitoring', 'Grid-tie compatible'],
      badge: 'High Efficiency'
    },
    {
      title: 'Solar Batteries',
      icon: Battery,
      description: 'Lithium-ion and lead-acid battery storage solutions for backup power and energy independence.',
      features: ['Lithium-ion technology', '5000+ cycles', 'Smart BMS', '10-year warranty'],
      badge: 'Long Life'
    },
    {
      title: 'Mounting Frames',
      icon: Square,
      description: 'Robust aluminum mounting structures designed for roof and ground installations with easy assembly.',
      features: ['Aluminum alloy construction', 'Corrosion resistant', 'Easy installation', 'Multiple roof types'],
      badge: 'Durable'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-products-title">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-description">
            Premium quality solar components from trusted manufacturers, designed for optimal performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover-elevate relative" data-testid={`card-product-${index}`}>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                <product.icon className="w-24 h-24 text-primary" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl" data-testid={`text-product-title-${index}`}>
                  {product.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground" data-testid={`text-product-description-${index}`}>
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span data-testid={`text-product-feature-${index}-${featureIndex}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full mt-4"
                  onClick={scrollToContact}
                  data-testid={`button-product-quote-${index}`}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a complete solar solution? We offer customized packages combining all components.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            data-testid="button-complete-solution"
          >
            Get Complete Solar Solution
          </Button>
        </div>
      </div>
    </section>
  );
}