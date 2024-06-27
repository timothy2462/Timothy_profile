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

// import Image from "next/image";

// const Avatar = () => {
//   return (
//     <div
//       style={{
//         display: "block",
//         "@media screen and (max-width: 599px)": {
//           display: "none",
//         },
//       }}
//     >
//       <Image
//         src={"/avatar.png"}
//         width={500}
//         height={500}
//         alt=""
//         className=" w-full h-full translate-x-0  "
//       />
//     </div>
//   );
// };

// export default Avatar;
