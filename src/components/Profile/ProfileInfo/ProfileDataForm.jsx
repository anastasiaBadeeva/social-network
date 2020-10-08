import React from "react"
import {createField, Input, Textarea} from "../../common/formsControls/formsControls";
import {reduxForm} from "redux-form";
import style from "../../common/formsControls/formsControls.module.css";

let ProfileDataForm = ({profile,handleSubmit,error}) =>{
    return  <form onSubmit={handleSubmit}>
       <div>
            <button >Сохранить</button>

        </div>
        {
            error && <div className={style.formSummeryError}>
                {error}
            </div>
        }
        <div>  {createField("Имя","fullName" ,[],Input)}</div>
        <div> Филиал ТЭЦ-3: {createField("","lookingForAJob" ,[],Input, {type: "checkbox"})} </div>
        <div> О себе: {createField("","aboutMe" ,[],Textarea )}</div>
        <div> Должность: {createField("","lookingForAJobDescription" ,[],Textarea )}</div>
        <div> Контакты: {Object.keys(profile.contacts).map( key =>{
            return <div key={key}> {key} : {createField(key,"contacts." + key ,[],Input )}</div>
        })}</div>
    </form>
}
const ProfileDataFormRedux = reduxForm({
    form : "editProfile"
})(ProfileDataForm)
export default ProfileDataFormRedux