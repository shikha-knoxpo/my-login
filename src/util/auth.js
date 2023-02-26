import { useNavigate } from "react-router";

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
}

export const setToken = (name, password) => {
  if (name === "admin@propelius.tech" && password === "123456@") {
    localStorage.setItem("token", "abcdef");
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
    return true;
  }
  return false;
};

export function CheckAuthLoader() {
    const navigate= useNavigate();
    const token = getAuthToken();
    console.log("test token")
  
    if (!token) {
      return navigate('/');
    }
  }
