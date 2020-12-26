import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts:[
        {id: 1, name: 'Hi, how are you', count: 12},
        {id: 2, name: 'It is my first react', count: 10},
        {id: 3, name: 'hello', count: 100},
    ]
};

test('new post should be added', () => {
    let action = addPostActionCreator("it-kamasutra");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].name).toBe("it-kamasutra");
});

test('delete post', () => {
    let action = deletePost(100);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});