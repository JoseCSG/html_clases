import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CharactersGrid from "../CharactersGrid";

describe("CharactersGrid", () => {
  test("render", async () => {
    render(<CharactersGrid initialData={[]} />);
    const characters = screen.queryAllByTestId("character-card");
    console.log(characters);
    expect(characters).toHaveLength(0);
  });
});
