import { paths } from "@/const/paths";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";

const Navbar = async () => {
  return (
    <nav className="flex h-[10dvh] w-full flex-row items-center justify-between border-b-2 border-white bg-black  p-4">
      <Image
        src={"/RickMortyLogo.png"}
        alt="Rick and Morty Logo"
        width={120}
        height={100}
        className="h-auto w-auto md:ml-4"
        priority
      />
      <div className=" flex h-full flex-row items-center space-x-6">
        {paths.map((path, index) => (
          <Link
            key={index}
            href={path.path}
            className="group flex flex-row gap-2"
          >
            <p className="hidden text-lg font-bold text-white group-hover:text-green-500 md:block">
              {path.name}
            </p>
            <span className="h-auto w-auto">{path.icon}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
