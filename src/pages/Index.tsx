/* Home Page - VimTech Institutional Page */
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { TechnicianSection } from '@/components/TechnicianSection'
import { ContactSection } from '@/components/ContactSection'

const Index = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <TechnicianSection />
      <ContactSection />
    </div>
  )
}

export default Index
