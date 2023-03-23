import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../Redux/Store";

import { CDSection } from "./CDSection";

import "@testing-library/jest-dom/extend-expect";

const renderCDSection = (register: any, errors: {}) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CDSection register={register} errors={errors} />
      </MemoryRouter>
    </Provider>
  );
};

const register = jest.fn();
const errors = {
  email: false,
  phoneNumber: false,
  address: false,
};

describe("CDSection tests", () => {
  test("It should render the CDSection and its content", () => {
    renderCDSection(register, errors);

    const heading = screen.getByText("Contact Details");

    expect(heading).toBeInTheDocument();

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

  test("Should render no information if edit is false", () => {
    renderCDSection(register, errors);
    const values = screen.getAllByDisplayValue("");

    expect(values.length).toBe(3);
  });

  test("Should return an error if errors.email is true (due to it being required)", () => {
    renderCDSection(register, {
      email: true,
      phoneNumber: false,
      address: false,
    });
    const error = screen.getByRole("emailError");
    const errorMessage = screen.getByText("This field is required^");
    expect(error).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should return an error if errors.phoneNumber is true (due to it being required)", () => {
    renderCDSection(register, {
      email: false,
      phoneNumber: true,
      address: false,
    });
    const error = screen.getByRole("phoneNumberError");
    const errorMessage = screen.getByText(
      "This field is required, only enter numbers^"
    );
    expect(error).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should return an error if errors.address is true (due to it being required)", () => {
    renderCDSection(register, {
      email: false,
      phoneNumber: false,
      address: true,
    });
    const error = screen.getByRole("addressError");
    const errorMessage = screen.getByText("This field is required^");
    expect(error).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should return multiple errors if errors are true (due to it being required)", () => {
    renderCDSection(register, {
      email: true,
      phoneNumber: true,
      address: true,
    });
    const emailError = screen.getByRole("emailError");
    const phoneNumberError = screen.getByRole("phoneNumberError");
    const addressError = screen.getByRole("addressError");

    const errorMessage = screen.getAllByText("This field is required^");
    const phoneErrorMessage = screen.getByText(
      "This field is required, only enter numbers^"
    );
    expect(emailError).toBeInTheDocument();
    expect(phoneNumberError).toBeInTheDocument();
    expect(addressError).toBeInTheDocument();

    expect(errorMessage.length).toBe(2);
    expect(phoneErrorMessage).toBeInTheDocument();
  });
});
