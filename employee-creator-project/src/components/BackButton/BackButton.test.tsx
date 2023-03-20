import BackButton from "./BackButton";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderBackButton = () => {
  render(
    <>
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
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
});
