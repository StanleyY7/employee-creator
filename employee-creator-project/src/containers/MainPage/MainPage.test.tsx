import MainPage from "./MainPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const renderMainPage = () => {
  render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
};

describe("MainPage Test", () => {
  test("MainPage should be rendered with correct Main component", () => {
    renderMainPage();
    const heading = screen.getByText("Welcome to EC");
    const navLink = screen.getByRole("link");
    expect(heading).toBeInTheDocument();
    expect(navLink).toBeInTheDocument();
  });
});
