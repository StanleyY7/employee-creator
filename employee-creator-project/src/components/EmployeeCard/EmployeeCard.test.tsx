import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { employeeData } from "../../services/tests/employee.test";
import { getYearsDifference } from "../../services/general";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";

import EmployeeCard from "./EmployeeCard";

import "@testing-library/jest-dom/extend-expect";

const renderEmployeeCard = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <EmployeeCard employee={employeeData} />
      </BrowserRouter>
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

  test("When link is pressed it changes edit state and selectEmployee state onClick", () => {
    renderEmployeeCard();
    const navLink = screen.getByRole("link");
    fireEvent.click(navLink);
    const state = store.getState().form;
    expect(state.edit).toBe(true);
    expect(state.selectEmployee).toBe(employeeData);
  });

  test("When link is pressed it navigates the user to /edit-employee", () => {
    renderEmployeeCard();
    const navLink = screen.getByRole("link");
    fireEvent.click(navLink);
    expect(window.location.pathname).toEqual("/edit-employee");
  });
});
