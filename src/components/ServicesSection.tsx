import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const services = [
  {
    title: 'Manutenção Preventiva',
    description:
      'Garantia de funcionamento ideal do equipamento com checagens e ajustes periódicos.',
    image:
      'https://img.usecurling.com/p/800/600?q=industrial%20printer%20maintenance',
  },
  {
    title: 'Reparo e Calibração',
    description:
      'Diagnóstico preciso e reparos completos para minilabs Noritsu e Fuji.',
    image: 'https://img.usecurling.com/p/800/600?q=minilab%20machine',
  },
  {
    title: 'Instalação e Configuração',
    description:
      'Montagem, ajuste e preparo para operação de novos equipamentos.',
    image: 'https://img.usecurling.com/p/800/600?q=printer%20installation',
  },
  {
    title: 'Consultoria Especializada',
    description:
      'Orientação técnica para otimizar produtividade e evitar falhas operacionais.',
    image: 'https://img.usecurling.com/p/800/600?q=technical%20support',
  },
]

export function ServicesSection() {
  return (
    <section id="services-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border shadow-subtle hover:shadow-elevation hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden group flex flex-col"
            >
              <CardHeader className="p-0 bg-blue-50/50">
                <div className="p-2 w-full">
                  <AspectRatio ratio={4 / 3} className="bg-transparent">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center p-6 text-center flex-grow">
                <CardTitle className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
