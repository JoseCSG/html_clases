import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import LogoutButton from "../LogoutButton";

const mocks = vi.hoisted(() => {
  return {
    auth: vi.fn(),
    handleLogout: vi.fn(),
  };
});

vi.mock("@/auth", () => {
  return {
    auth: mocks.auth,
  };
});

vi.mock("next-auth/react", () => {
  return {
    signOut: mocks.handleLogout,
  };
});

describe("LogoutButton", () => {
  it("should call handleLogout on click", async () => {
    mocks.auth.mockReturnValue({ user: { id: "prueba_id" } });
    render(<LogoutButton />);
    const button = screen.getByText("Logout");
    button.click();
    expect(mocks.handleLogout).toHaveBeenCalled();
  });
});
