import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import characters from "../../characters";
import FlipCard, { BackCard, FrontCard } from "../Flipcard";
import { BigNumber } from "ethers";
import detectExtension from "../../libs/detectExtension";
import { useRouter } from "next/router";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import useAccount from "../../account/useAccount";
import { ethers } from "ethers";

const chromeExtensionId = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID as string;

const SwipeableNFT = ({
  currentCharacterId,
  setCurrentCharacterId,
  isExtensionInstalled,
}: {
  currentCharacterId: number;
  setCurrentCharacterId: Function;
  isExtensionInstalled: boolean;
}) => {
  const { address } = useAccount();
  const [isAlreadyMinted, setIsAlreadyMinted] = useState(false);
  const [txError, setTxError] = useState<Error | null>(null);
  const [mintError, setMintError] = useState<Error | null>(null);
  const [isMinted, setIsMinted] = useState(false);
  const [isMintStarted, setIsMintStarted] = useState(false);
  const [isMintLoading, setIsMintLoading] = useState(false);
  const [mintData, setMintData] = useState({ hash: "" });
  const [txData, setTxData] = useState({ to: "" });
  const tokenId: BigNumber = BigNumber.from(currentCharacterId.toString());
  const amount: BigNumber = BigNumber.from("1");
  const mintContract = async () => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const sofamon = new ethers.Contract(
      contractConfig.address,
      contractConfig.abi,
      signer
    );
    sofamon.mint(amount).then((result: any) => {
      setMintData(result);
      setTxData({ to: contractConfig.address });
      setIsMintStarted(true);
      setIsMintLoading(false);
    });
    setIsMintLoading(true);
  };

  useEffect(() => {
    window.Cypher({
      address: address,
      targetChainIdHex: "0x5", // Eth - Goreli
      requiredTokenBalance: 65,
      isTestnet: true,
      callBack: () => {
        console.log("callBack called");
      },
    });
  }, []);

  var clickedOnce = false;

  document.onclick = function (event) {
    if (event === undefined) event = window.event as any;
    var target = "target" in event ? event.target : (event as any).srcElement;
    if (target.outerText === "Exchange") {
      if (clickedOnce) {
        return;
      }
      clickedOnce = true;
      var popupBackground: any = document.getElementById("popupBackground");
      popupBackground.remove();
    }

    if (target.id == "popupBackground") {
      var popupBackground: any = document.getElementById("popupBackground");
      while (popupBackground) {
        popupBackground.remove();
        popupBackground = document.getElementById("popupBackground");
      }
    }
  };

  let updateInterval: any;
  useEffect(() => {
    const updateTxStatus = async () => {
      const response = await fetch(
        `https://api-goerli.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${mintData.hash}&apikey=6956YW7QNDVXDS9DZJH8ES3RX38IEHTRD4`
      );
      const res = await response.json();
      if (res.result.status === "1") {
        console.log(mintData.hash);
        setIsMintStarted(false);
        setIsMinted(true);
        clearInterval(updateInterval);
      }
      if (res.result.status === "0") {
        setIsMintStarted(false);
        setIsMinted(false);
        clearInterval(updateInterval);
      }
    };

    if (mintData.hash && isMintStarted) {
      updateTxStatus();
      updateInterval = setInterval(updateTxStatus, 2000);
    }
    return () => {
      clearInterval(updateInterval);
    };
  }, [mintData]);

  useEffect(() => {
    (window as any).Cypher({
      address: address,
      targetChainIdHex: "0x5", // Eth - Goreli
      requiredTokenBalance: 0,
      isTestnet: true,
      callBack: () => {
        console.log("callBack called");
      },
    });
  }, []);

  let popupCount = -1;

  document.onclick = function (event) {
    if (event === undefined) event = window.event as any;
    var target = "target" in event ? event.target : (event as any).srcElement;
    if (target.outerText === "Exchange") {
      if (document.querySelectorAll("[id='popupBackground']").length == 1) {
        return
      }
      if (popupCount == -1) {
        popupCount = document.querySelectorAll("[id='popupBackground']").length;
      }
      let popupBackground: any;
      for (let i = 0; i < popupCount - 1; i++) {
        popupBackground = document.getElementById("popupBackground");
        popupBackground.remove();
      }
    }

    if (target.id == "popupBackground") {
      var popupBackground: any = document.getElementById("popupBackground");
      while (popupBackground) {
        popupBackground.remove();
        popupBackground = document.getElementById("popupBackground");
      }
    }
  };

  const contractConfig = {
    address: characters[currentCharacterId > 0 ? currentCharacterId - 1 : 0]
      .contract as `0x${string}`,
    abi: characters[currentCharacterId > 0 ? currentCharacterId - 1 : 0].abi,
  };

  useEffect(() => {
    setIsAlreadyMinted(false);
    (async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Basic ${Buffer.from(
            ((process.env.INFURA_API_KEY as string) +
              ":" +
              process.env.INFURA_API_KEY_SECRET) as string
          ).toString("base64")}`,
        },
      };
      const response = await fetch(
        `https://nft.api.infura.io/networks/5/accounts/${address}/assets/nfts`, // NETWORK 5 FOR GOERLI
        options
      );
      const res = await response.json();
      for (let item of res?.assets) {
        if (
          String(item.contract).toLowerCase() ===
          (currentCharacterId > 0
            ? characters[currentCharacterId - 1].contract.toLowerCase()
            : "")
        ) {
          // setIsAlreadyMinted(true);
          break;
        }
      }
    })();
  }, [address, currentCharacterId]);

  return (
    <div
      className="flex items-center justify-center max-w-5xl mx-auto"
      style={{ height: "80vh" }}
    >
      <div
        className={
          "flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap items-center " +
          (currentCharacterId === 0 && "hidden")
        }
      >
        <div className="flex flex-nowrap w-min px-0 md:px-8 lg:px-8 xl:px-8 items-center ">
          <div
            className={
              "mr-3 flex-nowrap bg-gray-100 rounded-3xl px-2 h-6 outline-none " +
              (isMintStarted && "hidden")
            }
          >
            <button
              className="text-2xl text-gray-400 outline-none relative rotate-90"
              style={{
                width: 9,
                top: -6,
                left: 2,
              }}
              onClick={() => {
                window.history.replaceState(
                  null,
                  "",
                  `?id=${
                    currentCharacterId - 1 == 0
                      ? characters.length
                      : currentCharacterId - 1
                  }`
                );
                setTxError(null);
                setMintError(null);
                setCurrentCharacterId(
                  currentCharacterId - 1 == 0
                    ? characters.length
                    : currentCharacterId - 1
                );
              }}
            >
              <TriangleDownIcon boxSize={3} />
            </button>
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <FlipCard>
              <FrontCard isCardFlipped={isMinted}>
                {currentCharacterId > 0 && (
                  <Image
                    src={`/${characters[currentCharacterId - 1].id}.png`}
                    width="500"
                    height="500"
                    alt="Sofamon NFT"
                  />
                )}
              </FrontCard>
              <BackCard isCardFlipped={isMinted}>
                <div className="p-6">
                  {currentCharacterId > 0 && (
                    <Image
                      src={`/${characters[currentCharacterId - 1].id}.png`}
                      width="80"
                      height="80"
                      alt="Sofamon NFT"
                      className="rounded-lg"
                    />
                  )}
                  <h2
                    className="text-lg mt-6 text-white font-semibold mb-3"
                    style={{ marginBottom: 6 }}
                  >
                    NFT Minted!
                  </h2>
                  <p className="my-3">
                    Your NFT will show up in your wallet in the next few
                    minutes.
                  </p>
                  <div
                    className="mt-3 flex"
                    style={{ marginBottom: 2, fontSize: 15 }}
                  >
                    View on&nbsp;
                    <div className="text-inherit underline hover:text-inherit">
                      <Link
                        target="_blank"
                        href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}
                      >
                        Etherscan
                      </Link>
                    </div>
                  </div>
                  <div className="flex" style={{ marginTop: 2, fontSize: 15 }}>
                    View on&nbsp;
                    <div className="text-inherit underline hover:text-inherit">
                      <Link
                        className="text-inherit underline hover:text-inherit"
                        target="_blank"
                        href={`https://testnets.opensea.io/assets/goerli/${txData?.to}`}
                      >
                        Opensea
                      </Link>
                    </div>
                  </div>
                </div>
              </BackCard>
            </FlipCard>
          </div>
          <div
            className={
              "ml-3 bg-gray-100 rounded-3xl px-2 h-6 outline-none " +
              (isMintStarted && "hidden")
            }
          >
            <button
              className="text-2xl text-gray-400 outline-none relative rotate-90"
              style={{
                width: 9,
                top: -6,
                left: 4,
              }}
              onClick={() => {
                window.history.replaceState(
                  null,
                  "",
                  `?id=${(currentCharacterId % characters.length) + 1}`
                );
                setTxError(null);
                setMintError(null);
                setCurrentCharacterId(
                  (currentCharacterId % characters.length) + 1
                );
              }}
            >
              <TriangleUpIcon boxSize={3} />
            </button>
          </div>
        </div>
        <div className="flex-auto pl-0 md:pl-20 lg:pl-20 xl:pl-20">
          <div className="w-488" style={{ padding: "24px 24px 24px" }}>
            <h1
              className="text-2xl pb-6 capitalize font-extrabold"
              style={{
                paddingLeft: 6,
              }}
            >
              {currentCharacterId > 0
                ? characters[currentCharacterId - 1].name
                : ""}
            </h1>
            {/* <div className="connect-button">
              <ConnectButton />
            </div> */}
            <p className="mt-3 mb-0 text-red-500">
              {mintError && `Error: ${mintError.message}`}
              {txError && `Error: ${txError.message}`}
            </p>

            {!isExtensionInstalled && (
              <Link
                className="mt-3"
                href={"https://chrome.google.com/webstore/category/extensions"}
                target="_blank"
              >
                Install Extension for Free Mint
              </Link>
            )}
            {!isMinted && (
              <button
                style={{ borderWidth: "0.16rem" }}
                className={
                  "mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl " +
                  (!isExtensionInstalled && "hidden")
                }
                onClick={async () => {
                  if (!isMintLoading && !isMintStarted) await mintContract();
                }}
                disabled={isMintLoading || isMintStarted || isAlreadyMinted}
              >
                {isAlreadyMinted && "Already Minted"}
                {isMintLoading && !isAlreadyMinted && "Waiting for approval"}
                {isMintStarted && !isAlreadyMinted && "Minting..."}
                {!isMintLoading && !isAlreadyMinted && !isMintStarted && "Mint"}
              </button>
            )}
            {isMinted && (
              <Link href="/inventory">
                <button
                  style={{ borderWidth: "0.16rem" }}
                  className={
                    "mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl " +
                    (!isExtensionInstalled && "hidden")
                  }
                >
                  {"View in Inventory"}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Mint = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  const [currentCharacterId, setCurrentCharacterId] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const { isConnected } = useAccount();

  useEffect(() => {
    (async () => {
      const extensionInstalled = await detectExtension();
      setIsExtensionInstalled(extensionInstalled);
    })();
  }, []);

  useEffect(() => {
    if (id?.toString()) {
      if (isNaN(parseInt(id?.toString()))) setCurrentCharacterId(0);
      else setCurrentCharacterId(parseInt(id?.toString()));
    }
  }, [id]);

  if (!isConnected) window.location.assign("/");

  if (currentCharacterId > characters.length || currentCharacterId < 0)
    setCurrentCharacterId(1);

  return (
    <SwipeableNFT
      currentCharacterId={currentCharacterId}
      setCurrentCharacterId={setCurrentCharacterId}
      isExtensionInstalled={isExtensionInstalled}
    />
  );
};
export default Mint;
