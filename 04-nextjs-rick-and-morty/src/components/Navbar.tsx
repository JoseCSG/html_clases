import { paths } from "@/const/paths";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  return (
    <nav className="w-full flex flex-row h-[10dvh] justify-between items-center bg-black p-4 border-b-2  border-white">
      <Image
        src={"/RickMortyLogo.png"}
        alt="Rick and Morty Logo"
        width={120}
        height={100}
        className="ml-4 w-auto h-auto"
        priority
      />
      <div className=" h-full flex flex-row space-x-6 items-center">
        {paths.map((path, index) => (
          <Link key={index} href={path.path} className="flex flex-row gap-2 group">
            <p className="text-white group-hover:text-green-500 font-bold text-lg">{path.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
