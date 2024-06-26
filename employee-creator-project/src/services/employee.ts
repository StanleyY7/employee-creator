import { FormTypes } from "../types/form";

// GET

export const getAll = async () => {
  const response = await fetch(
    "https://ec-backend-gqyr.onrender.com/employees"
  );
  const data = await response.json();
  console.log(data);
  return data;
};

// POST
export const postEmployee = async (newEmployee: FormTypes) => {
  try {
    const postData = await fetch(
      "https://ec-backend-gqyr.onrender.com/employees",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      }
    );
    if (postData.ok) {
      const response = await postData.json();
      console.log(response);
      alert("Success!");
      window.location.href = "/all-employees";
    } else {
      alert("unable to submit");
    }
  } catch (e) {
    console.log(e);
  }
};

// PATCH

export const patchById = async (data: any) => {
  if (!data.id) {
    throw new Error("Id not found");
  }
  const response = await fetch(
    `https://ec-backend-gqyr.onrender.com/employees/${data.id}`,
    {
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
    }
  );

  console.log(`Employee updated!`);
  alert("Employee updated!");
  if (!response.ok) {
    alert("Couldn't update employee with id of " + data.id);
  }

  return await true;
};

// DELETE
export const deleteById = async (id: any) => {
  const response = await fetch(
    "https://ec-backend-gqyr.onrender.com/employees/" + id,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    alert("employee deleted!");
  } else if (!response.ok) {
    alert("unable to delete");
  }
  return await true;
};
