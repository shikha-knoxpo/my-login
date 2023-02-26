import { useNavigate } from "react-router";
import { useEffect } from "react";

export const Authentication = ({children}) =>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')===null){
            navigate('/login');
        }
        else{
            navigate('/dashboard')
        }
    },[])
    return children;
};

export default Authentication;