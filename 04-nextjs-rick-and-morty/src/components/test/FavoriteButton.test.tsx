// import assert methods
import { test, expect, vi } from "vitest";
// import testinglibrary for react
import { screen, render } from "@testing-library/react";
import FavoriteButton from "../FavoriteButton";
import { Character } from "@/const/types";
import { userEvent } from "@testing-library/user-event";
// import component

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

const mockPush = vi.fn();
vi.mock("next/navigation", () => {
  return {
    // defined imports used in component
    useRouter: () => ({
      // assign mocked function to function used
      push: mockPush,
    }),
  };
});
// name your test
test("add to favorites", async () => {
  render(<FavoriteButton character={testCharacter} color="red" size="1rem" />);

  await userEvent.click(screen.getByTestId(`id-${testCharacter.id}`));
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  expect(favorites).toContainEqual(testCharacter);
});

test("remove from favorites", async () => {
  localStorage.setItem("favorites", JSON.stringify([testCharacter]));
  render(<FavoriteButton character={testCharacter} color="red" size="1rem" />);

  await userEvent.click(screen.getByTestId(`id-${testCharacter.id}`));
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  expect(favorites).not.toContainEqual(testCharacter);
});

test("change color white", async () => {
  render(<FavoriteButton character={testCharacter} color="red" size="1rem" />);
  await userEvent.click(screen.getByTestId(`id-${testCharacter.id}`));
  const star = screen.getByTestId("star-icon");
  expect(star).toHaveAttribute("fill", "white");
});

test("remove color", async () => {
  render(<FavoriteButton character={testCharacter} color="red" size="1rem" />);
  await userEvent.click(screen.getByTestId(`id-${testCharacter.id}`));
  const star = screen.getByTestId("star-icon");
  expect(star).toHaveAttribute("fill", "none");
});
