import { useEffect, useState } from "react";
import Image from "next/image";
import characters from "../../characters";
import detectExtension from "../../libs/detectExtension";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import Link from "next/link";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

const chromeExtensionId = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID as string;
const etherscanAPIKey = process.env.ETHERSCAN_API_KEY as string;

const Inventory = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [currentCharacterId, setCurrentCharacterId] = useState(1);
  const [currentCharacterTokenId, setCurrentCharacterTokenId] = useState(0);
  const [isAlreadyMinted, setIsAlreadyMinted] = useState(false);
  const [exp, setExp] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);

  const { address, isConnected } = useAccount();
  if (!isConnected) window.location.assign("/");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanAPIKey}`
      );
      const res = await response.json();
      if (res?.message !== "OK") return;
      setExp(res.result.length);
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      
      const query = `{"query": "{ setLevels(where: {nftId: ${currentCharacterTokenId}}, orderBy: level) { level } }" }`
      const response = await fetch(`https://api.studio.thegraph.com/query/41437/sofamon-subgraph/v0.0.1`, {
        body: query,
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const res = await response.json();

      console.log("level response: ", res)
      
      const allLevels = res.data.setLevels
      const highestLevel = allLevels[(allLevels.length - 1)].level

      console.log("level: ", highestLevel)
      setCurrentLevel(highestLevel);
    })();
  }, [currentCharacterTokenId]);

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
          characters[
            currentCharacterId > 0 ? currentCharacterId - 1 : 0
          ].contract.toLowerCase()
        ) {
          setIsAlreadyMinted(true);
          setCurrentCharacterTokenId(item.tokenId);
          break;
        }
      }
    })();
  }, [address, currentCharacterId]);

  useEffect(() => {
    (async () => {
      const extensionInstalled = await detectExtension();
      setIsExtensionInstalled(extensionInstalled);
    })();
  }, []);

  const getCharacter = () => {
    chrome.runtime.sendMessage(chromeExtensionId, {
      info: "changeCharacter",
      characterName: characters[currentCharacterId - 1].name,
      characterId:
        selectedAsset === ""
          ? characters[currentCharacterId - 1].shortCode
          : selectedAsset,
    });
    setCurrentLevel(0);
  };

  const { config: contractWriteConfig } = usePrepareContractWrite({
    address: characters[currentCharacterId > 0 ? currentCharacterId - 1 : 0]
      .contract as `0x${string}`,
    abi: characters[currentCharacterId > 0 ? currentCharacterId - 1 : 0].abi,
    functionName: "setLevelOf",
    args: [currentCharacterTokenId, currentLevel + 1],
  });

  let {
    data: levelData,
    write: setLevelOf,
    isLoading: isLevelUpLoading,
    isSuccess: isLevelUpStarted,
    error: mintErrorRaw,
  } = useContractWrite(contractWriteConfig);

  let {
    data: txData,
    isSuccess: txSuccess,
    error: txErrorRaw,
  } = useWaitForTransaction({
    hash: levelData?.hash,
  });

  const onLevelUp = () => {
    setLevelOf?.();
    chrome.runtime.sendMessage(chromeExtensionId, {
      info: "levelUp",
    });
    setCurrentLevel(currentLevel + 1);
  };

  const calculateExp = () => {
    let total = 0;
    for (let i = 1; i <= currentLevel; i++) total += i * 10;
    return exp - total;
  };

  const handleSelectAsset = (id: string) => {
    if (selectedAsset === id) setSelectedAsset("");
    else setSelectedAsset(id);
  };

  //TODO: handle fetching state

  return (
    <div className="flex inventory flex-col md:flex-row lg:flex-row xl:flex-row mx-10">
      <div>
        <div className="flex items-center justify-center md:justify-start lg:justify-start xl:justify-start">
          <div className="mr-3 bg-gray-100 rounded-3xl px-2 h-6 outline-none">
            <button
              className="text-2xl text-gray-400 outline-none relative rotate-90"
              style={{
                width: 9,
                top: -6,
                left: 2,
              }}
              onClick={() => {
                setSelectedAsset("");
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
          {selectedAsset !== "" ? (
            <Image
              src={`/images/${selectedAsset}/0001.png`}
              className={"" + (!isAlreadyMinted && "grayscale")}
              width="300"
              height="300"
              alt="Sofamon NFT"
            />
          ) : (
            <Image
              src={`/${characters[currentCharacterId - 1].id}.png`}
              className={"" + (!isAlreadyMinted && "grayscale")}
              width="300"
              height="300"
              alt="Sofamon NFT"
            />
          )}
          <div className="ml-3 bg-gray-100 rounded-3xl px-2 h-6 outline-none">
            <button
              className="text-2xl text-gray-400 outline-none relative rotate-90"
              style={{
                width: 9,
                top: -6,
                left: 4,
              }}
              onClick={() => {
                setSelectedAsset("");
                setCurrentCharacterId(
                  (currentCharacterId % characters.length) + 1
                );
              }}
            >
              <TriangleUpIcon boxSize={3} />
            </button>
          </div>
        </div>
        <div className="w-min mx-auto my-6 mb-0 text-center">
          <h1
            className="pb-1 capitalize font-extrabold"
            style={{
              paddingLeft: 6,
              paddingRight: 7,
              fontSize: 32,
            }}
          >
            {characters[currentCharacterId - 1].id}
          </h1>
          {!isAlreadyMinted && (
            <div
              style={{
                borderWidth: "0.16rem",
              }}
              className="mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap"
            >
              <Link href={`/mint?id=${currentCharacterId}`}>Mint NFT</Link>
            </div>
          )}
          {isAlreadyMinted && !isExtensionInstalled && (
            <div
              style={{
                borderWidth: "0.16rem",
              }}
              className="mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap"
            >
              <Link
                href={"https://chrome.google.com/webstore/category/extensions"}
                target="_blank"
                rel="noreferrer"
              >
                Install Extension
              </Link>
            </div>
          )}
          {isAlreadyMinted && isExtensionInstalled && (
            <button
              style={{
                borderWidth: "0.16rem",
              }}
              className="mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl"
              onClick={getCharacter}
            >
              Activate
            </button>
          )}
        </div>
      </div>
      <div className="hidden md:block lg:block xl:block">
        <div className="pl-28 h-min grid relative -top-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16">
          {characters[currentCharacterId - 1].assets.map((id, i) => (
            <div
              key={i}
              onClick={() => handleSelectAsset(id)}
              className={
                "h-40 w-40 flex items-center justify-center rounded-xl cursor-pointer text-6xl " +
                (selectedAsset === id ? "bg-blue-400" : "bg-zinc-300")
              }
            >
              <Image
                src={`/images/${id}/asset.png`}
                height={192}
                width={192}
                alt={id}
              />
            </div>
          ))}
          {[...Array(6 - characters[currentCharacterId - 1].assets.length)].map(
            (_e, i) => (
              <div
                key={i}
                className="h-40 w-40 bg-zinc-300 flex items-center justify-center rounded-xl text-6xl cursor-not-allowed"
              >
                ?
              </div>
            )
          )}
        </div>
        <div className="flex mt-12 level-bar">
          <div className="bg-gray-300 rounded-xl mt-2 mr-7 w-64 h-4">
            <div
              className="bg-black rounded-xl h-4"
              style={{
                width:
                  (256 *
                    (calculateExp() > (currentLevel + 1) * 10
                      ? (currentLevel + 1) * 10
                      : calculateExp())) /
                  ((currentLevel + 1) * 10),
              }}
            ></div>
          </div>
          <div className="mr-12">
            {/* { fetching ? <span> Loading </span> : <span> Lv<>{data?.setLevels[0].level}</> </span> } */}
            <span> Lv{currentLevel} </span>
            <br />
            <span>
              {calculateExp()}/{(currentLevel + 1) * 10} EXP
            </span>
          </div>
          <button
            style={{
              borderWidth: "0.16rem",
            }}
            onClick={onLevelUp}
            disabled={
              currentLevel >= 5 || calculateExp() < (currentLevel + 1) * 10
            }
            className="hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap"
          >
            Level up
          </button>
        </div>
      </div>
      <div className="h-min grid md:hidden lg:hidden xl:hidden grid-cols-1 pt-14 pb-4 gap-10">
        {characters[currentCharacterId - 1].assets.map((id, i) => (
          <center key={i}>
            <div
              className={
                "h-40 w-40 flex items-center justify-center rounded-xl cursor-pointer text-6xl " +
                (selectedAsset === id ? "bg-blue-400" : "bg-zinc-300")
              }
              onClick={() => handleSelectAsset(id)}
            >
              <Image
                src={`/images/${id}/asset.png`}
                height={192}
                width={192}
                alt={id}
              />
            </div>
          </center>
        ))}
        {[...Array(6 - characters[currentCharacterId - 1].assets.length)].map(
          (_e, i) => (
            <center key={i}>
              <div className="h-40 w-40 bg-zinc-300 flex items-center justify-center rounded-xl text-6xl">
                ?
              </div>
            </center>
          )
        )}
      </div>
      <div className="flex md:hidden lg:hidden xl:hidden mt-12 px-4 mb-2">
        <div className="bg-gray-300 rounded-xl mt-2 mr-7 w-28 h-4">
          <div className="bg-black rounded-xl w-8 h-4"></div>
        </div>
        <div className="mr-7">
          <span>Lv{currentLevel}</span>
          <br />
          <span>
            {calculateExp()}/{(currentLevel + 1) * 10} EXP
          </span>
        </div>
        <button
          style={{
            borderWidth: "0.16rem",
          }}
          onClick={onLevelUp}
          disabled={
            currentLevel >= 5 || calculateExp() < (currentLevel + 1) * 10
          }
          className="hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap"
        >
          Level up
        </button>
      </div>
    </div>
  );
};
export default Inventory;
