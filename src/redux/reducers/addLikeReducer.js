const ADD_LIKE_CLICK = "ADD_LIKE_CLICK";

let initialState = {
    messagesPostData: [
        {id: 1, message: "How is it going?", like: 12, recipient: 1, author: 'Mike'},
        {id: 2, message: "Long time no see!", like: 1, recipient: 1, author: 'Jessica'},
        {id: 3, message: "Take care!", like: 2, recipient: 1, author: 'Rob'},
        {id: 4, message: "Have a nice day!", like: 5, recipient: 3, author: 'Amanda'},
        {id: 5, message: "Say hi to …", like: 4, recipient: 2, author: 'Rob'},
        {id: 6, message: "Send my love to", like: 5, recipient: 3, author: 'Amanda'},
        {id: 7, message: "How's life?", like: 5, recipient: 3, author: 'Amanda'},
        {id: 8, message: "How are things?", like: 3, recipient: 1, author: 'Mike'},
        {id: 9, message: "What are you up to?", like: 1, recipient: 2, author: 'Rob'},
        {id: 10, message: "Until we meet again!", like: 2, recipient: 2, author: 'Piper'},
        {id: 11, message: "What have you been up to?", like: 1, recipient: 3, author: 'Scott'},
        {id: 12, message: "I’m so sorry!", like: 2, recipient: 2, author: 'Piper'},
        {id: 13, message: "Don’t worry about it!", like: 4, recipient: 1, author: 'Rob'},
        {id: 14, message: "May I help you?", like: 7, recipient: 3, author: 'Scott'},
        {id: 15, message: "Thank you anyway!", like: 5, recipient: 1, author: 'Rob'},
        {id: 16, message: "It’s very kind of you!", like: 11, recipient: 1, author: 'Jessica'},
        {id: 17, message: "Don’t take it to heart.", like: 2, recipient: 1, author: 'Jessica'},
        {id: 18, message: "Where were we?", like: 0, recipient: 2, author: 'Piper'},
        {id: 19, message: "Oh, that. That explains it.", like: 9, recipient: 2, author: 'Piper'},
    ]
};

const addLikeReducer = (state = initialState, action) => {
    switch (action.type) {

    }


};

export default addLikeReducer;