import React, {Component} from 'react'
import './Profile.scss'
import _ from 'underscore'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            ...props.state.state.messagesPostData,
        };

        this.addLikeClick = this.addLikeClick.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    addLikeClick = (id, props) => {
        let props_messages = props.state.state.messagesPostData;
        _.each(props_messages, (mess) => {
            if (mess.id === id) {
                mess.like = mess.like + 1
            }
        });

        this.setState({
            ...props_messages
        })
    };

    addPost = (newCurrent) => {
        let props = this.props.state.state;
        let newPost = {id: props.messagesPostData.length + 1, message: newCurrent.current.value, like: 0, recipient: 1, author: 'Nikolay'};
        props.messagesPostData.push(newPost);

        this.setState({
            ...props.messagesPostData
        })
    };

    render () {
        let props_user = this.props.state.state.user;
        let newPostMess = React.createRef();
        return (
            <div className="content">
                <div className="content__ava">
                    <img
                        src="https://avatars.mds.yandex.net/get-pdb/1530302/158711ff-80a3-4ef0-97f9-b4414b4a932c/s1200?webp=false"
                        alt=""/>
                </div>
                {
                    _.map(props_user, (item, key) => {
                        return <div className="content__info-user" key={key}>
                            <div className="content__info-user__ava">
                                <img src={item.avatar} alt=""/>
                            </div>
                            <div className="content__info-user__info">
                                <h2>{item.name}</h2>
                                <div>{item.birthday}</div>
                                <div>{item.city}</div>
                                <div>{item.education}</div>
                                <div>{item.site}</div>
                            </div>
                            <div className="content__info-image">
                                {
                                    _.map(item.photo, (photo, key) => {
                                        let photo_id = photo.id;
                                        return <img src={photo.link_href} alt={photo_id} key={key}/>
                                    })
                                }
                            </div>
                        </div>
                    })
                }

                <div className="content__mypost-send">
                    <textarea name="" id="" rows="5" placeholder="your news..." ref={newPostMess}></textarea><br/>
                    <button onClick={() => {this.addPost(newPostMess)}}>Send</button>
                </div>
                <div className="content__mypost-title">
                    <h1>My posts</h1>
                    <div className="content__mypost-all">
                        {
                            _.map(_.sortBy(this.state, 'id'), (mess, key) => {
                                if (_.contains(_.pluck(props_user, 'id'), mess.recipient)) {
                                    let message_id = mess.id;
                                    return <div className="content__post" key={key}>
                                        <div className="content__post-author"><span>{mess.author}</span></div>
                                        <div className="content__post-text">{mess.message}</div>
                                        <div className="content__post-like" onClick={() => {this.addLikeClick(message_id, this.props)}}>
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                size='1.5x'
                                                className="content__post-heart"
                                            />
                                            &nbsp;
                                            <span>{mess.like}</span>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default (Profile)
