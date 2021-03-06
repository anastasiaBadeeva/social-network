import React from "react";
import s from "./ProfileInfo.module.css";
import {updateUsersStatus} from "../../../redux/profileReducer";

class ProfileStatus extends React.Component {
    state ={
        editMode : false,
        status : this.props.status
    }
    activateEditMode = () =>{
    this.setState({
        editMode : true
    })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode : false
        })
        this.props.updateUsersStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState({
            status:   e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }

    render() {
         return (
             <div >
                 { this.state.editMode ?
                     <div><input  onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status } onBlur={this.deactivateEditMode}/>
                     </div>

                     :<div>
                         <span onDoubleClick={ this.activateEditMode
                         }>{this.props.status || "----"}</span>
                     </div> }

             </div>
         );
     }
};
export default ProfileStatus;
