import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";


const Message = (props) => {
    return (<>
            <div className={classes.message}>{props.message}</div>
        </>
    )
}

const Messages = () => {
    return (
        <div className={classes.dialog_wrapper}>
            <div className={classes.dialogs}>
                <MessageItem name='Ana' id='1'/>
                <MessageItem name='John' id='2'/>
                <MessageItem name='John' id='3'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
            </div>
        </div>

    )
}
export default Messages;