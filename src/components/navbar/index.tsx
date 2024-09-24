import Image from "next/image";
import netflixLogo from "../../../public/netflixLogo.png";

const Navbar = () => {
  return (
    <div className="flex bg-black ">
      <Image
        src={netflixLogo}
        alt="Netflix Logo"
        width={140}
        height={35}
        className="h-auto"
      />
    </div>
  );
};

export default Navbar;
