import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../constants/config";
import axios from "axios";

const adminLogin = createAsyncThunk("admin/login", async (secretKey) => {
  console.log("thunk");
  try {
    const config = {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `${server}/api/v1/admin/verify`,
      {
        secretKey,
      },
      config
    );
    return data.message;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/`, {
      withCredentials: true,
    });
    console.log("admin", data.admin);

    return data.admin;
  } catch (error) {
    throw error.response.data.message;
  }
});

const adminLogout = createAsyncThunk("admin/logout", async () => {
  try {
    console.log("admin logout");
    const { data } = await axios.get(`${server}/api/v1/admin/logout`, {
      withCredentials: true,
    });
    console.log("data", data);
    return data.message;
  } catch (error) {
    throw error.response.data.message;
  }
});
export { adminLogin, getAdmin, adminLogout };
