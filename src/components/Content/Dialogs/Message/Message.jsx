import React from 'react'
import './../Dialogs.scss'

const Message = (props) => {
    return(
        <div className="message-item">{props.message}</div>
    )
};

export default (Message);
