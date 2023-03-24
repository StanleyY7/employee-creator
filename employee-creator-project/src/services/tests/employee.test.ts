import { getAll, postEmployee, deleteById, patchById } from "../employee";
import { FormTypes } from "../../types/form";

export const employeeData: FormTypes = {
  id: 1,
  firstName: "Tessa",
  middleName: "test",
  lastName: "Smith",
  email: "johnsmithTest@test.com",
  phoneNumber: "0412345690",
  address: "123 fake address lane, NSW, 2250",
  contractType: "Contract",
  startDay: "01",
  startMonth: "01",
  startYear: "2000",
  endDay: "01",
  endMonth: "01",
  endYear: "2023",
  onGoing: true,
  employmentType: "Full-Time",
  hoursPW: 35,
  datesEmployed: "2000-01-01",
  datesEmployedEnd: "2023-01-01",
};

const badRequest: FormTypes = {
  id: 1,
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "123 fake address lane, NSW, 2250",
  contractType: "Contract",
  startDay: "01",
  startMonth: "01",
  startYear: "2000",
  endDay: "01",
  endMonth: "01",
  endYear: "2023",
  onGoing: true,
  employmentType: "Full-Time",
  hoursPW: 35,
  datesEmployed: "2000-01-01",
  datesEmployedEnd: "2023-01-01",
};

const employeeRequest = {
  firstName: "Tessa",
  middleName: "test",
  lastName: "Smith",
  email: "johnsmithTest@test.com",
  phoneNumber: "0412345690",
  address: "123 fake address lane, NSW, 2250",
  contractType: "Contract",
  datesEmployedFirst: "1985-07-21",
  datesEmployedEnd: "2022-07-21",
  employmentType: "Full-Time",
  onGoing: true,
  hoursPW: 35,
};

beforeEach(() => {
  global.fetch = jest.fn();
  global.alert = jest.fn();
});

// GET

describe("getAll Test", () => {
  it("should fetch data from the backend", async () => {
    const mockResponse = [employeeData];

    // Mocking a fetch request
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const data = await getAll();

    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/employees");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(mockResponse);
  });

  it("should fetch data and return nothing if no data in the backend", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({}),
    });

    const data = await getAll();

    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/employees");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({});
  });
});

// POST

describe("postEmployee Tests", () => {
  it("should post data to the backend", async () => {
    const mockResponse = [employeeData];
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    await postEmployee(employeeData);

    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith("Success!");
    expect(logSpy).toHaveBeenCalledWith(mockResponse);

    logSpy.mockRestore();
  });

  it("should display an error if bad request", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(badRequest),
    });

    await postEmployee(badRequest);
    expect(alert).toHaveBeenCalledWith("unable to submit");
  });
});

// PATCH

describe("patchById Tests", () => {
  it("should update the employee by id", async () => {
    const mockResponse = { employeeRequest };
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await patchById(employeeData);

    expect(logSpy).toHaveBeenCalledWith(`Employee updated!`);
    expect(alert).toHaveBeenCalledWith(`Employee updated!`);
    expect(result).toBe(true);
  });

  it("should return an error for a bad request", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(badRequest),
    });

    await patchById(badRequest);
    expect(alert).toHaveBeenCalledWith(
      "Couldn't update employee with id of " + badRequest.id
    );
  });
});

// DELETE

describe("deleteById Test", () => {
  it("Should delete the employee when the id is passed in", async () => {
    const mockResponse = {};
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    const idToDelete = 1;
    const result = await deleteById(idToDelete);

    expect(result).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:8080/employees/${idToDelete}`,
      {
        method: "DELETE",
      }
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should return an error for a bad request", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(badRequest),
    });

    await deleteById(badRequest);

    expect(alert).toHaveBeenCalledWith(`unable to delete`);
  });
});
