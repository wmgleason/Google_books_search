import React from "react";

// Applying className, children and onClick props to the delete button element
function DeleteBtn({ type = "default", className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={["btn btn-lg", `btn-${type}`, className].join(" ")}
    >
      {children}
    </button>
  );
}

export default DeleteBtn;
