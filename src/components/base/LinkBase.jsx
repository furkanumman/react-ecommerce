import { createElement } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

const LinkBase = ({ tag, className, ...props }) => {
  const hasHref = props.href;
  let element = tag;
  const cls = cn(className, { "cursor-pointer": tag === "div" });

  switch (tag) {
    case "link":
      element = Link;
      break;
    case hasHref:
      element = "a";
      break;

    default:
      break;
  }

  return createElement(element, { ...props, className: cls });
};

// LinkBase.defaultProps = {
//   tag: "div",
// };

LinkBase.propTypes = {
  tag: PropTypes.oneOf(["a", "div", "span", "button", "link"]),
  className: PropTypes.string,
  href: PropTypes.string,
};

export default LinkBase;
