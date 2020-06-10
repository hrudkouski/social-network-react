import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer-dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
