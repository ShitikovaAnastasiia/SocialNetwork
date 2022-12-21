import MessageItem from "./MessageItem/MessageItem";
import classes from './Messages.module.css'
import React from "react";

const Message = (props) => {
    return (<>
            <div className={classes.message}>{props.message}</div>
        </>
    )
}

const Messages = (props) => {


    const newMessageElement = React.createRef();
    const addMessage = () => {
        const text = newMessageElement.current.value
        props.addMessage()
        props.updateNewMessageText('');
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value
        props.updateNewMessageText(text);
    }
    const dialogsElement = props.state.profilePage.userData.map(u => <MessageItem name={u.user} id={u.id}/>)
    const messageElement = props.state.messagePage.messageData.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={classes.dialog_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <textarea placeholder='new message' className={classes.textarea} onChange={onMessageChange}
                          ref={newMessageElement} value={props.newMessageText}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>

    )
}
export default Messages;