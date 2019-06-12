import React, {Component} from 'react';
import {connect} from "react-redux";
import './Users.scss'
import _ from "underscore";
import default_photo from "./../../../image/default-photo.png";
import Preloader from "../../Common/Preloader/Preloader";
import PreloaderButton from "../../Common/PreloaderButton/PreloaderButton";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";
import {
    follow, getPageChanged,
    getUsersThunkCreator,
    setButtonPreloader,
    setCurrentPage,
} from "../../../redux/reducers/usersReducer";

class Users extends Component{
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    render = () => {
        let props = this.props,
            pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
            pages = [],
            fetching = props.isFetching;
            console.log(props);

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
                                    <button
                                        disabled={props.isFetchButton ? true : false}
                                        className="users__button"
                                        onClick={
                                            () => {
                                                !index.followed
                                                    ?
                                                    usersAPI.getFollow(index.id).then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(index.id);
                                                            props.setButtonPreloader(false, index.id);
                                                        }
                                                    })
                                                    :
                                                    usersAPI.getUnfollow(index.id).then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(index.id);
                                                            props.setButtonPreloader(false, index.id);
                                                        }
                                                    })
                                                props.setButtonPreloader(true, index.id);
                                            }
                                        }>
                                        {
                                            index.followed
                                                ? !props.isFetchButton
                                                    ? "Удалить"
                                                    : props.idUserButtonToggle === index.id
                                                        ? <PreloaderButton/>
                                                        : "Удалить"
                                                : !props.isFetchButton
                                                    ? "Добавить"
                                                    : props.idUserButtonToggle === index.id
                                                        ? <PreloaderButton/>
                                                        : "Добавить"
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
                                    onClick={(e) => {props.getPageChanged(item, this.props.pageSize)}}
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
        isFetchButton: state.usersAll.isFetchingButton,
        idUserButtonToggle: state.usersAll.idUserButtonToggle,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },
        setCurrentPage: (id_page) => {
            dispatch(setCurrentPage(id_page));
        },
        setButtonPreloader: (toggle, id_user) => {
            dispatch(setButtonPreloader(toggle, id_user));
        },
        getUsersThunkCreator: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        },
        getPageChanged: (pageNum, pageSize) => {
            dispatch(getPageChanged(pageNum, pageSize));
        }
    }
};

export const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(Users);