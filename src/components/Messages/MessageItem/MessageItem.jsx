import classes from "./MessageItem.module.css";
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    return (
        <>
            <NavLink to='/Messages/1' className={classes.dialog}>{props.name}</NavLink>

        </>
    )
}
export default MessageItem;