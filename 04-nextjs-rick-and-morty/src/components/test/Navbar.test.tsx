import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Navbar from "../Navbar";
import { paths } from "@/const/paths";

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

describe("navigation", () => {
  test("renders navbar with all links", async () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Rick and Morty Logo");
    expect(logo).toBeInTheDocument();

    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
    const favorites = screen.getByText("Favorites");
    expect(favorites).toBeInTheDocument();
  });

  // testing navigation
  paths.forEach((path) => {
    test(`navigates to ${path.name}`, async () => {
      render(<Navbar />);
      const link = screen.getByTestId(`nav-${path.name}`);
      expect(link).toHaveAttribute("href", path.path);
    });
  });
});
