import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div><span><img className={classes.ava} src="https://i.ibb.co/mH2WWkJ/Rectangle-16.jpg"
                        alt="Rectangle-16"/></span>
            <span className={classes.posts_test}>{props.message}</span>

            <div className={classes.like}>Like{props.like}</div>
        </div>
    )
}
export default Post;