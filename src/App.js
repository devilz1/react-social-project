import React, {Component} from 'react';
import './App.scss';
import {Route, BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import Music from "./components/Content/Music/Music";
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";

class App extends Component{
    render(props) {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Nav/>
                    <Route
                        exact
                        path="/"
                        render={() => <Profile state={this.props.state} dispatch={this.props.dispatch} addPost={this.props.addPost}/>}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs state={this.props.state} dispatch={this.props.dispatch}/>}
                    />
                    <Route exact path="/music" render={() => <Music/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
