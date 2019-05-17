import React, {Component} from 'react';
import './App.scss';
import {Route, BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import Music from "./components/Content/Music/Music";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import ContainerProfile from './components/Content/Profile/Profile';

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
                        render={() => <ContainerProfile/>}
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
