import { Home, Building, Zap, Sun } from 'lucide-react';

export default function GallerySection() {
  const projects = [
    {
      title: 'Residential Installation',
      icon: Home,
      description: 'Modern home solar panel system with 20kW capacity',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Commercial Project',
      icon: Building,
      description: 'Large-scale commercial installation for office building',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      title: 'Solar Farm',
      icon: Zap,
      description: 'Utility-scale solar farm generating clean energy',
      color: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      title: 'Premium Panels',
      icon: Sun,
      description: 'High-efficiency solar panels with advanced technology',
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-description">
            Explore our portfolio of successful solar installations and see the quality of our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg hover-elevate cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                <project.icon className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}