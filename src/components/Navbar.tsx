import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(id)
    if (element) {
      // Offset for fixed header
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('top')}
          className={cn(
            'text-2xl font-bold transition-colors tracking-tight flex items-center gap-3',
            isScrolled ? 'text-primary' : 'text-white',
          )}
        >
          <img
            src="https://i.ibb.co/bg0ZPnTL/VIM-Tech-minilab-logo-sem-fundo.png"
            alt="VimTech Logo"
            className="h-8 md:h-9 w-auto object-contain"
          />
          VimTech
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services-section')}
            className={cn(
              'text-sm font-medium hover:opacity-80 transition-colors',
              isScrolled ? 'text-foreground' : 'text-white',
            )}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('contact-form')}
            className={cn(
              'text-sm font-medium hover:opacity-80 transition-colors',
              isScrolled ? 'text-foreground' : 'text-white',
            )}
          >
            Entre em Contato
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                'w-6 h-6',
                isScrolled ? 'text-foreground' : 'text-white',
              )}
            />
          ) : (
            <Menu
              className={cn(
                'w-6 h-6',
                isScrolled ? 'text-foreground' : 'text-white',
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 gap-2 animate-fade-in-down border-t">
          <button
            onClick={() => scrollToSection('services-section')}
            className="text-left text-foreground font-medium p-3 hover:bg-slate-50 rounded-md transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('contact-form')}
            className="text-left text-foreground font-medium p-3 hover:bg-slate-50 rounded-md transition-colors"
          >
            Entre em Contato
          </button>
        </div>
      )}
    </header>
  )
}
