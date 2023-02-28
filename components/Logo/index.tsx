import Image from "next/image";

const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <>
      <Image
        width={width}
        height={height}
        src="/sofamon.svg"
        alt="Nerko"
        loading="lazy"
      />
    </>
  );
};

export default Logo;
