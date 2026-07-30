"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, setLang, t } = useLanguage() // Puxando o motor de tradução

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto"
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-full px-6 md:px-10 py-3 font-dosis flex items-center justify-between">
        
        {/* --- LAYOUT DESKTOP --- */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold tracking-wide">
          <a href="#about" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">{t.nav.about}</a>
          <a href="#projects" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">{t.nav.proj}</a>

          <div className="flex-shrink-0 px-2">
            <img src="/Picture4.png" alt="Lucas BI" className="h-9 object-contain drop-shadow-md" />
          </div>

          <a href="#diferenciais" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">{t.nav.diff}</a>
          <a href="#contato" className="hover:text-[#6c63ff] transition-colors whitespace-nowrap">{t.nav.contact}</a>
          
          {/* Botões de Troca de Idioma (Desktop) */}
          <div className="flex items-center gap-3 border-l border-white/20 pl-6 ml-2 text-sm font-bold">
            <button onClick={() => setLang('pt')} className={`transition-colors ${lang === 'pt' ? 'text-[#6c63ff]' : 'text-slate-400 hover:text-white'}`}>PT</button>
            <button onClick={() => setLang('en')} className={`transition-colors ${lang === 'en' ? 'text-[#6c63ff]' : 'text-slate-400 hover:text-white'}`}>EN</button>
            <button onClick={() => setLang('es')} className={`transition-colors ${lang === 'es' ? 'text-[#6c63ff]' : 'text-slate-400 hover:text-white'}`}>ES</button>
          </div>
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
          className="absolute top-16 left-0 w-full bg-[#0a0f1c]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4 text-center text-white font-dosis md:hidden"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>{t.nav.about}</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>{t.nav.proj}</a>
          <a href="#diferenciais" onClick={() => setIsOpen(false)}>{t.nav.diff}</a>
          <a href="#contato" onClick={() => setIsOpen(false)}>{t.nav.contact}</a>
          
          {/* Botões de Troca de Idioma (Mobile) */}
          <div className="flex justify-center gap-6 border-t border-white/10 pt-4 mt-2 font-bold">
            <button onClick={() => { setLang('pt'); setIsOpen(false) }} className={lang === 'pt' ? 'text-[#6c63ff]' : 'text-slate-400'}>PT</button>
            <button onClick={() => { setLang('en'); setIsOpen(false) }} className={lang === 'en' ? 'text-[#6c63ff]' : 'text-slate-400'}>EN</button>
            <button onClick={() => { setLang('es'); setIsOpen(false) }} className={lang === 'es' ? 'text-[#6c63ff]' : 'text-slate-400'}>ES</button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
