import { FormTypes } from "../types/form";
import { combineStartDate, combineEndDate } from "./formServices";

// GET

export const getAll = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  console.log(data);
  return data;
};

// POST
export const postEmployee = async (newEmployee: FormTypes) => {
  try {
    const postData = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
    if (postData.ok) {
      const response = await postData.json();
      console.log(response);
      alert("success!");
      window.location.reload();
    } else {
      const errorMessage = await postData.text();
      throw new Error(errorMessage);
    }
  } catch (e) {
    alert("error, unable to submit!");
    console.log(e);
  }
};

// PATCH

export const patchById = async (data: any) => {
  if (!data.id) {
    throw new Error("Id not found");
  }
  const response = await fetch(`http://localhost:8080/posts/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      contractType: data.contractType,
      datesEmployedFirst: data.datesEmployedFirst,
      datesEmployedEnd: data.datesEmployedEnd,
      employmentType: data.employmentType,
      onGoing: data.onGoing,
      hoursPW: data.hoursPW,
    }),
  });
  if (response.ok) {
    alert("Employee updated!");
  } else {
    throw new Error("Couldn't update employee with id of " + data.id);
  }
  return true;
};

// DELETE
export const deleteById = async (id: any) => {
  const response = await fetch("http://localhost:8080/posts/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Couldn't find employee with id of" + id);
  }
  return await true;
};
