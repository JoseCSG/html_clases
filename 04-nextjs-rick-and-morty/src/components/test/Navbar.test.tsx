import { render, screen } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
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

const mocks = vi.hoisted(() => {
  return {
    auth: vi.fn(),
  };
});

vi.mock("@/auth", () => {
  return {
    auth: mocks.auth,
  };
});

describe("navigation", () => {
  test("renders navbar with all links", async () => {
    mocks.auth.mockReturnValue({ user: null });
    const navigationBar = Navbar();
    render(await navigationBar);
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
      mocks.auth.mockReturnValue({ user: null });
      const navigationBar = Navbar();
      render(await navigationBar);
      const link = screen.getByTestId(`nav-${path.name}`);
      expect(link).toHaveAttribute("href", path.path);
    });
  });
  it("should render Login button", async () => {
    mocks.auth.mockReturnValue({ user: null });
    const navigationBar = Navbar();
    render(await navigationBar);
    const login = screen.getByText("Login");
    expect(login).toBeInTheDocument();
  });
  it("Should render Logout button", async () => {
    mocks.auth.mockReturnValue({ user: { id: "id_prueba" } });
    const navigationBar = Navbar();
    render(await navigationBar);
    const logout = screen.getByText("Logout");
    expect(logout).toBeInTheDocument();
  });
});
