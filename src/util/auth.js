import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
}

export function SetToken(name, password,state){
    const isCredentialsEqual = (element) => {return(element.email===name && element.password===password)};

console.log();
  if (state.findIndex(isCredentialsEqual)!== -1) {
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
