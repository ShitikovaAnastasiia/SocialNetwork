let rerenderTree = () => {

}
const state = {
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


}
export const addPost = () => {
    const newPost = {
        message: state.profilePage.newPostText,
        like: 0,
        id: 3
    };
    state.profilePage.postData.push(newPost)
    rerenderTree()
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree()
}
export const addMessage = () => {
    const newMessage = {
        message: state.messagePage.newMessageText,
        id: 3
    };
    state.messagePage.messageData.push(newMessage)
    rerenderTree()
}
export const updateNewMessageText = (newText) => {
    state.messagePage.newMessageText = newText;
    rerenderTree()
}
export const subscribe = (observer) => {
    rerenderTree = observer
}

export default state;