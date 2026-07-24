"use client"
import { FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-[#1a1a2e] text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Logo / Direitos */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <img src="/Picture4.png" alt="Logo Lucas BI" className="h-12 opacity-80 mb-4 grayscale brightness-200" />
          <p className="text-sm text-slate-500 font-light">
            Transformando dados complexos em insights práticos.
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#6c63ff] text-xl font-bold font-dosis mb-6">Conecte-se</h3>
          <ul className="space-y-4">
            <li>
              <a href="https://www.linkedin.com/in/lucas-h-barros/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#6c63ff] transition-colors">
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Lucshb" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#6c63ff] transition-colors">
                <FaGithub className="text-lg" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lucasdsbarros/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#6c63ff] transition-colors">
                <FaInstagram className="text-lg" /> Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#ff4c4c] text-xl font-bold font-dosis mb-6">Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaPhone className="text-lg text-[#ff4c4c]" /> 
              <span>(19) 99263-0596</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-[#ff4c4c]" /> 
              <a href="mailto:barroslucash@gmail.com" className="hover:text-white transition-colors">barroslucash@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-500 font-light tracking-wide">
        &copy; {currentYear} Lucas Henrique de Barros. Todos os direitos reservados.
      </div>
    </footer>
  )
}