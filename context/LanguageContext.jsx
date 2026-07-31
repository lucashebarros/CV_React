"use client"
import { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()

export const dictionaries = {
  pt: {
    nav: { about: "Quem sou", proj: "Projetos", diff: "Diferenciais", contact: "Contato" },
    hero: { prefix: "Transformando dados em insights poderosos para", title: "o futuro", subtitle: "Especialista em Business Intelligence" },
    about: {
      title: "Sobre Mim",
      quote: "Nosso verdadeiro trabalho com dados é entender melhor as histórias humanas, para que possamos servir melhor às pessoas.",
      p1: "Olá, sou Lucas Henrique de Barros, especialista em Business Intelligence e arquitetura de dados. Ao longo da minha carreira, desenvolvi soluções estratégicas para otimização de processos logísticos, financeiros e de vendas.",
      p2: "Com experiência prática em automação de fluxos com Python, modelagem em SQL e implementação de dashboards dinâmicos no Power BI, meu foco é transformar dados complexos em insights claros que guiam a alta gestão rumo às melhores decisões."
    },
    skills: {
      title: "Minhas Skills e",
      highlight: "Power Up's",
      bi: "Business Intelligence",
      db: "Bancos de Dados",
      cloud: "Cloud",
      prog: "Programação",
      dw: "Data Warehouse",
      dwDesc: "Desenvolvimento e Manutenção de Data Lakes"
    },
    projects: {
      title: "Meus",
      highlight: "Projetos",
      p1Title: "PrivaSense (Micro-SaaS)",
      p1Desc: "Plataforma para discovery automatizado de dados e ferramentas de adequação à LGPD para empresas.",
      p2Title: "Dashboard de Vendas",
      p2Desc: "Visualização interativa e acompanhamento de KPIs estratégicos de faturamento.",
      p3Title: "Rastreamento Logístico",
      p3Desc: "Monitoramento de veículos e eficiência operacional de frota em tempo real.",
      p4Title: "Gestão de Estoque",
      p4Desc: "Sistema dinâmico para controle de inventário e análise de dados de reposição."
    },
    education: {
      academicTitle: "Formação Acadêmica",
      diffTitle: "Diferenciais",
      diff1Title: "Metodologias Ágeis",
      diff1Desc: "Planejamentos otimizados que dinamizam o fluxo de produção com interações constantes.",
      diff2Title: "Consultoria em BI",
      diff2Desc: "Criação de dashboards e relatórios analíticos sob medida para otimização de performance.",
      diff3Title: "Interfaces de Alta Fidelidade",
      diff3Desc: "Implementação focada na melhor experiência do usuário e na clareza dos dados."
    },
    footer: {
      tagline: "Transformando dados complexos em insights práticos.",
      connect: "Conecte-se",
      contact: "Contato",
      rights: "Todos os direitos reservados."
    }
  },

  en: {
    nav: { about: "About Me", proj: "Projects", diff: "Differentials", contact: "Contact" },
    hero: { prefix: "Transforming data into powerful insights for", title: "the future", subtitle: "Business Intelligence Specialist" },
    about: {
      title: "About Me",
      quote: "Our real work with data is to better understand human stories, so that we can better serve people.",
      p1: "Hello, I am Lucas Henrique de Barros, a Business Intelligence and data architecture specialist. Throughout my career, I have developed strategic solutions to optimize logistics, financial, and sales processes.",
      p2: "With practical experience in process automation with Python, SQL data modeling, and implementing dynamic dashboards in Power BI, my focus is to turn complex data into clear insights that guide executive decision-making."
    },
    skills: {
      title: "My Skills &",
      highlight: "Power Up's",
      bi: "Business Intelligence",
      db: "Databases",
      cloud: "Cloud",
      prog: "Programming",
      dw: "Data Warehouse",
      dwDesc: "Development and Maintenance of Data Lakes"
    },
    projects: {
      title: "My",
      highlight: "Projects",
      p1Title: "PrivaSense (Micro-SaaS)",
      p1Desc: "Platform for automated data discovery and LGPD compliance tools for businesses.",
      p2Title: "Sales Dashboard",
      p2Desc: "Interactive visualization and monitoring of strategic revenue KPIs.",
      p3Title: "Logistics Tracking",
      p3Desc: "Real-time vehicle monitoring and fleet operational efficiency.",
      p4Title: "Inventory Management",
      p4Desc: "Dynamic system for inventory control and replenishment data analysis."
    },
    education: {
      academicTitle: "Academic Background",
      diffTitle: "Differentials",
      diff1Title: "Agile Methodologies",
      diff1Desc: "Optimized planning that streamlines production workflow with continuous feedback.",
      diff2Title: "BI Consulting",
      diff2Desc: "Creation of tailored analytical dashboards and reports for performance optimization.",
      diff3Title: "High-Fidelity Interfaces",
      diff3Desc: "Implementation focused on the best user experience and data clarity."
    },
    footer: {
      tagline: "Transforming complex data into actionable insights.",
      connect: "Connect",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },

  es: {
    nav: { about: "Sobre Mí", proj: "Proyectos", diff: "Diferenciales", contact: "Contacto" },
    hero: { prefix: "Transformando datos en insights poderosos para", title: "el futuro", subtitle: "Especialista en Business Intelligence" },
    about: {
      title: "Sobre Mí",
      quote: "Nuestro verdadero trabajo con los datos es entender mejor las historias humanas para servir mejor a las personas.",
      p1: "Hola, soy Lucas Henrique de Barros, especialista en Business Intelligence y arquitectura de datos. A lo largo de mi carrera, he desarrollado soluciones estratégicas para optimizar procesos logísticos, financieros y de ventas.",
      p2: "Con experiencia práctica en automatización con Python, modelado en SQL e implementación de dashboards dinámicos en Power BI, mi enfoque es transformar datos complejos en información clara que guíe las decisiones ejecutivas."
    },
    skills: {
      title: "Mis Habilidades y",
      highlight: "Power Up's",
      bi: "Business Intelligence",
      db: "Bases de Datos",
      cloud: "Nube (Cloud)",
      prog: "Programación",
      dw: "Data Warehouse",
      dwDesc: "Desarrollo y Mantenimiento de Data Lakes"
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      p1Title: "PrivaSense (Micro-SaaS)",
      p1Desc: "Plataforma para el descubrimiento automatizado de datos y herramientas de cumplimiento de LGPD.",
      p2Title: "Dashboard de Ventas",
      p2Desc: "Visualización interactiva y seguimiento de KPIs estratégicos de facturación.",
      p3Title: "Rastreo Logístico",
      p3Desc: "Monitoreo de vehículos y eficiencia operativa de flota en tiempo real.",
      p4Title: "Gestión de Inventario",
      p4Desc: "Sistema dinámico para el control de inventario y análisis de datos de reposición."
    },
    education: {
      academicTitle: "Formación Académica",
      diffTitle: "Diferenciales",
      diff1Title: "Metodologías Ágiles",
      diff1Desc: "Planificación optimizada que agiliza el flujo de producción con interacciones constantes.",
      diff2Title: "Consultoría en BI",
      diff2Desc: "Creación de dashboards y reportes analíticos a medida para la optimización del rendimiento.",
      diff3Title: "Interfaces de Alta Fidelidad",
      diff3Desc: "Implementación enfocada en la mejor experiencia de usuario y claridad de datos."
    },
    footer: {
      tagline: "Transformando datos complejos en insights prácticos.",
      connect: "Conéctate",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const t = dictionaries[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
