import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { store } from "../../components/Redux/Store";

import EditEmployeePage from "./EditEmployeePage";

import "@testing-library/jest-dom/extend-expect";

const renderEditEmployeePage = async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EditEmployeePage />
        </MemoryRouter>
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
});
