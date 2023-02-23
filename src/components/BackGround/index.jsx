import classes from "./style.module.css";
import backImg from "./asset/Saly-3.png"; 
import rightImg from "./asset/Saly-2.png";
import { FormComponent } from "../FormComponent";
export const BackGround = () =>{
    return(<>
    <div className={classes.main} >
        <div className={classes.left}>
            <img className={classes.leftimg}  src={backImg}></img>
        </div>
        <div className={classes.right}> <img className={classes.rightimg}  src={rightImg}></img></div>
    </div>
    <div className={classes.place}>
        <FormComponent/>
    </div>
    </>)
}

export default BackGround;