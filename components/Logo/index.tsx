import Image from "next/image";

const Logo = ({ height, width }) => {
  return (
    <>
      <Image
        width={width}
        height={height}
        src="/nerko-light.svg"
        alt="Nerko"
        loading="lazy"
      />
    </>
  );
};

export default Logo;
