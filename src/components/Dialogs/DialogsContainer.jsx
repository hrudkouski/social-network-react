import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer-dialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            let action = sendMessageCreator();
            dispatch(action);
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
