import api from "@/lib/api";

export async function loginApi(data: { email: string; password: string }) {
  const response = await api.post("/auth/login", data);
  return response.data;
}