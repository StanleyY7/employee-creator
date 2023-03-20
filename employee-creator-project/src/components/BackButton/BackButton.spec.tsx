import BackButton from "./BackButton";
import { MemoryRouter } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
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
    expect(backButton).toBeInTheDocument();
  });
});
