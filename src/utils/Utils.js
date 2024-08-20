import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigFile from "/tailwind.config.js";
import { jwtDecode } from "jwt-decode";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const tailwindConfig = () => {
  return resolveConfig(tailwindConfigFile);
};

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const formatThousands = (value) =>
  Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const getToken = () => {
  return localStorage.getItem("hrmapToken");
};

export const setToken = (token) => {
  localStorage.setItem("hrmapToken", token);
};

export const removeToken = () => {
  localStorage.removeItem("hrmapToken");
};

export const getDecodedToken = () => {
  const token = localStorage.getItem("hrmapToken");
  return jwtDecode(token);
};

export const getRole = () => {
  const token = localStorage.getItem("hrmapToken");
  const decodedToken = jwtDecode(token);
  return decodedToken[
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
  ];
};

export const getUsername = () => {
  const token = localStorage.getItem("hrmapToken");
  const decodedToken = jwtDecode(token);
  return decodedToken.sub;
};
