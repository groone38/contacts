import { render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("react-redux");

const mockDispatch = jest.spyOn(reduxHooks, "useDispatch");
const mockSelector = jest.spyOn(reduxHooks, "useSelector");

const user = {
  first_name: "Andrey",
  company: "LisDev",
  about: "Frontend dev",
  email: "groone38@yandex.ru",
  last_name: "Lisin",
  tel: 89054437359,
};

describe("Contact component", () => {
  it("render", async () => {
    mockDispatch.mockReturnValue(jest.fn());
    mockSelector.mockReturnValue([]);
    const contact = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    expect(contact).toMatchSnapshot();
  });
  it("show Contact", async () => {
    mockDispatch.mockReturnValue(jest.fn());
    mockSelector.mockReturnValue(user);
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    expect(screen.getByText("Frontend dev")).toBeInTheDocument();
  });
  it("contact snapchot", () => {
    mockDispatch.mockReturnValue(jest.fn());
    mockSelector.mockReturnValue(user);
    const contact = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    expect(contact).toMatchSnapshot();
  });
});
