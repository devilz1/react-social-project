import React from 'react';
import './PreloaderButton.scss';
import preloader from "./../../../image/Spinner-1.5s-200px.svg"

const PreloaderButton = props => {
    return (
        <span className="wrapperPreloader">
            <img src={preloader} alt="" className="preloaderButton"/>
        </span>
    )
}

export default PreloaderButton