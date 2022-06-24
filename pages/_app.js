import { SessionProvider } from "next-auth/react"
import './styles.css'

function MyApp({ Component, pageProps, session }) {
 
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp