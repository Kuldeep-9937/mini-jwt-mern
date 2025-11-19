const API_URL = "http://localhost:5000/api/auth";

// Reusable POST API function
export const postData = async (endpoint, data) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

// Protected GET
export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
