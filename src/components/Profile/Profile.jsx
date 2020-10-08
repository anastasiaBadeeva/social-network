import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import Preloader from "../common/preloader/preloader";



const Profile = ({profile,status,updateUsersStatus,isOwner,savePhoto,saveProfile}) => {
if (!profile){
    return <Preloader/>
}
    return (
        <div>
            <ProfileInfo  saveProfile={saveProfile} isOwner={isOwner} profile={profile} status={status} updateUsersStatus={updateUsersStatus} savePhoto={savePhoto}/>

            <MyPostContainer  />

        </div>
    );
};
export default Profile;
