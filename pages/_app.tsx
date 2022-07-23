import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Body from '../components/Body'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav/>
      <Body>
        <Component {...pageProps} />
      </Body>
    </>
  )
}

export default MyApp
