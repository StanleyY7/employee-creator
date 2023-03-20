import Main from "./Main";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const renderMain = () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
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
});
