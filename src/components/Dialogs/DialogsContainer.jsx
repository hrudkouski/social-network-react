import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer-dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
