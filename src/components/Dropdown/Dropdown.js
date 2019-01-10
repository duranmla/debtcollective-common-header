import React, { Component } from "react";
import PropTypes from "prop-types";

import * as types from "../../common/types";

class Dropdown extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(types.Link)
  };

  state = {};

  render() {
    return <div id="dropdown" />;
  }
}

export default Dropdown;
