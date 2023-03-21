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

    // Personal Information Section

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

    // Contact Details Section

    // Employee Status Section

    // All

    const values = screen.getAllByDisplayValue("");
    expect(values.length).toBe(12);

    // Contact Details Section

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
  });
});
