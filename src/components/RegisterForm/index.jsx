import classes from "./style.module.css";
import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";


export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const initialValues = {
    email: "",
    username:"",
    phone:"",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    username:yup.string().required('Username is required')
    .min(8,"Username must be atleast 8 characters"),
    phone:yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required("Phone number is required"),
    password: yup
      .string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const submitLogin = (values, actions) => {
    console.log(values);
  };    

  return (
    <>
      <div className={classes.main}>
        <div className={classes.lefthead}>Welcome to Lorem</div>
        <div className={classes.signin}>Sign up</div>
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
              name='email'
              id='email'
              onChange={handleChange}
              error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
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
              name='username'
              id='username'
              onChange={handleChange}
              error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
              
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
              name='phone'
              id='phone'
              onChange={handleChange}
              error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
              
                inputProps={{
                  style: {
                    height: "10px",
                                  },
                }}
                placeholder={"Contact Number"}
                type='number'
              />
            </div>
              </div>
            </div>
            <div className={classes.subtitle}>Enter your password</div>
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
                placeholder="Password"
              />
            </div>
           
            <div className={classes.btn}>
              <Button
              onClick={(e) => {
                
                handleSubmit(e);
              }}
              type="submit"
                fullWidth
                style={{ backgroundColor: "#E48700" }}
                variant="contained"
              >
                Sign Up
              </Button>
            </div>
            </form>
    
          )}
        </Formik>
             </div>
    </>
  );
};

export default RegisterForm;
