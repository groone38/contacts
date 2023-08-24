import { act, render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import "@testing-library/jest-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");

const mockDispatch = jest.spyOn(reduxHooks, "useDispatch");
const mockSelector = jest.spyOn(reduxHooks, "useSelector");

const users = [
  { id: 1, first_name: "Andrey" },
  { id: 2, first_name: "Anton" },
];

describe("Home component", () => {
  it("render", async () => {
    mockDispatch.mockReturnValue(jest.fn());
    mockSelector.mockReturnValue([]);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  it("typing in search works", () => {
    mockDispatch.mockReturnValue(jest.fn());
    mockSelector.mockReturnValue(users);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Andrey/i)).toBeInTheDocument();
    expect(screen.getByText(/Anton/i)).toBeInTheDocument();
    act(() => {
      userEvent.type(screen.getByRole("textbox"), "Andrey");
    });
    expect(screen.queryByDisplayValue(/Anton/)).toBeNull();
    expect(screen.queryByDisplayValue(/Andrey/)).toBeInTheDocument();
  });
  it("home snapchot", () => {
    mockDispatch.mockReturnValue(jest.fn());
    mockSelector.mockReturnValue(users);
    const home = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(home).toMatchSnapshot();
  });
});
