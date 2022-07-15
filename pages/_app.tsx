import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Body from '../components/Body'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav/>
      <Body>
        <Component {...pageProps} />
      </Body>
    </div>
  )
}

export default MyApp
