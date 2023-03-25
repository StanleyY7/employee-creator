import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../components/Redux/Store";

import EditEmployeePage from "./EditEmployeePage";

import "@testing-library/jest-dom/extend-expect";

const renderEditEmployeePage = async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EditEmployeePage />
        </BrowserRouter>
      </Provider>
    );
  });
};

describe("EditEmployeePage Test", () => {
  test("Should render with correct content", () => {
    renderEditEmployeePage();

    const heading = screen.getByText("Employee Details");
    expect(heading).toBeInTheDocument();
  });

  test("When back button is clicked it should take the user back to /all-employees", () => {
    renderEditEmployeePage();

    const link = screen.getAllByRole("link");

    fireEvent.click(link[0]);
    expect(window.location.pathname).toEqual("/all-employees");
  });

  test("When cancel button is clicked it should take the user back to /all-employees", () => {
    renderEditEmployeePage();

    const link = screen.getAllByRole("link");

    fireEvent.click(link[1]);
    expect(window.location.pathname).toEqual("/all-employees");
  });
});
