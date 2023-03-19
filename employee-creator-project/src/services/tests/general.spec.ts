import { getYearsDifference } from "../general";

describe("getYearsDifference Test", () => {
  it("should return the correct difference between the starting and end date", () => {
    const start = "2015-03-25";
    const end = "2022-03-25";
    const diff = "7.0";
    expect(getYearsDifference(start, end)).toEqual(diff);
  });

  it("should return the correct difference between starting and end date, months should also be correct", () => {
    const start = "2015-03-25";
    const end = "2022-04-25";
    const diff = "7.1";
    expect(getYearsDifference(start, end)).toEqual(diff);
  });

  it("should return an error for invalid input", () => {
    const start = "";
    const end = "2022-04-25";
    const error = "NaN";
    expect(getYearsDifference(start, end)).toEqual(error);
  });
});
