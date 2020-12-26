import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            posts:[
                {id: 1, name: 'Hi, how are you', count: 12},
                {id: 2, name: 'It is my first react', count: 10},
                {id: 3, name: 'hello', count: 100},
            ],
            newPostText: "it-kamasutra.com"
        },
        messagesPage:{
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
            newMessageText: "it-kamasutra.com"
        },
        sidebar:{
            items:[
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'}
            ]
        }
    },
    _subscribe(){

    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._subscribe = observer;
    },

    dispatch(action){

        profileReducer(this._state.profilePage, action);
        messageReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._subscribe();

    }

};

export default store;