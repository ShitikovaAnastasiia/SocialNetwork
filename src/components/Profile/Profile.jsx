import classes from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={classes.main_content}>
            <ProfileInfo tel='+7 (999) 212-21-12'/>
            <MyPost/>

        </div>
    )
};
export default Profile;