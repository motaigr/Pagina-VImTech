import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <div className="w-full max-w-5xl mb-8 md:mb-12 animate-fade-in-down flex justify-center">
          <img
            src="https://i.ibb.co/4g5X3v5h/Noritsu-1.png"
            alt="Noritsu Minilab Machine"
            className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px]"
            loading="eager"
          />
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
