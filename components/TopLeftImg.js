//Next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div
      className="absolute top-0 left-0 mix-blend-lighten z-10 w-[300px]
    xl:w-[400px] opacity-75"
    >
      <Image
        src="/top-left-img.png"
        alt="top-left-img"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
