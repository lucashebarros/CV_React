import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-slate-950 overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </main>
  )
}