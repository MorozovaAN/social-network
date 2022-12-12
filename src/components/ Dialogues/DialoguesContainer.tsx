import React from "react";
import { Dialogues } from "./Dialogues";
import {
  DialoguesPageType,
  sendMessageAC,
} from "../../redux/reducers/dialodues-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { compose, Dispatch } from "redux";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";

type mapStateToPropsType = {
  dialoguesPage: DialoguesPageType;
};
type mapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody));
    },
  };
};

export const DialoguesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
)(Dialogues);
