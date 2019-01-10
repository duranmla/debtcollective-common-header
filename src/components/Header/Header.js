import React from "react";
import PropTypes from "prop-types";

import * as types from "../../common/types";
import Navigation from "../Navigation";
import Profile from "../Profile";

import { Logo } from "./styled";

const Header = ({ logo, links, dropdownLinks }) => (
  <div id="header">
    <Logo src={logo} alt="Debtcollective" />
    <Navigation links={links} dropdownLinks={dropdownLinks} />
    <Profile />
  </div>
);

Header.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.arrayOf(types.Link),
  dropdownLinks: PropTypes.arrayOf(types.Link)
};

export default Header;
