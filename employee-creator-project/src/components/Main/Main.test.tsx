import Main from "./Main";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const renderMain = () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

describe("Main Test", () => {
  test("Main should be rendered with correct text and link", () => {
    renderMain();
    const heading = screen.getByText("Welcome to EC");
    const navLink = screen.getByRole("link");
    expect(heading).toBeInTheDocument();
    expect(navLink).toBeInTheDocument();
  });

  test("Clicking on the button/link will take the user to /all-employees", () => {
    renderMain();

    const navLink = screen.getByRole("link");

    expect(navLink).toBeInTheDocument();

    fireEvent.click(navLink);

    expect(window.location.pathname).toEqual("/all-employees");
  });
});
