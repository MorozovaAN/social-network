import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<any, any> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

type MapStateToPropsType = {
  profile: any;
};
type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void;
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
