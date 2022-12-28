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
    addMessage() {
        const newMessage = {
            message: this._state.messagePage.newMessageText,
            id: 3
        };
        this._state.messagePage.messageData.push(newMessage)
        this.callSub(this._state)
    },
    updateNewMessageText(newText) {
        this._state.messagePage.newMessageText = newText;
        this.callSub(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        }
    }
}
export default store;