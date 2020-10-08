import React from "react";
import s from "./MyPost.module.css";
import Post from "./../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, require} from "../../../utils/validators/vaidators";
import {Textarea} from "../../common/formsControls/formsControls";

const  maxLength10 =maxLengthCreator(10)

const MyPost =React.memo( props => {


    let addPost = (values) => {
        props.onAddPost(values.newPost);

    }

    let post = props.postData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}
                                             key={p.id}/>)
    return (
        <div className={s.postBlock}>
            pypost
            <div>newpost</div>
            <AddNewPostForm onSubmit={addPost}/>
            <div>
                <div className={s.post}>
                    {post}
                </div>
            </div>
        </div>
    )
})

let AddNewPostForm = (props) =>{
    return( <form onSubmit={props.handleSubmit}>
        <div> <Field   component={Textarea} name={"newPost"} validate={[require, maxLength10]} > </Field> </div>
        <div> <button >ADD</button> </div>
    </form>)

}
AddNewPostForm = reduxForm({form : "profileAddNewPostForm"})(AddNewPostForm)



export default MyPost;
