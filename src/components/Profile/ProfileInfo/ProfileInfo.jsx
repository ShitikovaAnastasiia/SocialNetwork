import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (<>
            <div>
                <img className={classes.main_content_img} src="https://i.ibb.co/1JWF7T4/Rectangle-20.jpg"
                     alt="Rectangle-20"/>
            </div>
            <div><img className={classes.ava} src="https://i.ibb.co/mH2WWkJ/Rectangle-16.jpg" alt="Rectangle-16"/>

                Tips, Tricks & Tutorials
                {props.tel}
            </div>
        </>
    )
}
export default ProfileInfo;