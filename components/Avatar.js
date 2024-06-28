import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" sm:hidden lg:flex lg:max-w-none">
      <Image
        src={"/avatar.png"}
        width={540}
        height={400}
        alt=""
        className=" w-full h-full translate-x-0  "
      />
    </div>
  );
};

export default Avatar;
