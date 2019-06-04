import React, {Component} from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export class Nav extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isStartClick: false,
            isPositionCursor: 0,
            isEndClick: false
        };

        this.showHideCLick = this.showHideCLick.bind(this);
        this.onSwipeStart = this.onSwipeStart.bind(this);
        this.onSwipeMove = this.onSwipeMove.bind(this);
        this.onSwipeEnd = this.onSwipeEnd.bind(this);
    }

    showHideCLick = () => {
        this.setState({
            isPositionCursor: this.state.isPositionCursor === 0 ? 220 : 0,
            isOpen: !this.state.isOpen
        });
    };

    onSwipeStart = () => {
        this.setState({
            isStartClick: !this.state.isStartClick
        });
    };

    onSwipeMove = (e) => {
        if (this.state.isStartClick) {
            if (e.changedTouches[0].clientX > 220) {
                this.setState({
                    isPositionCursor: 220
                });
            } else if (e.changedTouches[0].clientX < 0) {
                this.setState({
                    isPositionCursor: 0
                });
            }   else {
                this.setState({
                    isPositionCursor: e.changedTouches[0].clientX
                });
            }
        }
    };

    onSwipeEnd = (e) => {
        if (e.changedTouches[0].clientX > 100) {
            this.setState({
                isPositionCursor: 220,
                isOpen: true
            })
        } else {
            this.setState({
                isPositionCursor: 0,
                isOpen: false
            })
        }
    };

    render (props) {
        return (
            <nav
                className={"nav"}
                style={{
                    left: this.state.isPositionCursor - 220
                }}
                onTouchStart={this.onSwipeStart}
                onTouchMove={this.onSwipeMove}
                onTouchEnd={this.onSwipeEnd}
            >
                <NavLink to="/profile" exact activeClassName="myClassActive" onClick={this.showHideCLick}>
                    <div className="nav_link">My page</div>
                </NavLink>
                <NavLink to="/dialogs" activeClassName="myClassActive" onClick={this.showHideCLick}>
                    <div className="nav_link">Messages</div>
                </NavLink>
                <NavLink to="/users" activeClassName="myClassActive" onClick={this.showHideCLick}>
                    <div className="nav_link">Users</div>
                </NavLink>
                <NavLink to="/news" activeClassName="myClassActive" onClick={this.showHideCLick}>
                    <div className="nav_link">News</div>
                </NavLink>
                <NavLink to="/music" activeClassName="myClassActive" onClick={this.showHideCLick}>
                    <div className="nav_link">Music</div>
                </NavLink>
                <NavLink to="/settings" activeClassName="myClassActive" onClick={this.showHideCLick}>
                    <div className="nav_link">Settings</div>
                </NavLink>
                <FontAwesomeIcon icon={faBars} onClick={this.showHideCLick} className="buttonDiv" style={{
                    right: !this.state.isOpen ? "-3.2rem" : "1rem"
                }}
                />
                <div
                    className="testSwipe"
                    onTouchStart={this.onSwipeStart}
                    onTouchMove={this.onSwipeMove}
                    onTouchEnd={this.onSwipeEnd}
                >

                </div>
            </nav>
        )
    }
}