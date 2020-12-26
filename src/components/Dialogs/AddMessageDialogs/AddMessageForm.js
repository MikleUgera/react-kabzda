import {Field, reduxForm} from "redux-form";
import {maxLenthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLenth = maxLenthCreator(50);

const AddDialogs = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessage"
                   validate={[required, maxLenth]}
                   component={Textarea}/>
            <button>AddMessage</button>
        </form>
    )
};

export default reduxForm({form: 'MessageElement'})(AddDialogs);