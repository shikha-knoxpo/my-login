import { useNavigate,useLocation } from "react-router";
import { useEffect } from "react";

export const Authentication = ({children}) =>{
    const location = useLocation()
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')===null){
            if(location.pathname==='/register')
                navigate('/register');
            else{
                navigate('/login');
            }
        }
        else{
            navigate('/dashboard')
        }
    },[])
    return children;
};

export default Authentication;