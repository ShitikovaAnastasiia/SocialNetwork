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
    const userData = [
        {user: 'Ana', id: 1},
        {user: 'John', id: 2},
        {user: 'Mark', id: 3}
    ]
    const messageData = [
        {message: 'Hi', id: 1}
    ]
    return (
        <div className={classes.dialog_wrapper}>
            <div className={classes.dialogs}>
                <MessageItem name={userData[0].user} id={userData[0].id}/>
                <MessageItem name={userData[1].user} id={userData[1].id}/>
                <MessageItem name={userData[2].user} id={userData[2].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
            </div>
        </div>

    )
}
export default Messages;