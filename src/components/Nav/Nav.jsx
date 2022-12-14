import classes from './Nav.module.css'
const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_item}><a href='src/components#'>Profile</a></div>
            <div className={classes.nav_item}><a href='src/components#'>Messages</a></div>
            <div className={classes.nav_item}><a href='src/components#'>News</a></div>
            <div className={classes.nav_item}><a href='src/components#'>Music</a></div>
            <div className={classes.nav_item}><a href='src/components#'>Settings</a></div>
        </nav>
    )
};
export default Nav;