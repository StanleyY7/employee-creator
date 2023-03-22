import { configureStore } from "@reduxjs/toolkit";
import { employeeData } from "../../services/tests/employee.test";

import formReducer, {
  setFullTime,
  setPartTime,
  setContract,
  setPermanent,
  setClicked,
  setEmployees,
  setEdit,
  setData,
  setSelectEmployee,
} from "./formSlice";

describe("formSlice state Tests", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        form: formReducer,
      },
    });
  });

  test("Should set fullTime to true", () => {
    store.dispatch(setFullTime(true));
    const state = store.getState().form;
    expect(state.fullTime).toBe(true);
  });

  test("Should set partTime to true", () => {
    store.dispatch(setPartTime(true));
    const state = store.getState().form;
    expect(state.partTime).toBe(true);
  });

  test("Should set contract to true", () => {
    store.dispatch(setContract(true));
    const state = store.getState().form;
    expect(state.contract).toBe(true);
  });

  test("Should set permanent to true", () => {
    store.dispatch(setPermanent(true));
    const state = store.getState().form;
    expect(state.permanent).toBe(true);
  });

  test("Should set clicked to true", () => {
    store.dispatch(setClicked(true));
    const state = store.getState().form;
    expect(state.clicked).toBe(true);
  });

  test("Should set employees to an array", () => {
    store.dispatch(setEmployees(employeeData));
    const state = store.getState().form;
    expect(state.employees).toEqual(employeeData);
  });

  test("Should set edit to true", () => {
    store.dispatch(setEdit(true));
    const state = store.getState().form;
    expect(state.edit).toBe(true);
  });

  test("Should set selectEmployee to an object", () => {
    store.dispatch(setSelectEmployee(employeeData));
    const state = store.getState().form;

    expect(state.selectEmployee).toBe(employeeData);
  });

  test("Should set data to an array", () => {
    store.dispatch(setData(employeeData));
    const state = store.getState().form;
    expect(state.data).toEqual(employeeData);
  });

  test("Should set fullTime to false if it was true before", () => {
    store.dispatch(setFullTime(true));
    store.dispatch(setFullTime(false));
    const state = store.getState().form;
    expect(state.fullTime).toBe(false);
  });

  test("Should set partTime to false if it was true before", () => {
    store.dispatch(setPartTime(true));
    store.dispatch(setPartTime(false));
    const state = store.getState().form;
    expect(state.partTime).toBe(false);
  });

  test("Should set contract to false if it was true before", () => {
    store.dispatch(setContract(true));
    store.dispatch(setContract(false));
    const state = store.getState().form;
    expect(state.contract).toBe(false);
  });

  test("Should set permanent to false if it was set to true before", () => {
    store.dispatch(setPermanent(true));
    store.dispatch(setPermanent(false));
    const state = store.getState().form;
    expect(state.permanent).toBe(false);
  });

  test("Should set clicked to false if it was set to true before", () => {
    store.dispatch(setClicked(true));
    store.dispatch(setClicked(false));
    const state = store.getState().form;
    expect(state.clicked).toBe(false);
  });

  test("Should set edit to false if it was true before", () => {
    store.dispatch(setEdit(true));
    store.dispatch(setEdit(false));
    const state = store.getState().form;
    expect(state.edit).toBe(false);
  });
});
