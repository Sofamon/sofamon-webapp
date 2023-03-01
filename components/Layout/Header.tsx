import Link from "next/link";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import detectExtension from "../../libs/detectExtension";
import useAccount from "../../account/useAccount";
import Image from "next/image";
import { CloseIcon } from "@chakra-ui/icons";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import Web3 from "web3";
import SignClient from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const chromeExtensionId = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID as string;
const Header = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [logoDimension, setLogoDimension] = useState([60, 220]);
  const { address, isConnected, login, logout } = useAccount();
  const [web3Auth, setWeb3Auth] = useState<Web3Auth>();
  const web3Modal = new Web3Modal({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    walletConnectVersion: 2,
  });
  const [signClient, setSignClient] = useState<SignClient | undefined>(
    undefined
  );
  const [session, setSession] = useState<any>();

  const initWeb3Modal = async () => {
    const client = await SignClient.init({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    });
    setSignClient(client);
  };

  const initWeb3Auth = async () => {
    try {
      const web3Auth = new Web3Auth({
        clientId:
          "BBdkTX2TIsbvUT32R6xivJL_fkk6Fnaepto2R2jjpex0UKZFGhruEw9AAxcuC5u4FU1y0YSUODil2PVwBqLQwek",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x5",
        },
      });
      await web3Auth.initModal();
      setWeb3Auth(web3Auth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initWeb3Auth();
    initWeb3Modal();
  }, []);

  useEffect(() => {
    if (web3Auth) {
      web3Auth
        .getUserInfo()
        .then(async () => {
          const web3 = new Web3(web3Auth.provider as any);
          const wallets = await web3.eth.getAccounts();
          login(wallets[0]);
        })
        .catch((error) => console.error(error));
    }
    // TODO: function to check if user has already signed in with web3modal...
    if (signClient) {
      (async () => {
        console.log(signClient.pairing);
      })();
    }
  }, [signClient, web3Auth]);

  const web3ModalLogin = async () => {
    if (signClient) {
      const namespaces = {
        eip155: {
          methods: ["eth_sign"],
          chains: ["eip155:1"],
          events: ["accountsChanged"],
        },
      };
      const { uri, approval } = await signClient.connect({
        requiredNamespaces: namespaces,
      });
      if (uri) {
        await web3Modal.openModal({
          uri,
          standaloneChains: namespaces.eip155.chains,
        });
        const session = await approval();
        login(session.namespaces.eip155.accounts[0].slice(9));
        setSession(session);
        web3Modal.closeModal();
      }
    }
  };

  const web3AuthLogin = async () => {
    try {
      if (!web3Auth) {
        return;
      }
      const web3AuthProvider = await web3Auth.connect();
      const web3 = new Web3(web3AuthProvider as any);
      const wallets = await web3.eth.getAccounts();
      login(wallets[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const walletLogout = async () => {
    try {
      if (web3Auth) {
        const web3AuthProvider = await web3Auth.logout();
      }
    } catch (error) {
      console.log(error);
    }
    try {
      if (signClient) {
        signClient.disconnect({
          topic: session.topic as string,
          reason: { code: 6000, message: "User disconnected" },
        });
      }
    } catch (error) {
      console.log(error);
    }
    logout();
  };

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

  const ConnectButton = () => {
    return (
      <>
        {isConnected ? (
          <Button
            style={{ backgroundColor: "red", color: "white", width: 200 }}
            onClick={walletLogout}
          >
            Disconnect Wallet
          </Button>
        ) : (
          <Popover placement="bottom" isLazy>
            <PopoverTrigger>
              <Button
                rightIcon={<ChevronDownIcon />}
                colorScheme="pink"
                w="fit-content"
              >
                Connect Wallet
              </Button>
            </PopoverTrigger>
            <PopoverContent _focus={{ boxShadown: "none" }}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold">Connect Wallet</PopoverHeader>
              <PopoverBody w="full">
                <Tabs isLazy colorScheme="green">
                  <TabList>
                    <Tab
                      _focus={{ boxShadow: "none" }}
                      fontSize="xs"
                      fontWeight="bold"
                      w="50%"
                    >
                      Connect with Web3Auth
                    </Tab>
                    <Tab
                      _focus={{ boxShadow: "none" }}
                      fontSize="xs"
                      fontWeight="bold"
                      w="50%"
                    >
                      Connect with WalletConnect
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Button
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          width: 200,
                        }}
                        onClick={web3AuthLogin}
                      >
                        Web3Auth
                      </Button>
                    </TabPanel>
                    <TabPanel>
                      <Button
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          width: 200,
                        }}
                        onClick={web3ModalLogin}
                      >
                        WalletConnect
                      </Button>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </>
    );
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
              <ConnectButton />
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
            ) : null}
            <ConnectButton />
            <div className="connect-button h-min ml-2"></div>
          </div>
        </header>
      </center>
    </>
  );
};

export default Header;
