import { Roboto, Dosis } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-roboto' })
const dosis = Dosis({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-dosis' })

export const metadata = {
  title: 'Lucas Business Intelligence',
  description: 'Transformando dados em insights poderosos para o futuro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* O fundo de toda a página agora é dark de fábrica */}
      <body className={`${roboto.variable} ${dosis.variable} font-sans bg-slate-950 text-slate-200`}>
        {children}
      </body>
    </html>
  )
}