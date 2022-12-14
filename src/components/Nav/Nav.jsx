import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_item}><Link to='/Profile'>Profile</Link></div>
            <div className={classes.nav_item}><Link to='/Messages'>Messages</Link></div>
            <div className={classes.nav_item}><Link to='/News'>News</Link></div>
            <div className={classes.nav_item}><Link to='/Music'>Music</Link></div>
            <div className={classes.nav_item}><Link to='/Settings'>Settings</Link></div>
        </nav>
    )
};
export default Nav;