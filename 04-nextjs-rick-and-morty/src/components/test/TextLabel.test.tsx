// import assert methods
import { test, expect } from "vitest";
// import testinglibrary for react
import { screen, render } from "@testing-library/react";
// import component
import TextLabel from "../TextLabel";

// name your test
test("render as input", () => {
  // render component
  // make an asert
  render(<TextLabel label="prueba" />);
  expect(screen.getByText("prueba:")).toBeInTheDocument();
});
