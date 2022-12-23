import classes from './Friedns.module.css'
import FriendsMiniAva from "./FriendsMiniAva/FriendsMiniAva";
const Friends=(props)=>{
    const userElements=props.user.map(u=><FriendsMiniAva name={u.user} id={u.id}/>)
    return(<div className={classes.friends}>
        Friends
        <div className={classes.ava}>{userElements}</div>
    </div>)
}
export default Friends;