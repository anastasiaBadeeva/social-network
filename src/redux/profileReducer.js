import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
let initialState = {
    postData: [
        {id: 1, message: "hi,how are you", likeCount: 12},
        {id: 2, message: "hi gays", likeCount: 10},
        {id: 3, message: "you", likeCount: 10},
        {id: 4, message: "lalala", likeCount: 10},
    ],
    profile: null,
    status: "",
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5, message: action.newPost, likeCount: 20
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }

        case  SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case  SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case  SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile , photos: action.photos}
            }
        default :
            return state
    }

}
export const addPostActionCreator = (newPost) => {

    return {type: ADD_POST, newPost}
}

export const setUsersProfile = (profile) => {

    return {type: SET_USER_PROFILE, profile}
}

export const setUsersStatus = (status) => {

    return {type: SET_USER_STATUS, status}
}
export const savePhotoSuccess = (photos) => {

    return {type: SAVE_PHOTO_SUCCESS, photos}
}

export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data));


}
export const getUsersStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId)
    dispatch(setUsersStatus(response.data));
}

export const updateUsersStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUsersStatus(status));
    }

}


export const savePhoto = (file) => async (dispatch) => {

    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

}

export const saveProfile = (formData) => async (dispatch, getState) => {
  const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(formData)
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    }else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }

}


export default profileReducer;

