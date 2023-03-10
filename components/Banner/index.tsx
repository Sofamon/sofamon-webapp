import { useEffect, useState } from "react";
import detectExtension from "../../libs/detectExtension";
import Image from "next/image";
import Link from "next/link";
import { MobileBanner } from "./MobileBanner";
import { ArrowUpIcon } from "@chakra-ui/icons";

const Banner = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  useEffect(() => {
    (async () => {
      const extensionInstalled = await detectExtension();
      setIsExtensionInstalled(extensionInstalled);
    })();
  }, []);
  return (
    <>
      <div
        className="mx-auto mt-20 mb-14 hidden md:flex lg:flex xl:flex"
        style={{ height: 582, width: 1200 }}
      >
        <div style={{ width: 453 }} className="my-auto">
          <h2
            className={
              "mb-6 text-4xl font-bold " +
              (typeof chrome !== "undefined" && "hidden")
            }
          >
            Please use chrome browser from desktop to access the site
          </h2>
          <h2
            className={
              "mb-6 text-7xl font-bold " +
              (typeof chrome === "undefined" && "hidden")
            }
          >
            Sofamon Browser Extension
          </h2>
          <p
            className={
              "text-gray-500 text-2xl m-0 " +
              (typeof chrome === "undefined" && "hidden")
            }
          >
            Play with Sofamon while interacting with blockchain.
          </p>
          <div
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderWidth: "0.16rem",
              backgroundImage: "linear-gradient(25deg, #2600fc, #ff00ea)",
            }}
            className={
              "mt-10 text-white border-none outline-none font-bold text-lg px-6 rounded-3xl w-min whitespace-nowrap cursor-pointer hover:opacity-80 transition-all delay-100 " +
              (typeof chrome === "undefined" && "hidden")
            }
          >
            <Link
              href={
                !isExtensionInstalled
                  ? "https://chartreuse-look-9e2.notion.site/Install-Sofamon-Extension-5e53b6c99f9848beb5ab409b731b5c38"
                  : "/mint?id=1"
              }
              target={!isExtensionInstalled ? "_blank" : ""}
            >
              <div className="flex gap-3">
                <span>
                  {!isExtensionInstalled
                    ? "Install Extension for Free Mint"
                    : "Mint Free NFT"}
                </span>
                ???
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-end justify-center w-full mb-24 flex-col relative -top-14">
          <Link href="/mint?id=1">
            <div className="relative z-10 mb-20 bg-white rounded-full cursor-pointer circle-border">
              <svg
                className="spin"
                viewBox="0 0 100 100"
                width="120"
                height="120"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  ></path>
                </defs>
                <text
                  className="uppercase"
                  style={{ fontSize: 12, fill: "#e348ff" }}
                >
                  <textPath xlinkHref="#circle">
                    start free mint ??? start free mint ???
                  </textPath>
                </text>
              </svg>
              <div
                className="text-3xl font-bold relative rotate-45"
                style={{ color: "#e348ff", top: -62, left: 26 }}
              >
                <ArrowUpIcon boxSize={12} />
              </div>
            </div>
          </Link>
          <div className="relative -left-20" style={{ top: 500 }}>
            <Image
              src="/images/blob-dashed.svg"
              alt="bg"
              className="opacity-10"
              height={500}
              width={500}
            />
          </div>
          <div className="relative -left-4 top-6">
            <Image
              alt="bg"
              src="/images/background.svg"
              className="opacity-30"
              height={500}
              width={500}
            />
          </div>
          <div className="relative left-6" style={{ top: -500 }}>
            <Image alt="bunny image" src="/sofa.png" height={410} width={410} />
          </div>
        </div>
      </div>
      <MobileBanner />
    </>
  );
};

export default Banner;
