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
    },
    messagePage: {
        messageData: [
            {message: 'Hi', id: 1},
            {message: 'How are you?', id: 2}
        ]
    }


}
export default state;