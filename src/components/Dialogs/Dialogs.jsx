import React from 'react'
import './Dialogs.scss'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = props => {
    console.log(props.id);
    return(
        <NavLink to={"/dialogs/"+props.id} activeClassName="myItemActive">
            <div className="item">
                {props.name}
            </div>
        </NavLink>
    )
};

const Message = props => {
    return(
        <div className="message-item">{props.message}</div>
    )
};

export const Dialogs = props => {
    return (
        <div className="dialogs-wrapper">
            <h1 className="title">Dialogs</h1>
            <div className="dialogs-items">
                {props.state.state.dialogsData.map((desc, key) =>
                        <DialogItem key={key} name={desc.name} id={desc.id}/>
                    )
                }
            </div>
            <div className="messages">
                {
                    props.state.state.messagesData.map((mess, key) =>
                        <Message message={mess.messages} key={key}/>
                    )
                }
                <input type="text" name="input-message" placeholder="Введите всообщение..."/>
                <button onClick={props.addAlertF}>!!!</button>
            </div>
        </div>
    )
}