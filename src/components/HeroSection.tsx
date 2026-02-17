import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }))

  // Direct image links provided by user to resolve fetch errors
  const images = [
    'https://i.ibb.co/ks1qtc4T/Noritsu-2.png',
    'https://i.ibb.co/21ZMwDPB/Noritsu.png',
  ]

  return (
    <section
      id="hero-section"
      className="relative w-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <div className="w-full max-w-5xl mb-8 md:mb-12 animate-fade-in-down">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-2">
                    <div
                      className={cn(
                        'relative w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-4 border-white/20 bg-black/10',
                        'aspect-[4/3] md:aspect-video',
                      )}
                    >
                      <img
                        src={src}
                        alt={`Minilab machine ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <p className="text-lg md:text-xl text-blue-50 max-w-2xl mb-8 font-medium leading-relaxed animate-fade-in-up">
          Especialista em manutenção, calibração e reparo de minilabs Noritsu &
          Fuji.
          <br className="hidden md:block" />
          Precisão técnica e suporte profissional.
        </p>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/2 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
    </section>
  )
}
