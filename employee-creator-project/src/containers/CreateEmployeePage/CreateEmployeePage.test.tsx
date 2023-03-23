import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../components/Redux/Store";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../../App";

import CreateEmployeePage from "./CreateEmployeePage";

import "@testing-library/jest-dom/extend-expect";

const renderCreateEmployeePage = async () => {
  await act(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <CreateEmployeePage />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>
    );
  });
};

describe("createEmployeePage Test", () => {
  test("Page renders and shows content", () => {
    renderCreateEmployeePage();

    const heading = screen.getByText("Employee Creation");
    expect(heading).toBeInTheDocument();

    const backButton = screen.getByText("Back");
    const link = screen.getAllByRole("link");
    expect(backButton).toBeInTheDocument();
    expect(link.length).toBe(2);
  });
});
