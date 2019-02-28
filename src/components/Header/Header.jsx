import React from 'react'
import classes from './Header.css'

export const Header = props => {
    return (
        <header className={classes.header}>
            <div>
                <span><b className={classes["fa-psi"]}></b>chology</span>
            </div>
        </header>
    )
}