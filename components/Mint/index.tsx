import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { abi } from "../../abi/contract-abi";
import FlipCard, { BackCard, FrontCard } from "../Flipcard";
import { BigNumber } from "ethers";
import detectExtension from "../../libs/detectExtension";
import { useRouter } from "next/router";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const contractConfig = {
  address: contractAddress as `0x${string}`,
  abi,
};

const characters = ["naruto", "sasuke", "noun"];
const SwipeableNFT = ({
  currentCharacterId,
  setCurrentCharacterId,
  isExtensionInstalled,
}: {
  currentCharacterId: number;
  setCurrentCharacterId: any;
  isExtensionInstalled: boolean;
}) => {
  const [isAlreadyMinted, setIsAlreadyMinted] = useState(false);
  const [txError, setTxError] = useState<any | null>(undefined);
  const [mintError, setMintError] = useState<any | null>(undefined);

  const { address } = useAccount();
  const tokenId: BigNumber = BigNumber.from(currentCharacterId.toString());
  const amount: BigNumber = BigNumber.from("1");

  useEffect(() => {
    (async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-Key": process.env.CENTER_API_KEY || "test",
        },
      };
      const response = await fetch(
        `https://api.center.dev/v1/ethereum-goerli/account/${address}/assets-owned`,
        options
      );
      const res = await response.json();
      setIsAlreadyMinted(false);
      for (let item of res.items) {
        if (
          String(item.address) === contractAddress &&
          parseInt(item.tokenId) === currentCharacterId
        ) {
          setIsAlreadyMinted(true);
          break;
        }
      }
    })();
  }, [address, currentCharacterId]);

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
    args: [tokenId, amount, address!],
  });

  let {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintErrorRaw,
  } = useContractWrite(contractWriteConfig);

  let {
    data: txData,
    isSuccess: txSuccess,
    error: txErrorRaw,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  useEffect(() => {
    setMintError(mintErrorRaw);
  }, [mintErrorRaw]);

  useEffect(() => {
    setTxError(txErrorRaw);
  }, [txErrorRaw]);

  const isMinted = txSuccess;

  return (
    <div className="flex items-center justify-center pt-32 max-w-5xl mx-auto">
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
                  null,
                  `?id=${
                    currentCharacterId - 1 == 0
                      ? characters.length
                      : currentCharacterId - 1
                  }`
                );
                setTxError(undefined);
                setMintError(undefined);
                setCurrentCharacterId(
                  currentCharacterId - 1 == 0
                    ? characters.length
                    : currentCharacterId - 1
                );
                setIsAlreadyMinted(false);
              }}
            >
              <TriangleDownIcon boxSize={3} />
            </button>
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <FlipCard>
              <FrontCard isCardFlipped={isMinted}>
                <Image
                  src={`/${characters[currentCharacterId - 1]}.png`}
                  width="500"
                  height="500"
                  alt="Hikari NFT"
                />
              </FrontCard>
              <BackCard isCardFlipped={isMinted}>
                <div className="p-6">
                  <Image
                    src={`/${characters[currentCharacterId - 1]}.png`}
                    width="80"
                    height="80"
                    alt="Hikari NFT"
                    className="rounded-lg"
                  />
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
                        href={`https://testnets.opensea.io/assets/goerli/${txData?.to}/${currentCharacterId}`}
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
                  null,
                  `?id=${(currentCharacterId % characters.length) + 1}`
                );
                setTxError(undefined);
                setMintError(undefined);
                setCurrentCharacterId(
                  (currentCharacterId % characters.length) + 1
                );
                setIsAlreadyMinted(false);
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
              {characters[currentCharacterId - 1]}
            </h1>
            <div className="connect-button">
              <ConnectButton />
            </div>
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
                onClick={() => {
                  if (!isMintLoading && !isMintStarted) mint?.();
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
    if (isNaN(parseInt(id!.toString()))) setCurrentCharacterId(0);
    else setCurrentCharacterId(parseInt(id!.toString()));
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
