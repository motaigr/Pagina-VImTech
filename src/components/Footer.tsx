import { Phone, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1A202C] text-[#E2E8F0] py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-white">VimTech</h3>
            <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
              Especialistas em manutenção e calibração de minilabs. Qualidade e
              precisão para o seu negócio.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Telefone"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            © 2025 VimTech - Técnico de Minilab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
