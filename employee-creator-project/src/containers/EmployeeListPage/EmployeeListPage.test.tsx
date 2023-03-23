import { fireEvent, render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../components/Redux/Store";

import "@testing-library/jest-dom/extend-expect";

import EmployeeListPage from "./EmployeeListPage";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../App";

const renderEmployeeListPage = async () => {
  await act(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <EmployeeListPage />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>
    );
  });
};

describe("EmployeeListPage Test", () => {
  test("Should render with all the correct content", () => {
    renderEmployeeListPage();
    const heading = screen.getByText("Employee's list");
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();

    const button = screen.getByRole("button");
    const buttonLabel = screen.getByText("Add Employee");

    expect(buttonLabel).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("When Add Employee button is clicked edit state should change", () => {
    renderEmployeeListPage();

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const state = store.getState().form;
    expect(state.edit).toBe(false);
  });
});
