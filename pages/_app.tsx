import React, { useEffect } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli } from '@wagmi/core'
import { publicProvider } from 'wagmi/providers/public'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Sofamon Webapp',
  chains,
})

const demoAppInfo = {
  appName: 'Sofamon Webapp',
}

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps } : AppProps) {
  const [firstRender, setFirstRender] = React.useState(false)

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'))
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({
          behavior: 'smooth',
        })
      })
    })
  })

  React.useEffect(() => {
    setFirstRender(true)
  }, [])

  if (!firstRender) {
    return <></>
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        showRecentTransactions={true}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp

