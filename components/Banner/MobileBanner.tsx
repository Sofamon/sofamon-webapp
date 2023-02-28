import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import detectExtension from "../../libs/detectExtension";

export const MobileBanner = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  useEffect(() => {
    (async () => {
      const extensionInstalled = await detectExtension();
      setIsExtensionInstalled(extensionInstalled);
    })();
  }, []);
  return (
    <div className="flex text-center flex-col md:hidden lg:hidden xl:hidden">
      <div className="mt-4">
        <h2
          className="mb-6 font-bold"
          style={{ fontSize: 56, lineHeight: 1.25 }}
        >
          Start your on-chain Adventure
        </h2>
        <p className="text-gray-500 text-2xl my-0 mx-6">
          Get your first on-chain NFT pet.
        </p>
        <center>
          <div
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderWidth: "0.16rem",
              backgroundImage: "linear-gradient(25deg, #2600fc, #ff00ea)",
            }}
            className="
          mt-10 text-white border-none outline-none font-bold text-lg px-6 pr-8 rounded-3xl w-min whitespace-nowrap cursor-pointer hover:opacity-80 transition-all delay-100"
          >
            <Link
              href={
                !isExtensionInstalled
                  ? "https://chrome.google.com/webstore/category/extensions"
                  : "/mint?id=1"
              }
            >
              <div className="flex gap-3">
                <span>
                  {!isExtensionInstalled
                    ? "Install Extension for Free Mint"
                    : "Mint a NFT"}
                </span>
                ➜
              </div>
            </Link>
          </div>
        </center>
      </div>
      <div className="flex items-end justify-center w-full flex-col relative h-96 my-10 mb-24 -left-10">
        <div className="relative -left-16" style={{ top: 380 }}>
          <Image
            src="/images/blob-dashed.svg"
            alt="bg"
            className="opacity-10"
            height={340}
            width={340}
          />
        </div>
        <div className="relative -left-10 top-14">
          <Image
            alt="bg"
            src="/images/background.svg"
            className="opacity-30"
            height={340}
            width={340}
          />
        </div>
        <div className="relative left-4" style={{ top: -380 }}>
          <Image
            alt="bunny image"
            src="/nw_q-x88_400x400.png"
            height={350}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};