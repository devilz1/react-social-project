import React, {Component} from 'react'
import './Dialogs.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {connect} from "react-redux";

class Dialogs extends Component{
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

    render () {
        let props = this.props,
            state = props.messagesData;

        return (
            <div className="dialogs-wrapper">
                <h1 className="title">Dialogs</h1>
                <div className="dialogs-items">
                    {state.dialogsData.map((desc, key) =>
                        <DialogItem key={key} name={desc.name} id={desc.id}/>
                    )
                    }
                </div>
                <div className="messages">
                    {
                        state.messagesData.map((mess, key) =>
                            <Message message={mess.messages} key={key}/>
                        )
                    }
                    <textarea name="" id="" rows="5" placeholder="your news..." value={this.state.message} onChange={(e) => {this.changeTextMessage(e)}}></textarea><br/>
                    <button onClick={() => {props.addMessage(this.state.message); this.resetTextarea()}}>Отправить</button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesData,
        dialogsData: state.dialogsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch({type: "ADD_MESSAGE", data: newMessage})
        }
    }
};

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default (ContainerDialogs);