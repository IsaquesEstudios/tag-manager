import '../styles/globals.css'
import type { AppProps } from 'next/app'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'




function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-PPCF5MV'
    }

    TagManager.initialize(tagManagerArgs)

  }, [])

  return <Component {...pageProps} />
}

export default MyApp
