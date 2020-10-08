import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

let store;
store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "hi,how are you", likeCount: 12},
                {id: 2, message: "hi", likeCount: 10},
            ],
            newPostValue: "hihihhi"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Ivan"},
                {id: 3, name: "Julia"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Dima"},],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "What's up?"},
                {id: 3, message: "How are you?"}],
            newTextMessage: ""
        },
    sidebar :{}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage= profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = messageReducer(this._state.dialogsPage,action)
        this._state.dialogsPage = sidebarReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state);

    }
};


export default store;
window.store=store;