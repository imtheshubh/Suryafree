import residentialImage from '@assets/generated_images/Residential_solar_installation_330ba459.png';
import commercialImage from '@assets/generated_images/Commercial_solar_installation_f5645f0a.png';
import solarFarmImage from '@assets/generated_images/Solar_farm_landscape_1a7444eb.png';
import solarPanelsImage from '@assets/generated_images/Solar_panels_product_shot_c70971f1.png';

export default function GallerySection() {
  const projects = [
    {
      title: 'Residential Installation',
      image: residentialImage,
      description: 'Modern home solar panel system with 20kW capacity'
    },
    {
      title: 'Commercial Project',
      image: commercialImage,
      description: 'Large-scale commercial installation for office building'
    },
    {
      title: 'Solar Farm',
      image: solarFarmImage,
      description: 'Utility-scale solar farm generating clean energy'
    },
    {
      title: 'Premium Panels',
      image: solarPanelsImage,
      description: 'High-efficiency solar panels with advanced technology'
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
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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