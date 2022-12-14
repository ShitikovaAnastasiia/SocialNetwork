import classes from './Nav.module.css'
import {Link, NavLink} from "react-router-dom";

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_item}><NavLink to='/Profile' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>Profile</NavLink></div>
            <div className={classes.nav_item}><NavLink to='/Messages'
                                                       className={({isActive}) => isActive ? classes.active_link : undefined}>Messages</NavLink>
            </div>
            <div className={classes.nav_item}><NavLink to='/News' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>News</NavLink></div>
            <div className={classes.nav_item}><NavLink to='/Music' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>Music</NavLink></div>
            <div className={classes.nav_item}><NavLink to='/Settings' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>Settings</NavLink></div>
        </nav>
    )
};
export default Nav;