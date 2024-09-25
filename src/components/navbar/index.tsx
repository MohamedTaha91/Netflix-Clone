import Image from "next/image";
import netflixLogo from "../../../public/netflixLogo.png";
import { Bell, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-black">
      <Image
        src={netflixLogo}
        alt="Netflix Logo"
        width={140}
        height={35}
        className="h-auto ml-8"
      />
      <menu className="flex text-small w-full gap-x-10 items-center text-white ml-5">
        <Link href={"#"}>Inicio</Link>
        <Link href={"#"}>Series</Link>
        <Link href={"#"}>Peliculas</Link>
        <Link href={"#"}>Novedades Populares</Link>
        <Link href={"#"}>Mi Lista</Link>
        <Link href={"#"}>Explora por idiomas</Link>
      </menu>
      <div className="flex flex-row-reverse w-full space-x-reverse items-center space-x-4">
        <Bell data-testid="bell-icon" color="white" size={35} />
        <Search
          data-testid="search-icon"
          color="white"
          size={35}
          className="mr-4"
        />
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
