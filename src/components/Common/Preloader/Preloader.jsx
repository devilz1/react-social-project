import React from 'react';
import './Preloader.scss';
import preloader from "./../../../image/Gear-3.6s-200px.svg"

const Preloader = props => {
    return (
        <img src={preloader} alt="" className="preloader"/>
    )
}

export default Preloader