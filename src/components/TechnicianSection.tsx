import { Card, CardContent } from '@/components/ui/card'

export function TechnicianSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre o Técnico
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md border-none shadow-elevation rounded-2xl overflow-hidden bg-white">
            <CardContent className="flex flex-col items-center p-8 md:p-10">
              <div className="mb-6 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/10 rounded-full flex items-center justify-center text-accent text-4xl font-bold border-4 border-white shadow-lg">
                  RG
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Reginaldo Gonçalves
              </h3>
              <p className="text-accent font-medium mb-4">
                Especialista em Minilabs
              </p>

              <p className="text-center text-muted-foreground leading-relaxed">
                "Técnico especialista com mais de 15 anos de experiência em
                manutenção de minilabs. Dedicado a oferecer soluções rápidas e
                precisas para manter seu negócio funcionando."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
