import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";


const Message = (props) => {
    return (<>
            <div className={classes.message}>{props.message}</div>
        </>
    )
}

const Messages = (props) => {
    // const userData = [
    //     {user: 'Ana', id: 1},
    //     {user: 'John', id: 2},
    //     {user: 'Mark', id: 3}
    // ]
    // const messageData = [
    //     {message: 'Hi', id: 1},
    //     {message: 'How are you?', id: 2}
    // ]
    const dialogsElement = props.userData.map(u => <MessageItem name={u.user} id={u.id}/>)
    const messageElement = props.messageData.map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div className={classes.dialog_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>

    )
}
export default Messages;