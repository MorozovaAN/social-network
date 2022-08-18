import React from "react";
import { Dialogues } from "./Dialogues";
import {
  DialoguesPageType,
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialodues-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";

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

export const DialoguesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogues);
