// GET

export const getAll = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  console.log(data);
  return data;
};

// POST

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
