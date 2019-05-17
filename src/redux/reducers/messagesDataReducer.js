const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    dialogsData: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Jonathan'},
        {id: 3, name: 'Patrick'},
    ],
    messagesData: [
        {id: 1, messages: 'Hi', author: 2},
        {id: 2, messages: 'How are you', author: 2},
        {id: 3, messages: ':-)', author: 3},
        {id: 4, messages: 'Привет чудик)', author: 1},
        {id: 5, messages: 'Как настрой?)', author: 3},
        {id: 6, messages: ')))', author: 3},
        {id: 7, messages: 'Ты пойдёшь?', author: 1},
        {id: 8, messages: 'Будет весело', author: 1},
        {id: 9, messages: 'Окай(', author: 2},
        {id: 10, messages: 'Потом увидимся)))', author: 1}
    ],
};

const messageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [ ...state.messagesData, {id: state.messagesData.length + 1, messages: action.data, author: 'Nikolay'} ]
            };
        default: return state;
    }
};

export default messageDataReducer;