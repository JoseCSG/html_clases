import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import TextLabel from "../TextLabel";

test("render as input", () => {
  render(<TextLabel label="prueba" />);
  expect(screen.getByText("prueba:")).toBeInTheDocument();
});

test("render both texts", () => {
  render(<TextLabel label="prueba" text="test" secondText="second" />);
  expect(screen.getByTestId("label")).toBeInTheDocument();
  expect(screen.getByTestId("text-label")).toBeInTheDocument();
  expect(screen.getByTestId("secondtext-label")).toBeInTheDocument();
});
