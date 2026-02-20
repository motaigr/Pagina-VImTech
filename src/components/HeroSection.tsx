import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  const images = [
    'https://i.ibb.co/4g5X3v5h/Noritsu-1.png',
    'https://i.ibb.co/ks1qtc4T/Noritsu-2.png',
  ]

  return (
    <section
      id="hero-section"
      className="relative w-full bg-gradient-to-br from-secondary to-[#001A33] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <div className="w-full max-w-5xl mb-8 md:mb-10 animate-fade-in-down flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="relative inline-block w-fit max-w-full mx-auto">
                    <img
                      src={src}
                      alt={`Noritsu Minilab Machine ${index + 1}`}
                      className="w-auto h-auto max-w-full max-h-[45vh] md:max-h-[500px] lg:max-h-[550px] shadow-2xl border-4 border-white/30 rounded-xl"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <p className="text-lg md:text-xl text-blue-50 max-w-2xl font-medium leading-relaxed animate-fade-in-up">
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
          className="absolute top-1/2 right-0 w-64 h-64 bg-primary rounded-full blur-3xl animate-float opacity-30"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
    </section>
  )
}
