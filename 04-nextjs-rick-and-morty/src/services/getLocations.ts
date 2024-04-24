import { Location } from "@/const/types";

export async function getSingleLocation(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  const location: Location = await response.json();
  return location;
}

export async function getMultipleLocations(ids: number[]) {
  const url = `https://rickandmortyapi.com/api/location/${ids
    .map((id) => id)
    .join(",")}`;
  const response = await fetch(url);

  const locations: Location[] = await response.json();
  return locations;
}
