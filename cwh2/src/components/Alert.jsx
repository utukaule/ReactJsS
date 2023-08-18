import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <div className="container">
            {capitalize(props.alert.msg)} : {capitalize(props.alert.type)}
          </div>
        </div>
      </>
    )
  );
};

export default Alert;
