import React, {Component} from 'react';
import './App.scss';
import {Route, BrowserRouter} from "react-router-dom";
import {Nav} from "./components/Nav/Nav";
import Music from "./components/Content/Music/Music";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import ContainerProfile from './components/Content/Profile/Profile';
import {ContainerUsers} from "./components/Content/Users/Users";
import {HeaderContainer} from "./components/Header/Header";

class App extends Component{
    render(props) {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <Route
                        path="/profile/:userId?"
                        render={() => <ContainerProfile/>}
                    />
                    <Route
                        path="/profile"
                        render={() => <ContainerProfile/>}
                        exact
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs/>}
                    />
                    <Route
                        path="/users"
                        render={() => <ContainerUsers/>}
                    />
                    <Route path="/music" render={() => <Music/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
