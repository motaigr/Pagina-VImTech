import { Button } from '@/components/ui/button'
import { MessageCircle, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Entre em Contato
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha a melhor forma de contato
            abaixo para solicitar orçamentos ou tirar dúvidas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-3 w-full sm:w-auto min-w-[240px]"
          >
            <a
              href="http://wa.me/5511982376474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-8 h-8" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white hover:bg-slate-50 text-secondary border-2 border-secondary/20 hover:border-primary hover:text-primary font-semibold text-lg px-8 py-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-3 w-full sm:w-auto min-w-[240px]"
          >
            <a href="mailto:reginaldo.agoncalves@gmail.com">
              <Mail className="w-8 h-8" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
