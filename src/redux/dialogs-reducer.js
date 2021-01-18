const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dialogs: [
        { id: 1, name: 'Vincent' },
        { id: 2, name: 'Jules' },
        { id: 3, name: 'Butch' },
        { id: 4, name: 'Mia' },
        { id: 5, name: 'Wolf' },
        { id: 6, name: 'Marsellus' }
    ],

    messages: [
        { id: 1, message: 'Thanks!' },
        { id: 2, message: 'Hi! Whats everyone doing tonight?' },
        { id: 3, message: 'Can i call you later?' }
    ],

    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy;
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:

            return  {
                ...state,
                newMessageBody: action.body
            }
            
            // return stateCopy;


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: body }]
            };

            
            // return stateCopy;

        default:
            return state;
    }

}

export let sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export let updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;