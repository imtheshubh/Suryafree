import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, IndianRupee, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

export default function SchemesSection() {
  const schemes = [
    {
      title: 'PM-KUSUM Scheme',
      type: 'Central Government',
      subsidy: 'Up to 60%',
      description: 'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan for farmers to install solar pumps and grid-connected solar plants.',
      benefits: ['Solar pump subsidy', 'Grid-connected plants', 'Additional income', 'Water security'],
      eligibility: 'Farmers and farmer groups',
      applicationSteps: [
        'Register on PM-KUSUM portal',
        'Submit required documents',
        'Technical feasibility study',
        'Installation and commissioning'
      ]
    },
    {
      title: 'Rooftop Solar Subsidy',
      type: 'Central Government',
      subsidy: 'Up to ₹30,000',
      description: 'Central Financial Assistance for residential rooftop solar installations to promote clean energy adoption.',
      benefits: ['Direct subsidy up to ₹30,000', 'Reduced electricity bills', 'Net metering facility', '25-year savings'],
      eligibility: 'Residential consumers',
      applicationSteps: [
        'Apply through SECI portal',
        'Choose empaneled installer',
        'System installation',
        'Subsidy disbursement'
      ]
    },
    {
      title: 'State Solar Policy',
      type: 'State Government',
      subsidy: 'Varies by State',
      description: 'Additional state-level incentives and policies to promote solar energy adoption with faster approvals.',
      benefits: ['Additional subsidies', 'Fast-track approvals', 'Tax benefits', 'Priority grid connection'],
      eligibility: 'Based on state policy',
      applicationSteps: [
        'Check state solar policy',
        'Apply through state portal',
        'Submit state-specific documents',
        'Local approval process'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="schemes" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-schemes-title">
            Government Solar Schemes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-schemes-description">
            Take advantage of Indian government subsidies and schemes to make solar energy more affordable. 
            We help you navigate the application process and maximize your benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-scheme-${index}`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={scheme.type === 'Central Government' ? 'default' : 'secondary'}
                    className="mb-2"
                  >
                    {scheme.type}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Subsidy</div>
                    <div className="font-bold text-primary" data-testid={`text-scheme-subsidy-${index}`}>
                      {scheme.subsidy}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl" data-testid={`text-scheme-title-${index}`}>
                  {scheme.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm" data-testid={`text-scheme-description-${index}`}>
                  {scheme.description}
                </p>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {scheme.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span data-testid={`text-scheme-benefit-${index}-${benefitIndex}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Eligibility
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-scheme-eligibility-${index}`}>
                    {scheme.eligibility}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Application Process
                  </h4>
                  <ol className="space-y-1">
                    {scheme.applicationSteps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm">
                        <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span data-testid={`text-scheme-step-${index}-${stepIndex}`}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <Button 
                  className="w-full"
                  onClick={scrollToContact}
                  data-testid={`button-scheme-apply-${index}`}
                >
                  Get Help with Application
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Need Help with Applications?</h3>
              <p className="text-muted-foreground mb-4">
                Our team of experts will guide you through the entire subsidy application process, 
                ensuring you get maximum benefits and hassle-free approvals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={scrollToContact} data-testid="button-schemes-consultation">
                  <IndianRupee className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
                <Button variant="outline" data-testid="button-schemes-guide">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}