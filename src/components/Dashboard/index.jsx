import { Button } from "@mui/material";
import { useNavigate } from "react-router";
export const Dashboard = () =>{

    const navigate = useNavigate()
    const logoutHandler = () =>{
        localStorage.removeItem('token');
        navigate('/');
    }
    return(<>
    <h1>Welcome to Dashboard</h1>
    <Button  onClick={logoutHandler}>LogOut</Button></>)
}

export default Dashboard;