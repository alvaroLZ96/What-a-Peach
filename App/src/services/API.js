import axios from "axios";

const apiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
  headers: apiHeaders,
  timeout: 6000,
  baseURL: "https://what-a-peach.onrender.com/api",
});
