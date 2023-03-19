import { combineStartDate, combineEndDate } from "../formServices";

describe("combineStartDate Tests", () => {
  it("should combine the 3 input strings from data object together into one date string", () => {
    const data = {
      startDay: "01",
      startMonth: "01",
      startYear: "1990",
    };
    const dateString = new Date("1990-01-01");
    expect(combineStartDate(data)).toEqual(dateString);
  });
});

describe("combineEndDate Tests", () => {
  it("should combine the 3 input strings from data object together into one date string", () => {
    const data = {
      endDay: "01",
      endMonth: "05",
      endYear: "2000",
    };
    const dateString = new Date("2000-05-01");
    expect(combineEndDate(data)).toEqual(dateString);
  });
});
