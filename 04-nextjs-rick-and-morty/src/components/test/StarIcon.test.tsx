import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StarIcon from "../icons/StarIcon";

describe("StarIcon", () => {
  it("should render no filled", () => {
    render(
      <StarIcon
        color="text-white"
        size="h-6 w-6"
        className="group-hover:text-green-500"
        fill={false}
      />,
    );
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toHaveAttribute("fill", "none");
  });
  it("should render filled", () => {
    render(
      <StarIcon
        color="text-white"
        size="h-6 w-6"
        className="group-hover:text-green-500"
        fill={true}
      />,
    );
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toHaveAttribute("fill", "white");
  });
});
