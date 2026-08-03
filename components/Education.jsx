"use client"
import { motion } from 'framer-motion'
import { FiCheckCircle, FiBookOpen } from 'react-icons/fi'
import { useLanguage } from '@/context/LanguageContext'

export default function Education() {
  const { t } = useLanguage()

  const educations = [
    { inst: "Anhanguera Educacional", curso: "Arquitetura de Dados, TI", ano: "Fev 2023 - Jul 2025" },
    { inst: "EBAC", curso: "Especialização, Analista de Dados", ano: "Fev 2023" },
    { inst: "Damásio Educacional", curso: "Pós-graduação em Privacidade e Proteção de Dados", ano: "Jan 2022 - Dez 2022" },
    { inst: "Universidade Metodista de Piracicaba", curso: "Bacharelado em Direito", ano: "2017 - 2021" },
  ]

  const diferenciais = [
    { title: t.education.diff1Title, desc: t.education.diff1Desc },
    { title: t.education.diff2Title, desc: t.education.diff2Desc },
    { title: t.education.diff3Title, desc: t.education.diff3Desc },
  ]

  return (
    <section id="diferenciais" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Coluna Educação */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-dosis flex items-center gap-3">
              <FiBookOpen className="text-[#6c63ff]" /> {t.education.academicTitle}
            </h3>
            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-6">
              {educations.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#6c63ff] ring-4 ring-slate-950"></div>
                  <h4 className="text-xl font-bold text-slate-200 font-dosis">{item.curso}</h4>
                  <p className="text-[#ff4c4c] font-medium text-sm mb-1">{item.inst}</p>
                  <p className="text-slate-500 font-light text-sm">{item.ano}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna Diferenciais */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-dosis flex items-center gap-3">
              <FiCheckCircle className="text-[#ff4c4c]" /> {t.education.diffTitle}
            </h3>
            <div className="space-y-6">
              {diferenciais.map((item, i) => (
                <div key={i} className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-[#ff4c4c]/30 transition-colors backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-slate-200 font-dosis mb-2">{item.title}</h4>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
