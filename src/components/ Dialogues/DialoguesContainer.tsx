import React from "react";
import { Dialogues } from "./Dialogues";
import {
  DialoguesPageType,
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/reducers/dialodues-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
  dialoguesPage: DialoguesPageType;
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  updateNewMessageText: (newMessage: string) => void;
  sendMessage: () => void;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialoguesPage: state.dialoguesPage,
    isAuth: state.auth.isAuth,
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
