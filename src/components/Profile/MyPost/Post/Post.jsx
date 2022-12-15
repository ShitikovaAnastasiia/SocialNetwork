import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.posts}>
            <div><img className={classes.ava} src="https://i.ibb.co/mH2WWkJ/Rectangle-16.jpg"
                      alt="Rectangle-16"/></div>
            <span className={classes.posts_test}>{props.message}</span>

            <div className={classes.like}>Like</div>
            {props.like}
        </div>
    )
}
export default Post;