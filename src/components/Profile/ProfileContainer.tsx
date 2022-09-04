import React, { useEffect } from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

// class ProfileContainer extends React.Component<any, any> {
//   componentDidMount() {
//     const params = useParams<"userId">();
//     const p = params;
//     console.log(p.userId);
//     axios
//         .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//         .then((response) => {
//           this.props.setUserProfile(response.data);
//         });
//   }
//   render() {
//     return <Profile {...this.props} profile={this.props.profile} />;
//   }
// }

const ProfileContainer = (props: any) => {
  const params = useParams<"*">();
  let profileId = params["*"];

  if (!profileId) {
    profileId = "2";
  }
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  return <Profile {...props} profile={props.profile} />;
};
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
