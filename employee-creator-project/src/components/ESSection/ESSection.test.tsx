import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";

import { ESSection } from "./ESSection";

import "@testing-library/jest-dom/extend-expect";

const renderESSection = (register: any, errors: {}) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ESSection register={register} errors={errors} />
      </MemoryRouter>
    </Provider>
  );
};

const errors = {};
const register = jest.fn();

describe("ESSection test", () => {
  test("ESSection should render correctly with relevant content", () => {
    renderESSection(register, errors);

    const heading = screen.getByText("Employee Status");
    const subHeading = screen.getByText("What is contract type?");

    expect(heading).toBeInTheDocument();
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

    const emptyValues = screen.getAllByDisplayValue("");
    expect(emptyValues.length).toEqual(5);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toEqual(5);
  });
});
