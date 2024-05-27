import classNames from "classnames";
import "./style.css";

export default function Button({ className, children, ...rest }) {
  return (
    <button className={classNames("base-btn", className)} {...rest}>
      {children}
    </button>
  );
}
