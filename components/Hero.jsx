"use client"
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaViber } from 'react-icons/fa'

export default function Hero() {
  return (
    <section 
      style={{ backgroundColor: '#020617' }} 
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden text-white"
    >      
      {/* 1. Imagem de Fundo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/Untitled.png')" }}
      ></div>

      {/* 2. EFEITO DE FUMAÇA / NÉVOA EM MOVIMENTO CONSTANTE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Fumaça 1 - Superior Esquerda (Movimento em diagonal e rotação) */}
        <motion.div 
          animate={{ 
            x: [0, 120, -60, 0],
            y: [0, 80, -100, 0],
            scale: [1, 1.3, 0.85, 1],
            rotate: [0, 90, -90, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-indigo-600/35 rounded-full blur-[130px] md:blur-[160px]"
        ></motion.div>

        {/* Fumaça 2 - Inferior Direita (Movimento de expansão e recuo) */}
        <motion.div 
          animate={{ 
            x: [0, -140, 80, 0],
            y: [0, -90, 120, 0],
            scale: [1, 0.8, 1.25, 1],
            rotate: [0, -60, 60, 0]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-rose-500/25 rounded-full blur-[130px] md:blur-[160px]"
        ></motion.div>

        {/* Fumaça 3 - Centralizada Flutuante (Preenche o meio flutuando sutilmente) */}
        <motion.div 
          animate={{ 
            x: [-50, 50, -50],
            y: [30, -30, 30],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/4 left-1/3 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-600/20 rounded-full blur-[140px] md:blur-[180px]"
        ></motion.div>

      </div>

      {/* 3. Gradient Overlay */}
      <div 
        style={{ backgroundImage: 'linear-gradient(to bottom, transparent, rgba(2, 6, 23, 0.4), #020617)' }}
        className="absolute inset-0 z-0"
      ></div>

      {/* 4. Ícones Sociais Flutuantes */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 hidden md:flex">
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/lucas-h-barros/" },
          { icon: <FaGithub />, link: "https://github.com/Lucshb" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/lucasdsbarros/" },
          { icon: <FaViber />, link: "tel:+5519992630596" }
        ].map((item, index) => (
          <motion.a 
            key={index}
            href={item.link} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, x: 6 }}
            className="text-slate-300 text-2xl hover:text-[#6c63ff] transition-colors"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* 5. Conteúdo Central */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 font-dosis mt-12 px-6 max-w-4xl"
      >
        <span className="block text-xl md:text-2xl text-slate-300 mb-3 tracking-wide font-light">
          Transformando dados em insights poderosos para
        </span>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#6c63ff] via-purple-400 to-[#ff4c4c] bg-clip-text text-transparent drop-shadow-2xl mb-6 tracking-tight">
          o futuro
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wide">
          Especialista em Business Intelligence
        </p>
      </motion.div>
    </section>
  )
}