"use client"
import { motion } from 'framer-motion'
import { FaChartBar, FaDatabase, FaCloud, FaCode, FaLayerGroup } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const skills = [
    { icon: <FaChartBar />, title: t.skills.bi, desc: "Power BI, QlikSense, Google Looker" },
    { icon: <FaDatabase />, title: t.skills.db, desc: "SQL Server, MySQL, Postgres, Oracle" },
    { icon: <FaCloud />, title: t.skills.cloud, desc: "Azure, AWS, Google Cloud" },
    { icon: <FaCode />, title: t.skills.prog, desc: "Python, Next.js, HTML, CSS" },
    { icon: <FaLayerGroup />, title: t.skills.dw, desc: t.skills.dwDesc },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-dosis uppercase tracking-wider"
        >
          {t.skills.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#ff4c4c]">{t.skills.highlight}</span>
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 shadow-lg group hover:border-[#6c63ff]/30 hover:shadow-[#6c63ff]/10 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/10 to-[#ff4c4c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-5xl mb-6 text-slate-300 group-hover:text-[#6c63ff] transition-colors duration-300 relative z-10">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 font-dosis relative z-10">{skill.title}</h3>
              <p className="text-slate-400 font-light relative z-10">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
