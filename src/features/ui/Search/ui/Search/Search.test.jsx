import { render, screen } from "@testing-library/react";
import Search from "./Search";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const setSearch = jest.fn();

describe("Search component", () => {
  it("render", async () => {
    render(<Search search="" setSearch={setSearch} />);
    expect(
      screen.getByPlaceholderText("Кого вы хотите найти?")
    ).toBeInTheDocument();
  });
  it("onChange", async () => {
    render(<Search search="" setSearch={setSearch} />);
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(setSearch).toHaveBeenCalledTimes(5);
  });
  it("Search snapchot", () => {
    const search = render(<Search search="" setSearch={setSearch} />);
    expect(search).toMatchSnapshot();
  });
});
