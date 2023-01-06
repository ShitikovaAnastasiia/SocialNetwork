import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profilepage-reducer";
import classes from './MyPost.module.css'
const MyPost = (props) => {

    const postElements = props.postData.map(p => <Post message={p.message} like={p.like} id={p.id}/>)
    const newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:''});
    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        let action = onPostChangeActionCreator(text)
        props.dispatch(action);
    }
    return (
        <div className={classes.posts}>
            My posts
            <div className={classes.new_post}><textarea placeholder='New post' ref={newPostElement}
                                                        onChange={onPostChange} value={props.newPostText}/>

                <div>
                    <button className={classes.button} onClick={addPost}>Send</button>
                </div>
            </div>
            {postElements}

        </div>
    );
}

export default MyPost;