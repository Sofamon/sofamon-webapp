import React, { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "@wagmi/core";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { createClient as createUrqlClient, Provider as UrqlProvider} from "urql";

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Sofamon Webapp",
  chains,
});

const demoAppInfo = {
  appName: "Sofamon Webapp",
};

const url = 'https://api.studio.thegraph.com/query/41437/sofamon/v0.0.1';
const urlqlClient = createUrqlClient({ url });

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [firstRender, setFirstRender] = React.useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e: any) {
        const target = document.querySelector(e.target.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  React.useEffect(() => {
    setFirstRender(true);
  }, []);

  if (!firstRender) {
    return <></>;
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        showRecentTransactions={true}
      >
        <UrqlProvider value={urlqlClient}>
          <ChakraProvider>
            <Head>
              <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
          </ChakraProvider>
        </UrqlProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
