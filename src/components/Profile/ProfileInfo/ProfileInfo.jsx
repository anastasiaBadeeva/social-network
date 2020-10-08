import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import {updateUsersStatus} from "../../../redux/profileReducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";
import {createField, Textarea} from "../../common/formsControls/formsControls";
const ProfileInfo = ({profile, savePhoto,isOwner,status,updateUsersStatus,saveProfile}) => {
    let [editMode,setEditMode] = useState(false);
    const onMainPhotoSelected = (e) =>{
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit =  (formData) =>{
        console.log(formData)
        saveProfile(formData).then(
            ()=>{
                setEditMode(false)
            }

        )



    }
  return (

    <div >
      {/*<div>*/}
      {/*  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUJJdBjklbIoKWM6Ee5KXSjBB7yQcekq8xe2DASATckE28xOt5A" />*/}
      {/*</div>*/}

      <div className={s.desciptionBlock}>

          <img src={profile.photos.large || userPhoto} alt=""/>
          { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          </div>
        { editMode ? <ProfileDataForm initialValues ={profile}  onSubmit={onSubmit} profile={profile}/>: <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ ()=>{ setEditMode(true)}}/>}

        <ProfileStatusWithHooks status={status} updateUsersStatus ={updateUsersStatus}/>
    </div>
  );
};

let ProfileData = ({profile, isOwner, goToEditMode}) =>{
  return  <div>
      {isOwner &&  <div>
          <button onClick={goToEditMode}>Редактировать</button>
      </div>}
      <div> {profile.fullName}</div>
        <div> Филиал ТЭЦ-3: {profile.lookingForAJob ? "да" : "нет"}</div>
        <div> О себе: {profile.aboutMe}</div>
      <div> Должность: {profile.lookingForAJobDescription}</div>
        <div> Контакты: {Object.keys(profile.contacts).map( key =>{
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

let Contact = ({contactTitle, contactValue}) =>{
    return <div> <b>{contactTitle}</b> : {contactValue}</div>
}
export default ProfileInfo;
