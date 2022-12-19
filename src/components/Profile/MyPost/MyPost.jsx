import classes from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    // const postData = [
    //     {message: 'My first post', like: 1, id: 1},
    //     {message: 'How are you?', like: 3, id: 2}
    // ]
    const postElements = props.postData.map(p => <Post message={p.message} like={p.like} id={p.id}/>)
    return (
        <div className={classes.posts}>
            My posts
            <div className={classes.new_post}><textarea placeholder='New post'></textarea>

                <div>
                    <button className={classes.button}>Send</button>
                </div>
            </div>
            {postElements}

        </div>
    );
}

export default MyPost;