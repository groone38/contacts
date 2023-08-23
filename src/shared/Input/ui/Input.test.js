import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { store } from "./../../../app/providers/store/index";
import { Input } from "src/shared/Input";
import "@testing-library/jest-dom";
const register = jest.fn();

describe("Input component", () => {
  it("render", () => {
    render(
      <Input
        type="textbox"
        id="email"
        name="email"
        placeholder="Enter you email"
        register={register}
        required="true"
        label="Email"
        errors="Error"
      />
    );
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });
  it("render error", async () => {
    render(
      <Input
        type="textbox"
        id="email"
        name="email"
        placeholder="Enter you email"
        register={register}
        required="true"
        label="Email"
      />
    );
    await userEvent.type(screen.getByLabelText(/Email/i), "groone38@yandex.ru");

    // userEvent.type(screen.getByRole("textbox"), "React");
    // expect(onChange).toHaveBeenCalledTimes(5);
  });
});
