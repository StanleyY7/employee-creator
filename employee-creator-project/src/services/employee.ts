import { FormTypes } from "../types/form";

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
    } else {
      const errorMessage = await postData.text();
      throw new Error(errorMessage);
    }
  } catch (e) {
    alert("error, unable to submit!");
    console.log(e);
  }
};

// DELETE
export const deleteById = async (id: any) => {
  const response = await fetch("http://localhost:8080/posts/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Couldn't find employee with " + id);
  }
  return await true;
};
