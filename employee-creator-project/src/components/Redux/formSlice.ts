import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    fullTime: false,
    partTime: false,
    contract: false,
    permanent: false,
    clicked: false,
    employees: [],
    edit: false,
    selectEmployee: null,
    data: [],
  },
  reducers: {
    setFullTime: (state, action) => {
      state.fullTime = action.payload;
    },
    setPartTime: (state, action) => {
      state.partTime = action.payload;
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setPermanent: (state, action) => {
      state.permanent = action.payload;
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    setSelectEmployee: (state, action) => {
      state.selectEmployee = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setFullTime,
  setPartTime,
  setContract,
  setPermanent,
  setClicked,
  setEmployees,
  setEdit,
  setData,
  setSelectEmployee,
} = formSlice.actions;

export default formSlice.reducer;
