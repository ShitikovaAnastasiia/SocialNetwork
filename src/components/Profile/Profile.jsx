import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={classes.main_content}>
            <ProfileInfo tel='+7 (999) 212-21-12'/>
            <MyPost postData={props.state.profilePage.postData} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>

        </div>
    )
};
export default Profile;