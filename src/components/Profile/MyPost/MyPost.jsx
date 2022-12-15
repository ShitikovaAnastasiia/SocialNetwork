import classes from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    const postData=[
        {message:'My first post', like:1,id:1},
        {message:'How are you?', like:3,id:2}
    ]

    return (
        <div className={classes.posts}>
            My posts
            <div className={classes.new_post}><textarea placeholder='New post'></textarea>

            <div>
                <button className={classes.button}>Send</button>
            </div></div>
            <Post message={postData[0].message} like={postData[0].like} id={postData[0].id}/>
            <Post message={postData[1].message} like={postData[1].like} id={postData[1].id}/>

        </div>
    );
}

export default MyPost;