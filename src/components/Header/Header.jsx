import React, {Component} from 'react'
import  './Header.scss'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

class Header extends Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data);
                }
            });
    }

    render() {
        return (
            <header className="header">
                <div className="header-block">
                    <span><b className="fa-psi"></b>chology</span>
                </div>
                <div className="header-auth">
                    {
                        !this.props.id
                        ? <NavLink to={'/login/'}>Login</NavLink>
                            : <NavLink to={'/profile'}>Привет, {this.props.login}</NavLink>
                    }

                </div>
            </header>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUserData: (data) => {
            dispatch({
                type: "SET_USER_DATA",
                data: data
            })
        },
        setToogleData: (toogle) => {
            dispatch({
                type: "TOGGLE_IS_FETCH",
                data: toogle
            })
        }
    }
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);