import React from 'react';
import classes from './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes["app-wrapper"]}>
                <Header/>
                <Nav/>
                <div>
                    <Route exact path="/" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state} addAlertF={props.addAlertF}/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
