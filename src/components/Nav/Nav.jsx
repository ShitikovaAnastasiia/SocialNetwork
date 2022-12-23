
import { NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import state from "../../redux/state";
import classes from './Nav.module.css'
const Nav = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_item}><NavLink to='/profile' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>Profile</NavLink></div>
            <div className={classes.nav_item}><NavLink to='/messages'
                                                       className={({isActive}) => isActive ? classes.active_link : undefined}>Messages</NavLink>
            </div>
            <div className={classes.nav_item}><NavLink to='/news' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>News</NavLink></div>
            <div className={classes.nav_item}><NavLink to='/music' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>Music</NavLink></div>
            <div className={classes.nav_item}><NavLink to='/settings' className={({isActive}) =>
                isActive ? classes.active_link : undefined
            }>Settings</NavLink></div>
            <NavLink to='/friends'>
                <Friends user={props.state.profilePage.userData}/></NavLink>
        </nav>
    )
};
export default Nav;