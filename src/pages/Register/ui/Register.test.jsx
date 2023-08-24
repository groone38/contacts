import { act, render, screen } from "@testing-library/react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/app/providers/store";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const page = (
  <BrowserRouter>
    <Provider store={store}>
      <Register />
    </Provider>
  </BrowserRouter>
);

describe("Register component", () => {
  it("render component", () => {
    render(page);
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
  it("validation email and password error", async () => {
    const { getByTestId } = render(page);

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
    const { getByTestId, getByLabelText } = render(page);
    await act(() => {
      userEvent.type(getByLabelText("Email:"), "groone38@yandex.ru");
    });

    await act(() => {
      userEvent.click(getByTestId("btn"));
    });

    expect(
      screen.getByText("Поле Password не может быть пустым!")
    ).toBeInTheDocument();
  });

  it("validation password error", async () => {
    const { getByTestId, getByLabelText } = render(page);
    await act(() => {
      userEvent.type(getByLabelText("Password:"), "groone38@yandex.ru");
    });

    await act(() => {
      userEvent.click(getByTestId("btn"));
    });
    expect(
      screen.getByText("Поле Email не может быть пустым!")
    ).toBeInTheDocument();
  });

  it("not validation errors", async () => {
    const { getByTestId, getByLabelText } = render(page);
    await act(() => {
      userEvent.type(getByLabelText("Email:"), "groone38@yandex.ru");
    });
    await act(() => {
      userEvent.type(getByLabelText("Password:"), "groone38@yandex.ru");
    });
    await act(() => {
      userEvent.click(getByTestId("btn"));
    });

    expect(screen.queryByText("Поле Email не может быть пустым!")).toBeNull();
    expect(
      screen.queryByText("Поле Password не может быть пустым!")
    ).toBeNull();
  });
  it("Register snapchot", () => {
    const register = render(page);
    expect(register).toMatchSnapshot();
  });
});
