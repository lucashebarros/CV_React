"use client"
import { createContext, useState, useContext } from 'react'

// Cria o contexto que vai "abraçar" o seu site
const LanguageContext = createContext()

// Dicionário com todas as traduções
export const dictionaries = {
  pt: {
    nav: { about: "Quem sou", proj: "Projetos", diff: "Diferenciais", contact: "Contato" },
    hero: { prefix: "Transformando dados em insights poderosos para", title: "o futuro", subtitle: "Especialista em Business Intelligence" }
  },
  en: {
    nav: { about: "About Me", proj: "Projects", diff: "Differentials", contact: "Contact" },
    hero: { prefix: "Transforming data into powerful insights for", title: "the future", subtitle: "Business Intelligence Specialist" }
  },
  es: {
    nav: { about: "Sobre Mí", proj: "Proyectos", diff: "Diferenciales", contact: "Contacto" },
    hero: { prefix: "Transformando datos en insights poderosos para", title: "el futuro", subtitle: "Especialista en Business Intelligence" }
  }
}

// Provedor que gerencia qual idioma está ativo
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt') // 'pt' é o idioma padrão
  const t = dictionaries[lang] // 't' de translation (tradução)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook personalizado para usar nos componentes
export const useLanguage = () => useContext(LanguageContext)
