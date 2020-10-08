import React from "react"
import s from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import Dialogsitem from "./DialogsItem/Dialogsitem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/formsControls";
import {maxLengthCreator, require} from "../../utils/validators/vaidators";

const  maxLength50 =maxLengthCreator(50)
const Dialogs = (props) => {
    let dialogsElemetnts= props.dialogsPage.dialogs.map(d =><Dialogsitem id={d.id} name={d.name} key={d.id}/> );
    let messagesElemetnts= props.dialogsPage.messages.map(m =><Message id={m.id} message={m.message} key={m.id}/> );

    let addNewMessage= (values) =>{
        props.addNewMessageCreator(values.newMessageBody)

    }
    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElemetnts}

            </div>

            <div className={s.messages}>
                <div>{messagesElemetnts}</div>


            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
 const addMessageForm =(props) =>{
    return(  <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Enter your message"} component={Textarea} name={"newMessageBody" } validate={[require, maxLength50]}></Field></div>
        <div> <button >Send</button></div>
    </form>)
 }

const AddMessageFormRedux = reduxForm({
    form : "dialogAddMessageForm"
})(addMessageForm)
export default Dialogs;
