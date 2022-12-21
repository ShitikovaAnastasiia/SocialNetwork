import Post from "./Post/Post";
import React from "react";
import classes from './MyPost.module.css'

const MyPost = (props) => {

    const postElements = props.postData.map(p => <Post message={p.message} like={p.like} id={p.id}/>)
    const newPostElement = React.createRef();
    const addPost = () => {
        const text = newPostElement.current.value
        props.addPost()
        props.updateNewPostText('');
    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text);

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