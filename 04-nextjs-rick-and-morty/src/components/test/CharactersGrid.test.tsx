import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";
import CharactersGrid from "../CharactersGrid";
import { getCharacters } from "../../services/getCharacter";

beforeAll(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("CharactersGrid", () => {
  test("render", async () => {
    render(<CharactersGrid initialData={[]} />);
    const characters = screen.queryAllByTestId("character-card");
    expect(characters).toHaveLength(0);
  });
  test("render characters", async () => {
    const initialData = await getCharacters(1);
    render(<CharactersGrid initialData={initialData} />);
    const characters = screen.queryAllByTestId("character-card");
    expect(characters).toHaveLength(20);
  });
});
