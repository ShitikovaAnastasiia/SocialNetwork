import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";




const Messages = () =>{
    return(
        <div className={classes.dialog_wrapper}>
            <div className={classes.dialogs}>
               <MessageItem name='Ana'/>
                <MessageItem name='John'/>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>

    )
}
export default Messages;