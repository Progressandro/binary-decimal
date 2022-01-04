import type { AppProps } from 'next/app'
require('styles/global.less')

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
