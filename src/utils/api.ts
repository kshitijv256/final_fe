const API_URL = "http://127.0.0.1:5000";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });
};

export const askQuestion = async (question: string) => {
  return await fetch(`${API_URL}/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });
};
