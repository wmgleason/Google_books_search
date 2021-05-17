import React from "react";
import "./style.css";

// Props passed to this component are sent into the input element
export function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Applying className, children and onClick props to the button element
export function SearchButton({
  type = "default",
  className,
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={["search btn btn-lg", `btn-${type}`, className].join(" ")}
    >
      {children}
    </button>
  );
}
