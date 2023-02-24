import classes from "./style.module.css";
import { TextField, Button } from "@mui/material";


export const RegisterForm = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.lefthead}>Welcome to Lorem</div>
        <div className={classes.signin}>Sign up</div>

        <div className={classes.subtitle}>
          Enter your username or email address
        </div>
        <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            placeholder={"username or email address"}
            fullWidth
          />
        </div>
        
        <div style={{ display: "flex",gap:'3%' }}>
          <div>
            <div className={classes.subtitle}>
              Username
            </div>
            <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
                              },
            }}
            placeholder={"Username"}
          />
        </div>
          </div>
          <div>
            <div className={classes.subtitle}>
              Contact Number
            </div>
            <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
                              },
            }}
            placeholder={"Contact Number"}
          />
        </div>
          </div>
        </div>
        <div className={classes.subtitle}>Enter your password</div>
        <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            fullWidth
            placeholder="Password"
          />
        </div>
       
        <div className={classes.btn}>
          <Button
            fullWidth
            style={{ backgroundColor: "#E48700" }}
            variant="contained"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
