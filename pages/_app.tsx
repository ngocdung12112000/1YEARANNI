import '@/styles/globals.css'
import '@/styles/btnstart.css'
import '@/styles/slide.css'

import type { ReactElement, ReactNode } from 'react'
import GlobalLayout from '../components/GlobalLayout'
import { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}