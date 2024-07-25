import PropTypes from "prop-types";
import cn from "classnames";
import { forwardRef } from "react";

const TextInput = forwardRef(
  (
    {
      id,
      name,
      size,
      variant,
      hasError,
      hasSuccess,
      type,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      className,
    },
    ref,
  ) => {
    const cls = cn(
      "rounded-lg border",
      { "px-6 py-4": !size },
      { "px-4 py-3 text-sm": size == "sm" },
      { "px-8 text-xl": size == "lg" },
      { "border-red-500": hasError },
      { "border-green-500": hasSuccess },
      { "bg-transparent text-slate-50": variant == "transparent" },
      className,
    );

    const attr = {
      id,
      name,
      type,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
    };

    return <input className={cls} {...attr} ref={ref} />;
  },
);

TextInput.defaultProps = {
  type: "text",
};

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf(["transparent"]),
  hasError: PropTypes.bool,
  hasSuccess: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "url", "email"]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
};

export default TextInput;
