import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, savePhoto, saveProfile, updateUsersStatus,} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }

        }
        this.props.getUsersProfile(userId)
        this.props.getUsersStatus(userId)
}
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }

    }

    componentDidMount() {
        this.refreshProfile();
    }

    render() {

        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} status={this.props.status}
                     updateUsersStatus={this.props.updateUsersStatus} savePhoto ={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
        );
    }

};


let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth : state.auth.isAuth
    }

);

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUsersStatus, updateUsersStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

