import PropTypes from "prop-types";
import cn from "classnames";

// let buttonType = "primary";
// classNames({ [`btn-${buttonType}`]: true });

const Button = ({
  size,
  variant,
  type,
  children,
  className,
  onClick,
  disabled,
  icon,
}) => {
  const cls = cn(
    "rounded-lg",
    { "px-6 py-4": !size },
    { "px-3 py-2 text-sm": size == "sm" },
    { "px-8 text-xl": size == "lg" },
    { "bg-primary hover:bg-primary-light": variant == "primary" },
    { "bg-secondary hover:bg-secondary-light": variant == "secondary" },
    { "bg-light hover:bg-light-light": variant == "light" },
    { "bg-dark hover:bg-dark-light": variant == "dark" },
    {
      "text-light": variant != "light",
    },
    { "opacity-50 cursor-not-allowed": disabled },
    className,
  );
  return (
    <button
      className={cls}
      type={type}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {icon && icon}
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "light", "dark"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

export default Button;
