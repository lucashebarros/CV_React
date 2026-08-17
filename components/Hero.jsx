"use client"
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaViber } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  // 1. LISTA DOS SEUS LOGOS
  // Coloque o nome exato dos arquivos PNG que você salvou na pasta "public"
  const companyLogos = [
    '/empresa1.png', 
    '/empresa2.png',
    '/empresa3.png',
    '/empresa4.png',
    '/empresa5.png',
  ]
  
  return (
    <section 
      style={{ backgroundColor: '#020617' }} 
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden text-white"
    >      
      {/* Imagem de Fundo base */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/Untitled.png')" }}
      ></div>

      {/* EFEITO DE FUMAÇA / NÉVOA EM MOVIMENTO CONSTANTE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 120, -60, 0], y: [0, 80, -100, 0], scale: [1, 1.3, 0.85, 1], rotate: [0, 90, -90, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-indigo-600/35 rounded-full blur-[130px] md:blur-[160px]"
        ></motion.div>

        <motion.div 
          animate={{ x: [0, -140, 80, 0], y: [0, -90, 120, 0], scale: [1, 0.8, 1.25, 1], rotate: [0, -60, 60, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-rose-500/25 rounded-full blur-[130px] md:blur-[160px]"
        ></motion.div>

        <motion.div 
          animate={{ x: [-50, 50, -50], y: [30, -30, 30], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/4 left-1/3 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-600/20 rounded-full blur-[140px] md:blur-[180px]"
        ></motion.div>
      </div>

      {/* Gradient Overlay */}
      <div 
        style={{ backgroundImage: 'linear-gradient(to bottom, transparent, rgba(2, 6, 23, 0.4), #020617)' }}
        className="absolute inset-0 z-0"
      ></div>

      {/* Ícones Sociais Flutuantes */}
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

      {/* Conteúdo Central */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 font-dosis mt-12 px-6 max-w-4xl"
      >
        <span className="block text-xl md:text-2xl text-slate-300 mb-3 tracking-wide font-light">
          {t.hero.prefix}
        </span>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#6c63ff] via-purple-400 to-[#ff4c4c] bg-clip-text text-transparent drop-shadow-2xl mb-6 tracking-tight">
          {t.hero.title}
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wide">
          {t.hero.subtitle}
        </p>
      </motion.div>

      {/* --- CARROSSEL INFINITO DE EMPRESAS --- */}
      <div className="absolute bottom-8 w-full overflow-hidden z-20 flex flex-col items-center">
        {/* Máscara de gradiente nas bordas para as logos "sumirem" suavemente nas laterais */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 w-full pointer-events-none"></div>
        
        {/* Caixa que se movimenta */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }} // Move de 0 a 50% do tamanho total (que é duplicado)
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-20 items-center w-max px-10"
        >
          {/* Nós duplicamos o array para que o loop seja infinito e sem cortes */}
          {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt="Empresa" 
              // A mágica do CSS: grayscale tira a cor, brightness-200 deixa branco, opacity-40 deixa sutil
              className="h-14 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </motion.div>
      </div>

    </section>
  )
}
