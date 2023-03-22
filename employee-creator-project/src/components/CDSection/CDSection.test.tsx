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
  emai: "This field is required^",
  phoneNumber: "This field is required^",
  address: "This field is required^",
};

describe("CDSection test", () => {
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

    // All

    const values = screen.getAllByDisplayValue("");

    expect(values.length).toBe(3);
  });
});
