import BackButton from "./BackButton";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderBackButton = () => {
  render(
    <>
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    </>
  );
};

describe("BackButton Test", () => {
  test("renders BackButton with correct text and link", () => {
    renderBackButton();
    const backButton = screen.getByText("Back");
    const link = screen.getByRole("link");
    expect(backButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  test("clicking on the button navigates the user back to /all-employees", () => {
    renderBackButton();
    const backButton = screen.getByText("Back");
    const link = screen.getByRole("link");
    expect(backButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    expect(window.location.pathname).toEqual("/all-employees");
  });
});
