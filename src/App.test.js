import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders testing button", () => {
  render(<App />);
  const validateButton = screen.getByRole("button");
  expect(validateButton).toBeInTheDocument();
});

test("render input filed", () => {
  render(<App />);
  const inputField = screen.getByTestId("validCurlyBrackets");
  expect(inputField).toBeInTheDocument();
});

test("renders validation message", () => {
  render(<App />);
  const buttonEle = screen.getByRole("button");
  userEvent.click(buttonEle);

  const outputElement = screen.getByText(
    "valid numbers and sequence of '{}' brackets.",
    { exact: false }
  );
  expect(outputElement).toBeInTheDocument();
});
