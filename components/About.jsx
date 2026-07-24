"use client"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 font-dosis"
        >
          Sobre Mim
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-xl mb-12 relative backdrop-blur-sm"
        >
          <div className="text-6xl text-[#6c63ff] absolute -top-6 left-6 opacity-40 font-serif">"</div>
          <p className="text-xl md:text-2xl italic text-slate-300 mb-4 relative z-10 font-light">
            Nosso verdadeiro trabalho com dados é entender melhor as histórias humanas, para que possamos servir melhor às pessoas.
          </p>
          <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm">— Daniel Burstein</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-left space-y-6 text-lg text-slate-400 leading-relaxed font-light"
        >
          <p>
            Olá, sou <span className="font-semibold text-[#6c63ff]">Lucas Henrique de Barros</span>, especialista em Business Intelligence e arquitetura de dados. Ao longo da minha carreira, desenvolvi soluções estratégicas para otimização de processos logísticos, financeiros e de vendas.
          </p>
          <p>
            Com experiência prática em automação de fluxos com Python, modelagem em SQL e implementação de dashboards dinâmicos no Power BI, meu foco é transformar dados complexos em insights claros que guiam a alta gestão rumo às melhores decisões.
          </p>
        </motion.div>
      </div>
    </section>
  )
}