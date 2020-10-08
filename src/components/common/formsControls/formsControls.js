import React from "react";
import style from "./formsControls.module.css";
import {require} from "../../../utils/validators/vaidators";
import {Field} from "redux-form";

export const FormControl = ({input, meta :{ touched,error}, children}) =>{
    let hasError = touched && error;
    return(
        <div className={style.formControl  + " " + ( hasError ? style.error : "")} >
            <div>
                {children}
            </div>

            { hasError && <span>{error}</span>}
        </div>
    )

}


 export const Textarea = (props) =>{
    const {input, meta, ...restProps} =props
     return <FormControl {...props}> <textarea {...restProps} {...input}/></FormControl>

}

export const Input = (props) =>{
    const {input, meta, ...restProps} =props
    return <FormControl {...props}> <input {...restProps} {...input}/></FormControl>


}

export const  createField = (placeholder,name,validators,component,props) => {
    return <Field  placeholder={placeholder} component={component} name={name} validate={validators} {...props}/>
}