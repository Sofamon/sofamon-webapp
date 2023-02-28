import React, { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector"
import { Web3Auth } from "@web3auth/modal";
import {
  ADAPTER_EVENTS,
  CONNECTED_EVENT_DATA,
  CHAIN_NAMESPACES,
} from "@web3auth/base";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { goerli } from "@wagmi/core";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Sofamon Webapp",
  chains,
});

// ================Web3Auth===================
// const web3AuthInstance = new Web3Auth({
//   clientId: "BBdkTX2TIsbvUT32R6xivJL_fkk6Fnaepto2R2jjpex0UKZFGhruEw9AAxcuC5u4FU1y0YSUODil2PVwBqLQwek",
//   chainConfig: {
//     chainNamespace: CHAIN_NAMESPACES.EIP155,
//     chainId: "0x5",
//   },
// });

// const connectors = [
//   new Web3AuthConnector({
//     chains,
//     options: {
//       web3AuthInstance,
//     },
//   })
// ];

const demoAppInfo = {
  appName: "Sofamon Webapp",
};

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
    <>
      <WagmiConfig client={wagmiClient}>
        {/* <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        showRecentTransactions={true}
      > */}
        <ChakraProvider>
          <Head>
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
        {/* </RainbowKitProvider> */}
      </WagmiConfig>
    </>
  );
}

export default MyApp;
