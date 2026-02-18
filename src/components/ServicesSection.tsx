import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    title: 'Manutenção Preventiva',
    description:
      'Garantia de funcionamento ideal do equipamento com checagens e ajustes periódicos.',
  },
  {
    title: 'Reparo e Calibração',
    description:
      'Diagnóstico preciso e reparos completos para minilabs Noritsu e Fuji.',
  },
  {
    title: 'Instalação e Configuração',
    description:
      'Montagem, ajuste e preparo para operação de novos equipamentos.',
  },
  {
    title: 'Consultoria Especializada',
    description:
      'Orientação técnica para otimizar produtividade e evitar falhas operacionais.',
  },
]

export function ServicesSection() {
  return (
    <section id="services-section" className="py-16 md:py-24 bg-slate-50">
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
              className="bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl group"
            >
              <CardHeader className="flex flex-col items-center text-center pb-2 pt-8 px-8">
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center pb-8 px-8">
                <CardDescription className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
