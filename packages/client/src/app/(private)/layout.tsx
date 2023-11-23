import { NavLinkProps } from '@/components/Navigation/NavLink'
import { Navbar } from '@/components/Navigation/Navbar'
import { Footer } from '@/components/UI/Footer'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { verifyAuthToken } from '@/utils/verifyAuthToken'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SystemRank',
  description: 'Crie sua conta e explore nossa lista de sistemas operacionais',
}

export default async function RootPrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = await verifyAuthToken()

  if (!isAuthenticated) {
    redirect('/auth/signin')
  }

  const navLinks: NavLinkProps[] = [
    { name: "Home", to: '/' },
    { name: "Explorar", to: "/explore" }
  ]

  return (
    <html lang="pt">
      <body className={`${inter.className} bg-brand-blue-900 text-brand-gray-200 scrollbar-thin scrollbar-thumb-brand-blue-700 scrollbar-track-brand-gray-900`}>
        <AuthContextProvider>
          <Navbar navLinks={navLinks} />

          <main className='min-h-screen'>
            {children}
          </main>

          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
