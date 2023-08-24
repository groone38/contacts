import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const FakeComponent = () => <div>fake text</div>;

describe("Layout component", () => {
  it("render", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByText("Create new contact")).toBeInTheDocument();
  });
  it("Register snapchot", () => {
    const layout = render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout />
      </MemoryRouter>
    );
    expect(layout).toMatchSnapshot();
  });
});
