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
    _addPost() {
        const newPost = {
            message: this._state.profilePage.newPostText,
            like: 0,
            id: 3
        };
        this._state.profilePage.postData.push(newPost)
        this.callSub(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSub(this._state)
    },
    _addMessage() {
        const newMessage = {
            message: this._state.messagePage.newMessageText,
            id: 3
        };
        this._state.messagePage.messageData.push(newMessage)
        this.callSub(this._state)
    },
    _updateNewMessageText(newText) {
        this._state.messagePage.newMessageText = newText;
        this.callSub(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        }
        if (action.type === 'ADD-MESSAGE') {
            this._addMessage()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._updateNewMessageText(action.newText)
        }
    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const onPostChangeActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const onMessageChangeActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})
export default store;