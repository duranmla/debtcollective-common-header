import React, { Component } from "react";

import * as types from "../../common/types";

class Profile extends Component {
  static propTypes = {
    user: types.User
  };

  state = {};

  render() {
    return <div id="profile" />;
  }
}

export default Profile;
