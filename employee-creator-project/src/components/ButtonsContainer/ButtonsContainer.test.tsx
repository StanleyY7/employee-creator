import { ButtonsContainer } from "./ButtonsContainer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const renderButtonsContainer = () => {
  render(
    <MemoryRouter>
      <ButtonsContainer />
    </MemoryRouter>
  );
};

describe("ButtonsContainer Test", () => {
  test("should render with correct text", () => {
    renderButtonsContainer();
    const cancelButton = screen.getByText("Cancel");
    const link = screen.getByRole("link");
    expect(cancelButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
