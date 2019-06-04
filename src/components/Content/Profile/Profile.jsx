import React, {Component} from 'react'
import './Profile.scss'
import _ from 'underscore'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import * as axios from "axios";
import Preloader from "../../Common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: ""
        };

        this.changeTextMessage = this.changeTextMessage.bind(this);
        this.resetTextarea = this.resetTextarea.bind(this);
    }

    changeTextMessage(e){
        this.setState({
            message: e.target.value
        })
    }

    resetTextarea(){
        this.setState({
            message: ""
        })
    }

    componentDidMount() {
        let userID = this.props.match.params.userId;
        this.props.setToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${!userID ? 1078 : userID}`)
            .then(response => {
                this.props.setProfile(response.data);
                this.props.setToggle(false);
        });
    }

    render () {
        let props = this.props,
            state = props.messagesPostData,
            props_user = props.profile,
            newPostMess = React.createRef();
        {
            return !props_user || props.isFetching
                ? <Preloader/>
                : <div className="content">
                    <div className="content__ava">
                        <img
                            src="https://avatars.mds.yandex.net/get-pdb/1530302/158711ff-80a3-4ef0-97f9-b4414b4a932c/s1200?webp=false"
                            alt=""/>
                    </div>
                    <div className="content__info-user">
                        <div className="content__info-user__ava">
                            <img src={props_user.photos.large} alt=""/>
                        </div>
                        <div className="content__info-user__info">
                            <h2>{props_user.fullName}</h2>
                            <div>{props_user.birthday}</div>
                            <div>{props_user.city}</div>
                            <div>{props_user.aboutMe}</div>
                            <div>{props_user.site}</div>
                        </div>
                        {/*<div className="content__info-image">*/}
                            {/*{*/}
                                {/*_.map(props_user.photos, (photo, key) => {*/}
                                    {/*let photo_id = photo.id;*/}
                                    {/*return <img src={photo.link_href} alt={photo_id} key={key}/>*/}
                                {/*})*/}
                            {/*}*/}
                        {/*</div>*/}
                    </div>

                    <div className="content__mypost-send">
                        <textarea name="" id="" rows="5" placeholder="your news..." ref={newPostMess} value={this.state.message} onChange={(e) => {this.changeTextMessage(e)}}></textarea><br/>
                        <button onClick={()=>{props.addPost(this.state.message); this.resetTextarea()}}>Send</button>
                    </div>
                    <div className="content__mypost-title">
                        <h1>My posts</h1>
                        <div className="content__mypost-all">
                            {
                                _.map(_.sortBy(state, 'id').reverse(), (mess, key) => {
                                        let message_id = mess.id;
                                        return <div className="content__post" key={key}>
                                            <div className="content__post-author"><span>{mess.author}</span></div>
                                            <div className="content__post-text">{mess.message}</div>
                                            <div className="content__post-like" onClick={()=>{props.updateLikeCount(message_id)}}>
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    size='1x'
                                                    className="content__post-heart"
                                                />
                                                &nbsp;
                                                <span>{mess.like}</span>
                                            </div>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                </div>
        }
    }
}

let mapStateToProps = (state) => {
    return {
        messagesPostData: state.messagesPostData.messagesPostData,
        isFetching: state.messagesPostData.isFetching,
        profile: state.messagesPostData.profile
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch({type: "ADD_POST", data: newPost});
        },

        setProfile: (arUser) => {
            dispatch({type: "SET_PROFILE", data: arUser})
        },

        updateLikeCount: (message_id) => {
            dispatch({type: "ADD_LIKE_CLICK", data: message_id})
        },

        setToggle: (toggle) => {
            dispatch({type: "TOGGLE_IS_FETCH", data: toggle})
        }
    }
};

const ContainerProfile = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

export default ContainerProfile;