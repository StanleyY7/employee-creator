import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Form from "./Form";

import "@testing-library/jest-dom/extend-expect";

const renderForm = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    </Provider>
  );
};

describe("Form Test", () => {
  test("Form should render with components", () => {
    renderForm();

    /* Personal Information Section */

    // First Name

    const heading = screen.getByText("Personal Information");
    const firstNameLabel = screen.getByText("First name");
    const firstNamePlaceholder = screen.getByPlaceholderText("John");

    expect(heading).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(firstNamePlaceholder).toBeInTheDocument();

    // Middle Name

    const middleNameLabel = screen.getByText("Middle name (if applicable)");

    expect(middleNameLabel).toBeInTheDocument();

    // Last Name

    const lastNameLabel = screen.getByText("Last name");
    const lastNamePlaceholder = screen.getByPlaceholderText("Smith");

    expect(lastNameLabel).toBeInTheDocument();

    expect(lastNamePlaceholder).toBeInTheDocument();

    /* Contact Details Section */

    const contactHeading = screen.getByText("Contact Details");
    expect(contactHeading).toBeInTheDocument();

    // Email Address

    const emailLabel = screen.getByText("Email address");
    const emailPlaceholder = screen.getByPlaceholderText("sam.riley@gmail.com");

    expect(emailLabel).toBeInTheDocument();
    expect(emailPlaceholder).toBeInTheDocument();

    // Mobile Number

    const mobileLabel = screen.getByText("Mobile number");
    const mobilePlaceholder = screen.getByPlaceholderText("04123456789");

    expect(mobileLabel).toBeInTheDocument();
    expect(mobilePlaceholder).toBeInTheDocument();

    // Residential Address
    const addressLabel = screen.getByText("Residential address");
    const addressPlaceholder = screen.getByPlaceholderText(
      "123 Example Street, Sydney NSW 2000"
    );

    expect(addressLabel).toBeInTheDocument();
    expect(addressPlaceholder).toBeInTheDocument();

    /* Employee Status Section */

    const esHeading = screen.getByText("Employee Status");
    const subHeading = screen.getByText("What is contract type?");

    expect(esHeading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();

    // Contract Type

    const permanentLabel = screen.getByText("Permanent");
    const permanentValue = screen.getByDisplayValue("Permanent");

    expect(permanentLabel).toBeInTheDocument();
    expect(permanentValue).toBeInTheDocument();

    const contractLabel = screen.getByText("Contract");
    const contractValue = screen.getByDisplayValue("Contract");

    expect(contractLabel).toBeInTheDocument();
    expect(contractValue).toBeInTheDocument();

    // Dates

    const startDateLabel = screen.getByText("Start Date");
    const endDateLabel = screen.getByText("End Date");

    const dayCount = screen.getAllByText("Day");
    const monthCount = screen.getAllByText("Month");
    const yearCount = screen.getAllByText("Year");

    expect(startDateLabel).toBeInTheDocument();
    expect(endDateLabel).toBeInTheDocument();
    expect(dayCount.length).toBe(2);
    expect(monthCount.length).toBe(2);
    expect(yearCount.length).toBe(2);

    // on-Going

    const onGoingLabel = screen.getByText("On-Going");

    expect(onGoingLabel).toBeInTheDocument();

    // Employment Type

    const fullLabel = screen.getByText("Full-time");
    const partLabel = screen.getByText("Part-time");

    expect(fullLabel).toBeInTheDocument();
    expect(partLabel).toBeInTheDocument();

    // Hours

    const hoursLabel = screen.getByText("Hours per week");
    expect(hoursLabel).toBeInTheDocument();

    // All

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toEqual(5);

    const values = screen.getAllByDisplayValue("");
    expect(values.length).toBe(12);
  });
});
