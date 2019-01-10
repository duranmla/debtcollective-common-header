import PropTypes from "prop-types";

export const Link = PropTypes.shape({
  text: PropTypes.string,
  href: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string)
});

export const User = PropTypes.shape({
  name: PropTypes.string
});
