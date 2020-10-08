import React from "react"
import {addNewMessageCreator, updateNewTextMessageCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//     let state= props.store.getState().dialogsPage
//       let  onSendMessage= () =>{
//           props.store.dispatch(addNewMessageCreator())
//     }
//     let onChangeMessage= (body) =>{
//         props.store.dispatch(updateNewTextMessageCreator(body))
//
//     }
//     return (
//        <Dialogs updateNewTextMessage={onChangeMessage} addNewMessageCreator={onSendMessage} value={state.newTextMessage} dialogsPage={state}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage,
        value : state.dialogsPage.newTextMessage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessageCreator : (newMessageBody) =>{
            dispatch(addNewMessageCreator(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
