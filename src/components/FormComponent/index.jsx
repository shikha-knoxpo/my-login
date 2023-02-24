import classes from "./style.module.css";
import { TextField, Button } from "@mui/material";
import fb from "./asset/fb.png";
import apple from "./asset/apple1.png";
import google from "./asset/g12.png";
import { useMediaQuery } from 'react-responsive';

export const FormComponent = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
        })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <>
      <div className={classes.main}>
        <div className={classes.lefthead}>Welcome to Lorem</div>
        <div className={classes.signin}>Sign in</div>
        
        {isTabletOrMobile && <><br/><div style={{ display: "flex", gap: "10%" }}>
        <Button
          style={{
            width: "80%",
            height: "50px",
            backgroundColor: "#FFF4E3",
            fontSize: "0.5rem",
            color: "#B87514",
          }}
        >
          <img
            style={{ maxHeight: "30%", maxWidth: "30%", marginRight: "5px" }}
            src={google}
          ></img>
          Sign in with google
        </Button>
        <Button style={{ width: "10%", backgroundColor: "#F7F7F7" }}>
          <img
            style={{ maxHeight: "50%", maxWidth: "50%" }}
            src={apple}
          ></img>
        </Button>
        <Button style={{ width: "10%", backgroundColor: "#F7F7F7" }}>
          <img style={{ maxHeight: "50%", maxWidth: "50%" }} src={fb}></img>
        </Button>
      </div></>
        }

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
            fullWidth
          />
        </div>
        
        <div className={classes.subtitle}>Enter password</div>
        <div className={classes.textbox}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            fullWidth
          />
        </div>
        <div className={classes.forgot}>Forgot Password?</div>

        <div className={classes.btn}>
          <Button
            fullWidth
            style={{ backgroundColor: "#E48700" }}
            variant="contained"
          >
            Sign in
          </Button>
        </div>

       
        {isDesktopOrLaptop && <> <p className={classes.or}>OR</p><div style={{ display: "flex", gap: "10%" }}>
          <Button
            style={{
              width: "80%",
              height: "50px",
              backgroundColor: "#FFF4E3",
              fontSize: "0.5rem",
              color: "#B87514",
            }}
          >
            <img
              style={{ maxHeight: "30%", maxWidth: "30%", marginRight: "5px" }}
              src={google}
            ></img>
            Sign in with google
          </Button>
          <Button style={{ width: "10%", backgroundColor: "#F7F7F7" }}>
            <img
              style={{ maxHeight: "50%", maxWidth: "50%" }}
              src={apple}
            ></img>
          </Button>
          <Button style={{ width: "10%", backgroundColor: "#F7F7F7" }}>
            <img style={{ maxHeight: "50%", maxWidth: "50%" }} src={fb}></img>
          </Button>
        </div></>  }
        
      </div>
    </>
  );
};
