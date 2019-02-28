import React, {Component} from 'react'
import './Nav.sass'
import {NavLink} from "react-router-dom";

export class Nav extends Component{
    state = {
        isOpen: false
    };

    showHideCLick = () => {
        this.setState({
            isOpen: true
        })
    };

    render () {
        return (
            <nav className={"nav"}>
                <NavLink to="/" exact activeClassName={"myClassActive"}>
                    <div className={"nav_link"}>My page</div>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={"myClassActive"}>
                    <div className={"nav_link"}>Messages</div>
                </NavLink>
                <NavLink to="/news" activeClassName={"myClassActive"}>
                    <div className={"nav_link"}>News</div>
                </NavLink>
                <NavLink to="/music" activeClassName={"myClassActive"}>
                    <div className={"nav_link"}>Music</div>
                </NavLink>
                <NavLink to="/settings" activeClassName={"myClassActive"}>
                    <div className={"nav_link"}>Settings</div>
                </NavLink>
                <div className={"buttonDiv"} onClick={this.showHideCLick}></div>
            </nav>
        )
    }
}