import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import { store } from "../../../app/providers/store/index";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Login", () => {
  it("render component", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
  it("validation email and password error", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    await act(() => {
      userEvent.click(getByTestId("btn"));
    });

    expect(
      screen.getByText("Поле Password не может быть пустым!")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Поле Email не может быть пустым!")
    ).toBeInTheDocument();
  });
  it("validation email error", async () => {
    const { getByTestId, getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    await act(() => {
      userEvent.type(getByLabelText("Email:"), "groone38@yandex.ru");
    });

    await act(() => {
      userEvent.click(getByTestId("btn"));
    });
    screen.debug();
    expect(
      screen.getByText("Поле Password не может быть пустым!")
    ).toBeInTheDocument();
  });

  it("validation password error", async () => {
    const { getByTestId, getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    await act(() => {
      userEvent.type(getByLabelText("Password:"), "groone38@yandex.ru");
    });

    await act(() => {
      userEvent.click(getByTestId("btn"));
    });
    screen.debug();
    expect(
      screen.getByText("Поле Email не может быть пустым!")
    ).toBeInTheDocument();
  });

  it("not validation errors", async () => {
    const { getByTestId, getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    await act(() => {
      userEvent.type(getByLabelText("Email:"), "groone38@yandex.ru");
    });
    await act(() => {
      userEvent.type(getByLabelText("Password:"), "groone38@yandex.ru");
    });
    await act(() => {
      userEvent.click(getByTestId("btn"));
    });
    screen.debug();
    expect(screen.queryByText("Поле Email не может быть пустым!")).toBeNull();
    expect(
      screen.queryByText("Поле Password не может быть пустым!")
    ).toBeNull();
  });
  it("Login snapchot", () => {
    const login = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(login).toMatchSnapshot();
  });
});
