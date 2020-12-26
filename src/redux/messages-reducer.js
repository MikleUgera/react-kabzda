const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages:[
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How is your it-kamasutra'},
        {id: 3, name: 'Yo'},
        {id: 4, name: 'Hello, my name is Ugera Mikle'},
        {id: 5, name: 'I am is junior React developer'}],
    dialogs:[
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'Mikle'}
    ],
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                name: action.newMessage
            };

            return {...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default messageReducer;