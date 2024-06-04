import axios from "axios";

const api = axios.create({
  baseURL: "https://coffelab-api.onrender.com",
});

// Define a type for the Admin
interface Admin {
  id: string;
  email: string;
  password: string;
}

// Function to login an admin
const loginAdmin = async (email: string, password: string) => {
  try {
    const response = await api.get(`/admin/login/${email}/${password}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to create a new admin
const createAdmin = async (admin: Omit<Admin, "id">) => {
  try {
    const response = await api.post("/admin", admin);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to delete an admin by id
const deleteAdmin = async (id: string) => {
  try {
    const response = await api.delete(`/admin?admin_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update admin password
const updateAdminPassword = async (id: string, newPassword: string) => {
  try {
    const response = await api.put("/admin/password", { id, newPassword });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get all admins
const getAllAdmins = async () => {
  try {
    const response = await api.get("/admin/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  loginAdmin,
  createAdmin,
  deleteAdmin,
  updateAdminPassword,
  getAllAdmins,
};
