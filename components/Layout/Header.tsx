import Link from "next/link";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import detectExtension from "../../libs/detectExtension";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const chromeExtensionId: string = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID || "";
const Header = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  const [logoDimension, setLogoDimension] = useState([35, 120]);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected)
      chrome?.runtime?.sendMessage(chromeExtensionId, {
        connected: true,
        addr: address,
      });
    else
      chrome?.runtime?.sendMessage(chromeExtensionId, {
        connected: false,
        addr: "",
      });
  }, [isConnected, address]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  useEffect(() => {
    (async () => {
      const extensionInstalled = await detectExtension();
      setIsExtensionInstalled(extensionInstalled);
    })();
  }, []);

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector<HTMLElement>(".header");
    if (!header) {
      throw new ReferenceError(".header section not found.");
    }
    const scrollTop = window.scrollY;
    if (
      (header.classList.contains("sticky") && scrollTop >= 111.25) ||
      (!header.classList.contains("sticky") && scrollTop >= 130)
    ) {
      setLogoDimension([27, 90]);
      header.classList.add("bg-white");
      header.classList.add("sticky");
    } else {
      setLogoDimension([35, 120]);
      header.classList.remove("bg-white");
      header.classList.remove("sticky");
    }
  };

  return (
    <>
      <center className="header z-50 top-0 transition-all ease-out duration-200">
        <header
          className={
            "flex items-center justify-between " +
            (logoDimension[0] === 27 ? "py-6" : "py-8")
          }
          style={{ maxWidth: 1223 }}
        >
          <Link legacyBehavior href="/" passHref>
            <a className="px-3 pl-5 md:pl-3 lg:pl-3 xl:pl-3">
              <Logo height={logoDimension[0]} width={logoDimension[1]} />
            </a>
          </Link>
          <div className="flex gap-4 font-bold md:hidden lg:hidden xl:hidden mr-4">
            {isConnected ? (
              !isExtensionInstalled ? (
                <>
                  <Link
                    href="https://chrome.google.com/webstore/category/extensions"
                    className="hover:opacity-70"
                    target="_blank"
                  >
                    <span className="hover:opacity-70 cursor-pointer">
                      Install
                    </span>
                  </Link>

                  <Link href="/inventory">
                    <span className="hover:opacity-70 cursor-pointer">
                      Inventory
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/mint?id=1">
                    <span className="hover:opacity-70 cursor-pointer">
                      Mint
                    </span>
                  </Link>

                  <Link href="/inventory">
                    <span className="hover:opacity-70 cursor-pointer">
                      Inventory
                    </span>
                  </Link>
                </>
              )
            ) : (
              <div className="connect-button h-min ml-2">
                <ConnectButton />
              </div>
            )}
          </div>
          <div className="hidden md:flex lg:flex xl:flex gap-10 font-bold text-xl items-center">
            {!isExtensionInstalled ? (
              <Link
                href="https://chrome.google.com/webstore/category/extensions"
                className="hover:opacity-70"
                target="_blank"
              >
                <span className="hover:opacity-70 cursor-pointer">Install</span>
              </Link>
            ) : (
              <Link href="/mint?id=1">
                <span className="hover:opacity-70 cursor-pointer">Mint</span>
              </Link>
            )}
            {isConnected ? (
              <Link href="/inventory">
                <span className="hover:opacity-70 cursor-pointer">
                  Inventory
                </span>
              </Link>
            ) : (
              <> </>
            )}
            <div className="connect-button h-min ml-2">
              <ConnectButton />
            </div>
          </div>
        </header>
      </center>
    </>
  );
};

export default Header;
