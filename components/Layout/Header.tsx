import Link from "next/link";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import detectExtension from "../../libs/detectExtension";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image";
import { Button, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const chromeExtensionId = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID as string;
const Header = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [logoDimension, setLogoDimension] = useState([60, 220]);
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
    if (header) {
      if (
        (header.classList.contains("sticky") && scrollTop >= 111.25) ||
        (!header.classList.contains("sticky") && scrollTop >= 130)
      ) {
        setLogoDimension([40, 160]);
        header.classList.add("bg-white");
        header.classList.add("sticky");
      } else {
        setLogoDimension([60, 220]);
        header.classList.remove("bg-white");
        header.classList.remove("sticky");
      }
    }
  };

  return (
    <>
      <center className="header z-50 top-0 transition-all ease-out duration-75">
        <header
          className={
            "flex items-center justify-between " +
            (logoDimension[0] === 27 ? "py-6" : "py-8")
          }
        >
          <Link legacyBehavior href="/" passHref>
            <a className="px-3 pl-5 md:pl-3 lg:pl-3 xl:pl-3">
              <Logo height={logoDimension[0]} width={logoDimension[1]} />
            </a>
          </Link>
          <div className="flex gap-4 font-bold md:hidden lg:hidden xl:hidden mr-4">
            {isConnected ? (
              <>
                <ConnectButton.Custom>
                  {({ openAccountModal }) => {
                    return (
                      <Image
                        src="/wallet-icon.svg"
                        alt="wallet"
                        height={26}
                        width={26}
                        onClick={openAccountModal}
                      />
                    );
                  }}
                </ConnectButton.Custom>
              </>
            ) : (
              <div className="connect-button h-min ml-2 whitespace-nowrap">
                <ConnectButton />
              </div>
            )}
            <Image
              src="/hamburger-icon.svg"
              alt="menu"
              onClick={() => setIsMobileMenuActive(true)}
              height={26}
              width={26}
            />
            {isMobileMenuActive && (
              <Flex
                w="100vw"
                display="flex"
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
              >
                <Flex
                  align="center"
                  className="border-b-gray-400 border-b mb-4"
                >
                  <div
                    className="border-gray-400 border w-10 h-10 flex justify-center items-center rounded-3xl m-2"
                    onClick={() => setIsMobileMenuActive(false)}
                  >
                    <CloseIcon boxSize={4} />
                  </div>
                  <span
                    className="uppercase text-2xl"
                    style={{ width: "72vw" }}
                  >
                    Navigation
                  </span>
                </Flex>
                <Flex flexDir="column" mx={4}>
                  <Link href="/" passHref>
                    <Button
                      onClick={() => setIsMobileMenuActive(false)}
                      as="a"
                      width="min-content"
                      variant="ghost"
                      aria-label="Home"
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/mint?id=1" passHref>
                    <Button
                      onClick={() => setIsMobileMenuActive(false)}
                      as="a"
                      width="min-content"
                      variant="ghost"
                      aria-label="Mint"
                    >
                      Mint
                    </Button>
                  </Link>

                  <Link href="/inventory" passHref>
                    <Button
                      onClick={() => setIsMobileMenuActive(false)}
                      as="a"
                      width="min-content"
                      variant="ghost"
                      aria-label="Inventory"
                    >
                      Inventory
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            )}
          </div>
          <div className="hidden md:flex lg:flex xl:flex gap-10 font-bold text-xl items-center">
            {!isExtensionInstalled ? (
              <Link
                href="https://chartreuse-look-9e2.notion.site/Install-Sofamon-Extension-5e53b6c99f9848beb5ab409b731b5c38"
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
