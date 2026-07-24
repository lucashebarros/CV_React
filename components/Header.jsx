"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto"
    >
      <div className="bg-white/15 backdrop-blur-md border border-white/30 shadow-lg rounded-full px-6 md:px-10 py-3 font-dosis">
        
        {/* --- LAYOUT DESKTOP (Espaçamento simétrico e uniforme) --- */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold tracking-wide">
          <a href="#about" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">Quem sou</a>
          <a href="#projects" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">Projetos</a>

          {/* Logo Centralizada */}
          <div className="flex-shrink-0 px-2">
            <img src="/Picture4.png" alt="Lucas BI" className="h-9 object-contain drop-shadow-md" />
          </div>

          <a href="#diferenciais" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">Diferenciais</a>
          <a href="#contato" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">Contato</a>
        </div>

        {/* --- LAYOUT MOBILE --- */}
        <div className="flex md:hidden items-center justify-between w-full">
          <img src="/Picture4.png" alt="Lucas BI" className="h-9 object-contain drop-shadow-md" />
          <button className="text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-[#1a1a2e]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4 text-center text-white font-dosis md:hidden"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>Quem sou</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projetos</a>
          <a href="#diferenciais" onClick={() => setIsOpen(false)}>Diferenciais</a>
          <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
        </motion.div>
      )}
    </motion.header>
  )
}