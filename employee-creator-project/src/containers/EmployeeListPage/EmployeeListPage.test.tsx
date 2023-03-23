import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../components/Redux/Store";

import "@testing-library/jest-dom/extend-expect";

import EmployeeListPage from "./EmployeeListPage";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../App";

const renderEmployeeListPage = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <EmployeeListPage />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>
  );
};

describe("EmployeeListPage Test", () => {
  test("Should render with all the correct content", () => {
    renderEmployeeListPage();
    const heading = screen.getByText("Employee's list");
    expect(heading).toBeInTheDocument();
  });
});
