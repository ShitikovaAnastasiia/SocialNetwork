import MessageItem from "./MessageItem/MessageItem";
import classes from './Messages.module.css'
import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/messagepage-reducer";
import {AiOutlineSend} from "react-icons/ai";

const Message = (props) => {
    return (<>
            <div className={classes.message}>{props.message}</div>
            <div className={classes.username}>Ana</div>
        </>
    )
}

const Messages = (props) => {


    const newMessageElement = React.createRef();
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value
        props.dispatch(onMessageChangeActionCreator(text));
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
                <div>
                    <button onClick={addMessage} className={classes.button}><AiOutlineSend className={classes.icon}/></button>
                </div>
            </div>
        </div>

    )
}
export default Messages;