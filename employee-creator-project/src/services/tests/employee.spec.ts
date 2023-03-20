import { getAll, postEmployee, deleteById } from "../employee";
import { FormTypes } from "../../types/form";

const employeeData: FormTypes = {
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
});

describe("getAll Test", () => {
  it("should fetch data from the backend", async () => {
    const mockResponse = [employeeData];

    // Mocking a fetch request
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const data = await getAll();

    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/posts");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(mockResponse);
  });
});

describe("postEmployee Test", () => {
  it("should post data to the backend", async () => {
    const mockResponse = [employeeData];
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    await postEmployee(employeeData);

    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(mockResponse);

    logSpy.mockRestore();
  });
});

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
      `http://localhost:8080/posts/${idToDelete}`,
      {
        method: "DELETE",
      }
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
