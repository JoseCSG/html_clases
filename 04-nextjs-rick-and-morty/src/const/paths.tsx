import HomeIcon from "@/components/icons/HomeIcon";
import { Path } from "./types";
import StarIcon from "@/components/icons/StarIcon";

export const paths: Path[] = [
  {
    name: "Home",
    path: "/",
    icon: (
      <HomeIcon
        color="text-white"
        size="h-6 w-6"
        className="group-hover:text-green-500"
      />
    ),
  },
  {
    name: "Favorites",
    path: "/favorites",
    icon: (
      <StarIcon
        color="text-white"
        size="h-6 w-6"
        className="group-hover:text-green-500 "
      />
    ),
  },
];
