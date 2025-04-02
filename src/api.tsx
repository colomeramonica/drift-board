export const getTasks = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
  return response.json();
};

export const getMembers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/members`);
  return response.json();
};

export const createTask = async (task: any) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
};
