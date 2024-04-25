import { paths } from "@/const/paths";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  return (
    <nav className="flex h-[10dvh] w-full flex-row items-center justify-between border-b-2 border-white bg-black  p-4">
      <Image
        src={"/RickMortyLogo.png"}
        alt="Rick and Morty Logo"
        width={120}
        height={100}
        className="ml-4 h-auto w-auto"
        priority
      />
      <div className=" flex h-full flex-row items-center space-x-6">
        {paths.map((path, index) => (
          <Link
            key={index}
            href={path.path}
            className="group flex flex-row gap-2"
          >
            <p className="text-lg font-bold text-white group-hover:text-green-500">
              {path.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
