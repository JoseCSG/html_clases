import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CharacterBanner from "../CharacterBanner";
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

describe("CharacterBanner", () => {
  test("render alive character", async () => {
    render(<CharacterBanner character={testCharacter} />);
    const characterStatus = screen.getByTestId(`status-${testCharacter.id}`);
    expect(characterStatus).toHaveClass("bg-green-500");
  });
  test("render dead character", async () => {
    testCharacter.status = "Dead";
    render(<CharacterBanner character={testCharacter} />);
    const characterStatus = screen.getByTestId(`status-${testCharacter.id}`);
    expect(characterStatus).toHaveClass("bg-red-500");
  });
  test("render unknown character", async () => {
    testCharacter.status = "unknown";
    render(<CharacterBanner character={testCharacter} />);
    const characterStatus = screen.getByTestId(`status-${testCharacter.id}`);
    expect(characterStatus).toHaveClass("bg-yellow-500");
  });
});
