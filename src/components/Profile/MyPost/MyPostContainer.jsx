import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer"
import MyPost from "./MyPost";
import {connect} from "react-redux";

// const MyPostContainer = (props) => {
//   let state= props.store.getState();
//     let onPostChange= (value) =>{
//         props.store.dispatch(updateNewPostTextActionCreator(value));
//     }
//     let onAddPost= () =>{
//         props.store.dispatch(addPostActionCreator());
//
//     }
//     return (<MyPost onAddPost={onAddPost} onPostChange={onPostChange} postData={state.profilePage.postData} newPostValue={state.profilePage.newPostValue}/>
//     );
// }

let mapStateToProps = (state) => {
    return {
        newPostValue :state.profilePage.newPostValue,
        postData : state.profilePage.postData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost : (newPost) =>{
            dispatch(addPostActionCreator(newPost))
        },

    }
}
 const MyPostContainer= connect(mapStateToProps,mapDispatchToProps)(MyPost)
export default MyPostContainer;
