import React, { Component } from "react";
import PropTypes from "prop-types";

import * as types from "../../common/types";

export default class Navigation extends Component {
  static propTypes = {
    links: PropTypes.shape(types.Link),
    dropdownLinks: PropTypes.shape(types.Link)
  };

  render() {
    return <div id="navigation" />;
  }
}
