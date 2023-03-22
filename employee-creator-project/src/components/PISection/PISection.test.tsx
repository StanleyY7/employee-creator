import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../Redux/Store";
import { employeeData } from "../../services/tests/employee.test";

import PISection from "./PISection";

import "@testing-library/jest-dom/extend-expect";

const renderPISection = (register: any, errors: {}) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PISection
          register={register}
          errors={errors}
          selectEmployee={employeeData}
        />
      </MemoryRouter>
    </Provider>
  );
};

const register = jest.fn();
const errors = {
  firstName: "This field is required^",
  lastName: "This field is required^",
};

describe("PISection Tests", () => {
  test("It should render the PISection of the form and display the relevant text/content, values should display empty string when edit is false", () => {
    renderPISection(register, errors);

    const heading = screen.getByText("Personal Information");
    expect(heading).toBeInTheDocument();

    // First Name

    const firstNameLabel = screen.getByText("First name");
    const firstNamePlaceholder = screen.getByPlaceholderText("John");

    expect(firstNameLabel).toBeInTheDocument();
    expect(firstNamePlaceholder).toBeInTheDocument();

    // Middle Name

    const middleNameLabel = screen.getByText("Middle name (if applicable)");

    expect(middleNameLabel).toBeInTheDocument();

    // Last Name

    const lastNameLabel = screen.getByText("Last name");
    const lastNamePlaceholder = screen.getByPlaceholderText("Smith");
    const values = screen.getAllByDisplayValue("");

    expect(lastNameLabel).toBeInTheDocument();
    expect(values.length).toBe(3);
    expect(lastNamePlaceholder).toBeInTheDocument();
  });
});
