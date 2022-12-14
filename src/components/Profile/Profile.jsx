import classes from './Profile.module.css'
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={classes.main_content}>
            <div>
                <img className={classes.main_content_img} src="https://i.ibb.co/1JWF7T4/Rectangle-20.jpg"
                     alt="Rectangle-20"/>
            </div>
            <div><img className={classes.ava} src="https://i.ibb.co/mH2WWkJ/Rectangle-16.jpg" alt="Rectangle-16"/>
                Tips, Tricks & Tutorials
               +7 (999) 212-21-12
            </div>
            <MyPost/>

        </div>
    )
};
export default Profile;