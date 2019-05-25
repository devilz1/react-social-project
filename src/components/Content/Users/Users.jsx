import React, {Component} from 'react';
import {connect} from "react-redux";
import './Users.scss'
import _ from "underscore";
import * as axios from "axios";
import default_photo from "./../../../image/default-photo.png"

class Users extends Component{
    constructor(props){
        super(props);

    };

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        let props = this.props;
        return (
            <div className="users">
                <div className="pagination">
                    {

                    }
                </div>
                {
                    _.map(props.users, (index, key) => {
                        return  <div className="users__item" key={key}>
                            <div className="users__item-ava">
                                <img src={!index.photos.large ? default_photo : index.photos.large} alt={index.name}/>
                            </div>
                            <div className="users__item-info-main">
                                <p className="users__item-name">{index.name}</p>
                                {/*<p className="users__item-city">City: <span>{index.location.city}</span></p>*/}
                            </div>
                            <div className="users__item-other-info">
                                <button className="users__button" onClick={() => {props.follow(index.id)}}>
                                    {
                                        index.followed ? "Удалить" : "Добавить"
                                    }
                                </button>
                                <p className="item-other-info__status">{index.status}</p>
                            </div>
                        </div>
                    })
                }
                <button className="users__add-button">Показать ещё</button>
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersAll.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch({
                type: 'FOLLOW',
                action: userId
            })
        },
        setUsers: (users) => {
            dispatch({
                type: 'SET_USERS',
                action: users
            })
        }
    }
};

export const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(Users);