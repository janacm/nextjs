import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initOrm } from '../../backend/src/database'

function MyApp({ Component, pageProps }: AppProps) {
  initOrm()
  return <Component {...pageProps} />
}

export default MyApp