const initialState={
    messageData: [
        {message: 'Hi', id: 1},
        {message: 'How are you?', id: 2}
    ],
    newMessageText: ''
}
const messagepageReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                message: state.newMessageText,
                id: 3
            };
            state.messageData.push(newMessage)
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = (action.newText)
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const onMessageChangeActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})
export default messagepageReducer;