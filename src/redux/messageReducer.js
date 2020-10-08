const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"

let initialState = {
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

}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            }
        default :
            return state;
    }


}


export const addNewMessageCreator = (newMessageBody) => {

    return {type: ADD_NEW_MESSAGE, newMessageBody}
}
export default messageReducer;