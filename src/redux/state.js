const store = {
    state: {
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
    getState(){
        return this.state
    },
    rerenderTree() {

    },
    addPost() {
        const newPost = {
            message: this.state.profilePage.newPostText,
            like: 0,
            id: 3
        };
        this.state.profilePage.postData.push(newPost)
        this.rerenderTree(this.state)
    },
    updateNewPostText(newText) {
        this.state.profilePage.newPostText = newText;
        this.rerenderTree(this.state)
    },
    addMessage() {
        const newMessage = {
            message: this.state.messagePage.newMessageText,
            id: 3
        };
        this.state.messagePage.messageData.push(newMessage)
        this.rerenderTree(this.state)
    },
    updateNewMessageText(newText) {
        this.state.messagePage.newMessageText = newText;
        this.rerenderTree(this.state)
    },
    subscribe(observer) {
        this.rerenderTree = observer
    }
}
export default store;