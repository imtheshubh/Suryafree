import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Award, Users, Zap } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Energy',
      description: 'Committed to reducing carbon footprint and promoting renewable energy solutions.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium solar products with industry-leading warranties and certifications.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional installers with years of experience in solar technology.'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Maximize your energy savings with cutting-edge solar panel technology.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            About SuryaFree
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground" data-testid="text-about-description">
              We are passionate about bringing clean, renewable energy to every home and business. 
              Our commitment goes beyond just providing solar solutions – we're dedicated to creating 
              a sustainable future for generations to come.
            </p>
            <p className="text-base text-muted-foreground" data-testid="text-about-environment">
              Traditional fossil fuel-based electricity generation is one of the largest contributors to 
              global carbon emissions, air pollution, and climate change. Coal and natural gas power plants 
              release harmful greenhouse gases, toxic chemicals, and particulate matter that damage our 
              environment and public health. By choosing solar energy, you're making a powerful statement 
              against these environmental threats.
            </p>
            <p className="text-base text-muted-foreground" data-testid="text-about-benefits">
              Solar energy produces zero emissions during operation, helping to reduce global warming and 
              combat climate change. Every solar panel installed saves thousands of pounds of CO2 from 
              entering our atmosphere each year. When you switch to solar, you're not just reducing your 
              electricity bills – you're actively participating in the fight against climate change and 
              helping preserve our planet for future generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}