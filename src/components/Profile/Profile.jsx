import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={classes.main_content}>
            <ProfileInfo tel='+7 (999) 212-21-12'/>
            <MyPost postData={props.state.profilePage.postData}/>

        </div>
    )
};
export default Profile;