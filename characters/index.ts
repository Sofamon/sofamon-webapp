import BunnyABI from "../abi/SofamonBunny.json";
import NounsABI from "../abi/SofamonNouns.json";

const characters = [
  {
    id: "bunny",
    name: "Bunny",
    shortCode: "bunny",
    assets: ["bunny-w-glasses"],
    contract: "0x149b888374622a1126af05d5eb746502679e0823",
    abi: BunnyABI.abi,
  },
  {
    id: "nouns",
    name: "Nouns",
    shortCode: "nouns",
    assets: [],
    contract: "0x7a32bbb8f6f1911f14f55c8799b64a7ba37ec087",
    abi: NounsABI.abi,
  },
];

export default characters;
