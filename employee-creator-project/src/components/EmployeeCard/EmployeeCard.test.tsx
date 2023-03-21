import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { employeeData } from "../../services/tests/employee.test";
import { getYearsDifference } from "../../services/general";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";

import EmployeeCard from "./EmployeeCard";

import "@testing-library/jest-dom/extend-expect";

const renderEmployeeCard = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EmployeeCard employee={employeeData} />
      </MemoryRouter>
    </Provider>
  );
};

describe("EmployeeCard Test", () => {
  test("EmployeeCard to be rendered and to contain the correct employee information", () => {
    renderEmployeeCard();
    const navLink = screen.getByRole("link");
    const name = screen.getByText(
      `${employeeData.firstName} ${employeeData.lastName}`
    );
    const email = screen.getByText(`${employeeData.email}`);
    const contractAndLength = screen.getByText(
      `${employeeData.contractType} - ${getYearsDifference(
        employeeData.datesEmployed,
        employeeData.datesEmployedEnd
      )}yrs`
    );
    expect(name).toBeInTheDocument();
    expect(contractAndLength).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(navLink).toBeInTheDocument();
  });
});
