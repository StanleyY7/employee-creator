import EmployeeCard from "./EmployeeCard";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { employeeData } from "../../services/tests/employee.test";
import { getYearsDifference } from "../../services/general";

const renderEmployeeCard = () => {
  render(
    <MemoryRouter>
      <EmployeeCard employee={employeeData} />
    </MemoryRouter>
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
