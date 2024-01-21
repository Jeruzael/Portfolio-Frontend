'use client';
import { KoHo } from 'next/font/google'
import store from './store'
import { Provider } from 'react-redux'
import './globals.css'
import { 
  ResponsiveContainer,
  ResponsiveHeader,
  ResponsiveFooter,
  ResponsiveBody
} from '@/components/components'
import Link from 'next/link'

const Koho = KoHo({
  subsets: ['latin'],
  display: 'swap',
  weight: '200',
});

/*export const metadata = {
  title: 'Jeruzael',
  description: 'Jeruzael\'s Portfolio',
}*/

export default function RootLayout({ children }) {  
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={Koho.className}>
              <ResponsiveContainer>
                  <ResponsiveHeader logo={'Jeruzael'}>
                      <Link href={'/projects'}>Projects</Link>
                      <Link href={'/contact'}>Contact</Link>
                      <Link href={'/resume'}>Resume</Link>                    
                  </ResponsiveHeader>
                  <ResponsiveBody>
                      {children}
                  </ResponsiveBody>                
              </ResponsiveContainer>
              <ResponsiveFooter>
                  <h1>Footer</h1>
              </ResponsiveFooter>
        </body>
      </html>
    </Provider>    
  )
}
