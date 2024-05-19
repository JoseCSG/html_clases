import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CharacterCardBody from "../CharacterCardBody";
import { Character } from "@/const/types";

const testCharacter: Character = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/2",
  created: "2017-11-04T18:50:21.651Z",
};
test("render", async () => {
  render(<CharacterCardBody character={testCharacter} />);
  const link = screen.getByTestId(`character-link-${testCharacter.id}`);
  expect(link).toBeInTheDocument();
});

test("route to character", async () => {
  render(<CharacterCardBody character={testCharacter} />);
  const link = screen.getByTestId(`character-link-${testCharacter.id}`);
  expect(link).toHaveAttribute("href", "/character/2");
});
