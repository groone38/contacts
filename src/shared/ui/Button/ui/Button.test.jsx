import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("render", () => {
    render(<Button>click</Button>);
    expect(screen.getByText("click")).toBeInTheDocument();
  });
});
