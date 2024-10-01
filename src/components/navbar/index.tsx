import Image from "next/image";
import netflixLogo from "../../../public/netflixLogo.png";
import { Bell, Search } from "lucide-react";
import Link from "next/link";
import Dropdown from "../dropDown";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full bg-black justify-between">
      <Image
        src={netflixLogo}
        alt="Netflix Logo"
        width={140}
        height={35}
        className="h-auto ml-8"
      />
      <menu className="hidden md:flex text-small w-full h-20 gap-x-10 mr-10 items-center text-white ml-5">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Series</Link>
        <Link href={"#"}>Films</Link>
        <Link href={"#"}>New & Popular</Link>
        <Link href={"#"}>My List</Link>
        <Link href={"#"}>Browse by languages</Link>
      </menu>
      <Dropdown />
      <div className="flex flex-row-reverse w-full items-center gap-6 mr-4">
        <Bell data-testid="bell-icon" color="white" size={35} />
        <Search data-testid="search-icon" color="white" size={35} />
        <Image
          src="https://placehold.co/35"
          alt="profile icon"
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
