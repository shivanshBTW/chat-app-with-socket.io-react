import InitialState from '../states/initialState';
import ReduxActionEnum from '../../models/enums/ReduxActionEnum';
import io from 'socket.io-client'

let socket;

function sendChatAction(messageObj){
    socket.emit('chatMessage',messageObj)
}


const RootReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ReduxActionEnum.MESSAGE_RECEIVED:
            return {
                ...state,
                messages: [...state.messages,action.payload]
            };
        case ReduxActionEnum.MESSAGE_SENT:
            sendChatAction(action.payload);
            return {
                ...state,
                messages: [...state.messages,action.payload]
            };
        default:
            return state;
    }
};

export default RootReducer;
