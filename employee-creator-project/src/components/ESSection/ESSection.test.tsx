import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";

import { ESSection } from "./ESSection";

import "@testing-library/jest-dom/extend-expect";

const renderESSection = (register: any, errors: {}, setValue: any) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ESSection register={register} errors={errors} setValue={setValue} />
      </MemoryRouter>
    </Provider>
  );
};

const errors = {
  contractType: false,
  startDay: false,
  startMonth: false,
  startYear: false,
  endDay: false,
  endMonth: false,
  endYear: false,
  employmentType: false,
  hoursPW: false,
};
const register = jest.fn();
const setValue = jest.fn();

describe("ESSection test", () => {
  test("ESSection should render correctly with relevant content", () => {
    renderESSection(register, errors, setValue);

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

  test("checkbox values for contractType should be toggled when clicked", () => {
    renderESSection(register, errors, setValue);
    const checkboxElement = document.getElementById(
      "contractType"
    ) as HTMLInputElement;

    expect(checkboxElement.checked).toBe(false);
    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toBe(true);

    const checkboxElement2 = document.getElementById(
      "contractType2"
    ) as HTMLInputElement;

    expect(checkboxElement2.checked).toBe(false);
    fireEvent.click(checkboxElement2);
    expect(checkboxElement2.checked).toBe(true);
  });

  test("checkbox values for EmploymentType should be toggled when clicked", () => {
    renderESSection(register, errors, setValue);
    const checkboxElement = document.getElementById(
      "employmentType"
    ) as HTMLInputElement;

    expect(checkboxElement.checked).toBe(false);
    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toBe(true);

    const checkboxElement2 = document.getElementById(
      "employmentType2"
    ) as HTMLInputElement;

    expect(checkboxElement2.checked).toBe(false);
    fireEvent.click(checkboxElement2);
    expect(checkboxElement2.checked).toBe(true);
  });

  it("renders select box with correct options", () => {
    renderESSection(register, errors, setValue);

    const selectBox = screen.getAllByRole("combobox");
    expect(selectBox.length).toBe(2);

    fireEvent.click(selectBox[1]);

    expect(screen.getAllByText("January").length).toBe(2);
    expect(screen.getAllByText("February").length).toBe(2);
    expect(screen.getAllByText("March").length).toBe(2);
    expect(screen.getAllByText("April").length).toBe(2);
    expect(screen.getAllByText("May").length).toBe(2);
    expect(screen.getAllByText("June").length).toBe(2);
    expect(screen.getAllByText("July").length).toBe(2);
    expect(screen.getAllByText("August").length).toBe(2);
    expect(screen.getAllByText("September").length).toBe(2);
    expect(screen.getAllByText("October").length).toBe(2);
    expect(screen.getAllByText("November").length).toBe(2);
    expect(screen.getAllByText("December").length).toBe(2);
  });

  test("the input fields for startDay and startYear updates its value when the user types", () => {
    renderESSection(register, errors, setValue);

    const inputElementDay = screen.getByTestId("startDay") as HTMLInputElement;
    expect(inputElementDay.value).toBe("");

    fireEvent.change(inputElementDay, { target: { value: "12" } });
    expect(inputElementDay.value).toBe("12");

    const inputElement = screen.getByTestId("startYear") as HTMLInputElement;
    expect(inputElement.value).toBe("");

    fireEvent.change(inputElement, { target: { value: "2000" } });
    expect(inputElement.value).toBe("2000");
  });

  test("the input fields for endDay and endYear updates its value when the user types", () => {
    renderESSection(register, errors, setValue);

    const inputElementDay = screen.getByTestId("endDay") as HTMLInputElement;
    expect(inputElementDay.value).toBe("");

    fireEvent.change(inputElementDay, { target: { value: "22" } });
    expect(inputElementDay.value).toBe("22");

    const inputElement = screen.getByTestId("endYear") as HTMLInputElement;
    expect(inputElement.value).toBe("");

    fireEvent.change(inputElement, { target: { value: "2022" } });
    expect(inputElement.value).toBe("2022");
  });

  test("the input field for hoursPW updates its value when the user types", () => {
    renderESSection(register, errors, setValue);

    const inputElement = screen.getByTestId("hoursPW") as HTMLInputElement;

    expect(inputElement.value).toBe("");

    fireEvent.change(inputElement, { target: { value: "35" } });
    expect(inputElement.value).toBe("35");
  });
});
