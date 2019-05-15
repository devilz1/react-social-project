import React, {Component} from 'react'
import './Dialogs.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends Component{
    render () {
        let props = this.props;
        let newMessage = React.createRef();

        return (
            <div className="dialogs-wrapper">
                <h1 className="title">Dialogs</h1>
                <div className="dialogs-items">
                    {props.state.dialogsData.map((desc, key) =>
                        <DialogItem key={key} name={desc.name} id={desc.id}/>
                    )
                    }
                </div>
                <div className="messages">
                    {
                        props.state.messagesData.map((mess, key) =>
                            <Message message={mess.messages} key={key}/>
                        )
                    }
                    <textarea name="" id="" rows="5" placeholder="your news..." ref={newMessage}></textarea><br/>
                    <button onClick={() => {props.dispatch({type: "ADD_MESSAGE", data: newMessage.current.value})}}>Отправить</button>
                </div>
            </div>
        )
    }
}

export default (Dialogs);