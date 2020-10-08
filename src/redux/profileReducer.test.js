import profileReducer, {addPostActionCreator} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
it('length of post should be 5', () => {
    let state = {
        postData: [
            {id: 1, message: "hi,how are you", likeCount: 12},
            {id: 2, message: "hi gays", likeCount: 10},
            {id: 3, message: "you", likeCount: 10},
            {id: 4, message: "lalala", likeCount: 10},
        ],
    }
    let action = addPostActionCreator("hello gays")
    let newState = profileReducer(state , action)

    expect(newState.postData.length).toBe(3)
});

