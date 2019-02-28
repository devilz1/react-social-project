import React from 'react'
import classes from './Dialogs.css'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    return(
        <NavLink to={"/dialogs/"+props.id} activeClassName={classes.myItemActive}>
            <div className={classes.item}>
                {props.name}
            </div>
        </NavLink>
    )
}

const Message = (props) => {
    return(
        <div className={classes["message-item"]}>{props.message}</div>
    )
}

export const Dialogs = props => {
    return (
        <div className={classes["dialogs-wrapper"]}>
            <h1 className={classes.title}>Dialogs</h1>
            <div className={classes["dialogs-items"]}>
                {props.state.dialogsData.map((desc, key) =>
                        <DialogItem key={key} name={desc.name} id={desc.id}/>
                    )
                }
            </div>
            <div className={classes.messages}>
                {
                    props.state.messagesData.map((mess, key) =>
                        <Message message={mess.messages} key={key}/>
                    )
                }
                <input type="text" name="input-message" placeholder="Введите всообщение..."/>
                <button onClick={props.addAlertF}>!!!</button>
            </div>
        </div>
    )
}