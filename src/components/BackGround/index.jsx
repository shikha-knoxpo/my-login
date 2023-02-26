import classes from "./style.module.css";
import backImg from "./asset/Saly-3.png";
import rightImg from "./asset/Saly-2.png";
import { FormComponent } from "../FormComponent";
import RegisterForm from "../RegisterForm";
import { useMediaQuery } from 'react-responsive';
import { Outlet } from "react-router";

export const BackGround = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
        })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <>
    {isDesktopOrLaptop && <><div className={classes.main}>
        <div className={classes.left} >
          <img className={classes.leftimg} src={backImg}></img>
        </div >
        <div className={classes.place} >
          
          <Outlet/>
        </div>
        <div className={classes.right} >
          {" "}
          <img className={classes.rightimg} src={rightImg}></img>
        </div>
      </div></>}
      {isTabletOrMobile && <><div className={classes.mainMobile}>
      <div className={classes.placeMobile} >
          
          <Outlet/>       </div>
        </div></>}
      
    </>
  );
};

export default BackGround;
