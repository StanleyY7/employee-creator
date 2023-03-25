import { ButtonsContainer } from "./ButtonsContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
const renderButtonsContainer = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ButtonsContainer />
      </BrowserRouter>
    </Provider>
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

  test("should navigate to /all-employees when button is clicked", () => {
    renderButtonsContainer();
    const cancelButton = screen.getByText("Cancel");
    const link = screen.getByRole("link");
    expect(cancelButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    expect(window.location.pathname).toEqual("/all-employees");
  });
});
