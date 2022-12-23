import classes from "./MessageItem.module.css";
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    const path = '/messages/'+props.id
    return (
        <>
            <NavLink to={path} className={classes.dialog}>{props.name}</NavLink>

        </>
    )
}
export default MessageItem;