import ReduxActionEnum from "../../models/enums/ReduxActionEnum";

class UserAction {
    static receiveMessage = messageObj => {
        return {
            type: ReduxActionEnum.MESSAGE_RECEIVED,
            payload: messageObj
        };
    };

    static sendMessage = messageObj =>{
        return {
            type: ReduxActionEnum.MESSAGE_SENT,
            payload:messageObj
        }
    }
}

export default UserAction;
