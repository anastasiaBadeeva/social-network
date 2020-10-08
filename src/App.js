import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import {compose} from "redux";
import withSuspense from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
if (!this.props.initialized){
    return <Preloader/>
}
        return (


                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Route path={"/profile/:userId?"} render={ withSuspense(ProfileContainer)}/>
                        <Route path={"/dialogs"} render={  withSuspense(DialogsContainer)}/>
                        {/*<Route path={"/profile"} component={Profile}/>*/}
                        {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/users"} component={UsersContainer}/>
                        <Route path={"/login"} component={Login}/>
                    </div>
                </div>

        );
    }
}
const mapStateToProps = (state) =>({
    initialized : state.appReducer.initialized,
})
export default compose(
    withRouter,
    connect (mapStateToProps,{initializeApp})
) (App);
