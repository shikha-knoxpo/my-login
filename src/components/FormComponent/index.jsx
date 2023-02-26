import classes from "./style.module.css";
import { TextField, Button } from "@mui/material";
import fb from "./asset/fb.png";
import apple from "./asset/apple1.png";
import google from "./asset/g12.png";
import { useMediaQuery } from "react-responsive";
import { Formik } from "formik";
import * as yup from "yup";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { setToken } from "../../util/auth";
import { useNavigate } from "react-router";

export const FormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const [login,setLogin] =useState();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .required("Password is a required field")
      .min(6, "Password must be at least 6 characters"),
  });

  const submitLogin = (values, actions) => {
    setToken(values.email,values.password) ? setLogin(true) : setLogin(false);
    //console.log(login)
    if(login){
        console.log("success");
        navigate('/dashboard');
    }
    


  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <div className={classes.main}>
        <div className={classes.lefthead}>Welcome to Lorem</div>
        <div className={classes.signin}>Sign in</div>

        {isTabletOrMobile && (
          <>
            <br />
            <div style={{ display: "flex", gap: "10%" }}>
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
                  style={{
                    maxHeight: "30%",
                    maxWidth: "30%",
                    marginRight: "5px",
                  }}
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
                <img
                  style={{ maxHeight: "50%", maxWidth: "50%" }}
                  src={fb}
                ></img>
              </Button>
            </div>
          </>
        )}

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            submitLogin(values, actions);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            setValues,
            isSubmitting,
            touched,
            values,
          }) => (
            <form>
              <div className={classes.subtitle}>
                Enter your username or email address
              </div>
              <div className={classes.textbox}>
                <TextField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
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
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    inputProps: {
                      style: {
                        height: "10px",
                      },
                    }
                  }}
                
                  fullWidth
                />
              </div>
              <div className={classes.forgot}>Forgot Password?</div>

              <div className={classes.btn}>
                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  type="submit"
                  style={{ backgroundColor: "#E48700" }}
                  variant="contained"
                >
                  Sign in
                </Button>
              </div>

              {isDesktopOrLaptop && (
                <>
                  {" "}
                  <p className={classes.or}>OR</p>
                  <div style={{ display: "flex", gap: "10%" }}>
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
                        style={{
                          maxHeight: "30%",
                          maxWidth: "30%",
                          marginRight: "5px",
                        }}
                        src={google}
                      ></img>
                      Sign in with google
                    </Button>
                    <Button
                      style={{ width: "10%", backgroundColor: "#F7F7F7" }}
                    >
                      <img
                        style={{ maxHeight: "50%", maxWidth: "50%" }}
                        src={apple}
                      ></img>
                    </Button>
                    <Button
                      style={{ width: "10%", backgroundColor: "#F7F7F7" }}
                    >
                      <img
                        style={{ maxHeight: "50%", maxWidth: "50%" }}
                        src={fb}
                      ></img>
                    </Button>
                  </div>
                </>
              )}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
