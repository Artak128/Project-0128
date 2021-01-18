import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {

        profilePage: {

            posts: [
                { id: 1, message: 'Hey whats up', likesCount: 15 },
                { id: 2, message: 'Whats your name ?', likesCount: 20 }
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Vincent' },
                { id: 2, name: 'Jules' },
                { id: 3, name: 'Butch' },
                { id: 4, name: 'Mia' },
                { id: 5, name: 'Wolf' },
                { id: 6, name: 'Marsellus' }
            ],

            messages: [
                { id: 1, message: 'Thanks!' },
                { id: 2, message: 'Hi! Whats everyone doing tonight?' },
                { id: 3, message: 'Can i call you later?' }
            ],

            newMessageBody: ""
        },

        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },


    subscribe(observer) {

        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }

}

export default store;
window.store = store;