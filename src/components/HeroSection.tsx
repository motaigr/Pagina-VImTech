import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { MessageCircle, Mail } from 'lucide-react'

export function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }))

  const images = [
    'https://img.usecurling.com/p/800/500?q=industrial%20printer%20machine',
    'https://img.usecurling.com/p/800/500?q=photo%20lab%20equipment',
    'https://img.usecurling.com/p/800/500?q=printing%20technology',
    'https://img.usecurling.com/p/800/500?q=digital%20minilab',
  ]

  return (
    <section
      id="hero-section"
      className="relative w-full bg-gradient-to-br from-[hsl(224,64%,45%)] to-[hsl(193,100%,49%)] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg tracking-tight">
          VimTech
        </h1>

        <div className="w-full max-w-4xl mb-8 md:mb-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-4 border-white/20 aspect-video">
                      <img
                        src={src}
                        alt={`Minilab machine ${index + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-700 hover:scale-105 transform"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <p className="text-lg md:text-xl text-blue-50 max-w-2xl mb-8 font-medium leading-relaxed">
          Especialista em manutenção, calibração e reparo de minilabs Noritsu &
          Fuji.
          <br className="hidden md:block" />
          Precisão técnica e suporte profissional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <a
              href="http://wa.me/5511982376474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
          >
            <a href="mailto:reginaldo.agoncalves@gmail.com">
              <Mail className="w-6 h-6" />
              Email
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
