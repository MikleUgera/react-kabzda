import React, {memo} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLenthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = memo(props => {
        let postElement = [...props.post]
            .reverse()
            .map(p => <Post message={p.name} count={p.count}/>);

        let onAddPost = (values) => {
            this.props.addPost(values.newPost);
        };

        return (
            <div>
                <h3>My posts</h3>
                <PostReduxFrom onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        )
});

const maxLenth = maxLenthCreator(10);

const AddPosts = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPost" component={Textarea}
                        validate={[required, maxLenth]}/>
                <button>AddPost</button>
            </div>
        </form>
    )
};

const PostReduxFrom = reduxForm({form: 'posts'})(AddPosts);

export default MyPosts;