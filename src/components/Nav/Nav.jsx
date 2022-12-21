
import {Link, NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import state from "../../redux/state";
import classes from './Nav.module.css'
const Nav = (props) => {

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
            <NavLink to='/Friends'>
                <Friends user={state.profilePage.userData}/></NavLink>
        </nav>
    )
};
export default Nav;