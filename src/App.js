import React, {Component} from 'react';
import './App.scss';
import {Route, BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";

class App extends Component{
    render(props) {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Nav/>
                    <Route exact path="/" render={() => <Profile state={this.props.state}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={this.props.state}/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
