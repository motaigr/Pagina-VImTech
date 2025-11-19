import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Settings, MonitorCheck, MessageSquareText } from 'lucide-react'

const services = [
  {
    title: 'Manutenção Preventiva',
    description:
      'Garantia de funcionamento ideal do equipamento com checagens e ajustes periódicos.',
    icon: Wrench,
  },
  {
    title: 'Reparo e Calibração',
    description:
      'Diagnóstico preciso e reparos completos para minilabs Noritsu e Fuji.',
    icon: Settings,
  },
  {
    title: 'Instalação e Configuração',
    description:
      'Montagem, ajuste e preparo para operação de novos equipamentos.',
    icon: MonitorCheck,
  },
  {
    title: 'Consultoria Especializada',
    description:
      'Orientação técnica para otimizar produtividade e evitar falhas operacionais.',
    icon: MessageSquareText,
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border shadow-subtle hover:shadow-elevation hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden group"
            >
              <CardHeader className="flex flex-col items-center pt-8 pb-4">
                <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
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
