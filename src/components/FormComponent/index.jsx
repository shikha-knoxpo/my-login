import classes from "./style.module.css";
import { TextField,Button } from "@mui/material";
export const FormComponent = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.lefthead}>Welcome to Lorem</div>
        <div className={classes.signin}>Sign in</div>
        <br />
        <div className={classes.subtitle}>
          Enter your username or email address
        </div>
        <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
                width:"420px"
              },
            }}
          />
        </div>
        <div className={classes.subtitle}>Enter password</div>
        <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
                width:"420px"
              },
            }}
          />
        </div>
        <div className={classes.forgot}>
            Forgot Password?
        </div>
        <div className={classes.btn}><Button style={{width:"450px",backgroundColor:'#E48700'}} variant="contained" >Sign in</Button></div>
        
      </div>
    </>
  );
};
