import MainPage from "./MainPage";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

const renderMainPage = () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
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

  test("Clicking on the button/link will take the user to /all-employees", () => {
    renderMainPage();

    const navLink = screen.getByRole("link");

    expect(navLink).toBeInTheDocument();

    fireEvent.click(navLink);

    expect(window.location.pathname).toEqual("/all-employees");
  });
});
