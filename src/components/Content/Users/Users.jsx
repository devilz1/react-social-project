import React, {Component} from 'react';
import {connect} from "react-redux";
import './Users.scss'
import _ from "underscore";
import * as axios from "axios";
import default_photo from "./../../../image/default-photo.png";
import Preloader from "../../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

class Users extends Component{
    constructor(props){
        super(props);

        this.onPageChanged = this.onPageChanged.bind(this);
    }
    componentDidMount() {
        this.props.setTogglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setTogglePreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.setTogglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            this.props.setTogglePreloader(false);
            this.props.setUsers(response.data.items);
        });
    };

    render = () => {
        let props = this.props,
            pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
            pages = [],
            fetching = props.isFetching;

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        {return !fetching
                    ? <div className="users">
                    {
                        _.map(props.users, (index, key) => {
                            return  <div className="users__item" key={key}>
                                <NavLink to={'/profile/' + index.id}>
                                    <div className="users__item-ava">
                                        <img src={!index.photos.large ? default_photo : index.photos.large} alt={index.name}/>
                                    </div>
                                </NavLink>
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
                    <div className="pagination">
                        {
                            pages.map((item, key) => {
                                return <span
                                    key={key}
                                    className={props.currentPage === item ? 'is_clicked_pagination' : ''}
                                    onClick={(e) => {this.onPageChanged(item)}}
                                >{item}</span>
                            })
                        }
                    </div>
                </div>
                : <Preloader/>
        };

    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersAll.users,
        pageSize: state.usersAll.pageSize,
        totalUsersCount: state.usersAll.totalUsersCount,
        currentPage: state.usersAll.currentPage,
        isFetching: state.usersAll.isFetching,
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
        },
        setCurrentPage: (id_page) => {
            dispatch({
                type: 'SET_CURRENT_PAGE',
                action: id_page
            })
        },
        setTotalUsersCount: (count) => {
            dispatch({
                type: 'SET_TOTAL_USERS_COUNT',
                action: count
            })
        },
        setTogglePreloader: (toggle) => {
            dispatch({
                type: 'TOGGLE_IS_FETCH',
                action: toggle
            })
        }
    }
};

export const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(Users);