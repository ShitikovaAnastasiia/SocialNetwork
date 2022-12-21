import classes from './Friedns.module.css'
const Friends=(props)=>{
    const userElements=props.user.map(u=>(u.user)+(' '))
    return(<div className={classes.friends}>
        Friends
        <div className={classes.ava}>{userElements}</div>
    </div>)
}
export default Friends;