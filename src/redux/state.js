import profilepageReducer from "./profilepage-reducer";
import messagepageReducer from "./messagepage-reducer";

const store = {
    _state: {
        profilePage: {
            userData: [
                {user: 'Ana', id: 1},
                {user: 'John', id: 2},
                {user: 'Mark', id: 3}
            ], postData:
                [
                    {message: 'My first post', like: 1, id: 1},
                    {message: 'How are you?', like: 3, id: 2}
                ],
            newPostText: ''
        },
        messagePage: {
            messageData: [
                {message: 'Hi', id: 1},
                {message: 'How are you?', id: 2}
            ],
            newMessageText: ''
        }


    },
    getState() {
        return this._state
    },
    callSub() {

    },
    subscribe(observer) {
        this.callSub = observer
    },

    dispatch(action) {
        this._state.profilePage = profilepageReducer(this._state.profilePage, action);
        this._state.messagePage = messagepageReducer(this._state.messagePage, action);
        this.callSub(this._state);
        // if (action.type === 'ADD-POST') {
        //     this._addPost()
        // }
        // if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._updateNewPostText(action.newText)
        // }
        // if (action.type === 'ADD-MESSAGE') {
        //     this._addMessage()
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._updateNewMessageText(action.newText)
        // }
    }
}

export default store;