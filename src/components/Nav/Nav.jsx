import React from 'react'
import classes from './Nav.css'

export const Nav = props => {
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>MySOCIAL</div>
            <div className={classes.nav_link}>Profile</div>
            <div className={classes.nav_link}>Messages</div>
            <div className={classes.nav_link}>News</div>
            <div className={classes.nav_link}>Music</div>
            <div className={classes.nav_link}>Settings</div>
        </nav>
    )
}