import { describe, vi, it, beforeEach, expect } from "vitest";
import FavoriteButton from "../FavoriteButton";
import { screen, render } from "@testing-library/react";
import { getSingleCharacter } from "@/services/getCharacter";
import { Character } from "@/const/types";

vi.mock("@/auth", () => {
  return {
    auth: {
      user: { id: "prueba_id" },
    },
  };
});

vi.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  };
});

let mockCharacter: Character;

describe("FavoriteButton", () => {
  beforeEach(async () => {
    mockCharacter = await getSingleCharacter(1);
  });
  it("Should render the button", () => {
    render(
      <FavoriteButton
        character={mockCharacter}
        isFavorite={false}
        color="text-white"
        size="h-8 w-8"
        className="self-end align-top"
      />,
    );
    const button = screen.getByTestId(`id-${mockCharacter.id}`);
    expect(button).toBeInTheDocument();
  });
});
