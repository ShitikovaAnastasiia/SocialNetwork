import classes from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={classes.posts}>
            My posts
            <div>New posts</div>
            <textarea></textarea>
            <button className={classes.button}>Send</button>
            <Post message='My first post' like='1'/>
            <Post message='How are you?' like='3'/>
        </div>
    );
}

export default MyPost;