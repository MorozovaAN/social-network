import React from "react";
import { Dialogues } from "./Dialogues";
import {
  DialoguesPageType,
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/reducers/dialodues-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { compose, Dispatch } from "redux";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";

type mapStateToPropsType = {
  dialoguesPage: DialoguesPageType;
};
type mapDispatchToPropsType = {
  updateNewMessageText: (newMessage: string) => void;
  sendMessage: () => void;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    updateNewMessageText: (newMessage: string) => {
      dispatch(updateNewMessageTextActionCreator(newMessage));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const DialoguesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
)(Dialogues);
