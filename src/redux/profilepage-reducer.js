const initialState={
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
}
const profilepageReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                message: state.newPostText,
                like: 0,
                id: 3
            };
            state.postData.push(newPost)
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = (action.newText)
            return state;
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const onPostChangeActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profilepageReducer;