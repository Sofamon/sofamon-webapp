import React, { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import AccountContext from "@/account/AccountContext";

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
  const [address, setAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setFirstRender(true);
  }, []);

  if (!firstRender) {
    return <></>;
  }

  return (
    <AccountContext.Provider value={{ address, setAddress, isConnected, setIsConnected }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AccountContext.Provider>
  );
}

export default MyApp;
