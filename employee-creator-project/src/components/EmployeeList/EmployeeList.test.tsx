import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import { render, screen, waitFor } from "@testing-library/react";
import { queryClient } from "../../App";
import EmployeeList from "./EmployeeList";

import "@testing-library/jest-dom/extend-expect";
import { QueryClientProvider } from "react-query";

const renderEmployeeList = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <EmployeeList />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>
  );
};

describe("EmployeeList test", () => {
  test("EmployeeList should not render EmployeeCard if no data", async () => {
    renderEmployeeList();

    await waitFor(() => {
      const EmployeeCard = screen.queryByTestId("EmployeeCard");
      expect(EmployeeCard).toBeNull();
    });
  });
});
