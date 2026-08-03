"use client"
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.p1Title,
      desc: t.projects.p1Desc,
      link: "#",
      tags: ["Arquitetura de Dados", "Automação", "Compliance"]
    },
    {
      title: t.projects.p2Title,
      desc: t.projects.p2Desc,
      link: "https://app.powerbi.com/view?r=eyJrIjoiYzQ5YTgzYWMtYjJkZi00N2U3LWIwNTYtNGYwOWI4NzIxYWY1IiwidCI6ImNjMmE5NWVhLTMzNWMtNDQzYi04NDQzLWU5YWQzM2ZmOWUwNCJ9",
      tags: ["Power BI", "DAX", "Modelagem"]
    },
    {
      title: t.projects.p3Title,
      desc: t.projects.p3Desc,
      link: "https://monitamento-veiculo.vercel.app",
      tags: ["Logística", "APIs", "Tempo Real"]
    },
    {
      title: t.projects.p4Title,
      desc: t.projects.p4Desc,
      link: "https://estoqueprojectpy.streamlit.app",
      tags: ["Python", "Streamlit", "Análise de Dados"]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-dosis"
        >
          {t.projects.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#ff4c4c]">{t.projects.highlight}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900/40 rounded-3xl p-8 border border-white/5 hover:border-[#6c63ff]/30 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-dosis group-hover:text-[#6c63ff] transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#6c63ff] transition-colors text-xl bg-white/5 p-2 rounded-full"
                  >
                    <FiExternalLink />
                  </a>
                </div>
                <p className="text-slate-400 font-light mb-6 leading-relaxed">
                  {project.desc}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-white/5 text-slate-300 text-sm px-3 py-1 rounded-full border border-white/10 font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
